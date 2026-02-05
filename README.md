# Top-words

Website for efficient and convenient German vocabulary learning

# Download the project

1. Clone the repository:

  ```bash
  git clone https://github.com/qmaoz/top-words.git
  ```


Install all dependencies:

  ```npm install```

# Run the server

> [!IMPORTANT]
> First, run the **PostgreSQL service** on Your PC.

Create a file named ```.env``` in the ```server``` folder with the following content:
```
SERVER_PORT=3001
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_HOST=localhost
DB_PORT=5432
DB_NAME=YOUR_DB_NAME
DB_DIALECT=postgres
```


Go to the ```server``` folder using a terminal:

  ```cd server```


Run the server:

  ```npm run start:dev```

# Run the client

Go to the ```client``` folder using a terminal:

```cd client```


Run the client:

```npm run start```

# Open the website

Normally, the website opens automatically after starting the client, but you can also open it manually using this URL:

```http://localhost:3000/```
