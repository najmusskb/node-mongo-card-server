// create server --------------------------------------------------

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('hello from node mongodb curd server')
})

app.listen(port, () => {
    console.log(`listening port ${port}`);
})
// ---------------------------------------------------------------------