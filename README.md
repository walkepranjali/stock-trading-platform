# Stock Trading Platform

A full-stack, Zerodha-inspired stock trading platform built with the **MERN** stack (MongoDB, Express, React, Node.js). This project recreates a modern trading experience with a public landing page, interactive trading dashboard, portfolio management, and a backend REST API.

---

## 📌 Features

- **Public Landing Page (`frontend/`)**: Marketing & informational portal replicating Zerodha's landing pages (About, Products, Pricing, Support, Signup).
- **Trading Dashboard (`dashboard/`)**: Single-page trading interface featuring:
  - **Watchlist**: Real-time stock price display with quick actions (Buy, Sell, Analytics).
  - **Holdings**: Portfolio view showing instruments, average cost, LTP, current valuation, and P&L indicators.
  - **Positions**: Intraday and delivery position tracking.
  - **Orders**: Overview of executed and pending orders.
  - **Funds & Summary**: Equity margin, available balance, and performance summaries.
- **REST API (`backend/`)**: Node.js & Express service connected to MongoDB for persisting holdings, positions, watchlists, and order records.

---

## 🛠️ Tech Stack

### Frontend & Dashboard
- **React.js 19**
- **React Router DOM v7**
- **Material UI (`@mui/material`, `@mui/icons-material`)**
- **Bootstrap 5**
- **Axios**

### Backend
- **Node.js** & **Express.js 5**
- **MongoDB** & **Mongoose 9**
- **Dotenv** & **CORS**
- **Nodemon** (development)

---

## 📂 Project Structure

```text
stock-trading-platform/
├── backend/            # Express REST API & MongoDB models
│   ├── model/          # Mongoose models (Holdings, Orders, Positions, WatchList)
│   ├── schemas/        # Mongoose schemas
│   ├── .env.example    # Environment variable template
│   ├── index.js        # Server entry point
│   └── package.json
├── dashboard/          # Trading dashboard web application
│   ├── public/
│   ├── src/
│   │   ├── components/ # Dashboard views (WatchList, Holdings, Orders, etc.)
│   │   └── data/       # Static mock datasets
│   └── package.json
├── frontend/           # Public landing and marketing application
│   ├── public/
│   ├── src/
│   │   └── landing_page/ # Landing page sections (home, about, pricing, etc.)
│   └── package.json
├── .gitignore          # Repository-wide ignore rules
├── package.json        # Root script launcher
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **[Node.js](https://nodejs.org/)** (v18 or higher recommended)
- **[npm](https://www.npmjs.com/)** or **yarn**
- **[MongoDB](https://www.mongodb.com/)** (local community server running on port `27017` or MongoDB Atlas URI)
- **[Git](https://git-scm.com/)**

---

### 1. Clone the Repository

```bash
git clone https://github.com/walkepranjali/stock-trading-platform.git
cd stock-trading-platform
```

---

### 2. Configure Environment Variables

Create a `.env` file in the `backend/` directory based on the example:

```bash
# In backend/.env
PORT=3002
MONGO_URL=mongodb://127.0.0.1:27017/zerodhaClone
```

> **Note**: Never commit `.env` files containing live credentials or production database strings.

---

### 3. Install Dependencies

Install packages in all three subprojects:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Dashboard
cd ../dashboard
npm install

# Return to root
cd ..
```

---

### 4. Run the Application

You can start each service in separate terminal windows:

#### Terminal 1 — Backend (API Server)
```bash
cd backend
npm start
```
*Runs on [http://localhost:3002](http://localhost:3002)*

#### Terminal 2 — Frontend (Landing Page)
```bash
cd frontend
npm start
```
*Runs on [http://localhost:3000](http://localhost:3000)*

#### Terminal 3 — Dashboard (Trading UI)
```bash
cd dashboard
npm start
```
*Runs on [http://localhost:3001](http://localhost:3001)*

Alternatively, from the project root:
```bash
npm run start:backend     # Runs backend
npm run start:frontend    # Runs landing page
npm run start:dashboard   # Runs dashboard
```

---

## 🌐 Default Ports & Services

| Service | Port | Description |
| :--- | :--- | :--- |
| **Frontend** | `3000` | Landing & marketing page |
| **Dashboard** | `3001` | Trading application & portfolio |
| **Backend** | `3002` | Express REST API server |
| **MongoDB** | `27017` | Local database instance |

---

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/allHoldings` | Retrieve all portfolio holdings |
| `GET` | `/allPositions` | Retrieve all open positions |
| `POST` | `/newOrder` | Place a new buy/sell order *(in progress)* |

---

## 🔮 Future Enhancements

- [ ] Complete real-time order placement & transaction lifecycle
- [ ] User authentication and session management (JWT / Passport)
- [ ] Live market data feeds using WebSockets
- [ ] Interactive charting with TradingView / Chart.js
- [ ] Comprehensive unit & integration testing

---

## 👤 Author

**Pranjali Walke**
- GitHub: [@walkepranjali](https://github.com/walkepranjali)

---

## 📄 License

This project is open-source and available for educational purposes.
