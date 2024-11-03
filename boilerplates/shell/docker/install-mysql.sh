#!/bin/bash

# Configuration
MYSQL_USER="your_mysql_user"
MYSQL_PASSWORD="your_mysql_password"
MYSQL_DB="your_mysql_db"
DATA_DIR="./mysql_data"
MYSQL_CONTAINER_NAME="mysql_container"
ADMINER_CONTAINER_NAME="adminer_container"
MYSQL_PORT=3306
ADMINER_PORT=8080

# Function to kill any process using the specified port
kill_port() {
  PORT=$1
  echo "Killing any process using port $PORT..."
  sudo fuser -k ${PORT}/tcp
}

# Stop and remove any existing Docker container with the same name
echo "Stopping and removing any existing Docker container with name $MYSQL_CONTAINER_NAME..."
docker stop $MYSQL_CONTAINER_NAME 2>/dev/null || true
docker rm $MYSQL_CONTAINER_NAME 2>/dev/null || true

echo "Stopping and removing any existing Docker container with name $ADMINER_CONTAINER_NAME..."
docker stop $ADMINER_CONTAINER_NAME 2>/dev/null || true
docker rm $ADMINER_CONTAINER_NAME 2>/dev/null || true

# Kill any process using the specified MySQL and Adminer ports
kill_port $MYSQL_PORT
kill_port $ADMINER_PORT

# Create a directory for MySQL data if it doesn't exist
mkdir -p $DATA_DIR

# Pull the latest MySQL image
echo "Pulling the latest MySQL image..."
docker pull mysql:latest

# Run the MySQL container
echo "Running the MySQL container..."
docker run -d \
  --name $MYSQL_CONTAINER_NAME \
  -e MYSQL_USER=$MYSQL_USER \
  -e MYSQL_PASSWORD=$MYSQL_PASSWORD \
  -e MYSQL_DATABASE=$MYSQL_DB \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_PASSWORD \
  -v $DATA_DIR:/var/lib/mysql \
  -p $MYSQL_PORT:3306 \
  mysql:latest

# Pull the latest Adminer image
echo "Pulling the latest Adminer image..."
docker pull adminer:latest

# Run the Adminer container
echo "Running the Adminer container..."
docker run -d \
  --name $ADMINER_CONTAINER_NAME \
  --link $MYSQL_CONTAINER_NAME:db \
  -p $ADMINER_PORT:8080 \
  adminer:latest

echo "MySQL container and Adminer container are running."
echo "MySQL container name: $MYSQL_CONTAINER_NAME"
echo "MySQL user: $MYSQL_USER"
echo "MySQL password: $MYSQL_PASSWORD"
echo "MySQL database: $MYSQL_DB"
echo "Adminer is accessible at http://localhost:$ADMINER_PORT"
