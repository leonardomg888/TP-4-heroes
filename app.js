const express = require('express');
const app = express();
const puerto = 3030;




app.listen(puerto, ()=> console.log('server running in http://localhost:' + puerto))