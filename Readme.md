# Bank Exercise

This project is a React Native application using Expo, designed to simulate the creation of banking products. It leverages modern technologies and libraries to ensure a robust and developer-friendly environment.

Here how is it work:

![How it works](docs/react-native-demo.mp4)

## Technologies Used

- **Expo 50**: Framework and platform for universal React applications.
- **React 18**: A JavaScript library for building user interfaces.
- **React Native 0.73**: A framework for building native applications using React.
- **TypeScript 5.1**: An open-source language which builds on JavaScript by adding static type definitions.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity, used for unit testing.
- **TanStack Query**: It simplifies fetching, caching, synchronizing, and updating server state in web applications.
- **React Hook Form**: Efficient and flexible library to manage forms with ease.
- **Lucide Icons**: Beautifully crafted open-source icons.
- **Zod**: TypeScript-first schema validation library.
- **Dayjs**: Lightweight alternative to Moment.js with a compatible API.

## Prerequisites

- An Android or iOS emulator installed on your machine.
- Node.js version 20.

## Installation

To set up the project, follow these steps:

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the application**:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

## Testing

To run the tests and see coverage:

```bash
npm run test:coverage
```

## Project Structure

The project follows an organized structure:

- `app/`: Contains the main application components and logic.
- `assets/`: Stores static resources like images and icons.
- `components/`: Reusable React components.
- `hooks/`: Custom React hooks.
- `services/`: Services for interacting with external APIs.
- `types/`: TypeScript type definitions.

## Available Scripts

- `npm start`: Starts the Expo development server.
- `npm run android`: Launches the app on an Android emulator.
- `npm run ios`: Launches the app on an iOS simulator.
- `npm test`: Runs unit tests.
- `npm run lint`: Runs the linter to check code style.

## Contributing

Contributions are welcome. Please make sure to follow best coding practices and add tests for any new functionality.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
