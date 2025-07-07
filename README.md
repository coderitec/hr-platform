# HR Platform

A modern, full‑stack Human Resources platform built to streamline employee lifecycle, payroll, attendance, leave‑management, and analytics.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

**_HR Platform_** is designed for small to medium organizations aiming to automate their HR workflows. It offers:

- Employee onboarding/offboarding
- Leave & attendance tracking
- Payroll and compensation management
- Performance reviews & analytics

---

## Features

- **Employee Management**: Profiles, roles, departments, and permissions
- **Leave & Attendance**: Request, approval, geofenced check‑ins, balance tracking
- **Payroll**: Salary calculation, deductions, payslips generation
- **Performance Reviews**: Goals, KRA setting, appraisal cycles
- **Admin Dashboard**: HR analytics, reports, saved jobs and audit logs

---

## Tech Stack

| Layer          | Tech                              |
| -------------- | --------------------------------- |
| Backend        | Node.js, Express, PostgreSQL      |
| Frontend       | React (or Next.js) + Tailwind CSS |
| Authentication | JSON Web Tokens (JWT)             |
| Testing        | Jest + Supertest                  |
| Dev Tools      | Docker, ESLint, Prettier          |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker &amp; docker‑compose](https://www.docker.com/)
- PostgreSQL (or via Docker)
- Yarn or npm

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/coderitec/hr-platform.git
   cd hr-platform
   ```
