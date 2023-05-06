<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Pet API Node/NestJS Performance Test/Challenge

This repository contains an implementation of a Pet API using Node/NestJS, intended to be used as a performance test/challenge against .NET. 

## Purpose

The purpose of this project is to compare the performance of Node/NestJS against other technologies, specifically .NET,  in building a CRUD API. The implementation follows a similar architectural pattern and uses similar technologies (such as NestJS for building RESTful APIs and TypeScript for type safety), making it easier to compare their performance.

## Getting Started

To run the Node/NestJS implementation:

1. Install Node.js and npm.
2. Clone this repository.
3. Navigate to the `pet-api-nestjs` directory.
4. Run `npm install` to install dependencies.
5. Run `npm run start` to start the server.

The server should now be running on `http://localhost:3000`.

## Usage

The Pet API allows you to perform CRUD operations on pets. The following endpoints are available:

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /pets            | Get all pets            |
| GET    | /pets/:id        | Get a pet by ID         |
| POST   | /pets            | Create a new pet        |
| PUT    | /pets/:id        | Update an existing pet  |
| DELETE | /pets/:id        | Delete a pet            |

The body of the POST and PUT requests should contain a JSON object representing the pet, with the following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| name     | string | Yes      |
| age      | number | Yes      |
| breed    | string | No       |

Example POST request body:

```json
{
  "name": "Fluffy",
  "age": 2,
  "breed": "Persian"
}
```

Example PUT request body:

```json
{
  "name": "Fluffy",
  "age": 3,
  "breed": "Siamese"
}
```


## License

This project is licensed under the MIT License. See the LICENSE file for details.
