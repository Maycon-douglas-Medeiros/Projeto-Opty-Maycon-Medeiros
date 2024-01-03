This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all dependencies:

Visual Studio Code:
(https://code.visualstudio.com/docs/?dv=win64user)

Node.js:
(https://nodejs.org/en)

```bash
npm install react-hook-form
```
If you don't have prisma install:
[How to Intall Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-mysql)

Init prism with mysql:

```bash
npx prisma init --datasource-provider mysql
```

Open the file .env and modify the database_url
E.G.: DATABASE_URL="mysql://root:123456789@localhost:3306/MyBD"

Now run:
```bash
npx prisma migrate dev
```

## Running the APP

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
