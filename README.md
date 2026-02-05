# Top-words

Website for efficient and convenient German vocabulary learning.

## How to run locally

### 1. Download the project

- Clone and open the repository using the terminal:

```bash
git clone https://github.com/qmaoz/top-words.git
```

```bash
cd top-words
```

### 2. Run the server

> [!IMPORTANT]
> First, run the **PostgreSQL service** on Your PC.

- Go to the ```server``` folder using a terminal:

```bash
cd server
```

- Install all dependencies:

```bash
npm install
```

- Create a file named ```.env``` in the ```server``` folder with the following content:
```
SERVER_PORT=3001
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_HOST=localhost
DB_PORT=5432
DB_NAME=YOUR_DB_NAME
DB_DIALECT=postgres
```

- Run the server:

```bash
npm run start:dev
```

### 3. Run the client

- Go to the ```client``` folder using another terminal:

```bash
cd client
```

- Install all dependencies:

```bash
npm install
```

- Run the client:

```bash
npm run start
```

### 4. Open the website

- Normally, the website opens automatically after starting the client, but you can also open it manually using this URL:

```bash
http://localhost:3000/
```

## Info

### Tech Stack

- React (frontend framework)
- React Router (routing)
