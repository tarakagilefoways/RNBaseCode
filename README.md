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

## Additional Notes

- For Android development, make sure you have the necessary Android SDK components installed.
- If you encounter issues related to dependencies, try deleting the `node_modules` folder and running `yarn install` again.

Happy coding! If you have any questions or encounter issues, feel free to reach out for assistance.
