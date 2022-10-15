git init

git add .

git commit -m '更新'

git remote add origin git@github.com:changmushu/MY-BLOG.git

//若报错fatal: remote origin already exists.

//执行以下2条命令：

//git remote rm origin

//git remote add origin git@github.com:changmushu/MY-BLOG.git

git pull --rebase origin main

git push -u origin main
