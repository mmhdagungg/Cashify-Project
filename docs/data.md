# DATA API DOCUMENTATION

## Input Data

**Method:** `POST`  
**Endpoint:** `/api/data/input`

### Request Body:

```json
Headers: Authorization Bearer Token
```

```json
{
  "dateTime": "DD-MM-YYYY",
  "labaKotor": "angka_rupiah",
  "bayarGaji": "angka_rupiah",
  "bayarAir": "angka_rupiah",
  "biayaTransport": "angka_rupiah"
}
```

### Response:

```json
{
  "message": "Data berhasil ditambahkan"
}
```

## History

**Method:** `GET`  
**Endpoint:** `/api/data/history`

### Request Header:

```json
Headers: Authorization Bearer Token
```

```json
{
  "dateTime": "DD-MM-YYYY"
}
```

### Response:

```json
{
  "data": {
    "id_data": 1,
    "message": "Hasil Analisis",
    "dateTime": "DD-MM-YYYY"
  }
}
```

## History Details

**Method:** `GET`  
**Endpoint:** `/api/data/history/id_data/details`

### Request Header:

```json
Headers: Authorization Bearer Token
```

### Response:

```json
{
  "data": {
    "id_data": 1,
    "message": "Hasil Analisis",
    "dateTime": "DD-MM-YYYY",
    "labaKotor": "angka_rupiah",
    "bayarGaji": "angka_rupiah",
    "bayarAir": "angka_rupiah",
    "biayaTransport": "angka_rupiah",
    "biayaPromosi": "angka_rupiah",
    "biayaPackaging": "angka_rupiah",
    "biayaPajak": "angka_rupiah"
  }
}
```
