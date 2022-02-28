import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

export const createOne = async ({ email, password }) => {
  return prisma.user.create({
    data: {
      email,
      password,
      Profile: {
        create: {
          firstName: "",
          lastName: "",
        },
      },
    },
  });
};

export const createUserProfile = async ({ firstName, lastName, userId }) => {
  return prisma.profile.create({
    data: {
      firstName,
      lastName,
      userId,
    },
  });
};

export const updateUserProfile = async ({ userId, firstName, lastName }) => {
  return prisma.profile.update({
    where: {
      userId,
    },
    data: {
      firstName,
      lastName,
    },
  });
};

export const deleteUsersProfile = async (userId) => {
  return prisma.profile.delete({
    where: {
      userId,
    },
  });
};

export const deleteUser = async (id) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export const findUsersPosts = async (authorId, select) => {
  return prisma.post.findMany({
    where: { authorId },
    select,
  });
};

export const findUserProfile = async (userId) => {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
  });
};

export const findByCredentials = ({ email, password }, select) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    select,
  });
};

export const findById = ({ id }, select) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select,
  });
};

export const findAll = async () => {
  return prisma.user.findMany();
};
