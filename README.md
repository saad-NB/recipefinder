# Next.js Recipe App

A modern recipe application built with Next.js that helps you discover and explore delicious recipes from around the world. This uses the spoonacular api.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nextjs-recipe-app.git
   cd nextjs-recipe-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure local variables required for functioning**

   Make a new `.env` file in the root directory and add these variables:
   ```env
   SPOONACULAR_API_KEY=your-api-key
   ```

   > **Note:** You'll need to obtain a Spoonacular API key from [Spoonacular API](https://spoonacular.com/food-api). Sign up for a free account to get your API key.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`
Runs the built app in production mode.

### `npm run lint`
Runs ESLint to check for code quality and potential errors.

## Project Structure

```
├── pages/              # Next.js pages
├── components/         # Reusable React components
├── styles/            # CSS and styling files
├── public/            # Static assets
├── lib/               # Utility functions and API helpers
├── .env               # Environment variables (create this file)
├── next.config.js     # Next.js configuration
└── package.json       # Project dependencies and scripts
```

## Environment Variables

This project uses the following environment variables(strictly required):


 |`SPOONACULAR_API_KEY` | Your Spoonacular API key for fetching recipe data 

## Learn More

To learn more about Next.js and the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://reactjs.org/) - Learn React fundamentals
- [Spoonacular API Documentation](https://spoonacular.com/food-api/docs) - Explore the recipe API

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
