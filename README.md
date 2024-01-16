## Overview

This is a real-time chat application built using the MERN stack. It allows users to join chat rooms, send messages in real-time, and connect with others seamlessly.

## Features

- Real-time messaging
- User authentication
- Multiple chat rooms
- User online status
- Responsive design

## Technologies Used

- MongoDB: Database for storing user information and chat messages.
- Express.js: Server framework for handling HTTP requests.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime for server-side development.
- Socket.io: Real-time web socket communication.

## Prerequisites

- Node.js and npm installed
- MongoDB Atlas account for database (or a local MongoDB instance)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Hemanshu49/collegechat.git
cd collegechat
Install dependencies:
bash
Copy code
cd backend
npm install

cd ../frontend
npm install
Configure environment variables:

Create a .env file in the server directory and add your MongoDB connection string, JWT secret, and other required variables.

Start the server:

bash
Copy code
cd backend
npm start
Start the frontend:
bash
Copy code
cd frontend
npm run start
Visit http://localhost:3000 in your browser.
Folder Structure
frontend: React frontend code
backend: Node.js backend code
