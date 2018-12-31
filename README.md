# Tebukuro API
## Requirements
- docker
- docker-compose
- node.js

## Installation

```
$ git clone git@github.com:shinosakarb/tebukuro-api.git
$ cd tebukuro-api
$ npm install
```

## Start Prisma & Database

```
$ cd prisma
$ docker-compose up
```

## Set up Database

```
$ npx prisma deploy
```

## Start Tebukuro API

```
$ npm start
```
