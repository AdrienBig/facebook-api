import jwt from "jsonwebtoken";

const jwtMiddleware = async (request, response, next) => {
  const { authorization: token } = request.headers;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    request.user = user;

    next();
  } catch (error) {
    response.status(401).json({
      error: "Unauthorized",
    });
  }
};

export default jwtMiddleware;
