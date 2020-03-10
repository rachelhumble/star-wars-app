const path = require("path");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // res.send("Welcome to the Star Wars Directory");
        res.sendFile(path.join(__dirname, "../public/view.html"));
    
    });
    
    app.get("/add", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });
};

