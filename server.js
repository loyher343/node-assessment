const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./usersCtrl')


const kyu = "```人◕‿‿◕人```"
const port = 3000;
// app declaration
const app = express();

// middleware
app.use(bodyParser.json());

app.get('/api/users', userCtrl.getUsers);

app.get('/api/users/:id', userCtrl.getId);

app.get('/api/admins/', userCtrl.getAdmin)

app.get('/api/nonadmins/', userCtrl.getNotAdmin);

app.get('/api/user_type/', userCtrl.getType);

app.put('/api/users/', userCtrl.updateUser);

app.post('/api/users/', userCtrl.addUser)

app.delete('/api/users/', userCtrl.deleteUser)


// listen function
app.listen(port, () => {
    console.log(`Listening on Port: ${port}  ${kyu}`);
});