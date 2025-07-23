<h1 align="center">🎧 Spotify ReactJS Clone</h1>

<p align="center">
  A modern, responsive web UI inspired by <strong>Spotify's official web player</strong>. Built with <strong>React 19, Vite, TailwindCSS</strong>, and <strong>React Router v7</strong>. Designed to help revise frontend ReactJS before moving into backend development.
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white" alt="React Badge"/></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-Fast-646CFF?logo=vite&logoColor=white" alt="Vite Badge"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-Utility-blue?logo=tailwindcss&logoColor=white" alt="Tailwind Badge"/></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-v7-critical?logo=reactrouter&logoColor=white" alt="Router Badge"/></a>
  <img src="https://img.shields.io/badge/Responsive-Design-29B6F6?logo=css3&logoColor=white" alt="Responsive Badge"/>

</p>

---


## 📌 Project Overview

**Spotify-ReactJS-Clone** is a modern UI-based clone of Spotify’s web player.  
The project is built to **revise core ReactJS concepts** such as:

- Component-based architecture  
- State management using Context API  
- Theming and responsiveness  
- React Router navigation  
- Reusability and modularity

---

## ✨ Features

- 🎧 **Music Playback** with rich UI player controls
- 💽 **Album & Song Browsing**
- 📢 **Toast Notifications** with context
- 🧭 **React Router v7** navigation system
- 🔁 **Reusable Components** like Sidebar, Navbar, Player, AlbumItem, SongItem
- 📱 **Fully Responsive** mobile-first UI
- ♿ **Accessible** with ARIA tags & keyboard shortcuts
- 🎧 **Local Assets** for offline demo (images + audio)

---

## 🧱 Project Architecture

```

src/
├── components/
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── Player.jsx
│   ├── AlbumItem.jsx
│   └── SongItem.jsx
├── context/
│   ├── PlayerContext.jsx
│   ├── ToastContext.jsx
│   └── ThemeContext.jsx
├── routes/
│   ├── Home.jsx
│   ├── Albums.jsx
│   └── Songs.jsx
├── assets/
│   ├── audio/
│   └── images/
└── App.jsx

````

### 🔌 State Management (Context API)

- **`PlayerContext`** – Controls audio player state
- **`ToastContext`** – Handles toast pop-ups and feedback


---

## 🛠️ Tech Stack

| Technology      | Purpose                                  |
|------------------|--------------------------------------------|
| **React 19**      | Component-based UI & Hooks support         |
| **Vite**          | Fast dev server and bundler               |
| **TailwindCSS**   | Responsive, utility-first styling         |
| **React Router v7**| SPA routing with nested route support     |
| **Context API**   | Lightweight global state management       |
| **Local Assets**  | For offline-friendly audio/image support  |

---

## 🧪 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/your-username/spotify-reactjs-clone.git
````

2. **Install dependencies**

```bash
cd spotify-reactjs-clone
npm install
```

3. **Start the development server**

```bash
npm run dev
```

> ✅ Make sure to have Node.js v18+ installed.

---

## 👨‍💻 Author

**Pranav Thorat**
📧 [Email](mailto:pranavthorat95@gmail.com)
🐙 [GitHub](https://github.com/PranavThorat1432)
🔗 [LinkedIn](https://www.linkedin.com/in/curiouspranavthorat/)

---

## 🙌 Acknowledgements

* Inspired by the original [Spotify Web Player](https://open.spotify.com/)
* Audio & album images are used for educational/demo purposes only

---

## 💬 Feedback

If you have suggestions, ideas, or just want to say hello — feel free to [open an issue](https://github.com/your-username/spotify-reactjs-clone/issues) or connect on [LinkedIn](https://www.linkedin.com/in/pranav-thorat).


