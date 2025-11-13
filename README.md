# CI/CD Full Project - Node.js App Deployment with Jenkins

This repository demonstrates a complete CI/CD workflow for a Node.js application using Jenkins for automation, Docker for containerization, and Kubernetes for deployment.

## Overview

- **Node.js app**: Built in `app.js`, defined in `package.json`.
- **Docker**: The app is containerized via the included `Dockerfile`.
- **Jenkins**: CI/CD pipeline is managed in `Jenkinsfile`.
- **Kubernetes**: Application is deployed using manifests (`depl-svc.yml`).

## Features

- Automated build, test, and deployment process.
- Containerized Node.js application.
- Jenkins pipeline for CI/CD.
- Deployment to a Kubernetes cluster.
- Example manifest for service exposure.

## Getting Started

### Prerequisites

- Docker
- Jenkins
- Node.js
- Kubernetes (local cluster like minikube or remote)

### Installation & Usage

#### 1. Clone the repository

```bash
git clone https://github.com/Mostafa13mo/CI-CD-full-project-.git
cd CI-CD-full-project-
```

#### 2. Build the Docker image

```bash
docker build -t your-nodejs-app .
```

#### 3. Jenkins Setup

- Make sure Jenkins has Docker and Kubernetes plugins installed.
- Add this repo to your Jenkins job/project.
- Configure pipeline using the included `Jenkinsfile`.

#### 4. Kubernetes Deployment

```bash
kubectl apply -f depl-svc.yml
```

#### 5. Access your service

- Use `kubectl get svc` to find the exposed service endpoint.

## Project Structure

```
├── app.js             # Node.js application code
├── package.json       # Node.js project metadata and dependencies
├── Dockerfile         # Docker build instructions
├── Jenkinsfile        # Jenkins pipeline definition
└── depl-svc.yml       # Kubernetes deployment and service manifest
```

## Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request.
