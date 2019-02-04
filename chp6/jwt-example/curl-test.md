### View all courses
`$ curl localhost:3000/courses | python -m json.tool`  
### Registering a user 
`$ curl -v -d "username=chucks&password=12345" localhost:3000/auth/register `  
### Login of registered user  
`$ curl -v -d "username=chucks&password=12345" localhost:3000/auth/login`    
### Using Auth header with JWT token POST new course
`$ curl -v -d "title=Advanced NodeJS for Chucks" -H "Auth: JWT KTsWZn7a9gR7J1q4o0JE44aKr9QXF3IZsNjE8" localhost:3000/courses | python -m json.tool`   
