<<<<<<< HEAD
# Chatting Application

## Overview
The **Chatting Application** is a simple, full-stack chat system built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to send, receive, and manage messages in a RESTful way, with CRUD (Create, Read, Update, Delete) operations to interact with the message data. MongoDB is used for storage, while Express.js handles the backend logic and API routing.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete messages.
- **Message Management**: Tracks sender, receiver, and timestamps for each message.
- **REST API**: Allows for seamless communication between the front-end and back-end.
- **Dynamic UI**: Uses **EJS** to dynamically render message data.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for building the REST API.
- **MongoDB**: NoSQL database for storing message data.
- **EJS**: Templating engine for rendering dynamic HTML views.
- **RESTful API**: Standardized API architecture for easy integration.

## Installation

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your local machine.

### Steps to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Aman-Kumar1018/Chatting-Application.git

2. Navigate to the project directory:
    ```bash
   cd mini-messenger

3.Install dependencies:

    npm init -y
    npm i nodemon
    npm i ejs
    npm i express
    npm i mongodb
    npm i method-override 

4. Set up your MongoDB connection.

5. Start the application:
    ```bash
   nodemon index.js

6. Open your browser and visit http://localhost:3000/chats to access the application


## Usage
- Send and receive messages in real-time.
- Manage messages with the ability to edit or delete them.
- Track sender, receiver, and timestamps for all interactions.

## Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are welcome!
=======
# Chatting-Application
Chatting-Application System is a simple web-based chat system built using Node.js, Express, and MongoDB. Users can create, view, edit, and delete chat messages, simulating a basic chat app. The project demonstrates key CRUD functionality, dynamic EJS rendering, and server-side routing.

## Features
- **Create**: Send new messages between users.
- **Read**: View a list of all chat messages.
- **Update**: Edit existing messages.
- **Delete**: Remove unwanted messages with confirmation prompts.

## Technologies Used
- **Node.js**: Backend server.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: Database for storing chat data.
- **EJS (Embedded JavaScript)**: Template engine for rendering dynamic HTML.
- **CSS**: For styling the UI.

## Setup and Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Aman-Kumar1018/Chatting-Application.git
    cd Chatting-Application
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the MongoDB server:
    - Ensure you have MongoDB installed and running locally on `mongodb://127.0.0.1:27017`.

4. Run the application:
    ```bash
    node index.js
    ```
    The app should be running at `http://localhost:8080`.

## .gitignore Template
The project uses a `.gitignore` file to exclude unnecessary files from being tracked.
```plaintext
node_modules
.env
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
coverage
```

## Future Enhancements
- Real-time messaging with WebSockets.
- User authentication.
- Improved UI with frameworks like Bootstrap or Tailwind CSS.
>>>>>>> 4d63d5551a940e85243a7766861982e66c5178bb

## License
This project is licensed under the MIT License.

<<<<<<< HEAD
## Acknowledgments
- Thanks to the developers of the Node.js, Express.js, MongoDB, and EJS libraries.
- Inspired by various full-stack messaging applications.

=======
## Author
**AmanKumar**  
[GitHub Profile](https://github.com/Aman-Kumar1018)
>>>>>>> 4d63d5551a940e85243a7766861982e66c5178bb
