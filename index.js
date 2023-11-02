//.gitignore is so you don't push all of some files to git (ie node.js in this case)

//how you import
const express = require('express'); 

//here express is the initiated funciton
const app = express();
//don't want server and client running in the same port (use 3000 for next.js)
const port = 4000;

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/about", aboutRoute);

//if go to root directory of site, this callback function will happen
//req = data in; res = data out
//app.get('/', (req, res)=>{
 //   res.send("hello world");
//})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})

