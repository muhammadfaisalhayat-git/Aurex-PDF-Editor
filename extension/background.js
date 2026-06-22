// Sajeda PDF Chrome Extension - Background Service Worker

const SAJEDA_PDF_URL = 'https://sajedapdf.com/en';

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Create main context menu item
    chrome.contextMenus.create({
        id: 'sajeda-pdf-open',
        title: 'Open with Sajeda PDF',
        contexts: ['link', 'page']
    });

    // Create submenu for specific tools
    chrome.contextMenus.create({
        id: 'sajeda-pdf-merge',
        parentId: 'sajeda-pdf-open',
        title: 'Merge PDFs',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'sajeda-pdf-compress',
        parentId: 'sajeda-pdf-open',
        title: 'Compress PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'sajeda-pdf-convert',
        parentId: 'sajeda-pdf-open',
        title: 'Convert to PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'sajeda-pdf-all-tools',
        parentId: 'sajeda-pdf-open',
        title: 'All Tools →',
        contexts: ['link', 'page']
    });

    console.log('Sajeda PDF context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = SAJEDA_PDF_URL;

    switch (info.menuItemId) {
        case 'sajeda-pdf-merge':
            url = `${SAJEDA_PDF_URL}/tools/merge-pdf`;
            break;
        case 'sajeda-pdf-compress':
            url = `${SAJEDA_PDF_URL}/tools/compress-pdf`;
            break;
        case 'sajeda-pdf-convert':
            url = `${SAJEDA_PDF_URL}/tools/jpg-to-pdf`;
            break;
        case 'sajeda-pdf-all-tools':
        case 'sajeda-pdf-open':
            url = SAJEDA_PDF_URL;
            break;
        default:
            url = SAJEDA_PDF_URL;
    }

    // Open Sajeda PDF in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('Sajeda PDF background service worker started');
