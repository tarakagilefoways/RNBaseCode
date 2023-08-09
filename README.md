# BaseCode Project Setup Guide

Welcome to the setup guide for the **BaseCode** project. This guide will walk you through the steps required to set up and start working on the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Recommended Development Workflow](#recommended-development-workflow)
- [Dependencies](#dependencies)
- [Additional Notes](#additional-notes)

## Prerequisites

Before you begin, ensure that you have the following software installed on your system:

- **Node.js**: This project requires Node.js version 16 or higher.
- **Yarn**: Yarn is used as the package manager for this project. Make sure it's installed globally.
- **Git**: You'll need Git for version control and code collaboration.
- **CocoaPods**: If you're planning to work with iOS, make sure you have CocoaPods installed (for managing iOS dependencies).

## Getting Started

### Cloning the Repository

1. Open a terminal or command prompt.

2. Clone the repository to your local machine by running the following command:

   ```bash
   git clone https://github.com/tarakagilefoways/RNBaseCode.git
   ```

3. Navigate to the project directory:

   ```bash
   cd RNBaseCode
   ```

### Installing Dependencies

To install the project dependencies, run the following command:

```bash
yarn install
```

## Available Scripts

In the project directory, you can run the following scripts:

- **Clean Android Build**: Removes Android build artifacts.

  ```bash
  yarn clean
  ```

- **Run Android**: Starts the Android development server and launches the app on an Android emulator or device.

  ```bash
  yarn android
  ```

- **Build Android**: Cleans the Android build artifacts and then runs the Android app.

  ```bash
  yarn build-android
  ```

- **Clean iOS Build**: Removes iOS build artifacts.

  ```bash
  yarn clean:ios
  ```

- **Run iOS**: Starts the iOS development server and launches the app on the specified iOS simulator.

  ```bash
  yarn ios
  ```

- **Install iOS Dependencies**: Installs iOS dependencies using CocoaPods.

  ```bash
  yarn ios-pod
  ```

- **Build iOS**: Installs iOS dependencies and then runs the iOS app.

  ```bash
  yarn build-ios
  ```

- **Reset Metro Cache**: Resets the Metro Bundler's cache.

  ```bash
  yarn reset:metro
  ```

- **Linting**: Runs ESLint for code linting.

  ```bash
  yarn lint
  ```

- **Lint and Fix**: Runs ESLint and attempts to fix linting issues automatically.

  ```bash
  yarn lint-fix
  ```

- **Start Metro Bundler**: Starts the Metro Bundler for running the app.

  ```bash
  yarn start
  ```

- **Run Tests**: Executes the Jest test suite.
  ```bash
  yarn test
  ```

## Project Structure

Describe your project's directory structure here.

## Recommended Development Workflow

1. Start the Metro Bundler:

   ```bash
   yarn start
   ```

2. Launch the app on the desired platform:

   - Android: `yarn android`
   - iOS: `yarn ios`

3. Make code changes and see live updates in the running app.

4. Use the provided scripts for cleaning, building, and testing the app.

## Dependencies

Here are some of the key dependencies used in this project along with their documentation links:

- **[@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tabs)**: Navigational component for creating bottom tab navigation.
- **[@react-navigation/native](https://reactnavigation.org/docs/getting-started)**: Core library for navigation in React Native apps.
- **[@react-navigation/native-stack](https://reactnavigation.org/docs/stack-navigator)**: Stack navigator for handling navigation in a stack-like manner.
- **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**: A toolset for efficient Redux development, including simplifying store setup and reducer logic.
- **[axios](https://axios-http.com/docs/intro)**: A promise-based HTTP client for making requests to APIs.
- **[react](https://reactjs.org/docs/getting-started.html)**: JavaScript library for building user interfaces.
- **[react-native](https://reactnative.dev/docs/getting-started)**: Framework for building native mobile apps using React.
- **[react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)**: Provides a way to handle safe area insets.
- **[react-native-screens](https://reactnative.dev/docs/navigation/native-stack#using-the-screens-package)**: Package for managing native views and screens in React Native navigation.
- **[react-native-sensitive-info](https://github.com/mCodex/react-native-sensitive-info)**: Library for securely managing sensitive information in React Native apps.
- **[react-redux](https://react-redux.js.org/introduction/quick-start)**: Official React bindings for Redux state management.
- **[redux-persist](https://redux-toolkit.js.org/)**: Library for persisting Redux store data to local storage.
- **[redux-persist-sensitive-storage](https://github.com/CodingZeal/redux-persist-sensitive-storage)**: Redux persist storage engine for sensitive data.

## Additional Notes

- For Android development, make sure you have the necessary Android SDK components installed.
- If you encounter issues related to dependencies, try deleting the `node_modules` folder and running `yarn install` again.

Happy coding! If you have any questions or encounter issues, feel free to reach out for assistance.
