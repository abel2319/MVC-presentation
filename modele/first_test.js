const { response } = require('express');
const express = require('express');
const app = express();



const port = 3000;

app.get('/', (req, response) => {
    response.send("Mavidia");
});
app.listen(port, function(){
    console.log('server start on port '+3000);
}); 