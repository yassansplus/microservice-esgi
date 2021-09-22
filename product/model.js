const {uuid} = require('uuidv4');
const products = [];
const productCreator = data =>{
const {name, quantity, price, user_id} = data;
const {listUsers} = require('../user/index');
if(!name || !quantity || !price || !user_id){
    throw new Error('No product error the name or quantity or price or user_id');
}
listUsers(user_id);
const product = {
    id: uuid(),
    ...data
}
Object.freeze(product);
products.push(product);

return product
}
module.exports ={
    productCreator,
    products
}