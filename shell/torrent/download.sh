#!/bin/bash

# Function to install a package if it's not installed
install_package() {
    local package_name=$1
    if ! command -v "$package_name" &> /dev/null; then
        echo "$package_name is not installed. Installing..."
        sudo apt-get install -y "$package_name"
    else
        echo "$package_name is already installed."
    fi
}

# Function to download the torrent file
download_torrent() {
    read -p "Enter the torrent file URL: " torrent_url
    wget -O "downloaded.torrent" "$torrent_url"
    echo "Torrent file downloaded as downloaded.torrent"
}

# Function to open the selected torrent client
open_torrent_client() {
    local client_choice=$1
    case $client_choice in
        1)
            install_package "qbittorrent"
            qbittorrent "downloaded.torrent" &
            ;;
        *)
            echo "Invalid selection"
            ;;
    esac
}

# Function to download specific files from the torrent
download_specific_files() {
    open_torrent_client "$client_choice"
}

# Main script starts here
echo "Select a torrent client:"
echo "1) qBittorrent"
read -p "Enter the number of your choice: " client_choice

# Download the torrent file
download_torrent

# Download specific files or all files
download_specific_files
