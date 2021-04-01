# EColeta-NLW01

EColeta-NLW01

## Setup

### Back-end

- `npm install express`
- `npm insatll cors`

Dev Dependencies

- `npm install typescript -D`
- `npm install @types/express -D`
- `npm install ts-node -D`
- `npm install @types/cors -D`

TypeScript config file

- `npx tsc --init`

On each project modification,it will restart the server

- `npm install ts-node-dev -D`

To work with database

- `npm install knex@0.21.17`
- `npm install sqlite3`
- `npx knex migrate:latest --knexfile knexfile.ts migrate:latest`

---

### Front-end

- `npx create-react-app web --teplate=typescript`
