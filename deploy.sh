#!/bin/bash
# Publish the current folder to GitHub Pages.
set -e
cd "$(dirname "$0")"
git add -A
git commit -q -m "${1:-update}" || { echo "Nothing to deploy."; exit 0; }
git push -q
echo "Deployed -> https://riteshmsrivastava-pixel.github.io/laionel-discovery/"
