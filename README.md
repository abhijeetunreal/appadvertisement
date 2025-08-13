# App Suite - Hugo Website

A modern, responsive website built with Hugo showcasing a collection of productivity applications.

## 🏗️ Architecture & Best Practices

This project follows Hugo best practices for maintainability, performance, and code organization:

### 1. **Template Organization**
- **Base Templates**: `layouts/_default/baseof.html` - Main site structure
- **App Templates**: `layouts/apps/baseof.html` - Base template for app pages
- **Partials**: Reusable components in `layouts/partials/`
- **Shortcodes**: Custom HTML components in `layouts/shortcodes/`

### 2. **Asset Management**
- **CSS**: `assets/css/main.css` - All styles in one file
- **JavaScript**: `assets/js/main.js` - All scripts in one file
- **Hugo Pipes**: Automatic minification and optimization
- **External CDNs**: Tailwind CSS, Font Awesome, Google Fonts

### 3. **Data Structure**
- **Site Config**: `data/config.yaml` - Common configuration values
- **App Data**: `content/apps/*.md` - Individual app configurations in front matter
- **Apps Overview**: `data/apps_overview.yaml` - Basic app info for home page
- **DRY Principle**: Common values defined once, reused everywhere

### 4. **Code Reusability**
- **Partials**: Header, hero, features, testimonials, FAQ, CTA sections
- **Template Inheritance**: App pages extend base app template
- **Conditional Logic**: Smart rendering based on page type

## 📁 File Structure

```
appadvertisement/
├── assets/                    # Source assets
│   ├── css/main.css         # Main stylesheet
│   └── js/main.js          # Main JavaScript
├── data/                     # Data files
│   ├── config.yaml          # Common configuration
│   ├── apps_overview.yaml   # Basic app info for home page
│   └── site.yaml            # Site-wide data
├── layouts/                  # Template files
│   ├── _default/            # Default templates
│   │   └── baseof.html     # Main site template
│   ├── apps/                # App-specific templates
│   │   ├── baseof.html     # Base app template
│   │   └── single.html     # Individual app page
│   ├── partials/            # Reusable components
│   │   ├── header.html     # Site header
│   │   ├── hero.html       # Hero section
│   │   ├── features.html   # Features section
│   │   ├── app-sections.html # All app sections
│   │   └── footer.html     # Site footer
│   └── shortcodes/          # Custom HTML components
│       └── feature-card.html # Feature card component
├── content/                  # Content files
├── hugo.toml                # Hugo configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Hugo Extended version 0.100.0 or higher
- Node.js (for optional PostCSS processing)

### Development
```bash
# Clone the repository
git clone <repository-url>
cd appadvertisement

# Start development server
hugo server -D

# Build for production
hugo --minify
```

### Adding New Apps
1. Create a new markdown file in `content/apps/`
2. Follow the existing structure (see `taskflow.md` as example)
3. Add basic app info to `data/apps-overview.yaml` for the home page
4. The template will automatically render the new app

## 🎨 Customization

### Colors & Typography
- **Primary**: `#4361ee` (Blue)
- **Secondary**: `#3f37c9` (Dark Blue)
- **Accent**: `#4cc9f0` (Light Blue)
- **Font**: Inter (Google Fonts)

### Styling
- **Framework**: Tailwind CSS
- **Custom CSS**: `assets/css/main.css`
- **Responsive**: Mobile-first design
- **Animations**: CSS transitions and transforms

## 📱 Features

- **Responsive Design**: Works on all devices
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Smooth Scrolling**: Anchor link navigation
- **FAQ Accordion**: Interactive FAQ sections
- **Phone Mockups**: 3D iPhone mockups for app previews
- **Performance**: Optimized assets and lazy loading

## 🔧 Maintenance

### Code Organization
- **Partials**: Break down large templates into reusable components
- **Data Files**: Keep content separate from presentation
- **Shortcodes**: Create custom HTML components for repeated elements
- **Asset Pipeline**: Use Hugo Pipes for optimization

### Best Practices
- **DRY Principle**: Don't Repeat Yourself - use partials and data
- **Separation of Concerns**: Content, presentation, and logic are separate
- **Performance**: Minify assets, optimize images, use CDNs
- **Accessibility**: Semantic HTML, proper ARIA labels
- **SEO**: Meta tags, structured data, clean URLs

### Adding New Sections
1. Create a new partial in `layouts/partials/`
2. Add the section to `layouts/partials/app-sections.html`
3. Update app data files to include new section data
4. Test on multiple page types

## 🚀 Deployment

### GitHub Pages
```bash
# Build the site
hugo --minify

# Deploy to GitHub Pages
git add .
git commit -m "Build site for deployment"
git push origin main
```

### Other Hosting
- **Netlify**: Connect repository, auto-deploy on push
- **Vercel**: Connect repository, auto-deploy on push
- **AWS S3**: Upload `public/` folder contents

## 📚 Hugo Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Best Practices](https://gohugo.io/hugo-starter/)
- [Hugo Templates](https://gohugo.io/templates/)
- [Hugo Data Templates](https://gohugo.io/templates/data-templates/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the established patterns and best practices
4. Test your changes thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using Hugo and modern web technologies**
