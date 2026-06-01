# AWS Docker Kubernetes Deployment Project

## Overview

This project demonstrates the deployment of a cloud-native Node.js web application using Docker, Kubernetes, and AWS Cloud services.

The application was containerized using Docker, stored in Amazon Elastic Container Registry (ECR), and deployed on a Kubernetes cluster running with Minikube inside an AWS EC2 instance.

The project also demonstrates:

* Docker containerization
* Kubernetes orchestration
* AWS EC2 cloud deployment
* Amazon ECR integration
* NodePort exposure
* Kubernetes scaling
* Health monitoring

---

# Technologies Used

* Node.js
* Docker
* Kubernetes
* Minikube
* AWS EC2
* Amazon ECR (ECR)
* AWS CLI
* Git
* GitHub

---

# Project Architecture

Local Development → Docker Container → Amazon ECR → AWS EC2 → Minikube Kubernetes Cluster → Public Access via NodePort

---

# Project Structure

```bash
aws-docker-k8s-project/
│
├── app/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── docker/
│   └── Dockerfile
│
├── deployment.yaml
├── service.yaml
├── README.md
```

---

# Features

* Dockerized Node.js Application
* Kubernetes Deployment
* NodePort Service Exposure
* Amazon ECR Integration
* Health Endpoint Monitoring
* Kubernetes Scaling Demonstration
* Public Cloud Deployment

---

# Step 1 — Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/aws-docker-k8s-project.git
cd aws-docker-k8s-project
```

---

# Step 2 — Build Docker Image

```bash
docker build -t node-k8s-app -f docker/Dockerfile .
```

---

# Step 3 — Run Docker Container Locally

```bash
docker run -d -p 3000:3000 --name node-container node-k8s-app
```

---

# Step 4 — Configure AWS CLI

```bash
aws configure
```

---

# Step 5 — Login to Amazon ECR

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 228235827513.dkr.ecr.us-east-1.amazonaws.com
```

---

# Step 6 — Push Docker Image to ECR

```bash
docker tag node-k8s-app:latest 228235827513.dkr.ecr.us-east-1.amazonaws.com/node-k8s-app:latest
```

```bash
docker push 228235827513.dkr.ecr.us-east-1.amazonaws.com/node-k8s-app:latest
```

---

# Step 7 — Start Minikube

```bash
minikube start --driver=docker --memory=1800mb --cpus=2
```

---

# Step 8 — Deploy to Kubernetes

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

---

# Step 9 — Verify Deployment

```bash
kubectl get pods
kubectl get services
```

---

# Step 10 — Scale Deployment

```bash
kubectl scale deployment node-k8s-deployment --replicas=2
```

---

# Important Kubernetes Commands

## Check Pods

```bash
kubectl get pods
```

## Check Services

```bash
kubectl get services
```

## View Logs

```bash
kubectl logs deployment/node-k8s-deployment
```

## Delete Deployment

```bash
kubectl delete deployment node-k8s-deployment
```

---

# Screenshots

## Docker Image Build

(Add Screenshot Here)

---

## Amazon ECR Repository

(Add Screenshot Here)

---

## Kubernetes Pods Running

(Add Screenshot Here)

---

## Public Application Access

(Add Screenshot Here)

---

# Challenges Faced

* Insufficient memory issue with t2.micro instance
* Kubernetes ImagePullBackOff issue
* Amazon ECR authentication issue
* Minikube NodePort accessibility issue
* Docker container networking issues

These issues were resolved using:

* t3.small EC2 instance
* Kubernetes image pull secrets
* socat port forwarding
* Docker and Minikube debugging techniques

---

# Results

The application was successfully:

* Containerized using Docker
* Uploaded to Amazon ECR
* Deployed on Kubernetes
* Hosted publicly using AWS EC2
* Scaled dynamically using Kubernetes replicas

---

# Conclusion

This project provided practical experience with:

* Docker containerization
* Kubernetes orchestration
* AWS cloud deployment
* DevOps workflows
* Cloud-native application hosting

The project also improved troubleshooting and infrastructure management skills.

---

# Author

Muhammad Zeeshan
SAP ID: 56038

---

# License

This project was created for educational purposes.
