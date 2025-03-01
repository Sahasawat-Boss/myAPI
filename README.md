# 🚀 MyAPI - Free Open API by Boss

![Node.js](https://img.shields.io/badge/Node.js-Express-blue?style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?style=flat-square)
![Railway](https://img.shields.io/badge/Hosted%20on-Railway-green?style=flat-square)

## 📖 Overview
**MyAPI** is a free and open RESTful API built with **Node.js, Express, and MySQL**, designed to provide **sample user and post data**.  
It is deployed on **Railway** and available for public use.

🌍 **Live API URL**: [https://myapi-from-boss-free-use.up.railway.app](https://myapi-from-boss-free-use.up.railway.app)  

---

## 📌 API Endpoints

### **🏠 Root - API Info**
- **GET** `/`  
- Returns an **HTML page** listing available API endpoints.  
- Try it: [View API Homepage](https://myapi-from-boss-free-use.up.railway.app/)

---

### **👤 Users Endpoint**
- **GET** `/users`  
- Returns a list of **sample users** stored in the database.  
- Example Response:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "detail": "Software developer from the USA.",
      "age": 28,
      "sex": "Male",
      "birth": "1996-05-14"
    },
    ...
  ]
