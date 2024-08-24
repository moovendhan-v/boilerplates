#!/bin/bash

set -e

# Function to print a message with a header
print_header() {
    echo "=================================================="
    echo "$1"
    echo "=================================================="
}

# Update system packages
print_header "Updating system packages"
sudo apt-get update
sudo apt-get upgrade -y

# Install required packages
print_header "Installing required packages"
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Install Docker
print_header "Installing Docker"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Start and enable Docker service
print_header "Starting and enabling Docker service"
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose
print_header "Installing Docker Compose"
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)
sudo curl -L "https://github.com/docker/compose/releases/download/$DOCKER_COMPOSE_VERSION/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Docker Kuma
# print_header "Installing Docker Kuma"
# DOCKER_KUMA_VERSION="2.0.0"  # Update this as needed
# curl -fsSL https://dl.kuma.io/kuma/${DOCKER_KUMA_VERSION}/docker/kuma-${DOCKER_KUMA_VERSION}.tar.gz | sudo tar -xzf - -C /usr/local/bin/
# sudo chmod +x /usr/local/bin/kuma

# # Install Kubernetes CLI (kubectl)
# print_header "Installing Kubernetes CLI (kubectl)"
# curl -LO "https://dl.k8s.io/release/$(curl -s https://dl.k8s.io/release/stable.txt)/bin/$(uname -s | tr '[:upper:]' '[:lower:]')/$(uname -m)/kubectl"
# sudo mv kubectl /usr/local/bin/
# sudo chmod +x /usr/local/bin/kubectl

# Verify installations
print_header "Verifying installations"
docker --version
docker-compose --version
kuma --version
kubectl version --client

print_header "Installation completed successfully!"