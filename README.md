# Pangestu Service Website

A Next.js 14 application for a local service business website, featuring modern React components, Tailwind CSS styling, and Docker deployment.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Docker** - Containerization
- **Vercel Analytics** - Performance monitoring

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd service-kompor

# Install dependencies
npm install
```

## 🏃‍♂️ Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🐳 Docker

```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d
```

## 📁 Project Structure

```
├── components/     # React components
├── pages/         # Next.js pages (_app.js, _document.js, index.js)
├── public/        # Static assets (favicon, sitemap, robots.txt)
├── styles/        # Global CSS
├── Dockerfile     # Docker build config
├── next.config.js # Next.js configuration
└── tailwind.config.js # Tailwind CSS config
```

## 📜 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint check
- `npm run format` - Prettier formatting

## 🚀 Deployment

Deploy to Vercel by connecting your GitHub repository. The app includes Docker configuration for alternative deployment options.

## 📄 License

Private project