# .env
echo "PORT=5050
MONGO_URI=mongodb://mongo-container:27017/mydatabase" > backend/.env

# Creation du network
docker network create mern-app-network

# Construction des images back et front
cd backend && docker build -t backend . && cd ..
cd frontend/React && docker build -t frontend . && cd ../..

# Lancement des containers sur le network
docker run -d --network mern-app-network --name mongo-container -p 27017:27017 mongo:latest
docker run --env-file backend/.env -d --network mern-app-network --name backend-container -p 5050:5050 backend
docker run -d --network mern-app-network --name frontend-container -p 8080:80 frontend

# Docker compose
docker compose up