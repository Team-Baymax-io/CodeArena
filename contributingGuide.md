🤖 Baymax.io — Contributing Guide

Welcome to the Baymax.io hackathon project! 🚀
To keep our workflow smooth and avoid merge conflicts, please follow these steps while contributing.

🔹 Branching Strategy

main → Production-ready branch (🚫 no direct commits).

dev → Integration branch (all features get merged here).

Feature branches → For individual tasks (backend/auth, frontend/login-ui, etc.).

Branch Map
main ← demo-ready (protected)
└── dev ← active development
├── backend/auth
├── backend/database
├── frontend/login-ui
└── frontend/dashboard

🔹 Getting Started

Clone the repo:

git clone https://github.com/<org-name>/<repo-name>.git
cd <repo-name>

Switch to dev branch:

git checkout dev
git pull origin dev

Create your feature branch (example: backend auth):

git checkout -b backend/auth

🔹 Workflow

Do your changes
Work on your assigned feature/task.

Stage & Commit

git add .
git commit -m "Added authentication routes"

Push to GitHub

git push origin backend/auth

Open Pull Request (PR)

Base: dev

Compare: your-feature-branch

Add a clear PR title + description.

Review & Merge

Teammates review the PR.

Once approved, merge into dev.

Keep Your Branch Updated
Regularly pull latest dev:

git checkout dev
git pull origin dev
git checkout backend/auth
git merge dev

🔹 Final Submission

Only when project is stable and ready for demo, dev will be merged into main.

main must always stay clean and functional.

✅ That’s it! Following this guide ensures smooth teamwork, fewer conflicts, and a working codebase throughout the hackathon.
