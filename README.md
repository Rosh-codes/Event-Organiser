# 🎓 Event Organiser

> A university event organiser web app built as part of a university assignment.  
> Access is limited to students with a valid **university email**.  
> The project uses a **CI/CD pipeline** with a dedicated **staging branch (`rosh`)** for testing and previewing before production deployment.

---

## 🌐 Live Links

- **Staging Environment:** [https://rosh-codes.github.io/Event-Organiser/](https://rosh-codes.github.io/Event-Organiser/)  
  _(used to test new features before pushing to production)_
- **Production Link:** [https://rod-event-organizer.netlify.app](https://rod-event-organizer.netlify.app)

---

## 📘 Overview

The **Event Organiser** helps university students:
- Discover upcoming university events
- Create and manage their own events
- Collaborate and participate in campus activities  
All while ensuring **only university-verified users** can access or modify event data.

---

## 🚀 Features

- 🧑‍🎓 **University email authentication** — restricts access to verified university users  
- 🗓️ **Create, edit, and manage events** — with details like date, time, and location  
- 📱 **Responsive design** — works smoothly on desktop and mobile  
- 🔁 **CI/CD integration** — automatic testing, deployment, and branch-based staging workflow  
- 🧩 **Version-controlled staging** (`rosh` branch) and **production** (`main` branch)

---

## 🧠 Architecture & Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript, React (Vite) |
| **Package Manager** | npm |
| **Deployment** | GitHub Pages (via CI/CD pipeline) , Netlify(Production)|
| **CI/CD** | GitHub Actions for test → build → deploy(Netlify) |

---

## 🧩 Branching & Deployment Workflow

1. **Feature Development**
   - Developers create a feature branch from `rosh`
   - Once complete, a Pull Request (PR) is opened targeting `rosh`

2. **Staging Verification**
   - CI/CD runs automated tests
   - Upon success, the app is deployed to **staging preview**:
     > [https://rosh-codes.github.io/Event-Organiser/](https://rosh-codes.github.io/Event-Organiser/)

3. **Production Release**
   - After manual verification on staging, changes are merged from `rosh` → `main`
   - The `main` branch represents the **production environment**
     > [https://rod-event-organizer.netlify.app](https://rod-event-organizer.netlify.app)
---

## 💻 Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- npm (comes with Node)
- Git

### Clone & Setup
```bash
# clone the repository
git clone https://github.com/Rosh-codes/Event-Organiser.git
cd Event-Organiser

# install dependencies
npm install
```
### Run Development Server
```bash 
npm run dev
```
### Visit the app at http://localhost:5173
