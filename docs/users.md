# USERS API DOCUMENTATION

## Register

**Method:** `POST`  
**Endpoint:** `/api/users/register`

### Request Body:

```json
{
  "name": "Muhammad Ariiq Al-Basith",
  "email": "ariiq@express.com",
  "password": "password"
}
```

### Response Body:

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "Muhammad Ariiq Al-Basith",
    "email": "ariiq@express.com",
    "password": "ini_token",
    "createdAt": "2024-12-03T15:04:02.841Z"
  }
}
```

## Login

**Method:** `POST`  
**Endpoint:** `/api/users/login`

### Request Body:

```json
{
  "email": "ariiq@express.com",
  "password": "password"
}
```

### Response:

```json
{
  "message": "Login successful",
  "token": "ini_token"
}
```

## Get Data

**Method:** `GET`  
**Endpoint:** `/api/users/profile`

### Request Header:

```json
Headers: Authorization Bearer Token
```

### Response:

```json
{
  "user": {
    "id": 1,
    "name": "Muhammad Ariiq Al-Basith",
    "email": "ariiq@express.com",
    "password": "ini_token",
    "createdAt": "2024-12-03T15:04:02.841Z"
  }
}
```

## Logout

**Method:** `POST`  
**Endpoint:** `/api/users/logout`

### Request Header:

```json
Headers: Authorization Bearer Token
```

### Response:

```json
{
  "message": "Logout successful",
  "token": null
}
```
