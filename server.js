const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const characters = [
    {
        routeName: 'yoda',
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: 'obiwankenobi',
        name: "Obi Wan Kenobi",
        role: "Jedi",
        age: 50,
        forcePoints: 800
    },
    {
        routeName: 'darthmaul',
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    }
];

app.get("/", (req, res) => {
    // res.send("Welcome to the Star Wars Directory");
    res.sendFile(path.join(__dirname, "view.html"));

});

app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/characters/:character", (req, res) => {
    const character = req.params.character;
    newChar.routeName = req.body.name.split(" ").join("").toLowerCase();
    console.log(character);

    let found;

    characters.forEach(i => {
        if(character === i.routeName) {
            return res.json(i);
            found = i;
        }
    });

    res.json(found || { success: false });
});

app.post("/api/characters", (req, res) => {
    const newCharacter = req.body
    console.log(newCharacter);
    characters.push(newCharacter);
    res.json(newCharacter);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

