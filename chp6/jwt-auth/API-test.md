# Testing the API
## With curl
* View all courses using GET  
`$ curl localhost:3000/courses | python -m json.tool`  

* Registering a user using POST/JSON  
`$ curl -v -d "username=chucks&password=12345" localhost:3000/auth/register`  

* Login of registered user  using POST/JSON  
`$ curl -v -d "username=chucks&password=12345" localhost:3000/auth/login`    

* Add new course to collection via POST/JSON  
`$ curl -v -d "title=Advanced NodeJS for Chucks" -H "Auth: JWT KTsWZn7a9gR7J1q4o0JE44aKr9QXF3IZsNjE8" localhost:3000/courses | python -m json.tool`   

## With Postman
* View all courses using GET  
  __URL:__ localhost:3000/courses  
  __METHOD:__ GET

* Registering a user using POST/JSON  
  __URL:__ localhost:3000/auth/register  
  __METHOD:__ POST  
  __HEADER:__ Content-Type: application/json  
  __BODY:__ raw  
```
{
  "username": "chucks",
  "password": "12345"
}
``` 

* Login of registered user  using POST/JSON
  __URL:__ localhost:3000/auth/login   
  __METHOD:__ POST  
  __HEADER:__ Content-Type: application/json  
  __BODY:__ raw  
```
{
  "username": "chucks",
  "password": "12345"
}
```

* Add new course to collection via POST/JSON  
 __URL:__ localhost:3000/courses   
  __METHOD:__ POST  
  __HEADER:__ Auth: JWT KTsWZn7a9gR7J1q4o0JE44aKr9QXF3IZsNjE8  
  __HEADER:__ Content-Type: application/json
  __BODY:__ raw  
```
{
  "title": "NodeJS for Chucks"
}
```  

* Registering a user using POST/form-data  
  __URL:__  localhost:3000/auth/register  
  __METHOD:__ POST  
  __HEADER:__ Content-Type: application/x-www-form-urlencoded  
  __BODY:__   x-www-form-urlencoded   
    &nbsp; &nbsp; __key__ &nbsp;  &nbsp; &nbsp;  __value__  
    &nbsp; &nbsp;  _username_  chucks  
    &nbsp; &nbsp; _password_  12345  

* Login of registered user  using POST/form-data
  __URL:__  localhost:3000/auth/login
  __METHOD:__ POST  
  __HEADER:__ Content-Type: application/x-www-form-urlencoded  
  __BODY:__   x-www-form-urlencoded   
    &nbsp; &nbsp; __key__ &nbsp;  &nbsp; &nbsp;  __value__  
    &nbsp; &nbsp;  _username_  chucks  
    &nbsp; &nbsp; _password_  12345  

* Using Auth header with JWT token to add new course via POST/form-data 
  __URL:__  localhost:3000/course
  __METHOD:__ POST  
  __HEADER:__ Auth: JWT KTsWZn7a9gR7J1q4o0JE44aKr9QXF3IZsNjE8
  __HEADER:__ Content-Type: application/x-www-form-urlencoded  
  __BODY:__   x-www-form-urlencoded   
    &nbsp; &nbsp; __key__ &nbsp;  &nbsp; &nbsp;  __value__  
    &nbsp; &nbsp;  _title_  NodeJS for chucks 
    
NB: 
  * The header `Auth: JWT KTsWZn7a9gR7J1q4o0JE44aKr9QXF3IZsNjE8` used throughout is a custom header.  
  * The random string ` KTsWZn7a9gR7J1q4o0JE44aKr9QXF3IZsNjE8` is the token generated after a succesful login. It us used in subsequent request to add new course e.g to add new document to a collection.
  