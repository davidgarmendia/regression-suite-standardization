Regression Suite Automation and Optimization
Project Overview
This repository serves as a professional demonstration of how a manual regression suite can be standardized and optimized through automation. By utilizing Cypress, the project transitions from time-consuming manual checks to a reliable, scalable, and fast automated pipeline.

The goal is to provide a Source of Truth for the application health, ensuring that core business flows such as Authentication and Cart Management remain functional after every deployment.

Technical Stack
Framework: Cypress.io

Language: JavaScript

Pattern: Functional Page Grouping

Version Control: Git / GitHub (Branching Strategy: Feature-Branch Workflow)

Optimization Strategy
To improve the existing regression process, this project implements:

Standardized Naming Conventions: Files are organized by module and intent (e.g., auth_login_positive.cy.js) for easy maintenance.

Negative Scenario Testing: Ensuring the system handles errors gracefully, such as locked-out user scenarios.

Automated Assertions: Removing human error by validating UI states, URL paths, and DOM elements automatically.

Project Structure
Plaintext
cypress/
  ├── e2e/
  │   ├── auth-tests/      # Authentication and Authorization flows
  │   └── inventory-tests/ # Product management and Cart flows
  ├── support/             # Custom commands and global configurations
  └── fixtures/            # Static test data
Getting Started
Prerequisites
Node.js (v18 or higher)

Git

Installation
Clone the repository:
git clone https://github.com/davidgarmendia/regression-suite-standardization.git

Install dependencies:
npm install