# AnyGym Landing Page

A modern, responsive landing page for the AnyGym fitness app launch. This single-page website features a beautiful design with smooth animations and is fully responsive across all devices.

## Features

- 🎨 Modern, clean design with gradient backgrounds
- 📱 Fully responsive layout for all devices
- ✨ Smooth animations and hover effects
- 🖼️ Dedicated space for app screenshots
- 📱 App Store and Google Play download buttons
- 🎯 Clear call-to-action sections
- 🔗 Smooth scrolling navigation

## File Structure

```
anygym/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactions
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local server** (recommended): Use a local server for the best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Adding Your App Screenshot

Replace the placeholder in the hero section with your actual app screenshot:

1. **Option 1**: Replace the placeholder div with an image
   ```html
   <div class="app-screenshot">
       <img src="path/to/your/screenshot.png" alt="AnyGym App Screenshot">
   </div>
   ```

2. **Option 2**: Add CSS for the image
   ```css
   .app-screenshot img {
       width: 100%;
       height: 100%;
       object-fit: cover;
       border-radius: 25px;
   }
   ```

### Updating Content

- **App Name**: Update "AnyGym" throughout the HTML
- **Description**: Modify the hero subtitle and feature descriptions
- **Contact Information**: Update email and website in the contact section
- **Download Links**: Replace placeholder links with actual App Store/Google Play URLs

### Color Scheme

The current color scheme uses:
- Primary: Blue gradient (#667eea to #764ba2)
- Accent: Gold to coral gradient (#ffd700 to #ff6b6b)
- Dark: Slate colors (#1e293b, #334155)

You can customize these in the CSS file by updating the gradient values.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance with:
- Minimal external dependencies (only Font Awesome and Google Fonts)
- Optimized CSS with efficient selectors
- Smooth animations using CSS transforms
- Responsive images and layouts

## Deployment

You can deploy this landing page to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket
- **Any web server**: Upload files to your hosting provider

## License

This project is open source and available under the MIT License.

---

**AnyGym** - Transform your fitness journey with the ultimate personal fitness companion. 