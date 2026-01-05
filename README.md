# DevOps Inventory Management System 🚀

A comprehensive Three-Tier Web Application (React, Node.js, PostgreSQL) demonstrating a complete **DevOps Lifecycle** from development to production-style deployment.

## 🏗 Architecture & Tech Stack

This project implements **GitOps** principles using the following stack:

* **Frontend:** React (Vite)
* **Backend:** Node.js (Express)
* **Database:** PostgreSQL (Persistent Storage)
* **Containerization:** Docker (Multi-stage builds)
* **Orchestration:** Kubernetes (Minikube)
* **CI (Continuous Integration):** Jenkins (Automated build & push to Docker Hub)
* **CD (Continuous Deployment):** ArgoCD (Automated sync from Git to K8s)

## 🔄 The DevOps Pipeline

1.  **Code Commit:** Developer pushes code to GitHub.
2.  **CI Trigger:** Jenkins detects changes, builds Docker images, and pushes them to Docker Hub.
3.  **CD Sync:** ArgoCD detects changes in Kubernetes manifests and automatically updates the cluster.
4.  **Deployment:** Kubernetes performs a rolling update to the new version without downtime.

## 🛠 Project Structure

```text
/inventory-app
  ├── /client          # React Frontend (Vite)
  ├── /k8s             # Kubernetes Manifests (YAML)
  ├── Jenkinsfile      # CI Pipeline Configuration
  ├── Dockerfile       # Backend Container Config
  ├── docker-compose.yml # Local Development Setup
  └── server.js        # Node.js Backend API
🚀 How to Run (Kubernetes)
Start Minikube:

Bash

minikube start
Deploy with ArgoCD:

Install ArgoCD in the cluster.

Connect the Git repository.

Sync the application.

Access the App:

Bash

# Terminal 1: Frontend
kubectl port-forward svc/frontend-service 3000:80

# Terminal 2: Backend API
kubectl port-forward svc/backend-service 5000:5000
Open http://localhost:3000 in your browser.

📜 License
MIT