# Backend Integration Guide

## Backend Port: 8081

Your frontend is configured to connect to `http://localhost:8081`

## Required API Endpoints

### 1. Login Endpoint
```
POST http://localhost:8081/auth/login
```

**Request Body:**
```json
{
  "email": "user@edu.rtu.lv",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "user@edu.rtu.lv"
  }
}
```

**Error Response (400/401):**
```json
{
  "message": "Invalid email or password"
}
```

---

### 2. Signup Endpoint
```
POST http://localhost:8081/auth/signup
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@edu.rtu.lv",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "user@edu.rtu.lv"
  }
}
```

**Error Response (400):**
```json
{
  "message": "Email already exists"
}
```

---

## Frontend Files Updated

1. **src/api/auth.js** - API communication module
   - `loginUser(email, password)` - calls POST /auth/login
   - `signupUser(name, email, password)` - calls POST /auth/signup
   - `logoutUser()` - clears tokens
   - `getAuthHeader()` - returns Authorization header with token

2. **src/components/AuthContext.jsx** - State management
   - Calls backend functions
   - Handles errors and loading states
   - Stores user data and token

3. **src/components/LoginForm.jsx** - Login form
   - Calls backend login API
   - Shows error messages from backend

4. **src/components/SignupForm.jsx** - Signup form
   - Calls backend signup API
   - Shows error messages from backend

---

## How It Works

1. User enters email and password in login form
2. Frontend calls `loginUser()` from auth.js
3. API sends POST request to `http://localhost:8081/auth/login`
4. Backend validates credentials and returns token + user data
5. Frontend stores token in localStorage
6. Modal closes and user is logged in

---

## Testing Steps

1. Start your backend server on port 8081
2. Run frontend: `npm run dev`
3. Click "Login" button
4. Enter valid credentials
5. Should see success or error message from your backend
6. Check browser DevTools → Application → Local Storage to verify `token` is stored

---

## Important Notes

- Email must end with `@edu.rtu.lv` (frontend validation)
- Password must be at least 6 characters (frontend validation)
- All communication uses JSON format
- Token is sent with `Authorization: Bearer <token>` header
- Make sure CORS is enabled on your backend if frontend and backend are on different origins
