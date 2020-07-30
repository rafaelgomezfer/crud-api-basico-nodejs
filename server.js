const express = require('express');
const app = express();

const PORT= 5000;

app.use(express.json());

const usersDB = [
    {id:"1", name:"Rafa"},
    {id:"2", name:"Cesia"},
    {id:"3", name:"Lanoly"},
]

app.get('/api/users', (req, res)=>{    
    res.status(200).send({
        success: 'true',
        message: 'Data fetched successfully',
        users: usersDB
    })
});

app.post('/api/users', (req, res)=>{
    usersDB.push(req.body);
    
    res.status(201).send({
        success: 'true',
        message:'Data added successfully'
    })
});

app.put('/api/users/:id', (req, res)=>{
    const ID = req.params.id;
    let userIndex= usersDB.findIndex(user=>user.id===ID);
    let data = req.body;
    usersDB[userIndex].id=data.id;
    usersDB[userIndex].name=data.name;
    
    res.status(201).send({
        success: 'true',
        message:'user updated successfully'
    })
});

app.delete('/api/users/:id', (req, res)=>{
    const ID = req.params.id;
    let userIndex= usersDB.findIndex(user=>user.id===ID);
    usersDB.splice(userIndex, 1);
    
    res.status(201).send({
        success: 'true',
        message:'user deleted successfully'
    })
})

app.listen(PORT, ()=>{
    console.log(`server runnning on port ${PORT}`);
})