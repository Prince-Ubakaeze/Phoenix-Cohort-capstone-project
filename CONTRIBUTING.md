# Contributing to our capstone

Thank you for contributing to our capstone project, a project built as part of the Phoenix cohort.

This document outlines how we collaborate, communicate, and contribute effectively as a distributed team.

---

## Cohort Values

This project follows the core principles of the cohort:

- Learning by building real-world projects
- Collaboration over competition
- Clear communication and respectful feedback
- Consistent progress over perfection
- Ownership and accountability

Everyone here is learning — mistakes are expected and encouraged as part of growth.

---

## Branching Strategy

We use a simple, industry-standard workflow:

### Main Branches

### Protected Branches

- `main` → stable, production-ready code
- `dev` → active development branch

⚠️ Do not commit directly to `main` or `dev`.

### Feature Branches

Create a new branch from `dev` for every task:

- `feature/<short-description>` or `feat/<short-description>`
- `docs/<short-description>`

Examples - feature/section1, feat/section2, docs/update-readme

### Keeping `dev` and `main` in Sync

- `dev` should always contain all changes from `main`
- If changes are merged directly into `main`, they must be merged back into `dev`
- Feature work always branches from `dev`, never from `main`

---

## Quick Git Workflow

If you are new to Git, follow these steps exactly:

```bash
git checkout dev # checkout dev branch
git pull origin dev # pull latest changes
git checkout -b feature/your-task-name # create feature branch
# make your changes
git add . # stage changes
git commit -m "feat: short description" # commit changes
git push origin feature/your-task-name # push changes
```

Then open a PR(pull request) to `dev` → Base branch: `dev`, Compare branch: `<your feature branch>`.
If unsure, please ask before pushing.

---

## Issues

Before starting work:

1. Check existing issues
2. Assign yourself to an issue
3. Ask questions in the issue or on Discord if unclear

Each issue should clearly define:

- What needs to be done
- Acceptance criteria (when applicable)

---

## Pull Requests (PRs)

All contributions must be made via Pull Requests.

### PR Guidelines

- Keep PRs **small and focused**
- Link the related issue (e.g. `Closes #12`)
- Write clear descriptions
- Final approval authority for merges into `main` rests with the Project Leads.

At least one approval is required before merging.

### PR Checklist

- [ ] Code works locally
- [ ] No unnecessary files included
- [ ] Follows project structure
- [ ] Linked to an issue

---

## Review & Merge Responsibilities

To keep reviews consistent while remaining beginner-friendly, we follow lightweight review ownership.
These roles guide reviews rather than block collaboration and are rotated.

### Merge Authority

Final approval for merges into `main` and `dev` rests with the Project Leads
At least one review is required from assignees before any merge from feature branches.

### Role Rotation

- Review responsibilities are not permanent
- Roles may rotate to support learning and shared ownership

---

## Avoiding Merge Conflicts

To reduce merge conflicts:

- Always start from the latest dev
- Create one branch per task
- Keep PRs small
- Avoid editing the same files as others without coordination

Before opening a PR, sync with dev:

```bash
git checkout dev # checkout dev branch
git pull origin dev # pull latest changes
git checkout your-branch # checkout your branch
git merge dev # merge dev into your branch
```

If a conflict occurs:

- Resolve it locally and test
- Ask for help on Whatsapp if unsure
- Do not force-push without discussion

## Branch Cleanup

- Feature branches should be short-lived
- Delete the branch after the PR is merged or closed
  ```bash
  git branch -d feat/description or feature/description
  ```
- Do not delete `main` or `dev`

---

## Communication

- Daily updates are encouraged
- Use Whatsapp for:
  - Questions
  - Blockers
  - Clarifications
- Be respectful and constructive in all feedback

---

## Code Quality

- Write readable, maintainable code
- Prefer clarity over cleverness
- Comment when logic is not obvious

---

## Code Reviews

When reviewing:

- Be kind and specific
- Focus on the code, not the person
- Suggest improvements, don’t demand them

When receiving reviews:

- Ask questions if unclear
- Don’t take feedback personally
- Apply changes thoughtfully

---

## What Not To Do

- Don’t work on large features without an issue
- Don’t push directly to protected branches
- Don’t stay blocked silently — ask for help
- Don’t rewrite someone else’s work without discussion

---

## 📌 Final Note

This project is a shared learning experience.
Your goal is not just to ship, but to:

- Learn professional workflows
- Practice teamwork
- Build something together

Thank you for contributing 🌱
