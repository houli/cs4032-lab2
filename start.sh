#!/bin/bash
if hash node 2>/dev/null; then
    node index.js "$@"
elif hash nodejs 2>/dev/null; then
    nodejs index.js "$@"
else
    echo "Please ensure you have Node.js installed https://nodejs.org/ and run this script again"
fi
