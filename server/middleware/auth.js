import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "secret");
      console.log("decodedToken: ", decodedData);

      req.userId = decodedData ? decodedData.id : null;
    } else {
      decodedData = jwt.decode(token);
      console.log("decodedTokenG: ", decodedData);

      req.userId = decodedData ? decodedData.sub : null;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
