# Champions League API

This project was developed as part of DIO's NodeJS Training, based on the original training repository: https://github.com/digitalinnovationone/formacao-nodejs

This project is a RESTful API built with **Node.js** and **Express** to manage information about clubs and players in the **UEFA Champions League**. It allows users to retrieve data on players and clubs, as well as perform basic CRUD operations.

## Features
- Retrieve a list of all players
- Search for a player by ID
- List all players from a specific club
- Update player information
- Add new players
- Delete players
- Retrieve a list of all clubs

## Technologies Used
- **Node.js** – Runtime environment
- **Express** – Web framework for building the API
- **MongoDB** – Database for storing club and player data
- **TypeScript** – Ensures type safety and maintainability
- **CORS** – Enables cross-origin requests

## Project Structure
```
champions-league-api-node-express/
├── src/
│   ├── assets/
│   ├── controllers/        # Request handlers
│   ├── models/
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── data/               # Database seeding and connection
│   │   ├── insertMany.ts
│   │   ├── connect.ts
│   ├── repositories/       # Database queries
│   ├── utils/
│   ├── app.ts              # Application setup
│   ├── server.ts           # Server entry point
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
```

## Installation & Setup

### Prerequisites:
- Node.js installed
- MongoDB running

### Clone the repository:
```sh
git clone https://github.com/fornari03/champions-league-api-node-express.git
cd champions-league-api-node-express
```

### Install dependencies:
   ```sh
   npm install
   ```

### Update the `.env` file:
Update the `.env` file in the root directory and add your MongoDB connection string. You need a Cluster and a database with two collections named `players` and `clubs` :
   ```sh
   CONNECTION_STRING=your_mongodb_connection_string
   DB_NAME=your_database_name
   ```

## Seeding the Database
To populate the database with initial data, run:
```sh
npm run seed-db
```

## Running the API
- Start the development server:
  ```sh
  npm run start:dev
  ```
- Start the server with file watching:
  ```sh
  npm run start:watch
  ```
- Build and run the API from the distribution folder:
  ```sh
  npm run start:dist
  ```

## API Endpoints

### Player Endpoints
- **GET /api/players** - Retrieve all players
- **GET /api/players/:id** - Retrieve a player by ID
- **GET /api/players/club/:club** - Retrieve players from a specific club
- **PATCH /api/players/:id** - Update a player's statistics information
- **POST /api/players** - Add a new player
- **DELETE /api/players/:id** - Remove a player

### Club Endpoints
- **GET /api/clubs** - Retrieve all clubs

## Contributing
Feel free to fork this repository and contribute by submitting a pull request.

## License
This project is licensed under the **ISC License**.

## Contact
For any questions or issues, open a ticket on the [GitHub repository](https://github.com/fornari03/champions-league-api-node-express/issues).

