# APIs

## Overview

Today we will use our express server to request information from third party APIs to send to the front-end.

## Daily Plan

- Warm-up exercise
- Review code challenges
- Introduction of today's code challenge topic
- Code review of lab assignment
- Relational vs. non-relational databases
- Data modeling and schemas
- Code Demo
- Lab Preview

## Learning Objectives

As a result of completing Lecture 8 of Code 301, students will be able to:

- Describe and Define  
  - APIs
- Execute
  - Node Express Server
  - Use **axios** to fetch remote data asynchronously
  - Use **axios** to reach out to the back-end from the front-end
  - Ingest 3rd Party data from an API
  - Integrate data with a separate web application

## Notes

1. What is an API?


1. Why do we need a server?


1. What do we keep in our .env file?


1. Nodemon will automatically detect changes that we make to all the files in our server, however, if we make a change to THIS file, we must restart nodemon for it to take affect.


1. True or False: all API's require a key


1. To make an API call in the server using superagent:
  ```javaScript
  const url = `http://urlToAPI/?key=${process.env.MY_API_KEY}&city=seattle`;

  // notice the 'await'. This is asynchronous code. The function will need to be 'async'
  const axiosResults = await axios
    .get(url)
  ```
  - axios returns a giant object. The data we care about is usually in the .data of that object.
