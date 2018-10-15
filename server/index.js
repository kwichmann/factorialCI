const express = require('express');
const faculty = require('./src/faculty');

const app = express();

const port = process.env.port || 5000;

app.get('/:n', (req, res) => {
    const n = parseInt(req.params.n);
    
    let fac;
    if (n || n === 0) {
        fac = faculty(n);
    } else {
        fac = null;
    }
    
    res.send({
        n,
        fac
    });
});

app.listen(port);