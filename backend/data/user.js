import bcrypt from "bcryptjs";
const user = [
  {
    name: "vaibhav",
    email: "vaibhav@test.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "john",
    email: "john@test.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "jane",
    email: "jane@test.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default user;
