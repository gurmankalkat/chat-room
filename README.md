# Nimble Challenge
A simple chat room application using React, TypeScript, JavaScript, MongoDB, and Docker+Docker Compose.

## Running Program
- Used Mac
- To see 2+ users having a conversation, open two web browser windows and go to http://localhost:3000 to see chats send in real time

### With Docker
1. Open Docker Desktop
2. Navigate to project directory  
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
4. Open a web browser and go to http://localhost:3000

### Without Docker
1. Navigate to project directory  
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
3. In another terminal tab, navigate to project directory and client directory
```bash
cd path/to/project/directory
cd client
```
4. Start client
```bash
npm run dev
```
5. Open a web browser and go to http://localhost:3000

## Notes
- Refreshing chat pages will close/hinder the connection
- Can see the updated/correct amount of upvotes/downvotes when user logs back in 


