A simple chat room application using React, TypeScript, JavaScript, MongoDB, and Docker+Docker Compose.

## Running Program
* After cloning, run `npm install` in `server` and `client` folder before starting application
* To see 2+ users having a conversation, open a web browser window for each user that wants to chat and go to http://localhost:3000 in each window to send chats in real time

### With Docker
1. Open Docker Desktop
2. Navigate to project directory called `my-app`
```bash
cd path/to/project/directory
```
3. Build Docker 
```bash
docker-compose build
```
3. Start container 
```bash
docker-compose up
```
4. Open a web browser and go to `http://localhost:3000`

### Without Docker
1. Navigate to project directory called `my-app`  
```bash
cd path/to/project/directory
```
2. Navigate to server directory
```bash
cd server
```
3. Start server
```bash
npm start
```
- Sample terminal output after running command
```
> server@1.0.0 start
> nodemon index.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Server is running on port 8000
Connected to MongoDB
```
4. In another terminal tab, navigate to project directory and client directory
```bash
cd path/to/project/directory
cd client
```
5. Start client
```bash
npm run dev
```
- Sample terminal output after running command
```
> my-app@0.1.0 dev
> next dev

  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1463ms
```
6. Open a web browser and go to `http://localhost:3000`

## Viewing MongoDB Entries
- To view local database `chat` entries Docker must be running

1. Open terminal
2. Locate container id of port 27017 
```bash
docker ps
```
3. Access database
```bash
docker exec -it [CONTAINER-ID] mongosh
```
4. Switch to `chat` database
```bash
use chat
```
5. View `users` collection
```bash
db.users.find().pretty()
```
6. View `messages` collection
```bash
db.messages.find().pretty()
```

## Notes
- Refreshing chat pages will close/hinder the connection
- Can see the updated/correct amount of upvotes/downvotes when user logs back in 
- To leave chat room, close browser window 

## Existing Users
1. Username: gurman & Password: kalkat
2. Username: testing & Password: is.fun
3. Username: robots & Password: are.cool





