# Sprint 7: Star Wars

Explore Star Wars universe starships with this app. 

## Features:

* Interaction with [Star Wars API](https://swapi.dev/documentation).
* Images obtained form [Star Wars visual guide](https://starwars-visualguide.com/).
* User registration and login with JWT authentication.
* Fake backend & authentication with [JSON server](https://github.com/typicode/json-server) and [JSON Server Auth](https://www.npmjs.com/package/json-server-auth).
* Use of guards for route protection.

## Usage

After you register, you can access the starship list and ship details.

## Getting started:

1. Clone repository:

  ```bash
  git clone https://github.com/fran-cesc/Sprint_7_Star_Wars.git
  ```

2. Install node packages:
  
  ```bash
  npm install
  ```

3. Start json-server and json-server-auth:

  ```bash
  json-server db.json -m ./node_modules/json-server-auth
  ```

4. Start angular developer server and open the browser in the localhost address:
  ```bash
  ng serve
  ```



