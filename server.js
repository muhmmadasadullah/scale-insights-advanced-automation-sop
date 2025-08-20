const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/docs', express.static('docs'));

// Document metadata
const documents = [
    {
        id: 'scale-insights-sop-v2',
        title: 'Scale Insights SOP V2.0',
        description: 'Amazon PPC Automation Rules and Guidelines',
        file: 'Scale_Insights_SOP_V2.0.html',
        category: 'PPC Management',
        lastModified: new Date().toISOString(),
        tags: ['Amazon PPC', 'Automation', 'SOP', 'Scale Insights']
    }
];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/api/documents', (req, res) => {
    res.json(documents);
});

app.get('/document/:id', (req, res) => {
    const doc = documents.find(d => d.id === req.params.id);
    if (!doc) {
        return res.status(404).send('Document not found');
    }
    
    const filePath = path.join(__dirname, 'docs', doc.file);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Document file not found');
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Central Dashboard Server running on port ${PORT}`);
    console.log(`Access the dashboard at http://localhost:${PORT}`);
});

module.exports = app;