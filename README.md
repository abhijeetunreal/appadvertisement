# App Advertisement Site

A Hugo-based website showcasing multiple apps. App pages are authored in Markdown; the homepage cards and some defaults are driven by data files.

## 🚀 **How to Add New Apps**

### Add an app page and list it on the homepage

1. Create: `content/apps/{slug}.md` with `type: "app"` and required front matter
2. List on homepage: add an entry under `apps:` in `data/apps_overview.yaml` matching the `slug`

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
    fallback_src: "https://placehold.co/320x640/cccccc/ffffff?text=Image+Not+Found"

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
│       ├── taskflow.md
│       ├── visualnoteai.md
│       ├── money.md
│       ├── monkey.md
│       └── example.md
├── data/
│   ├── apps_overview.yaml        # Homepage apps grid + mockups
│   ├── config.yaml               # Site-wide defaults (nav, buttons, section titles, common items)
│   └── site.yaml                 # Footer links/socials
├── layouts/
│   ├── index.html                # Homepage (reads data/apps_overview.yaml)
│   ├── _default/
│   │   └── baseof.html           # Base HTML, Tailwind CDN, assets pipeline
│   ├── app/
│   │   └── single.html           # App page template (used by `type: app`)
│   └── partials/
│       ├── header.html
│       ├── hero.html
│       ├── app-sections.html     # Combines features/how/testimonials/faq/cta
│       ├── features.html
│       ├── how-it-works.html
│       ├── testimonials.html
│       ├── faq.html
│       └── cta.html
├── assets/
│   ├── css/main.css              # Processed via Hugo resources
│   └── js/main.js                # Processed via Hugo resources
└── docs/
    └── MODULAR_STRUCTURE.md
```

## 🧠 How the templates resolve data

- Header (`layouts/partials/header.html`)
  - Home: suite logo and CTA
  - App pages: logo/name from `params.logo` → `params.app` → `data/apps_overview.yaml`; nav from `params.nav` or `data/config.yaml`

- Hero (`layouts/partials/hero.html`)
  - Home: featured mockup from `data/apps_overview.yaml` (key `taskflow`)
  - App pages: text from `params.hero`; download buttons from `params.hero.download_buttons` or `data/config.yaml`; mockup from `params.hero.mockup` → `params.app.mockup` → `data/apps_overview.yaml`

- Sections (`layouts/partials/app-sections.html`)
  - Falls back to titles/items in `data/config.yaml` when not provided

- Footer (`data/site.yaml`)
  - Links, socials, copyright

## ✨ **Features**

- Central homepage list from `data/apps_overview.yaml`
- Self-contained app pages in `content/apps/*.md`
- Sensible defaults via `data/config.yaml`
- Tailwind via CDN + Hugo asset pipeline
- Responsive and fast

## 🛠 **Development**

### **Prerequisites**
- Hugo (extended, 0.100.0+)
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

## 🔗 Base URL

Configured in `hugo.toml` as `baseURL`.

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

1. Add or update `content/apps/{slug}.md`
2. Add/update `data/apps_overview.yaml` for homepage listing
3. Test locally with Hugo
4. Submit your changes

## 📄 **License**

This project is open source and available under the MIT License.

---

**Adding new apps has never been easier! Just one file and you're done** 🎉
