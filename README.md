# 🪪 Random User ID Card App

An interactive user directory built with **Next.js 14**, styled using **Tailwind CSS**, and animated using **Framer Motion**. Users are fetched from the [randomuser.me](https://randomuser.me) API, and displayed as stylish, animated hanging ID cards.

## ✨ Features

- 🔍 Live search/filter users by first name
- 📇 User details shown as beautiful ID cards
- 🎯 Interactive card 
- 📱 Responsive design

## 🔧 Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/javed-ak/random-user-app.git
   cd random-user-app
    ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open your browser:

   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
.
├── app/
│   └── page.tsx          // Main page (home)
├── components/
│   ├── FilterInput.tsx   // Search input field
│   ├── ContactList.tsx   // Scrollable contact list
│   └── UserCard.tsx      // ID card
├── types/
│   └── User.ts           // Type definitions for user
├── public/               // Public assets (if needed)
├── styles/               // Global styles (if any)
├── tailwind.config.js    // Tailwind CSS config
└── README.md             // This file
```

## 🌐 API Used

All users are fetched from:

> [https://randomuser.me/api/?results=100](https://randomuser.me)

The API returns realistic but fake user data including names, pictures, gender, location, and more.

---

## 📸 Screenshot

> Add a screenshot or GIF here showing the hanging card animation for extra polish!



---

## 🧑‍💻 Author

Made with ❤️ by [Javed Akhtar](https://github.com/javed-ak)