const express = require('express');
const path = require('path');
const app = express();
const build_path = path.join(__dirname, 'react-app/build');

app.use(express.static(build_path));

app.get('/*', function(req, res) {
    res.sendFile(build_path);
});

app.listen(80, function(){
    console.log('Example app listening on port 3000!');
});
