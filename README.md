> A sample form for public user, Restful api built using Node.js, Express and ORM (sequelizejs ) using MYSQL driver. 
----------


# Features
* [x] **A sample form for public user**
- returning a web view for form by which user can request any available services 
```
 GET localhost:3000/
```
* [x] **Simple report form** 
  - [The user can filter to retrieve requests within specific period (from – to).
  - if user not specify [any period (from – to)](#) , will retrieve all requests with pagination for those requests.
  - if user specify [period (from – to)](#) , will retrieve all requests within this period with pagination for the result.
  - if user specify [only period (from)](#) , will retrieve all requests from specified date til today with pagination for the result.
  - if user specify [only period (to)](#) , will retrieve all requests from 1990 to the specified date with pagination for the result.
  - [each result has a summary](#each result has a summary)
     - [`The city has maximum requests`](#The city has maximum requests)
     - [`The problem type has minimum requests`](#The problem type has minimum requests)
```
GET localhost:3000/services
```
* **RESTFUL API END POINTS**

* [x] **request a service end point**  
  - The user can request new service using this end point.
```
POST /api/v1/user/:userId/services
Host: localhost:3000
Content-Type: application/json
{
   accessToken:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE1MzYxODEzNDUsImV4cCI6MTUzNjE4MTQwNX0.feLdqquEThoX9PkUY9nRuHYpZ3BFTtcZ6JgestyZCeE
   currentDate:9/5/2018
   typeOfProblem:1
   Severity:2
   City:2
   District:2
   problemDescription:problem description here
}
```
* [x] **Filter Requests By Created At Date End Point** 
  -  The user can filter requests by from and to period using this end point.
  - all query string is optional. 
```
GET /api/v1/services
Host: localhost:3000
query string:
{
  page: 1,
  from: 2018-1-1,
  to: 2018-10-6,
}
```

> # Installation steps:
There are two ways to run the project
- using docker / docker-compose.
- using traditional way.

**1- using docker compose**
* make sure you have docker and docker compose installed in your computer, and working , can test by running those two commands.
```
$ docker -v
$ docker-compose -v
``` 
* Clone or Download the repository.
* Open your terminal and navigate to the project directory.
* Just write in terminal
```
docker-compose up
```
This will (download and build) mysql image from docker hub if mysql version used not already exist in your computer, build api image and their container then run database migrations and seeds

* Then api server will be running just open **browser**.
* Use workbench or any tool to open database  with this credentials

```
host: localhost || 127.0.0.1
post: 3306
username: root
password: 12345
```


**2- using traditional way**
* Clone or Download the repository.
* Use workbench to create new database , it`s name is **task**.
* open your terminal and navigate to the project directory.
* write in terminal
```
npm install
npm install sequelize-cli -g
npm install gulp -g
npm install bower -g
```
* Install git if not installed in your computer according to your operating system.

* install all front end packages e.g. bootstrap and jquery.
```
$ bower install --allow-root
```
* Edit configuration file in config/database.json with your credentials.
* run migrations to create tables in database.
```
* sequelize db:migrate
```
* run seeds to insert new user in database to be used in the system.
```
* sequelize db:seed:all
```
* Start the application
```
* npm start
```
Your app should now be running on localhost:3000.