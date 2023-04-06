# Cat App

This is a [Next.js](https://nextjs.org/) project that fetches cat images and demonstrates how to handle `fetch` requests in a `useEffect` to prevent memory leaks.

## Features

The app has two main pages:

- `/cats`: This page fetches a single cat image when the component mounts. If you inspect the network tab of the browser's dev tools, you will see that two requests are made, but the first one is cancelled as we don't need it anymore. The component that made the request was unmounted.

- `/interrupting-cats`: This page uses a dependency-based `useEffect` that fetches a new cat image based on the tag you select. Clicking a new tag will cancel the old request as we no longer need it. This will prevent any blocking from happening and prevent memory leaks.

## Technologies Used

The app is built with the following technologies:

- Next.js
- React
- Docker

## Contributing

If you want to contribute to the app, you can do so by:

- Submitting bug reports or feature requests through the issues tab on GitHub.
- Forking the repository, making changes, and submitting a pull request.

## Getting Started

To get started with the app, follow these steps:

Clone the repository:

After cloning the repo you have 2 options.

### Npm (or yarn if you prefer)

```bash
# First time
npm install

# Then
npm run dev
```

### Docker

```bash
#First Time, and after any updates
docker compose up --build

# If no updates 
docker compose up

# To run in the background so you can close you terminal
docker compose up -d
# To stop
docker compose down
```

Then navigate to `http://localhost:3000/cats` or `http://localhost:3000/interupting-cats` to view some cats

## Conclusion

All the code in this repository is free to use for any purpose, without restriction. Feel free to modify, copy, distribute, or use it in any other way you see fit. We hope it can be helpful to you in your own projects!

Reviews and updates are most welcome!