Property Management App Project

## Running the Node.js App with Node or Nodemon

This README provides instructions on how to run the Node.js application using Node or Nodemon.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/), if you haven't already.
- Nodemon (optional): If you prefer automatic server restarts on file changes, install Nodemon globally by running `npm install -g nodemon`.

### Running the App

Follow these steps to run the Node.js application:

1. **Clone the Repository**: If you haven't already, clone the repository to your local machine:

    git clone <repository_url>
    
2. **Navigate to the Directory**: Enter the directory of the Node.js application:

   cd <directory_name>
   
3. **Install Dependencies**: Install the required dependencies by running:

  npm install
  
4. **Run with Node**:

To run the application using Node, execute the following command:

  node app.js
  
This will start the application, and you should see output indicating that the server is running.

5. **Run with Nodemon (Optional)**:

If you prefer using Nodemon for automatic server restarts on file changes, execute:

Nodemon will monitor for any changes in your files and automatically restart the server when necessary.

6. **Access the Application**:

Once the server is running, you can access the application by opening a web browser and navigating to `http://localhost:<port>` where `<port>` is the port number specified in your application (typically `3000` by default).

### Conclusion

You have successfully set up and run the Node.js application using either Node or Nodemon. If you encounter any issues, make sure you have followed the steps correctly and that all dependencies are installed properly. Happy coding!
