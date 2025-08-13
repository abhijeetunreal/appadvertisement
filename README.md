# App Advertisement Site

A Hugo-based website showcasing multiple apps with a simple, self-contained structure.

## 🚀 **How to Add New Apps**

### **Super Simple - Just One File!**

To add a new app, you only need to create **one markdown file**:

1. **Create**: `content/apps/{appname}.md`
2. **Add Content**: Put all your app content in the front matter
3. **Save**: That's it! Your app is live

### **Example Structure**

```yaml
---
title: "MyApp - Amazing App"
description: "App description"
date: 2025-01-27
draft: false
slug: "myapp"
type: "app"

# App metadata
app:
  name: "MyApp"
  initials: "MA"
  tagline: "App tagline"
  description: "App description"

# Navigation
nav:
  links:
    - name: "Features"
      url: "#features"
    - name: "How It Works"
      url: "#how-it-works"
    - name: "Testimonials"
      url: "#testimonials"
    - name: "FAQ"
      url: "#faq"
  button:
    text: "Download"
    url: "#download"

# Hero section
hero:
  title: "App Title"
  highlighted_word: "Highlighted"
  subtitle: "App subtitle"
  download_buttons:
    - url: "#"
      bg_class: "bg-white"
      text_class: "text-primary"
      hover_bg_class: "hover:bg-gray-100"
      icon: "fab fa-apple"
      line1: "Download on the"
      line2: "App Store"
    - url: "#"
      bg_class: "bg-dark"
      text_class: "text-white"
      hover_bg_class: "hover:bg-gray-800"
      icon: "fab fa-google-play"
      line1: "GET IT ON"
      line2: "Google Play"
  mockup:
    src: "path/to/mockup.png"
    alt: "App mockup"

# Features
features:
  title: "Features Title"
  subtitle: "Features subtitle"
  cards:
    - icon: "fas fa-icon"
      icon_bg_class: "bg-color-100"
      icon_text_class: "text-color-500"
      title: "Feature Title"
      description: "Feature description"

# How it works
how_it_works:
  title: "How It Works Title"
  subtitle: "How It Works subtitle"
  steps:
    - title: "Step Title"
      description: "Step description"

# Testimonials
testimonials:
  title: "Testimonials Title"
  subtitle: "Testimonials subtitle"
  cards:
    - avatar:
        src: "path/to/avatar.png"
        alt: "User Name"
      name: "User Name"
      role: "User Role"
      quote: "User testimonial"

# FAQ
faq:
  title: "FAQ Title"
  subtitle: "FAQ subtitle"
  items:
    - question: "Question?"
      answer: "Answer."

# CTA
cta:
  title: "CTA Title"
  subtitle: "CTA subtitle"

# Footer
footer:
  slogan: "Footer slogan"
  copyright: "Copyright text"
  links:
    - title: "Section Title"
      items:
        - name: "Link Name"
          url: "#"
  socials:
    - icon: "fab fa-social"
      url: "#"
---

Optional content below the front matter.
```

## 📁 **File Structure**

```
appadvertisement/
├── content/
│   └── apps/
│       ├── taskflow.md          # TaskFlow app
│       ├── visualnoteai.md      # VisualNoteAI app
│       └── example.md           # Example app
├── layouts/
│   └── apps/
│       └── single.html          # App page template
├── layouts/partials/
│   ├── header.html              # Header partial
│   ├── hero.html                # Hero section partial
│   ├── app-sections.html        # App sections partial
│   └── footer.html              # Footer partial
└── docs/
    └── MODULAR_STRUCTURE.md     # Complete documentation
```

## ✨ **Features**

- **One File Per App**: Each app is completely self-contained
- **No Dependencies**: No external YAML files or complex configuration
- **Easy to Add**: Copy an existing app file and modify the content
- **Consistent Styling**: All apps use the same beautiful design
- **Responsive Design**: Works perfectly on all devices
- **Fast Loading**: Optimized for performance

## 🛠 **Development**

### **Prerequisites**
- Hugo (latest version)
- Basic knowledge of Markdown and YAML

### **Running Locally**
```bash
# Clone the repository
git clone <repository-url>
cd appadvertisement

# Start Hugo server
hugo server -D

# Open http://localhost:1313
```

### **Building for Production**
```bash
hugo --minify
```

## 📚 **Documentation**

For complete documentation, see:
- [Simple App Structure Documentation](docs/MODULAR_STRUCTURE.md)

## 🎯 **Benefits**

1. **Simplicity**: One file per app, no complex setup
2. **Independence**: Each app is completely self-contained
3. **Easy Maintenance**: No shared dependencies to break
4. **Fast Development**: Add new apps in minutes
5. **Consistent UX**: All apps look and feel the same

## 🤝 **Contributing**

1. Copy an existing app file
2. Modify the content for your new app
3. Test locally with Hugo
4. Submit your changes

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

**Adding new apps has never been easier! Just one file and you're done.** 🎉
