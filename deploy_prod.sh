#!/bin/bash

# Compile the source
echo "Compiling the source code..."
TYPE_ERRORS="$(tsc --project ./tsconfig.json)"

if [[ -n $TYPE_ERRORS ]]; then
  echo "ERROR: "
  echo $TYPE_ERRORS
  exit
fi

echo "Source compiled successfully."

echo "Installing zip Linux package.."
sudo apt install zip

echo "Compressing dist directory..."
zip -r dist.zip dist/*

FILE=./dist.zip
if [ ! -f "$FILE" ]; then
    echo "$FILE does not exist."
    exit
fi
echo "Compressed successfully."

# Upload the source on S3 Bucket
echo "Uploading distribution directory to S3..."
aws s3 cp dist.zip s3://readapp-cloudformation-backend/backend-volumes/production/dist-`date +%s`.zip --profile readapp
echo "Zip file uploaded successfully."
# Update Lambda code pointing to S3 Bucket