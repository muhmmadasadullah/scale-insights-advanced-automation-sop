# Scale Insights Documentation Dashboard

A professional, centralized web dashboard for managing and accessing business documents, SOPs, and automation guidelines. Currently featuring the **Scale Insights SOP V2.0** for Amazon PPC Automation.

## 🌐 Live URLs

- **GitHub Repository:** [https://github.com/muhmmadasadullah/scale-insights-advanced-automation-sop](https://github.com/muhmmadasadullah/scale-insights-advanced-automation-sop)
- **GitHub Pages:** [https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop](https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop) *(auto-deployed)*
- **Direct SOP Access:** [https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop/docs/Scale_Insights_SOP_V2.0.html](https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop/docs/Scale_Insights_SOP_V2.0.html)

## 🚀 Features

### Dashboard Features
- **Centralized Access**: Single point of access for all business documents
- **Search & Filter**: Advanced search functionality with category filters
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional UI**: Modern gradient design with smooth animations
- **Document Management**: Easy document organization and metadata management
- **Live Statistics**: Real-time document counts and updates

### Technical Features
- **GitHub Actions Deployment**: Automated deployment to GitHub Pages
- **Static Site Generation**: Fast loading with optimized assets
- **Security Headers**: Proper security configurations
- **Caching Strategy**: Optimized caching for better performance
- **Cross-browser Compatibility**: Works on all modern browsers

## 📋 Current Documents

### Scale Insights SOP V2.0
- **Title**: Scale Insights Rules SOP V2.0 - Amazon PPC Automation
- **Category**: PPC Management  
- **Tags**: Amazon PPC, Automation, SOP, Scale Insights
- **Description**: Comprehensive guidelines for Amazon PPC automation rules and campaign management
- **Features**:
  - Professional HTML layout with Tailwind CSS
  - Print-friendly formatting
  - Interactive navigation
  - Mobile-responsive design
  - Font Awesome icons
  - LinkedIn integration

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Tailwind CSS framework
- **JavaScript**: Vanilla JS for interactivity and search functionality
- **Font Awesome**: Professional icon library

### Backend (Development)
- **Node.js**: Development server with Express
- **PM2**: Process management for production deployments
- **CORS**: Cross-origin resource sharing support

### Deployment
- **GitHub Pages**: Primary hosting platform
- **GitHub Actions**: Automated CI/CD pipeline
- **Static Site**: Optimized for fast loading

## 🚀 Quick Start

### Accessing the Dashboard
1. Visit: [https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop](https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop)
2. Browse available documents
3. Use search functionality to find specific content
4. Click "View Document" to access full documentation

### Local Development
```bash
# Clone the repository
git clone https://github.com/muhmmadasadullah/scale-insights-advanced-automation-sop.git
cd scale-insights-advanced-automation-sop

# Install dependencies
npm install

# Start development server
npm start

# Build static version
npm run build:static

# Deploy using PM2
npm run pm2:start
```

## 📁 File Structure

```
/
├── index.html                     # Main dashboard interface
├── docs/                          # Document storage
│   └── Scale_Insights_SOP_V2.0.html
├── dist/                          # Built static files
├── .github/                       # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml            # Auto-deployment configuration
├── views/                         # Server-side templates
│   └── dashboard.html
├── server.js                      # Node.js development server
├── ecosystem.config.js            # PM2 configuration
├── wrangler.toml                  # Cloudflare configuration
├── _headers                       # Security headers
└── package.json                   # Dependencies and scripts
```

## 🔧 API Endpoints (Development Server)

- `GET /` - Main dashboard interface
- `GET /api/documents` - Get all documents metadata (JSON)
- `GET /document/:id` - View specific document
- `GET /health` - Health check endpoint

## 📱 Mobile Experience

The dashboard is fully responsive and provides an excellent mobile experience:
- **Touch-friendly Interface**: Large buttons and touch targets
- **Optimized Navigation**: Collapsible menus and sections
- **Fast Loading**: Lightweight design optimized for mobile networks
- **Readable Typography**: Properly scaled fonts and spacing

## 🔒 Security & Performance

### Security Features
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **HTTPS Only**: All resources served over secure connections
- **Content Security**: Proper referrer policy and permissions policy

### Performance Optimizations
- **Caching Strategy**: Proper cache headers for static assets
- **CDN Resources**: Tailwind CSS and Font Awesome served from CDN
- **Optimized Images**: Compressed and properly sized assets
- **Minified Code**: Production-ready optimized code

## 📈 Adding New Documents

To add new documents to the dashboard:

1. **Add Document File**:
   ```bash
   # Place your HTML file in the docs directory
   cp your-document.html docs/
   ```

2. **Update Dashboard** (for server version):
   ```javascript
   // In server.js, add to the documents array:
   {
     id: 'your-document-id',
     title: 'Your Document Title',
     description: 'Brief description',
     file: 'your-document.html',
     category: 'Your Category',
     lastModified: new Date().toISOString(),
     tags: ['tag1', 'tag2', 'tag3']
   }
   ```

3. **Update Static Version**:
   ```html
   <!-- Add new document card to index.html -->
   <div class="doc-card bg-white rounded-xl p-6 shadow-md">
     <!-- Document content structure -->
   </div>
   ```

4. **Deploy Changes**:
   ```bash
   git add .
   git commit -m "Add new document: Your Document Title"
   git push origin main
   ```

## 🌍 Deployment Options

### GitHub Pages (Recommended)
- **Automatic**: Push to main branch triggers auto-deployment
- **URL**: `https://muhmmadasadullah.github.io/scale-insights-advanced-automation-sop`
- **SSL**: Automatic HTTPS with GitHub's certificate
- **CDN**: Global CDN for fast loading

### Cloudflare Pages
- **Manual Setup**: Requires Cloudflare API token
- **Command**: `npm run deploy` (after configuration)
- **Features**: Advanced caching and analytics

### Custom Server
- **PM2**: `npm run pm2:start`
- **Direct**: `npm start`
- **Port**: 3000 (configurable)

## 📊 Analytics & Monitoring

### GitHub Actions Monitoring
- **Build Status**: Check Actions tab for deployment status
- **Error Logs**: View failed deployments and error details
- **Performance**: Monitor build times and optimization

### Health Checks
- **Endpoint**: `/health` (development server)
- **Status**: Returns JSON with health status and timestamp
- **Monitoring**: Can be integrated with uptime monitoring services

## 🤝 Contributing

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/your-feature`
3. **Make Changes**: Update documentation or add features
4. **Test Locally**: Ensure everything works properly
5. **Commit Changes**: `git commit -m "feat: your feature description"`  
6. **Push Branch**: `git push origin feature/your-feature`
7. **Create Pull Request**: Submit PR with description

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions, issues, or feature requests:
- **GitHub Issues**: [Create an issue](https://github.com/muhmmadasadullah/scale-insights-advanced-automation-sop/issues)
- **Repository**: [View source code](https://github.com/muhmmadasadullah/scale-insights-advanced-automation-sop)

---

**Built with ❤️ for Scale Insights PPC Automation**

*Last updated: August 2025*