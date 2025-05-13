# 🛍️Curatify - A Product Recommendation Dashboard

A responsive React application that displays recommended products with dynamic filters for category and price. Built using **Zustand** for global state management, **Tailwind CSS** and **ShadCN UI** for sleek UI components, and tested with **Jest** and **React Testing Library**. Deployed on **Netlify**.

---

## 🚀 Features

- 🔍 Dynamic filters for **category** and **price**
- 📱 Responsive layout with collapsible filters on mobile
- 🎨 Elegant UI with **Tailwind CSS** + **ShadCN UI**
- 🧠 Global state management with **Zustand**
- 🧪 Unit tested with **Jest** and **React Testing Library**
- ☁️ Easy deployment via **Netlify**

🎞️ Animations & UX Enhancements:
  Framer Motion is used for entrance transitions and hover effects , making UI feel smooth and interactive.
Mobile Filters Collapse:
  Filters collapse into an accordion or toggleable panel on small screens to improve usability and reduce clutter.
Tailwind Transitions:
  Smooth fade and slide transitions using Tailwind classes like transition, duration-300, ease-in-out.

🧠 State Management — Zustand
We use Zustand for lightweight and scalable state management across the product dashboard.

💡 State Purpose
The global store manages:
  category: selected category filter
  priceRange: array [min, max]
  Actions: setCategory, setPriceRange, and resetFilters
Filters update values using onValueChange or onSliderChange events. When either category or priceRange changes, the product list automatically re-renders by consuming the updated values from the store.

---

## 🛠️ Tech Stack

| Tech                | Purpose                            |
|---------------------|-------------------------------------|
| React + Vite        | Frontend and build tooling          |
| TypeScript          | Static typing                       |
| React Router        | Client-side routing                 |
| Zustand             | Global state management             |
| Tailwind CSS        | Utility-first CSS styling           |
| ShadCN UI           | Headless UI components              |
| Jest + React Testing Library | Unit & integration testing |
| Netlify             | Hosting & CI/CD                     |

---

🧪 Testing with Jest
We use Jest and React Testing Library for unit and integration tests.

🔧 Setup
If not already configured, install:
npm install jest --save-dev
npm install @testing-library/react --save-dev
npm install ts-jest @types/jest --save-dev

Run if you're testing app
npm install ts-node @testing-library/jest-dom --save-dev
npm install jest-environment-jsdom
npm install identity-obj-proxy --save-dev

npm run test

🧭 Running the Application
1. Clone the repository
git clone <repository_link>
```cd repo```
2. Install dependencies
```npm install```
3. Start development server
```npm run dev```
4. Run tests
```npm run test```
