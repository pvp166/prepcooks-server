const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const commentRoutes = require('./routes/commentRotues');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MONGOOSEDB } = require('./config.js');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGOOSEDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(console.log("connected to database")).catch((err)=>console.log(err)) ;

app.use(cors())
app.use(bodyParser.json())

userRoutes(app);
companyRoutes(app);
commentRoutes(app);

const http = require('http');


// const privateKey  = fs.readFileSync('./sslcert/key.pem', 'utf8');
// const certificate = fs.readFileSync('/home/ubuntu/meal_prep_marketplace/backend/sslcert/cert.pem', 'utf8');

// const credentials = {key: privateKey, cert: certificate, ca: chain};

// your express configuration here

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT);
// httpsServer.listen(3000);
app.get('/',(req, res) =>{
    res.send("hello world");
})

console.log("Server is running...")
