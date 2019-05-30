const app = require('./config/server');
const request = require("request");
const moment = require("moment");

app.listen("3000", ()=> {
    console.log('Servidor está ON');
    
});

app.get("/api", (req,res) =>{
    request("http://192.168.4.1:80",function (error, resp, body){
        res.json(body);
    });
});