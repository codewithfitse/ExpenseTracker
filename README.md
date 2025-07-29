# 💸 Expense Tracker

A lightweight, modern web application to track your income and expenses. Built using React and the Context API, this app helps you take control of your finances with an intuitive interface and persistent storage.

---

## 📸 Demo

**Live App**: [Click Here to see...](https://expense-tracker-rose-omega.vercel.app)


---

## 🎯 Features

* 💰 Add & delete income and expense transactions
* 📊 Dynamic balance, income, and expense calculation
* 💾 Data persistence with LocalStorage
* 🧠 Global state management using Context API
* 🧱 Modular React components
* 🖥️ Fully responsive design
* ⚡ Fast and lightweight with Vite

---

## 🛠️ Tech Stack

* **React** (Functional Components + Hooks)
* **Context API**
* **Vite**
* **CSS / TailwindCSS** (if used)
* **LocalStorage**

---

## 📂 Folder Structure

```
ExpenseTracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddTransaction.jsx
│   │   ├── Balance.jsx
│   │   ├── Header.jsx
│   │   ├── IncomeExpenses.jsx
│   │   └── TransactionList.jsx
│   ├── context/
│   │   └── GlobalState.jsx
│   ├── reducer/
│   │   └── AppReducer.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/codewithfitse/ExpenseTracker.git
cd Frontend
npm install
```

### 🧪 Run Locally

```bash
npm run dev
```

### ✅ Build for Production

```bash
npm run build
```

---

## 📊 How It Works

* The **GlobalState** uses the Context API to provide transaction data across components.
* The **AppReducer** handles logic for adding/removing transactions.
* Data is saved in **LocalStorage**, making it persist even after refreshing the page.
* Components subscribe to context to display live updates.

---

## 🧰 Future Improvements (Optional Ideas)

* 🔐 User Authentication (Firebase, Supabase, etc.)
* ☁️ Backend integration (Node.js + MongoDB or Express)
* 📈 Advanced analytics dashboard
* 🌍 Multi-currency support
* 📱 PWA Support for offline usage

---

## 🧑‍💻 Author

**Fitsum Zerhun**
🔗 [GitHub](https://github.com/codewithfitse)
📧 Email: [fitsum0909@gmail.com](mailto:fitsum0909@gmail.com) *(change this)*

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if you want a badge pack (GitHub stats, Vercel deploy, license, etc.) or a markdown version with visuals like shields or GIFs.
