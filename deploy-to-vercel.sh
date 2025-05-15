#!/bin/bash

# Make sure the script is executable with: chmod +x deploy-to-vercel.sh

echo "Deploying to Vercel..."

# Install Vercel CLI if not already installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Running Vercel deployment..."
vercel --prod

echo "Deployment complete!"
