let express = require("express");
let users = require("./state").users;
const app = express();


//hey express, any time you recieve a request message
//use this function to decide what to respond with
app.get("/users",function(request,response,next){
    return response.send(users);
});

app.get("/users/1",function(request,response,next){
    return response.send(users[0]);
});

app.post("/users/1",function(request,response,next){
    let newData = {id: 6, name: "Rui Liu"};
    users.push(newData);
    return response.send(users);
});

app.put("/users/1",function(request,response,next){
    users[0].name ="something else";
    return response.send(users);
});
app.delete("/users",function(request,response,next){
    users=[];
    return response.send("deleted");
});



app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
