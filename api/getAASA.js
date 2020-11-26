module.exports = (req, res) => {
    console.log(req.ip, req.headers);
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