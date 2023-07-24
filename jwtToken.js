import jwt from "jsonwebtoken";
const generateToken = (id, expiresIn) => {
  if (!id || !process.env.JWT_SECRET || !expiresIn)
    return `Please Provide ${
      !id
        ? "id".toUpperCase()
        : !expiresIn
        ? "expiresIn"
        : "JWT_SECRET in Config"
    }`;
  else
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn,
    });
};
export default generateToken;
