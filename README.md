# Notes Management App

A MERN stack application for managing personal notes.

## Tech Stack
- **Frontend:** React, TypeScript, Vite, TailwindCSS
- **Backend:** Node.js, Express, TypeScript, MongoDB
- **Database:** MongoDB

## Prerequisites
- Node.js installed
- MongoDB installed and running locally

## Setup Instructions

### 1. Clone/Navigate to the project
```bash
cd notes_managment_app
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run build
# Ensure MongoDB is running locally
npm run dev
```
The server will start on http://localhost:3000.

### 3. Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
The client will serve on http://localhost:5173.

## Features
- User Registration & Login (JWT Auth)
- Create Notes
- View Notes
- Delete Notes
- Responsive Design
