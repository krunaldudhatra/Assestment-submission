# String Calculator (TDD)

This repository contains my implementation of the String Calculator Kata using JavaScript and Jest.
It showcases how to apply Test-Driven Development (TDD) practices in building a small utility function.
Each feature is developed using the Red-Green-Refactor cycle, emphasizing clean, maintainable, and testable code.

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Requirements](#requirements)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Screenshot](#screenshot)

---

## Problem Statement

Create a calculator that takes a string of numbers and returns their sum.  
Support custom delimiters and ensure the calculator gracefully handles edge cases like empty strings, large numbers, or invalid formats.

---

## Requirements

| Rule                             | Example Input             | Expected Output                  |
|----------------------------------|----------------------------|----------------------------------|
| Empty string returns 0          | `""`                       | `0`                              |
| Sum of comma-separated numbers  | `"1,2"`                    | `3`                              |
| Allow `\n` between numbers      | `"1\n2,3"`                 | `6`                              |
| Custom delimiter                | `"//;\n1;2"`               | `3`                              |
| Negative numbers throw error   | `"-1,2"`                   | Error: negative numbers not allowed -1 |
| Ignore numbers > 1000           | `"2,1001"`                 | `2`                              |
| Multi-char delimiters           | `"//[***]\n1***2***3"`     | `6`                              |
| Multiple delimiters             | `"//[*][%]\n1*2%3"`        | `6`                              |
| Multi multi-char delimiters     | `"//[**][%%]\n1**2%%3"`    | `6`                              |

---

## Features

- TDD-based development using Jest
- Full test coverage with edge cases
- Handles custom single and multi-character delimiters
- Validates negative numbers and throws descriptive errors
- Ignores numbers greater than 1000

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- A code editor like Visual Studio Code

---

### Clone & Install (All-in-One)

```bash
git clone https://github.com/your-username/string-calculator.git && \
cd string-calculator && \
npm install && \
npm test && \
npx jest --coverage
```
### Running Tests
```bash
npm test
```
### Screenshot
![Screenshot 2025-07-05 170514](https://github.com/user-attachments/assets/88a5f289-d0c5-4a05-a0e0-9ce67385d544)

