# 🚀 MyAPI - Free Open API by Boss

![Node.js](https://img.shields.io/badge/Node.js-Express-blue?style=flat-square)
![TiDB](https://img.shields.io/badge/Database-TiDB-blue?style=flat-square)
![DBeaver](https://img.shields.io/badge/DBMS-DBeaver-lightgrey?style=flat-square)
![Railway](https://img.shields.io/badge/Hosted%20on-Railway-green?style=flat-square)

## 📖 Overview
**MyAPI** is a free and open RESTful API project, built with **Node.js, Express, and TiDB**, designed to provide **sample user and post data**.  
It is deployed on **Railway** and uses **TiDB** as a scalable cloud database, with **DBeaver** for database management.

🌍 **Live API URL**: [https://myapi-from-boss-free-use.up.railway.app](https://myapi-from-boss-free-use.up.railway.app)  



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
👉 Try it: [View API Users](https://myapi-from-boss-free-use.up.railway.app/posts)

---
![Screenshot 2025-03-01 113418](https://github.com/user-attachments/assets/1e45a230-2b92-4d36-99c5-20a67c888b6d)
![Screenshot 2025-03-01 113427](https://github.com/user-attachments/assets/e1891076-7bfa-450a-a84a-b768643964eb)



