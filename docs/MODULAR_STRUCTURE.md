# Simple App Structure Documentation

## Overview

This Hugo site uses a simple, self-contained approach for app pages. Each app is completely defined in a single markdown file with all content included in the front matter. This makes adding new apps incredibly easy - just create one file and you're done!

## Structure

### Single Markdown File Approach

Each app is defined in one file: `content/apps/{appname}.md`

The file contains:
- **Basic Front Matter**: Title, description, date, slug, type
- **App Metadata**: Name, initials, tagline, description
- **Navigation**: Navigation links and download button
- **Hero Section**: Hero content, download buttons, and mockup
- **Features**: Feature cards with icons and descriptions
- **How It Works**: Step-by-step process
- **Testimonials**: User testimonials with avatars
- **FAQ**: Frequently asked questions
- **CTA**: Call-to-action section
- **Footer**: Footer content, links, and social media

## How It Works

### Self-Contained Content

1. **Single File**: Each app is completely self-contained in one markdown file
2. **Front Matter**: All content is defined in YAML front matter
3. **Direct Access**: Templates access the content directly from the markdown file
4. **No Dependencies**: No external YAML files or complex merging

### Template Rendering

The system automatically renders each app using the content from its markdown file:

```html
{{ $app := . }}
{{ $app.Params.app.name }}           <!-- App name -->
{{ $app.Params.hero.title }}         <!-- Hero title -->
{{ $app.Params.features.cards }}     <!-- Feature cards -->
```

## Adding New Apps

### Step 1: Create Markdown File

Create `content/apps/{appname}.md` with this structure:

```yaml
---
title: "App Name - Tagline"
description: "App description"
date: 2025-01-27
draft: false
slug: "appname"
type: "app"

# App-specific metadata
app:
  name: "AppName"
  initials: "AN"
  tagline: "App tagline"
  description: "App description"

# Navigation structure
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

# Features section
features:
  title: "Features Title"
  subtitle: "Features subtitle"
  cards:
    - icon: "fas fa-icon"
      icon_bg_class: "bg-color-100"
      icon_text_class: "text-color-500"
      title: "Feature Title"
      description: "Feature description"

# How it works section
how_it_works:
  title: "How It Works Title"
  subtitle: "How It Works subtitle"
  steps:
    - title: "Step Title"
      description: "Step description"

# Testimonials section
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

# FAQ section
faq:
  title: "FAQ Title"
  subtitle: "FAQ subtitle"
  items:
    - question: "Question?"
      answer: "Answer."

# CTA section
cta:
  title: "CTA Title"
  subtitle: "CTA subtitle"

# Footer section
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

### Step 2: That's It!

The system automatically:
- Creates the app page
- Renders all sections
- Applies consistent styling
- Makes it accessible via `/apps/{appname}/`

## Benefits

### 1. **Simplicity**
- ✅ One file per app
- ✅ No external dependencies
- ✅ No complex merging or configuration
- ✅ Easy to understand and maintain

### 2. **Independence**
- ✅ Each app is completely self-contained
- ✅ No shared templates or common data
- ✅ Apps can have completely different content
- ✅ Easy to customize individual apps

### 3. **Content Management**
- ✅ Content creators work with one file
- ✅ All app content in one place
- ✅ Easy to copy and modify existing apps
- ✅ No need to understand complex data structures

### 4. **Developer Experience**
- ✅ Simple file structure
- ✅ Easy to debug and troubleshoot
- ✅ No hidden dependencies
- ✅ Clear, predictable behavior

## Best Practices

### 1. **Keep It Simple**
- Use clear, descriptive section names
- Maintain consistent structure across apps
- Don't overcomplicate the front matter

### 2. **Content Organization**
- Group related content logically
- Use consistent naming conventions
- Keep descriptions concise and clear

### 3. **Asset Management**
- Use relative paths for images
- Optimize images for web
- Provide fallback images when possible

### 4. **Testing**
- Test each section renders correctly
- Verify all links work properly
- Check mobile responsiveness

## Example: Adding a New App

### Create the File

1. Copy an existing app file
2. Change the slug and basic information
3. Update all content sections
4. Save and test

### Result

Your new app is immediately available at `/apps/{appname}/` with all sections rendered and styled consistently.

## Troubleshooting

### Common Issues

1. **Page Not Found**: Check that the slug matches the filename
2. **Missing Sections**: Verify all required front matter is present
3. **Styling Issues**: Check that CSS classes are correct
4. **Images Not Loading**: Verify image paths are correct

### Debug Tips

- Use `{{ printf "%#v" .Params }}` to inspect the front matter
- Check Hugo console for build errors
- Verify YAML syntax and indentation
- Test with a simple app first

## Future Enhancements

- **Template Variations**: Different layouts for different app types
- **Content Validation**: Validate front matter structure
- **Auto-Generation**: Tools to generate app templates
- **Content Snippets**: Reusable content components

## Summary

This simple approach makes adding new apps incredibly easy:

1. **Create one markdown file**
2. **Add your content in the front matter**
3. **Save and done!**

No external files, no complex configuration, no dependencies. Just pure simplicity and ease of use.
