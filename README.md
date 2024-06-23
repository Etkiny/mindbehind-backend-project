# MindBehind Backend Project

## Overview

This project allows company owners to manage their branches. Owners can list and edit all branches, while employees can only view and list branches. This system includes a back-end solution built using Node.js, Express, and Sequelize for database management.

## Table of Contents

- [Overview](#overview)
- [Use-Case Diagram](#use-case-diagram)
- [Database Diagram](#database-diagram)
- [Prerequisites](#prerequisites)
- [Part 1: Diagrams](#part-1-diagrams)
  - [Use-Case Diagram](#use-case-diagram)
  - [Database Diagram](#database-diagram)
- [Part 2: Setup](#part-2-setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Prerequisites

- Docker
- Docker Compose

## Part 1: Diagrams

### Use-Case Diagram

![Use-Case Diagram](useCase.png)

### Database Diagram

![Database Diagram](database.png)

## Part 2: Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Etkiny/mindBehind-backend.git
    ```

2. Create a `.env` file in the project root directory and add your database credentials:

    ```env
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_PORT=3306
    ```

    Replace `your_db_host`, `your_db_user`, `your_db_password`, and `your_db_name` with your actual database credentials.

3. Start the services using Docker Compose:

    ```bash
    docker-compose up -d
    ```

## API Endpoints

- `GET /api/branches`: List all branches (accessible by Owners, Employees, Customers)
- `GET /api/branches/:id`: Get a branch by ID (accessible by Owners, Employees, Customers)
- `PUT /api/branches/:id`: Update a branch by ID (accessible by Owners)

## Environment Variables

The application uses the following environment variables, which should be set in a `.env` file:

- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `DB_PORT`: Database port (default: 3306)