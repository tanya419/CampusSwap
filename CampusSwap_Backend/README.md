# CampusSwap Backend

Spring Boot REST API for the CampusSwap student buying, selling, and exchanging platform.

## Requirements
- Java JDK 17 or newer
- PostgreSQL installed and running
- Maven installed, or open this project in an IDE with Maven support

## 1. Create the database
In pgAdmin or the PostgreSQL SQL tool, create a database named:

```sql
CREATE DATABASE campusswap;
```

If it already exists, do not create it again.

## 2. Configure the database password
Open `src/main/resources/application.properties` and change the default `change_me` password to your local PostgreSQL password.

Alternatively, set the environment variable `DB_PASSWORD`.

## 3. Run the backend
Open a terminal in this folder and run:

```powershell
mvn spring-boot:run
```

If Maven is not installed, use the Maven wrapper if it exists in your copy of the project:

```powershell
.\mvnw.cmd spring-boot:run
```

The API runs at `http://localhost:8080`.

## API endpoints

| Method | URL | Purpose |
|---|---|---|
| GET | `/api/products` | Get all product listings |
| GET | `/api/products/{id}` | Get one listing |
| POST | `/api/products` | Create a listing |
| PUT | `/api/products/{id}` | Update a listing |
| DELETE | `/api/products/{id}` | Delete a listing |

## Example POST body
Send a POST request to `http://localhost:8080/api/products` with Body > raw > JSON:

```json
{
  "title": "Java Programming Book",
  "description": "Used book in good condition",
  "price": 250,
  "category": "Books",
  "listingType": "SELL",
  "sellerName": "Student One"
}
```

## Notes
- The React development server is allowed from localhost ports 5173 and 5174.
- This is a college-project prototype focused on product listings. It does not yet implement user accounts, authentication, seller ownership verification, or exchange-request workflows. Do not deploy it publicly with real user data without adding those features and security controls.
