require("dotenv").config();
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const File = require("./models/File");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads" });

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const fileData = {
      path: req.file.path,
      originalName: req.file.originalname,
    };
    if (req.body.password) {
      fileData.password = await bcrypt.hash(req.body.password, 10);
    }

    const file = await File.create(fileData);
    res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while uploading the file.");
  }
});

app.route("/file/:id").get(handleDownload).post(handleDownload);

async function handleDownload(req, res) {
  const file = await File.findById(req.params.id);

  if (file.password != null) {
    if (req.body.password == null) {
      res.render("password");
      return;
    }

    if (!(await bcrypt.compare(req.body.password, file.password))) {
      res.render("password", { error: true });
      return;
    }
  }

  file.downloadCount++;
  await file.save();
  console.log(file.downloadCount);

  res.download(file.path, file.originalName);
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
