#!/bin/bash

# Script to automate MFA setup for SSH login

echo "Starting the SSH MFA setup process..."

# Check if the script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root"
  exit
fi

# Detect OS type and install the required package for Google Authenticator
if [ -f /etc/debian_version ]; then
  echo "Detected Ubuntu/Debian system."
  apt update
  apt install -y libpam-google-authenticator
elif [ -f /etc/redhat-release ]; then
  echo "Detected CentOS/RHEL system."
  yum install -y epel-release
  yum install -y google-authenticator
else
  echo "Unsupported OS. Exiting..."
  exit 1
fi

# Prompt the user to configure Google Authenticator
echo "Setting up Google Authenticator for the current user..."
su -c "google-authenticator" $SUDO_USER

# Configure PAM for SSH
PAM_SSHD_FILE="/etc/pam.d/sshd"
echo "Configuring PAM for SSH..."
if ! grep -q "auth required pam_google_authenticator.so" "$PAM_SSHD_FILE"; then
  echo "auth required pam_google_authenticator.so" >> "$PAM_SSHD_FILE"
  echo "PAM configuration updated."
else
  echo "PAM is already configured for MFA."
fi

# Configure SSH daemon for MFA
SSHD_CONFIG_FILE="/etc/ssh/sshd_config"
echo "Configuring SSH daemon for MFA..."
sed -i 's/^#\?ChallengeResponseAuthentication .*/ChallengeResponseAuthentication yes/' "$SSHD_CONFIG_FILE"
sed -i 's/^#\?UsePAM .*/UsePAM yes/' "$SSHD_CONFIG_FILE"

# Optionally disable password-based logins
read -p "Do you want to disable password-based SSH logins? (yes/no): " disable_password
if [ "$disable_password" == "yes" ]; then
  sed -i 's/^#\?PasswordAuthentication .*/PasswordAuthentication no/' "$SSHD_CONFIG_FILE"
  echo "Password-based logins disabled."
fi

# Restart the SSH service to apply changes
echo "Restarting SSH service..."
if systemctl is-active --quiet ssh; then
  systemctl restart ssh
else
  systemctl restart sshd
fi

echo "MFA setup complete! Please test your SSH login now."
