#!/bin/bash

# Configuration for Redis
REDIS_CONTAINER_NAME="redis_container"
REDIS_PORT=6379
REDIS_DATA_DIR="./redis_data"

# Function to kill any process using the specified port
kill_port() {
  PORT=$1
  echo "Killing any process using port $PORT..."
  sudo fuser -k ${PORT}/tcp
}

# Stop and remove any existing Redis Docker container with the same name
echo "Stopping and removing any existing Docker container with name $REDIS_CONTAINER_NAME..."
docker stop $REDIS_CONTAINER_NAME 2>/dev/null || true
docker rm $REDIS_CONTAINER_NAME 2>/dev/null || true

# Kill any process using the Redis port
kill_port $REDIS_PORT

# Create a directory for Redis data if it doesn't exist
mkdir -p $REDIS_DATA_DIR

# Pull the latest Redis image
echo "Pulling the latest Redis image..."
docker pull redis:latest

# Run the Redis container
echo "Running the Redis container..."
docker run -d \
  --name $REDIS_CONTAINER_NAME \
  -v $REDIS_DATA_DIR:/data \
  -p $REDIS_PORT:6379 \
  redis:latest

echo "Redis container is running."
echo "Redis container name: $REDIS_CONTAINER_NAME"
echo "Redis is accessible on port $REDIS_PORT"
