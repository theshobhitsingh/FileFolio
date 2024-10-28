# File Folio

## File Sharing Simplified

File Folio is a simple file sharing application that allows users to upload files and share them with others. The application is built using Node.js, Express, and MongoDB.

### Features

- Upload files with optional password protection
- Generate a shareable link for the uploaded file
- Copy the file link to the clipboard with a single click
- Password-protected file downloads
- Tracks the number of downloads for each file

### Installation

1. Clone the repository:

git clone https://github.com/your-username/file-folio.git


2. Install the dependencies:

```bash
  cd file-folio
  npm install
```


3. Set up the environment variables:

Create a `.env` file in the root directory of the project and add the following variables:

```bash
DATABASE_URL= mongodb://localhost:27017/fileSharing
PORT = 3000
```


4. Start the server:

npm start

5. 
The application will be running on `http://localhost:3000`.

### Usage

1. Open the application in your web browser.
2. Click the "Choose File" button and select the file you want to upload.
3. (Optional) Enter a password to protect the file.
4. Click the "Share" button to upload the file.
5. The application will display the shareable link for the uploaded file.
6. To download the file, click the link and enter the password (if set).

### Screenshots

![File Folio Homepage](https://i.imgur.com/XYZ123.png)
![File Download Page](https://i.imgur.com/ABC456.png)

### Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Multer
- bcrypt
- EJS

### Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

### Developer

Me ***Shobhit Singh***


