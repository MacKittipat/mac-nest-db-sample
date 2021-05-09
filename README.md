## App

mac-nest-sample

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Setup Database Instance
```
docker pull postgres
docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

## Create Database 
```
create database macnest;

CREATE TABLE cat
(
    id      SERIAL PRIMARY KEY NOT NULL,
    name    TEXT            NOT NULL,
    age     INT             NOT NULL
);
```
