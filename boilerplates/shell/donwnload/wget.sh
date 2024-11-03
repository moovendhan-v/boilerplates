#!/bin/bash

# URL of the website directory to download
BASE_URL="https://www.google.com/"

# Directory where the downloaded files will be saved
SAVE_DIR="$HOME/Downloads/wget"

# Create the save directory if it doesn't exist
mkdir -p "$SAVE_DIR"

# Show the target download directory
echo "Saving files to: $SAVE_DIR"
echo "Downloading from: $BASE_URL"
echo "------------------------------------------------"

wget -r -np -nH --cut-dirs=2 -R "index.html*" -nc -P "$SAVE_DIR" "$BASE_URL" --show-progress

echo "------------------------------------------------"
echo "Download complete! All FIles and directories have been saved to: $SAVE_DIR"