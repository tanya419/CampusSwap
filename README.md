# CampusSwap Frontend

CampusSwap is a React + Vite frontend for a college marketplace where students can buy, sell and exchange items.

## Features

- Home page
- Browse/search/filter/sort listings
- Item details
- Register/login
- Add/edit/delete listings
- Wishlist
- Exchange requests
- Profile
- Chat UI
- Notifications
- Admin dashboard
- Protected routes
- Responsive design
- LocalStorage persistence

## Run

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Demo accounts

User:
- Email: tanya@example.com
- Password: 12345678

Admin:
- Email: admin@campusswap.com
- Password: admin123

## Important

This version is frontend-only. It uses browser LocalStorage as temporary storage.

Later, replace LocalStorage logic with:
React -> Spring Boot REST API -> MySQL

Real JWT authentication, database persistence and real image uploads belong to the backend integration stage.
