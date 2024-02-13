import exppress from "express";
import bodyParser from "body-parser";
import ServerlessHttp from "serverless-http";
const app=exppress();

const port=9000;
const date=[
    {name:'User1', surname:'Fazliddin'},
    {name:'User2', surname:'Fayz'},

];
app.use(bodyParser.json());
app.get('/getAllUser',(req,res)=>{
    res.json(date);
});
app.post('/addNewUser',(req,res)=>{
    date.push(res.body);
    res.send('Hammasi qushildi')
});

app.listen(port,()=>{
    console.log('App is running on port',port);
});
