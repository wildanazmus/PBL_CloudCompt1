const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Halaman utama
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
            <h1>Hello, World!</h1>
        </body>
        </html>
    `);
});

// Halaman form
app.get('/form', (req, res) => {
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
            <h1>Form Input</h1>
            <form action="/submit" method="post">
                <label>Nama:</label>
                <input type="text" name="nama" required><br>
                <label>Email:</label>
                <input type="email" name="email" required><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

// Menangani data dari form
app.post('/submit', (req, res) => {
    const { nama, email } = req.body;
    res.send(`
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
            <h1>Data Diterima</h1>
            <p>Nama: ${nama}</p>
            <p>Email: ${email}</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});