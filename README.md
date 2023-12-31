# Sneakers Collection

SN Collection is a mini store. The project utilizes popular technologies such as React.js, TypeScript, Next.js, Storybook, TailwindCSS and Vercel.

## Mini Store (Website)

### `https://sncollection.vercel.app/`

## Design System (Storybook)

### `https://sncollection-sb.vercel.app/`

## Still WIP Features

- Search (created a separate temporary page `http://localhost:3000/not-found`, will be removed after search implementation)
- Filters
- Caching External API CrudCrud (The API lacks reliability and has severe limitations on the number of requests it can handle.)

## Getting Started

Run the project using the following steps:

- Rename file with environment variables and fill necessary one

```sh
cp .env.sample .env
```

- Install all dependencies

```sh
pnpm i
```

- Start the server

```sh
pnpm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Start UI-kit

```sh
pnpm run storybook
```

- Open [http://localhost:6006](http://localhost:6006) to explore the design system.
