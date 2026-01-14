const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.static('.'));
app.use(express.json());

app.get('/api/users', (req, res) => {
  console.log('🔥 /api/users hit');   // ADD THIS
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));
  res.json(users);
});


app.get('/api/todos',(req,res)=>{
    res.json([
        {id: 1,text: "learn Express", done: false},
        {id: 2, text: "Build todo API",done: false}
    ]);
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running: http://localhost:${PORT}`);
    console.log(`APIs: /api/users, /api/todos`);
});

