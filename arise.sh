#!/bin/zsh
echo "Arise🦂"
git add .
read -p "Enter commit message: " msg
git commit -m "$msg"
git push
echo "Done!"