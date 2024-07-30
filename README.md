# Express App with Docker and Kubernetes

This project demonstrates how to containerize an Express.js application using Docker and deploy it to Kubernetes (Minikube).

## Prerequisites

- Node.js and npm
- Docker
- Minikube
- kubectl

## Quick Start

1. Initialize the project and install Express:

   ```
   npm init -y
   npm install express
   ```

2. Build the Docker image:

   ```
   docker build -t my-express-app .
   ```

3. Start Minikube:

   ```
   minikube start
   ```

4. Load the Docker image into Minikube:

   ```
   minikube image load my-express-app:latest
   ```

5. Deploy to Kubernetes:

   ```
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

6. Access the application:

   ```
   minikube service express-app-service
   ```

## Project Structure

- `index.js`: Main Express application
- `Dockerfile`: Instructions for building the Docker image
- `deployment.yaml`: Kubernetes Deployment configuration
- `service.yaml`: Kubernetes Service configuration

## Running Locally

To run the app without Docker:

```
node index.js
```

Then access at http://localhost:8000.

## Deployment Details

- The Kubernetes Deployment creates 2 replicas of the application.
- The Service is of type NodePort, exposing the app on port 30000.

## Updating the Application

1. Make changes to your code
2. Rebuild the Docker image
3. Load the new image into Minikube
4. Restart the deployment:

   ```
   kubectl rollout restart deployment express-app-deployment
   ```

## Notes

- Ensure your Express app listens on `0.0.0.0` instead of `localhost` for container compatibility.
- The Dockerfile exposes port 8000, matching the port in the Express app.

For more detailed information, refer to the official documentation for [Express](https://expressjs.com/), [Docker](https://docs.docker.com/), and [Kubernetes](https://kubernetes.io/docs/).
