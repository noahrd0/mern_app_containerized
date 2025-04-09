# Creation du network
docker network create mern-app-network

# Construction des images back et front
cd backend && docker build -t backend . && cd ..
cd frontend/React && docker build -t frontend . && cd ../..

# Lancement des containers sur le network
docker run -d --network mern-app-network --name mongo-container -p 27017:27017 mongo:latest
docker run --env-file backend/.env -d --network mern-app-network --name backend-container -p 8080:80 backend
docker run -d --network mern-app-network --name frontend-container -p 3030:30 frontend
