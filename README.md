# GIGIH - Tokopedia Play Clone Monorepo

[Turbo](https://github.com/vercel/turbo) full-stack web monorepo with API using [Express.js](https://github.com/expressjs/express) and web using [React.js](https://github.com/facebook/react) with shared [ESLint](https://github.com/eslint/eslint) configuration. Written in [TypeScript](https://github.com/microsoft/TypeScript).

## Quick Start

```bash
# Install depedencies
pnpm install

# Copy .env.example into .env and set the .env
cp .env.example .env

# Run the development server
pnpm run dev

# Server running on http://localhost:3000 (default)
```

## Database Schema
```
tokopedia_play_clone       (db)
├── users                  (collection)
│   ├── _id                (ObjectId)
│   ├── username           (string)
│   └── avatarUrl          (string)
└── videos                 (collection)
    ├── _id                (ObjectId)
    ├── thumbnailUrl       (string)
    ├── user               (embedded)
    │   ├── _id            (ObjectId)
    │   ├── username       (string)
    │   └── avatarUrl      (string)
    ├── products           (array)
    │   ├── _id            (ObjectId)
    │   ├── productUrl     (string)
    │   ├── title          (string)
    │   └── price          (number)
    └── comments           (array)
        ├── _id            (ObjectId)
        ├── user           (embedded)
        │   ├── _id        (ObjectId)
        │   ├── username   (string)
        │   └── avatarUrl  (string)
        ├── comment        (string)
        └── timestamp      (Date)
```

## API Structure
For detailed API structure and endpoints, please refer to this [Postman API Documentation](https://documenter.getpostman.com/view/28036821/2s9XxztXxZ)

## Additional Resource
To help with the API testing, this repo also included with Postman Collection inside ```docs``` folder.
