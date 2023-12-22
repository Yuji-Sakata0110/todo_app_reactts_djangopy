# todo_app_reactts_djangopy

## \_frontend

React App。Typescript x yarn を利用している。<br>
Bootstrap を利用し、簡単なデザインで Todo アプリを構築している。

### Skills

1. React
2. Typescript
3. yarn
4. Bootstrap, axios など

## backend

Python Django を利用している。<br>
RestFramework を活用し、ブラウザブルな API を作成している。<br>
ViewSet を利用し、コードを少量化し、保守が簡易。

### Skills

1. Python
2. Django
3. pip
4. RestFramework
5. sqlite3

## Docker

インフラとして Docker を利用している。<br>
どの環境でも開発を容易にするため。

#### in \_frontend directory

```docker command
docker build -t my_react_app .

docker run -p 3000:3000 -d my_react_app
```

open this url.<br>
http://localhost:3000/

image<br>
[docker-react image](./assets/docker-react.png)

#### in backend directory

```docker command
docker build -t my_django_app .

docker run -p 8000:8000 -d my_django_app
```

open this url.<br>
http://localhost:8000/

image<br>
[docker-django image](./assets/docker-django.png)
