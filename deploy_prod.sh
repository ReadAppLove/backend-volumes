#!/bin/bash

export STACK_NAME=readapp-backend-volumes

# Remove build directories, if them exist
rm -rf dist/
rm -rf .aws-sam/

# Compile TS files and generate "dist" directory
TYPE_ERRORS="$(tsc --project ./tsconfig.json)"

# Check if TS compile exit with errors
if [[ -n $TYPE_ERRORS ]]; then
  echo "ERROR: "
  echo "$TYPE_ERRORS"
  exit
fi

# Build the project following SAM template and generate ".aws-sam" directory
sam build
# Package the solution (maybe useless)
sam package \
  --s3-bucket readapp-cloudformation-backend \
  --s3-prefix volumes/production \
  --region eu-central-1
# Deploy the built project to AWS
sam deploy \
  --s3-bucket readapp-cloudformation-backend \
  --s3-prefix volumes/production \
  --stack-name $STACK_NAME \
  --capabilities CAPABILITY_IAM