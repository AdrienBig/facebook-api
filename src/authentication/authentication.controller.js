import jwt from "jsonwebtoken";
import * as UserModel from "../users/user.model.js";

export const login = async (request, response) => {
  const { email, password } = request.body;

  const User = await UserModel.findByCredentials(
    { email, password },
    { id: true, email: true }
  );
  const JwtToken = jwt.sign(
    { id: User.id, email: User.email },
    process.env.JWT_SECRET
  );

  response.json({ token: JwtToken, user: User });
};

export const register = async (request, response) => {
  const { email, password } = request.body;
  const User = await UserModel.createOne({ email, password });

  const userProfile = await UserModel.findUserProfile(User.id);

  response.status(201).json({ user: User, userProfile: userProfile });
};
