module.exports = (req, res) => {
    console.log('[get apple-app-site-association]', req);
    res.json({
        "applinks": {
            "apps": [],
            "details": [{
                "appID": "D7NB5S99CU.de.sharea.app",
                "paths": ["*", "/"]
            }]
        }
    });
}