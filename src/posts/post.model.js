import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

export const createOne = async ({ message, authorId }) => {
  return prisma.post.create({
    data: {
      message,
      authorId,
    },
  });
};

export const updateOne = async ({ id, message }) => {
  return prisma.post.update({
    where: {
      id,
    },
    data: {
      message,
    },
  });
};

export const deletePost = async (id) => {
  return prisma.post.delete({
    where: { id },
  });
};

export const findPost = async (id) => {
  return prisma.post.findUnique({
    where: { id },
  });
};

export const findAllPosts = async () => {
  return prisma.post.findMany();
};
