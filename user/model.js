const {uuid} = require('uuidv4');
const users = [];
const userCreator = data =>{
const {name, email, password} = data;

if(!name){
    throw new Error('No name provided');
}
if(!email){
    throw new Error('No email provided');
}
if(!password){
    throw new Error('No password provided');
}
const user = {
    id: uuid(),
    ...data
}
Object.freeze(user);
users.push(user);

return user
}
module.exports ={
    userCreator,
    users
}