#!/bin/bash
if hash npm 2>/dev/null; then
    npm install
else
    echo "Please ensure you have Node.js installed https://nodejs.org/ and run this script again"
fi
