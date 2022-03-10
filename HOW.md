## Main stages of development

#### Environment

`npm install –g @vue/cli`  
`vue create [project name] .`    
`npm init vite@latest <project-name> -- --template vue`    
`npm init vite@latest frontend -- --template vue`  
`npm install`    
`npm run dev`    
`npm install -g @vue/cli`    

#### 1. Installation Vue Template. Create Database

 `npm install -g @vue/cli`    
 `vue create .`   
 
 `npm install vue-router@next --save`     
 `npm install`  
 `npm run build`     
 `npm run serve`     
 
`git init`  
`git add .`  
`git commit –m "Comment"`  
**`git remote add origin https://github.com/SergeyHub/roles_permissions_spatie.git`**  
`git push -u origin master`  

##### 1.1 Postgersql
```
Let's start SQL Shell (psql). The program will prompt you to enter the name    
of the server, database, port and user. You can click/skip these items as they  
will use the default values   
(for server - localhost, for database - postgres, for port - 5432,  
as user - postres superuser). 
Next, you will need to enter a password for the user   
(by default, the postgres user): 123456 (in my case)  
```

![Screenshot](readme/psql.JPG)   

`postgres=# create database db_name;`  
  **database list**  
`select datname from pg_database;`   
pg_dump dbname > outfile 

**`Edit  env. file`**    
```
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=cargo
DB_USERNAME=postgres
DB_PASSWORD=123456
```
##### 1.2 MySQL

`mysql -u root -p`  
`create database roles_permissions; db_name;`  
`drop database db_name;`   
`show databases;`  
`use db_name;`  
`show tables;`   
`drop table table_name;`  
`exit`  

**`Edit  env. file`**   
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=roles_permissions
DB_USERNAME=root
DB_PASSWORD=123456
```
#### bootswatch.com/5/
**public/index.html**
```
<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <link rel="stylesheet" href="https://bootswatch.com/5/pulse/bootstrap.css">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<noscript>
  <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<!-- built files will be auto injected -->
<script src="https://bootswatch.com/_vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```
