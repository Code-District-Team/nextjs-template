# Next.js Enterprise Boilerplate

A production-ready Next.js boilerplate with enterprise-level features and best practices.

## 🌟 Features

### Core Technologies
- ⚡ **Next.js** - React framework with server-side rendering
- 📘 **TypeScript** - Static type checking
- 🔄 **Redux Toolkit** - State management with persistence
- 🎨 **Material UI** - Component library with custom theming
- 📊 **AG Grid** - Advanced data tables
- 💳 **Braintree** - Payment processing integration
- ☁️ **AWS Amplify** - Cloud infrastructure

### Key Features
- 🔐 Authentication system with cookie management
- 🌐 Internationalization support
- 🔍 Service discovery pattern
- 🚨 Comprehensive error handling
- 📁 File upload capabilities
- 🖼️ Image manipulation utilities
- 📱 Responsive design
- 💰 Payment processing

## 🚀 Prerequisites

1. **Git Setup**
   - Install and configure Git on your machine

2. **Node.js Setup**
   - Install nvm (Node Version Manager)
   - Install Node.js 20.x.x via nvm

```bash
# List installed Node.js versions
nvm list

# Install specific Node.js version
nvm install 20.x.x

# Use installed Node.js version
nvm use 20.x.x

# Uninstall a Node.js version
nvm uninstall 20.x.x
```

## 🛠️ Installation & Setup

### 1. Environment Configuration
```bash
# Create environment file
cp .env.example .env
# or
touch .env
```

### 2. Dependency Manager Setup
```bash
# Install Yarn
npm install yarn

# Set Yarn to stable version
yarn set version stable

# Install project dependencies
yarn install
```

### 3. Development Server
```bash
# Start development server
yarn dev
```

### 4. Production Build
```bash
# Create production build
yarn build

# Preview production build locally
yarn start
```

## ☁️ AWS Amplify Setup

1. **Create Amplify App**
   - Go to your AWS Account
   - Create an Amplify App in AWS Amplify Studio
   - Copy the pull command containing appId

2. **Amplify CLI Setup**
```bash
# Install Amplify CLI globally
npm install -g @aws-amplify/cli

# Pull environment configuration
amplify pull --appId $APP_ID --envName dev
```

**Note**: Replace `$APP_ID` with your AWS Amplify Studio backend environment ID

## 📝 Available Scripts

```json
{
  "dev": "sh bin/dev.sh",
  "build": "sh bin/build.sh",
  "start": "NODE_OPTIONS='-r @newrelic/next' next start",
  "format": "prettier --write \"src/**/*.{ts,tsx}\"",
  "lint": "next lint",
  "lint-fix": "next lint --fix",
  "test": "jest --watch",
  "test-all": "jest",
  "snapshot": "jest --updateSnapshot",
  "coverage": "jest --coverage",
  "find:unused": "next-unused",
  "depcheck": "npx depcheck"
}
```

## 🏗️ Project Structure

```
src/
├── app/          # Next.js app directory (pages)
├── components/   # Reusable React components
├── constants/    # Application constants
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and core logic
├── network/      # API and network related code
├── store/        # Redux store configuration
└── types/        # TypeScript type definitions
```

## 🔧 Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Jest**: Testing framework
- **Husky**: Git hooks
- **New Relic**: Application monitoring

## 🌐 Environment Variables

Required environment variables for the application:
```env
NEXT_PUBLIC_BASE_IMAGES_URL=
NEXT_PUBLIC_CLIENT_BASE_HOST=
NEXT_PUBLIC_CLIENT_BASE_PORT=
NEW_RELIC_LICENSE_KEY=
MERCHANT_ID=
PRIVATE_KEY=
PUBLIC_KEY=
CLASSIFICATION_URL=
```

## 🧪 Testing

```bash
# Run tests in watch mode
yarn test

# Run all tests
yarn test-all

# Update snapshots
yarn snapshot

# Generate coverage report
yarn coverage
```

## 📚 Documentation

### Network Layer
- Type-safe API calls with error handling
- Built-in caching mechanisms
- Authentication header management
- Service discovery integration

### State Management
- Redux Toolkit for state management
- Redux Persist for state persistence
- Type-safe store configuration

### Authentication
- Cookie-based authentication
- Server/client cookie handling
- Secure token management
- Session persistence

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
