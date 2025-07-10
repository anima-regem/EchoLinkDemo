# Dispatcher AI Client Dashboard

A modern Next.js dashboard for emergency call dispatch management with real-time features, emotion analysis, and interactive mapping capabilities.

## 🚀 Features

- **Real-time Call Monitoring** - Live dashboard for emergency call management
- **Interactive Mapping** - MapTiler integration with Leaflet for location visualization
- **Emotion Analysis** - Real-time emotion detection and intensity monitoring
- **Live Transcription** - Real-time call transcription and analysis
- **Modern UI** - Built with Tailwind CSS and Radix UI components
- **Responsive Design** - Mobile-friendly interface with dark/light mode support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Maps**: Leaflet with MapTiler SDK
- **Icons**: Lucide React & Tabler Icons
- **Forms**: React Hook Form with Zod validation

## 📋 Prerequisites

- Node.js 18+ 
- npm 9.6.7+ (or equivalent package manager)

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables (API keys, database URLs, etc.)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── live/              # Live dashboard pages
│   └── ...
├── components/            # Reusable components
│   ├── live/             # Live dashboard components
│   │   ├── map/          # Map-related components
│   │   └── ...
│   └── ui/               # UI component library
└── lib/                  # Utility functions
```

## 🔧 Key Components

### Live Dashboard (`/live`)
- **Map**: Interactive emergency call location mapping
- **Chat Interface**: Real-time communication tools
- **Emotion Cards**: Emotion analysis visualization
- **Event Panel**: Emergency event management
- **Transcript Panel**: Live call transcription
- **Details Panel**: Call and incident details

### UI Components
- Custom components built with Radix UI primitives
- Consistent design system with Tailwind CSS
- Accessible and responsive components

## 🌐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Add your environment variables here
NEXT_PUBLIC_MAPTILER_API_KEY=your_maptiler_api_key
# Add other required environment variables
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Check the documentation
- Review existing issues and discussions

## 📊 Statistics Dashboard

The dashboard displays real-time statistics including:
- 82% of call centers are understaffed
- 4.2M emergency calls handled daily
- 45s average wait time
- 24/7 AI coverage

---

Built with ❤️ by StudioOne using Next.js and modern web technologies.
