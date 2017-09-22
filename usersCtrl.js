const users = require('./userData')

const getUsers = (req, res, next)=>{
//   return res.json(users.email)
    
    for(var i = 0 ; i<users.length; i++){
        console.log(users[i])
        if (req.query.email=== users[i].email){
            
            returnzZres.json(users[i])
        }else{
            return res.status(200).json(users)
        }
    }
}

const getId = (req, res, next) =>{
    console.log(req.params.id)
    if(req.params.id){
    res.status(200).json(users.filter(user=>user.id === req.params.id))
    }else{ res.status(404) }
}
//     for(var i = 0 ; i<users.length; i++){
//         console.log(req.params.id)
//         console.log(users[i].id)
//     if(req.params.id===users[i].id){
//       return  res.json(users[i])
//     }else{return res.status(404).json}
// }}
const getAdmin = (req, res, next) =>{
   
   res.status(200).json(users.filter(admin => admin.type === "admin"))
   
    // for(var i = 0; i<users.length; i++){
    //     console.log(users[i])
    //     console.log(req.users[i].type)
    //     if(req.users[i].type === "admin"){
    //         admins.push(users[i])
            
    //     }
    // } return res.status(200).json(admins)
}
const getNotAdmin = (req, res, next) =>{
    res.status(200).json(users.filter(notA => notA.type != "admin"))
    
}

const getType = (req, res, next) =>{
    console.log(req.params.type)
    if(req.params.type){
        res.status(200).json(users.filter(user=>user.type === req.params.type))
    }
}
const updateUser = (req, res, next)=>{
    
    
    users.filter(user=>user.id === req.params.id)
        res.json(users.push(req.body))
}
const addUser = (req, res, next)=>{
    console.log(req.body)
    let newuser= users.push(req.body)
    res.json(newuser)
}

const deleteUser = (req, res, next)=>{
    console.log(req)
}

module.exports ={
    getUsers,
    getId,
    getAdmin,
    getNotAdmin,
    getType,
    updateUser,
    addUser,
    deleteUser
}