import * as PostModel from "./post.model.js";

export const createOne = async (request, response) => {
  const { message } = request.body;
  const { user } = request;

  const Post = await PostModel.createOne({
    message,
    authorId: user.id,
  });

  response.status(201).json({ post: Post });
};

export const findPost = async (request, response) => {
  const id = Number(request.params.id);

  response.json({
    post: await PostModel.findPost(id),
  });
};

export const findAllPosts = async (_request, response) => {
  response.json({
    posts: await PostModel.findAllPosts(),
  });
};

export const updateOne = async (request, response) => {
  const { id } = request.params;
  const { message } = request.body;

  const Post = await PostModel.updateOne({
    id: Number(id),
    message,
  });

  response.json({ post: Post });
};

export const deletePost = async (request, response) => {
  const id = Number(request.params.id);

  await PostModel.deletePost(id);

  response.status(204).end();
};
