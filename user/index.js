const { users, userCreator } = require("./model");

const createUser = (data) => {
  const user = userCreator(data);
  return user;
};

const listUsers = (id) => {
  const res = id ? users.find(({ id: _id }) => id === _id) : users;

  if (!res) throw new Error("Couldn't find the user");

  return res;
};

module.exports = {
  listUsers,
  createUser,
};