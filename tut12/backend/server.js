const express = require('express');
const app = express();

// 英越辞書の定義
const dict = {
    pretty: "xinh đẹp",
    car: "xe hơi",
    study: "học tập",
    life: "cuộc sống",
    enormous: "to lớn",
    computer: "máy tính"
};

// 単語と意味を別々の配列に分割
const words = Object.keys(dict);
const meanings = Object.values(dict);

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/wordcount", (req, res) => {
    res.json({ wordcount: words.length });
});


app.get("/getword/:index", (req, res) => {
    let indexValue = req.params.index;
    res.json({
        index: indexValue,
        word: words[indexValue],
        def: meanings[indexValue]
    });
});

// server（ポート8000）
app.listen(8000, () => {
    console.log("Server started on port http://localhost/8000");
});