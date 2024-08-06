import express from 'express'
import 'dotenv/config'

const app = express();


const jokes =[
    {
      "id": 1,
      "joke": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 2,
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 3,
      "joke": "What do you get when you cross a snowman and a vampire? Frostbite!"
    },
    {
      "id": 4,
      "joke": "Why was the math book sad? Because it had too many problems."
    },
    {
      "id": 5,
      "joke": "What do you call fake spaghetti? An impasta!"
    }
  ];
  
  
const port = process.env.PORT || 3000 ;

app.listen(port,()=>{
    console.log(`your server starts at http://localhost:${port}`);
    
})

  app.get("/jokes",(req,res)=>{
    res.send(jokes);
  })



