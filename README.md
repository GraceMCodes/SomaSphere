# SomaSphere
App Purpose:

I am creating a web app to support the fourth Sustainable Development Goal (SDG) of quality education at the secondary level.

1. Target Audience:

The primary target audience is secondary school students.
Key Features:

Resource Library: A repository of educational materials.
Past Test Papers: Access to previous exam papers for practice.
Progress Tracking: A dashboard to monitor learning progress.
Gamification: Elements to engage users, such as points and badges.
Tech Stack:

Frontend: HTML, CSS, and JavaScript.
Backend: Python.
Database: MySQL.
Multi-Page Structure:

The application will use a multi-page approach, with a main dashboard and separate HTML pages for each feature:
dashboard.html
resources.html
test-papers.html
progress.html
gamification.html
Login and Registration Process:

A single form will handle both new user registration and returning user login.
Users will select whether they are new or returning, with the form dynamically displaying additional fields as needed.
The background color of the interface will change based on the user's gender during sign-up (blue for males, pink for females).
The backend will process the data to determine if the user is registering or logging in, handling sessions accordingly.
Navigation:

A consistent navigation menu will be present on each page, allowing users to switch easily between features.
User Session Management:

Users will be redirected to the main dashboard upon successful login or registration, with session management ensuring they remain authenticated while navigating the app.
