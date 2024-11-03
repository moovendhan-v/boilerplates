#!/bin/bash

# Configuration
POSTGRES_USER="your_postgres_user"
POSTGRES_PASSWORD="your_postgres_password"
POSTGRES_DB="your_postgres_db"
DATA_DIR="./postgres_data"
POSTGRES_CONTAINER_NAME="postgres_container"
ADMINER_CONTAINER_NAME="adminer_container"
POSTGRES_PORT=5432
ADMINER_PORT=8080

# Function to kill any process using the specified port
kill_port() {
  PORT=$1
  echo "Killing any process using port $PORT..."
  sudo fuser -k ${PORT}/tcp
}

# Stop and remove any existing Docker container with the same name
echo "Stopping and removing any existing Docker container with name $POSTGRES_CONTAINER_NAME..."
docker stop $POSTGRES_CONTAINER_NAME 2>/dev/null || true
docker rm $POSTGRES_CONTAINER_NAME 2>/dev/null || true

echo "Stopping and removing any existing Docker container with name $ADMINER_CONTAINER_NAME..."
docker stop $ADMINER_CONTAINER_NAME 2>/dev/null || true
docker rm $ADMINER_CONTAINER_NAME 2>/dev/null || true

# Kill any process using the specified PostgreSQL and Adminer ports
kill_port $POSTGRES_PORT
kill_port $ADMINER_PORT

# Create a directory for PostgreSQL data if it doesn't exist
mkdir -p $DATA_DIR

# Pull the latest PostgreSQL image
echo "Pulling the latest PostgreSQL image..."
docker pull postgres:latest

# Run the PostgreSQL container
echo "Running the PostgreSQL container..."
docker run -d \
  --name $POSTGRES_CONTAINER_NAME \
  -e POSTGRES_USER=$POSTGRES_USER \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -e POSTGRES_DB=$POSTGRES_DB \
  -v $DATA_DIR:/var/lib/postgresql/data \
  -p $POSTGRES_PORT:5432 \
  postgres:latest

# Pull the latest Adminer image
echo "Pulling the latest Adminer image..."
docker pull adminer:latest

# Run the Adminer container
echo "Running the Adminer container..."
docker run -d \
  --name $ADMINER_CONTAINER_NAME \
  --link $POSTGRES_CONTAINER_NAME:db \
  -p $ADMINER_PORT:8080 \
  adminer:latest

echo "PostgreSQL container and Adminer container are running."
echo "PostgreSQL container name: $POSTGRES_CONTAINER_NAME"
echo "PostgreSQL user: $POSTGRES_USER"
echo "PostgreSQL password: $POSTGRES_PASSWORD"
echo "PostgreSQL database: $POSTGRES_DB"
echo "Adminer is accessible at http://localhost:$ADMINER_PORT"
