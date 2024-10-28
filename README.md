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

```bash
git clone https://github.com/your-username/file-folio.git
 ```

2. Install the dependencies:

```bash
  cd file-folio
  npm install
```

3. Set up the environment variables:

**Create a `.env` file** in the root directory of the project and add the following variables:

```bash
DATABASE_URL= mongodb://localhost:27017/fileSharing
PORT = 3000
```

4. Start the server:
```bash
npm start
```

5. The application will be running on `http://localhost:3000`.

### Usage

1. Open the application in your web browser.
2. Click the "Choose File" button and select the file you want to upload.
3. (Optional) Enter a password to protect the file.
4. Click the "Share" button to upload the file.
5. The application will display the shareable link for the uploaded file.
6. To download the file, click the link and enter the password (if set).

### Screenshots

![File Folio Homepage](https://github.com/theshobhitsingh/FileFolio/blob/main/File%20Folio%20Images/File%20Folio.png?raw=true)
![File Upload Page](https://github.com/theshobhitsingh/FileFolio/blob/main/File%20Folio%20Images/Upload%20File.png?raw=true)

### Technologies Used

- **Node.js**
  - **Description**: Node.js is a JavaScript runtime that allows developers to execute JavaScript on the server side. It’s built on Chrome's V8 engine and is known for its non-blocking, event-driven architecture.
  - **Use in File Folio**: Node.js provides the foundation for the application, enabling it to handle multiple requests simultaneously and efficiently process file uploads and downloads.

- **Express**
  - **Description**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
  - **Use in File Folio**: Express is used to set up the server, define routes for handling different HTTP requests (such as file uploads and downloads), and manage middleware for processing incoming requests.

- **MongoDB**
  - **Description**: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and performance, making it suitable for applications that require fast read and write operations.
  - **Use in File Folio**: MongoDB is used to store information about uploaded files, including metadata like filenames, download counts, and password protection settings.

- **Mongoose**
  - **Description**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution for modeling application data. It simplifies data validation, query building, and relationships.
  - **Use in File Folio**: Mongoose is employed to define schemas for files and user data, manage database interactions, and enforce data integrity.

- **Multer**
  - **Description**: Multer is a middleware for handling multipart/form-data, primarily used for uploading files. It allows you to easily handle file uploads in Node.js applications.
  - **Use in File Folio**: Multer is used to manage the file upload process, handling incoming files and storing them in a specified location on the server or in cloud storage.

- **bcrypt**
  - **Description**: bcrypt is a password-hashing function designed to be computationally intensive to protect against brute-force attacks. It includes a salt to enhance security.
  - **Use in File Folio**: bcrypt is used to hash user passwords before storing them in the database, ensuring that sensitive information is securely managed and protected.

- **EJS (Embedded JavaScript)**
  - **Description**: EJS is a templating engine that allows you to generate HTML markup with plain JavaScript. It enables dynamic rendering of pages by embedding JavaScript logic in HTML.
  - **Use in File Folio**: EJS is used to render views for the application, displaying the file upload form, shareable links, and download pages dynamically based on user interactions and stored data.

### Summary
Together, these technologies create a powerful stack for File Folio, enabling seamless file uploads, downloads, and user authentication. The combination of Node.js and Express facilitates efficient server management, while MongoDB and Mongoose ensure robust data handling. Multer simplifies file uploads, bcrypt secures user credentials, and EJS provides dynamic content rendering. This stack allows for a smooth user experience in sharing files securely and conveniently.


### Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

### Developer

***Shobhit Singh***
