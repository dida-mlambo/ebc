# Evangel Bible College Website

A modern, responsive website for Evangel Bible College - a Pentecostal Bible College under the Assemblies of God General Council, located in Chitungwiza, Zimbabwe.

## Features

### Navigation Menu
- **Home** - Main landing page with hero section
- **About Us** - Information about the college, mission, and vision
- **Calendar** - Academic calendar and important dates
- **Courses** - Available programs and courses
- **Donate** - Donation form and support options

### Key Sections

1. **Hero Section** - Welcome message with call-to-action buttons
2. **Mission & Vision** - College's purpose and goals
3. **About Us** - Detailed information about the institution
4. **Courses** - Four main programs:
   - Certificate in Biblical Studies (1 year)
   - Diploma in Theology (2 years)
   - Ministry Leadership (1.5 years)
   - Missions & Evangelism (2 years)
5. **Academic Calendar** - Important dates and events
6. **Donation Section** - Support the college's mission
7. **Contact Information** - Location and contact details

### Design Features
- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Modern UI** - Clean, professional design with Pentecostal theme colors
- **Interactive Elements** - Smooth scrolling, animations, and hover effects
- **Accessibility** - Keyboard navigation and screen reader friendly

## File Structure

```
evangel_bible_college/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── logo.svg            # College logo (placeholder - replace with actual logo)
└── README.md           # This documentation
```

## Customization

### Replace the Logo
1. Replace `logo.svg` with your actual college logo
2. Supported formats: SVG, PNG, JPG
3. Recommended size: 200x200 pixels minimum

### Update Contact Information
Edit the contact details in `index.html`:
- Phone number (currently placeholder: +263 XX XXX XXXX)
- Email address (currently: info@evangelbc.ac.zw)
- Physical address details

### Modify Colors
The website uses a color scheme based on:
- **Primary Blue**: #1a365d (dark blue)
- **Accent Red**: #c53030 (red for Assemblies of God theme)
- **Gold**: #ffd700 (accent color)
- **Background**: #f7fafc (light gray)

To change colors, edit the CSS variables in `styles.css`.

### Add Content
- **News & Updates**: Add current news items in the calendar section
- **Faculty Information**: Add staff and faculty details
- **Student Testimonials**: Include student success stories
- **Photo Gallery**: Add campus and student photos

## Technical Details

### Dependencies
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: Font Awesome 6.0.0
- **No JavaScript frameworks** - Pure vanilla JavaScript for better performance

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- **Optimized CSS** - Efficient selectors and minimal redundancy
- **Smooth Animations** - CSS transitions for better user experience
- **Mobile-First Design** - Optimized for mobile devices
- **Fast Loading** - Minimal external dependencies

## Deployment

### Local Development
1. Open `index.html` in a web browser
2. For best results, serve from a local web server

### Web Hosting
1. Upload all files to your web hosting provider
2. Ensure the domain points to `index.html`
3. Configure SSL certificate for HTTPS

### Recommended Hosting
- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Easy deployment with form handling
- **Vercel** - Fast global CDN
- **Traditional Web Hosting** - Any provider supporting HTML/CSS/JS

## Forms Setup

### Donation Form
Currently set up with client-side validation. To process actual donations:
1. Integrate with payment processors (PayPal, Stripe, etc.)
2. Add server-side processing
3. Configure email notifications

### Contact Form
Currently shows success messages. To receive actual messages:
1. Add server-side form processing
2. Configure email forwarding
3. Set up spam protection

## Maintenance

### Regular Updates
- Update academic calendar dates
- Refresh course information
- Add new news items
- Update contact information

### Content Management
- All text content is in `index.html`
- Styling adjustments in `styles.css`
- Interactive features in `script.js`

## Support

For technical support or customization requests, contact your web developer or the college's IT department.

---

**Created for Evangel Bible College**  
*Assemblies of God General Council*  
*Chitungwiza, Zimbabwe*
