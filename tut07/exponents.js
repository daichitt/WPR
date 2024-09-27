//  "type": "module", in package.json allowed to use import instead of require
import express from 'express';
import fs from 'fs/promises';
import multer from 'multer';

const app = express()
app.use(express.json());

const PORT = 8000;
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/math/power/:base/:exponent', function (req, res) {
    
    const base = parseFloat(req.params.base);
    const exponent = parseFloat(req.params.exponent);

    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({ error: 'Invalid base or exponent' });
    }
    const result = Math.pow(base, exponent);

    let response = {'result': result};
    
    // Check for optional query parameter 'root'
    if (req.query.root) {
        const root = Math.sqrt(base);
        console.log("root is ", root);
        response.root = root;
    }

    console.log("response is ", response);
    res.json(response);

  })



app.listen(PORT, () => {
    console.log(`App is listening to port: http://localhost:${PORT}`);
});