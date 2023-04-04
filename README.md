# NIPA Software Engineer Test

This repository contains the backend application for NIPA's technical test. The application is built with Node.js and uses Express as the web framework.

## Getting Started

1. Clone the repository by running the following command in your terminal:
  ```
  git clone https://github.com/aRaimaiRu/nipa_dev_test.git
  cd nipa_dev_test
  ```
2. In the `nipa_test_backend` and `nipa_test_front` directories, create a `.env` file by copying the example file with the following command:
  ```
  cp .env.example .env
  ```
3. Start the application by running the following command in your terminal:

  - In production mode:

  ```
  docker-compose -f docker-compose-prod.yml up
  ```

  - In development mode:

  ```
  docker-compose -f docker-compose.yml up
  ```

4. Once the application is running, access the API documentation at the following URL:
  ```
  http://localhost:3002/api-docs/
  ```
## Running Unit Tests

To run the unit tests for the backend application, Navigate to the nipa_test_backend directory:
  ```
  cd nipa_test_backend
  npm run test
  ```

