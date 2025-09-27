# Procura Microservices

A microservices backend project using NestJS, Nx, PostgreSQL, and Docker Compose. This repository contains modularized service folders (`products`, `orders`, `api-gateway`, `ui`), end-to-end test suites, and Docker Compose setups for local development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Notes](#notes)


## Prerequisites

- Node.js (see `package.json` for recommended version)
- NPM (lock file: `package-lock.json`)
- Docker & Docker Compose

## Installation

1. **Install Dependencies**
npm install

text

2. **Start PostgreSQL with Docker Compose**
docker-compose -f postgres-docker-compose.yml up -d

text

3. **Start Each Service (in separate terminals):**
npx nx serve products
npx nx serve orders
npx nx serve api-gateway
npx nx serve ui

text

## Usage

- Access the frontend at [http://localhost:4200](http://localhost:4200).

