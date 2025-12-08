# WeatherNow

A real-time weather application built with Next.js 16 App Router that provides accurate weather information for cities worldwide. The app features automatic location detection, city search functionality, and a beautiful dark/light theme interface.

## Features

- **Real-time Weather Data**: Get current weather information powered by OpenWeatherMap API
- **Auto Location Detection**: Automatically detects your location and shows local weather
- **City Search**: Search for weather information in any city worldwide
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Fully responsive design that works on all devices
- **Redux Toolkit Integration**: Efficient state management with RTK Query for API calls
- **Type-Safe**: Built with TypeScript for better development experience
- **Modern UI**: Clean and intuitive interface with Tailwind CSS
- **Docker Support**: Easily run and develop the app in containers using the provided Dockerfile

## 🌐 Live Demo

Check out the live demo: [WeatherNow](https://quickweathercheck.netlify.app)

## Getting Started

### Prerequisites

- OpenWeatherMap API key (get it free from [OpenWeatherMap](https://openweathermap.org/api))

### Installation

1. Clone the repository:

```bash
git clone git@github.com:ishwork/WeatherNow.git
cd WeatherNow
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - State management
- **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)** - Data fetching and caching
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[OpenWeatherMap API](https://openweathermap.org/api)** - Weather data

This project uses RTK Query for **client-side data fetching** that depends on client-side interactions (e.g. typing city names in the search input, users allowing location access).

- **Automatic Caching**: Reduces unnecessary API calls by caching responses for 2 minutes in the browser, improving performance and reducing API usage
- **Built-in Loading States**: Automatically manages `isLoading`, `isFetching`, and `isError` states without additional boilerplate
- **Optimized Re-renders**: Only re-renders components when their specific data changes
- **Simplified Code**: Eliminates the need for manual `useEffect`, `useState`, and error handling logic
- **Request Deduplication**: Multiple components requesting the same data trigger only one network request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from various sources
