# Express CORS Bypass Project

This project demonstrates how to bypass the CORS (Cross-Origin Resource Sharing) restrictions in the browser using an Express endpoint. It is built with Express, TypeScript, and Nodemon.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

### Environment Variables

The project uses a `.env` file to store basic configuration. You can modify the variables in the `.env` file to suit your needs.

## Running the Project

The project uses two scripts to run in development and production environments:

- `npm run dev` - Starts the server in development mode with Nodemon.
- `npm start` - Starts the server in production mode.

## Usage

To bypass CORS restrictions, send a GET request to the `/bypass-cors` endpoint. The server will respond with a JSON object containing the CORS headers to allow cross-origin requests.
