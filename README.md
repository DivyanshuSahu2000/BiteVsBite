# BiteVsBite 🍔

BiteVsBite is a full-stack food price comparison web application.

The main purpose of this project is to help users compare the prices of the same food item across different food delivery platforms and find the cheapest available option.

This project is also being built as a practical revision project to revise and demonstrate frontend, backend, database, authentication, API development, and full-stack development concepts.

---

## 💡 Project Idea

Sometimes a customer knows what they want to eat but does not know which restaurant or food delivery platform offers the best price.

BiteVsBite aims to solve this problem by allowing users to:

- Search for food items
- Browse a complete menu
- Browse restaurants
- Compare the same food item across multiple platforms
- See which platform has the cheapest price
- See discounts and additional offers
- Find special/limited-time offers
- Compare prices with and without discounts
- Find restaurants based on location
- Sign up and log in
- Get suggestions based on better prices and offers

### Example

If a user searches for:

`Chicken Biryani`

BiteVsBite may show:

| Platform   | Price | Offer    | Final Price |
| ---------- | ----: | -------- | ----------: |
| Swiggy     |  ₹220 | ₹30 off  |        ₹190 |
| Zomato     |  ₹210 | No offer |        ₹210 |
| Platform C |  ₹200 | ₹20 off  |        ₹180 |

The cheapest option will be highlighted.

---

# 🛠️ Technologies Used

## Frontend

- React.js
- Vite
- JavaScript
- HTML
- CSS
- React Router
- Context API

## Backend

- Node.js
- Express.js
- JavaScript
- REST APIs

## Database

- MongoDB
- Mongoose

## Development Tools

- VS Code
- Git
- GitHub
- Nodemon
- Postman

---

# 📁 Project Structure

```text
BiteVsBite/
│
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html
│
├── .gitignore
└── README.md
```
