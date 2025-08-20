# Central Documentation Dashboard

A unified web dashboard for managing and accessing business documents, SOPs, and other important documentation.

## Features

- **Centralized Access**: Single point of access for all business documents
- **Search & Filter**: Advanced search functionality with category filters
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Document Management**: Easy document organization and metadata management
- **Live Dashboard**: Real-time document statistics and updates

## Current Documents

- **Scale Insights SOP V2.0**: Amazon PPC Automation Rules and Guidelines

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm run pm2:start
   ```

3. **Access the Dashboard**:
   - Open your browser and navigate to the provided URL
   - Browse documents, use search functionality
   - Click "View Document" to access individual documents

## API Endpoints

- `GET /` - Main dashboard interface
- `GET /api/documents` - Get all documents metadata
- `GET /document/:id` - View specific document
- `GET /health` - Health check endpoint

## File Structure

```
/home/user/webapp/
├── docs/                          # Document storage
│   └── Scale_Insights_SOP_V2.0.html
├── views/                         # HTML templates
│   └── dashboard.html
├── public/                        # Static assets
├── logs/                          # Application logs
├── server.js                      # Main application server
├── ecosystem.config.js            # PM2 configuration
└── package.json                   # Node.js dependencies
```

## Adding New Documents

1. Place document files in the `docs/` directory
2. Update the documents array in `server.js` with metadata:
   ```javascript
   {
     id: 'unique-document-id',
     title: 'Document Title',
     description: 'Brief description',
     file: 'filename.html',
     category: 'Category Name',
     lastModified: new Date().toISOString(),
     tags: ['tag1', 'tag2']
   }
   ```
3. Restart the server: `npm run pm2:restart`

## PM2 Management Commands

- Start: `npm run pm2:start`
- Stop: `npm run pm2:stop`
- Restart: `npm run pm2:restart`
- View Logs: `npm run pm2:logs`
- Status: `npx pm2 status`

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Process Manager**: PM2
- **Icons**: Font Awesome

## Security Notes

- No authentication is currently implemented (as requested)
- Documents are served statically
- CORS enabled for cross-origin requests
- Health check endpoint available for monitoring

## Future Enhancements

- Document upload functionality
- User authentication and authorization
- Document version control
- Advanced analytics and reporting
- Integration with cloud storage services