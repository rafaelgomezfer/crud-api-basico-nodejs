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

app.listen(PORT, ()=>{
    console.log(`server runnning on port ${PORT}`);
})