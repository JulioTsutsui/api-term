const app = require('./config/server');
const db = require('./config/firestore');
const tempRef = db.collection("temp").orderBy("data","desc").orderBy("hora","desc").limit(4);
app.listen("3000", ()=> {
    console.log('Servidor está ON'); 
});

app.get("/api",(req,res)=>{
    var arr = [];
    tempRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var temp = new Object();
            temp["_id"] = doc.id;
            temp["data"] = doc.data().data;
            temp["temperatura"] = doc.data().temperatura;
            temp["hora"] = doc.data().hora;
            arr.push(temp);

        });
        res.json(arr);
    });
});

app.post("/api",(req,res)=>{
    var dados = req.body;

    db.collection("temp").add(dados)
    .then(function (docRef) {
        console.log("Documento criado com o ID: ", docRef.id);
        res.json({ok:1});
    })
    .catch(function (error) {
        console.error("Erro ao adicionar: ", error);
    });
});