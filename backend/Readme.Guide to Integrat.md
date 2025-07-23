# 🛠️ Full Guide to Integrate Store API

This guide walks you through how to integrate the **Store API** step-by-step — from creating a user and product to placing an order — **no token needed**.

---

## ✅ 1. Setup HTTP Client (with Axios)

Install Axios if using JavaScript/TypeScript:

```bash
npm install axios
```

Create an axios instance:

```ts
// src/lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8765",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
```

---

## ✅ 2. Create Service Functions

### 2.1 User Service

```ts
// src/services/user.ts
import { api } from "@/lib/axios";

export const createUser = (data) => api.post("/users", data);
```

### 2.2 Product Service

```ts
// src/services/product.ts
export const createProduct = (data) => api.post("/products", data);
```

### 2.3 Cart Service

```ts
// src/services/cart.ts
export const addToCart = (data: {
  userId: string;
  productId: string;
  quantity: number;
}) => api.post("/carts", data);
```

### 2.4 Order Service

```ts
// src/services/order.ts
export const createOrder = (userId: string) =>
  api.post("/orders/create", { userId });
```

---

## ✅ 3. Integration Flow (Step-by-step)

```ts
// Step 1: Create User
const userRes = await createUser({
  username: "suu",
  email: "suu@example.com",
  password: "123456",
});
const userId = userRes.data.id;

// Step 2: Create Product
const productRes = await createProduct({
  colors: ["red", "blue"],
  title: "fugiat ut",
  price: 1000,
  discountPercentage: 0.1,
  description: "exercitation labore occaecat anim",
  code: "Jean0001",
  categoryId: "6861243b9dcb15d7ca92e794",
  categoryName: "Jean",
  image:
    "http://qNMi.ulFpGfrKmS4FdAhCOzjh+P7BDraZwaggCfMfSqEUMH6tLBXEuKncFlQ1ieu7itVW8ZMS",
  rating: 5,
  createdAt: "2025-06-29T11:47:35.755Z",
  updatedAt: "2025-06-29T11:47:35.755Z",
  __v: 0,
});
const productId = productRes.data.id;

// Step 3: Add to Cart
await addToCart({
  userId,
  productId,
  quantity: 2,
});

// Step 4: Create Order
await createOrder(userId);
```

---

## ✅ 4. Base URL

```
http://localhost:8765
```

---

## ✅ 5. Notes

- You can use Postman to test endpoints before integrating.
- Make sure your backend server is running on port `8765`.
