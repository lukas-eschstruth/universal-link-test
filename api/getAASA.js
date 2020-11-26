module.exports = (req, res) => {
    console.log(req.ip, req.headers);
    res.json({
        "applinks": {
            "apps": [],
            "details": [{
                "appID": "D7NB5S99CU.de.sharea.app",
                "paths": ["*", "/"]
            },
            {
                "appID": "D7NB5S99CU.org.nativescript.nativescript7",
                "paths": ["*", "/"]
            }]
        }
    });
}