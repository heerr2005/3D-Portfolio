# 🌟 3D Developer Portfolio

A modern, interactive 3D portfolio website showcasing creative work and technical skills through immersive visual experiences. Built with cutting-edge web technologies to deliver stunning animations and seamless user interactions.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18+-blue)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-orange)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

## 🚀 Live Demo

**[View Live Portfolio](https://3d-portfolio-jade-phi.vercel.app/)**

## ✨ Features

- **Interactive 3D Graphics** - Immersive Three.js animations and visual effects
- **Smooth Animations** - Fluid transitions powered by Framer Motion
- **Responsive Design** - Optimized experience across all devices
- **Dynamic Content** - React-based architecture for easy content management
- **Contact Integration** - Functional contact form with EmailJS
- **Performance Optimized** - Fast loading times and smooth 60fps animations
- **Modern UI/UX** - Clean, contemporary design with intuitive navigation

## 🛠️ Tech Stack

### Core Technologies
- **React.js** - Frontend framework
- **Three.js** - 3D graphics and WebGL rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Vite** - Build tool and dev server

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Additional Libraries
- **React Router DOM** - Client-side routing
- **EmailJS** - Contact form functionality
- **React Vertical Timeline** - Experience timeline component
- **React Tilt** - Parallax tilt effects

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   └── assets/          # 3D models, textures, images
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # React components
│   │   ├── canvas/      # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/       # Configuration and data
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── .env.example        # Environment variables template
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your EmailJS credentials from [EmailJS Dashboard](https://www.emailjs.com/)

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This project is configured for seamless deployment on Vercel:

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Alternative deployment options:
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 🎨 Customization

### Update Personal Information

Edit `src/constants/index.js` to customize:
- Personal details
- Work experience
- Projects
- Skills and technologies
- Testimonials

### Modify 3D Models

Replace 3D models in `public/assets/`:
- Support formats: `.gltf`, `.glb`
- Optimize models before adding (use [glTF Pipeline](https://github.com/CesiumGS/gltf-pipeline))

### Styling

Modify Tailwind configuration in `tailwind.config.js` for:
- Color schemes
- Fonts
- Spacing
- Breakpoints

## ⚡ Performance Optimization

- **Code Splitting** - Vite automatically splits vendor chunks
- **Lazy Loading** - 3D models load on demand
- **Image Optimization** - Compressed assets for faster loading
- **Tree Shaking** - Removes unused code
- **Caching** - Static assets cached with hashed filenames

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service

## 📧 Contact

For questions or feedback, reach out via the contact form on the portfolio website.

---

**Built with ❤️ using React, Three.js, and modern web technologies**
