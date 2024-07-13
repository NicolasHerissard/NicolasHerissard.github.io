git status
git add .

set /p comment=Entrez un commentaire:
git commit -m "%comment%"

git push origin master

echo Le projet à été enregistré sur Github

pause