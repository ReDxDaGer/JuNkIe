# Junkie

Junkie is an ecommerce website built with Node.js and Express, using EJS as the template engine. It provides a platform for users to browse and purchase various products online.

## Features

- User authentication (signup, login, logout)
- Product catalog with search and filtering options
- Shopping cart functionality
- Checkout process with payment integration
- Order history and tracking
- Admin panel for managing products, orders, and users

## Prerequisites

- Node.js (v12 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
 git clone https://github.com/redxdager/junkie.git
```

2. Navigate to the project directory:

```bash
 cd junkie
```

3. Install the dependencies : 

```bash
 npm install
```

4. Set up environment variables:
Create a ``.env`` file in the project root and add the following variables:

```
PORT=3000
MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-session-secret
```

5. Start the development server:

```bash
 npx nodemon app.js
```

## Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository
- Create a new branch: ``git checkout -b my-feature-branch``
- Make your changes and commit them: ``git commit -m 'Add some feature'``
- Push to the branch: ``git push origin my-feature-branch``
- Submit a pull request