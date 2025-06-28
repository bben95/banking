# Horizon Banking App 🏦

A modern, secure banking application built with Next.js that provides a comprehensive digital banking experience.

## 🚀 Live Demo

**[View Live Application](https://next-banking-app.netlify.app/sign-in)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **🔐 Secure Authentication** - User registration and login system
- **💼 Account Management** - View and manage multiple bank accounts
- **💸 Transaction History** - Comprehensive transaction tracking
- **🏦 Banking Operations** - Transfer money, pay bills, and manage finances
- **📱 Responsive Design** - Optimized for desktop and mobile devices
- **🎨 Modern UI/UX** - Clean and intuitive user interface
- **⚡ Real-time Updates** - Live balance and transaction updates
- **🔒 Security First** - Built with security best practices

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Font Family
- **Deployment**: Netlify
- **Package Manager**: npm/yarn/pnpm/bun

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bben95/banking.git
   cd banking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables (see [Environment Variables](#environment-variables) section)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 🔧 Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Banking API (if applicable)
BANKING_API_KEY=your_banking_api_key
BANKING_API_URL=your_banking_api_url

# Other configurations
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🎯 Usage

### Authentication
1. Navigate to the sign-in page at `/sign-in`
2. Enter your credentials or create a new account
3. Access your personalized banking dashboard

### Banking Features
- View account balances and details
- Transfer money between accounts
- Review transaction history
- Manage personal information
- Access financial insights and reports

## 📁 Project Structure

```
banking/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── styles/               # Additional stylesheets
├── types/                # TypeScript type definitions
├── .env.example          # Environment variables template
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Deployment

### Netlify Deployment (Current)

The application is currently deployed on Netlify. To deploy your own version:

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Select the forked repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Set up environment variables in Netlify dashboard
6. Deploy!

### Vercel Deployment (Alternative)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy with one click

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with the project, please:

- Open an issue on GitHub
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit the [Learn Next.js](https://nextjs.org/learn) tutorial

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Vercel](https://vercel.com/font)
- Deployed on [Netlify](https://netlify.app/)

---

**Made with ❤️ by [bben95](https://github.com/bben95)**
