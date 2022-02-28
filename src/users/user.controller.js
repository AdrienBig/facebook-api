import * as UserModel from "./user.model.js";

export const createOne = async (request, response) => {
  const { id, email, password } = request.body;

  const userData = await UserModel.createOne({
    id,
    email,
    password,
  });

  const userProfile = await UserModel.createUserProfile({
    firstName,
    lastName,
    userId: id,
  });

  response.status(201).json({ userData: userData, userProfile: userProfile });
};

export const findUsersPosts = async (request, response) => {
  const { id } = request.params;

  response.json({
    posts: await UserModel.findUsersPosts(id),
  });
};

export const findUserProfile = async (request, response) => {
  const { id } = request.params;

  response.json({
    profile: await UserModel.findUserProfile(id),
  });
};

export const findAll = async (_request, response) => {
  response.json({
    users: await UserModel.findAll(),
  });
};

export const updateUserProfile = async (request, response) => {
  const { id } = request.params;
  const { firstName, lastName } = request.body;

  const Profile = await UserModel.updateUserProfile({
    userId: id,
    firstName,
    lastName,
  });

  response.json({ profile: Profile });
};

export const deleteUser = async (request, response) => {
  const { id } = request.params;

  await UserModel.deleteUsersProfile(id);
  await UserModel.deleteUser(id);

  response.status(204).end();
};
