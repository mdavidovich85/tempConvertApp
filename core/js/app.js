var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Temperature Converter CSC 410',
    // App id
    id: 'com.mikedavidovich.tempconvert',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/about/',
            url: 'about.html',
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');