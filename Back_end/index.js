const express = require('express');
const app = express();
const fs = require('fs');
const cors = require("cors");
// ...
app.use(cors());

const PORT = 8001;
 app.use(express.json());

 /* get single todo based on id

 app.get("/todo/:id",(req,res) =>{

    try{
            const todoId = req.params.id;
            const fileData = JSON.parse(fs.readFileSync("./database.json").toString());
            const todoList = fileData.todo;
            let todo_id = todoList.filter((todo) => todo.id == todoId);

           res.status(200).send({
            status :200,
            message:"data fetch successfully",
            data : todo_id,
           })
    }
    catch(err){
 res.status(400).send({

    status:400,
    message:"Failed to fetch todo"
 })
    }
 })  */

 // get - get all todos

  app.get("/todos",(req,res) =>{

    try{
        
        const fileData = JSON.parse(fs.readFileSync("./database.json").toString());
        const todos = fileData.todo;
        res.status(200).send({
                status :200,
                message:"Fetched all data",
                data : todos,
        })

    }
    catch(err){
        res.status(400).send({
            status :400,
            message :"Failed to get todos!"
        })
    }
  })
  // put - update tood
  app.put("/update", (req,res) =>{

    try{
        const todoId = req.body.id;
        const updatesbody = req.body;
        let fileData = JSON.parse(fs.readFileSync("./database.json").toString());
        let todoList = fileData.todo;
        for(let i = 0;i< todoList.length;i++){
            if(todoList[i].id == todoId){
                fileData.todo[i] = updatesbody;
                break;
            }
        }
        fs.writeFileSync("./database.json",JSON.stringify(fileData));
        res.status(200).send({
            status : 200,
            message:"Data updates successfully",
            data : updatesbody,
        })

    }
    catch(err){
        res.status(400).send({
            status :400,
            message :"Failed to update todo!" 
        })
        console.log(err);
    }
  })

  // delet - detet a todo

  app.delete("/delete/:id", (req, res) => {
    try {
      const todoId = parseInt(req.params.id);
      let fileData = JSON.parse(fs.readFileSync("./database.json").toString());
      let todoList = fileData.todo;
      let listoftodoafterdeleting = todoList.filter((todo) => todo.id !== todoId); // Use !== to compare integers
      fileData.todo = listoftodoafterdeleting;
      fs.writeFileSync("./database.json", JSON.stringify(fileData));
  
      res.status(200).send({
        status: 200,
        message: "Todo deleted successfully",
      });
    } catch (err) {
      res.status(400).send({
        status: 400,
        message: "Failed to delete todo!",
      });
    }
  });
 // post - creat todo 
  
 app.post("/post",(req,res)=>{
         try{
            const newTodo = {
               
                text : req.body.text,
                date : new Date(),
                isCompleted : req.body.isCompleted,
             };
    
             let filedata = JSON.parse(fs.readFileSync("./database.json").toString());
               filedata.todo.push(newTodo);
               fs.writeFileSync("./database.json",JSON.stringify(filedata));
               res.status(201).send({
                status:201,
                message:"Todo Successfully created"
               })
               console.log(filedata.todo)
         }
         catch(err){
               res.status(400).send({
                status:400,
                message:"Faied to create a todo"
               })
         }
 });
  
app.listen(PORT,()=>{
    console.log("server is running at port:",PORT)
})