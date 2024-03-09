const app = require('./app');
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World");
});
    
app.listen(port,()=>{
    console.log('Server listning to Port https://localhost:${port}');
})