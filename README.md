# AutoCare+ Frontend

This is the frontend for the AutoCare+ application. It's built using Next.js 13, a React framework, and it communicates with a backend API to provide users with a seamless experience for managing their automotive care.

## Features

- User authentication
- Track vehicle services and costs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 18.14.0 or later)
- npm (included with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/autocare-plus-frontend.git
```
2. Navigate into the project directory:
```bash
cd autocare-plus-frontend
```
3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
The application should now be running at http://localhost:3000.

## Running the Tests
To run the unit and integration tests:

```bash
npm run test
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework used
- [Auth0](https://auth0.com/) - User authentication
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js

## Environment Variables

This project uses environment variables for Auth0 configuration. 

For security reasons, these are not provided in this README. If you need these for development purposes, please make a request.

**Note:** In a production environment, it's recommended to use secure methods for storing and accessing sensitive information like environment variables. In the future, these will be stored as GitHub Secrets and accessed in the CI/CD pipeline.

## Contributing

Contributions are welcome! If you'd like to contribute, feel free to fork the repository and submit a pull request. Please make sure to update tests as appropriate.

Before submitting your pull request, ensure that your changes adhere to the following guidelines:

- Write clear, concise commit messages.
- If adding a new feature, add tests that cover the feature.
