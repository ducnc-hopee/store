# 🛍️ Store API Integration Guide

This guide helps you integrate the Store API into your frontend (ReactJS, Vue, etc.) or backend (NodeJS, Go, etc.) application. The Store API does not require token-based authentication.

---

## 🚀 Base URL

```
http://localhost:8765
```

---

## 🪜 Integration Flow

### 1️⃣ Create a User

**Endpoint:** `POST /users`

```json
{
  "username": "suu",
  "email": "suu@example.com",
  "password": "123456"
}
```

> ✅ Returns the user `id` — required for the following steps.

---

### 2️⃣ Login (Optional)

**Endpoint:** `POST /auth/login`

```json
{
  "username": "suu",
  "password": "123456"
}
```

> 🎯 This API only returns `{ "token": "..." }`, but token is not required.

---

### 3️⃣ Create a Product

**Endpoint:** `POST /products`

```json
{
  "colors": ["red", "blue"],
  "title": "fugiat ut",
  "price": 1000,
  "discountPercentage": 0.1,
  "description": "exercitation labore occaecat anim",
  "code": "Jean0001",
  "categoryId": "6861243b9dcb15d7ca92e794",
  "categoryName": "Jean",
  "image": "http://qNMi.ulFpGfrKmS4FdAhCOzjh+P7BDraZwaggCfMfSqEUMH6tLBXEuKncFlQ1ieu7itVW8ZMS",
  "rating": 5,
  "createdAt": "2025-06-29T11:47:35.755Z",
  "updatedAt": "2025-06-29T11:47:35.755Z",
  "__v": 0
}
```

> ✅ Returns the product `id` — required for the cart step.

---

### 4️⃣ Add Product to Cart

**Endpoint:** `POST /carts`

```json
{
  "userId": "<user ID from step 1>",
  "productId": "<product ID from step 3>",
  "quantity": 2
}
```

---

### 5️⃣ Create an Order

**Endpoint:** `POST /orders/create`

```json
{
  "userId": "<user ID>"
}
```

> ✅ The order is created based on the user's current cart. And then your cart will be empty

---
