# BuddyUp

## Description
A smarter auto-match system for DOTA2 players.

## Final Product
!["Main page of Buddy Up where users see potential matches"](https://github.com/johnwonghw/BuddyUp/blob/master/docs/Screen%20Shot%202017-09-02%20at%205.31.07%20PM.png?raw=true)
!["Notification popup when another user sends a friend request"](https://github.com/johnwonghw/BuddyUp/blob/master/docs/Screen%20Shot%202017-09-02%20at%205.34.42%20PM.png?raw=true)
!["Private chat opens for matched users"](https://github.com/johnwonghw/BuddyUp/blob/master/docs/Screen%20Shot%202017-09-02%20at%205.49.19%20PM.png?raw=true)
!["Profile page where users can edit their information"]
(https://github.com/johnwonghw/BuddyUp/blob/master/docs/Screen%20Shot%202017-09-02%20at%205.50.04%20PM.png?raw=true)

## Getting Started

### Server side
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
5. Run the server: `npm start`
6. Run the app on localhost:3000

### Client side
1. Update the .env file with your correct local information
2. Install dependencies: `npm i`
3. Run the webpack-dev-server: `npm start`
