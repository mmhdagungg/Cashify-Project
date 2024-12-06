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
    "createdAt": "dateTime"
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
    "createdAt": "dateTime"
  }
}
```

## Update Data (Name)

**Method:** `PUT`  
**Endpoint:** `/api/users/profile`

### Request:

```json
Headers: Authorization Bearer Token
```

**Body**
```json
{
  "name": "Ariiq Al-Basith"
}
```

### Response:

```json
{
  "message": "User name updated successfully",
  "user": {
    "id": 1,
    "name": "Ariiq Al-Basith",
    "email": "ariiq@express.com",
    "password": "password",
    "createdAt": "dateTime"
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
