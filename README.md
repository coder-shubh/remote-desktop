# remote-desktop

> Stream your desktop screen as JPEG images over WebSockets using Electron

![GitHub stars](https://img.shields.io/github/stars/coder-shubh/remote-desktop?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/coder-shubh/remote-desktop?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/coder-shubh/remote-desktop?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/coder-shubh/remote-desktop?style=for-the-badge&logo=github) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributing](#contributing)

## 📝 Description

remote-desktop is an Electron-based application designed to capture and stream a user's screen in real-time. By encoding the screen capture into compressed JPEG frames and transmitting them over WebSockets, the project provides a straightforward, low-overhead solution for remote desktop viewing without requiring heavy third-party streaming protocols.

## ✨ Key Features

- **🖥️ Electron-Based Desktop Capture** — Uses Electron to capture the host system's desktop screen activity dynamically.
- **🔌 Real-Time Socket.IO Streaming** — Relays captured screen frames instantly over WebSockets using a Socket.IO connection.
- **🖼️ JPEG Image Compression** — Compresses captured desktop frames into standard JPEG format to minimize bandwidth consumption during transmission.
- **📂 Modular Architecture Design** — Separates functionality into client, host, server, and shared code directories for easier development and deployment.

## 🎯 Use Cases

- Setting up a self-hosted, lightweight remote monitoring system for a dedicated desktop machine.
- Developing a base template or proof-of-concept for real-time collaborative screen-sharing applications.

## 🛠️ Tech Stack

- 🔌 **Electron**
- 🟨 **JavaScript**

**Notable libraries:** Socket.IO

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/coder-shubh/remote-desktop.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run start
```

## 📦 Key Dependencies

```
socket.io-client: ^4.7.2
```

## 🚀 Available Scripts

- **start** — `npm run start`
- **build** — `npm run build`

## 📁 Project Structure

```
.
├── client
│   ├── index.html
│   ├── main.js
│   └── package.json
├── host
│   ├── index.html
│   ├── main.js
│   └── package.json
├── server
│   ├── index.js
│   └── package.json
└── shared
    └── config.js
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/coder-shubh/remote-desktop.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---
*This README was generated with ❤️ by [ReadmeBuddy](https://readmebuddy.com)*
