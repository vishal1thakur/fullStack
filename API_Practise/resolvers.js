const Post = require("./models/post.model");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllPosts: async () => {
      return await Post.find();
    },
    getPost: async (parent, { id }, context, info) => {
      return await Post.findById(id);
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Post Deleted";
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const updates = {};
      if (title !== undefined) {
        update.title = title;
      }
      if (description !== undefined) {
        update.description = description;
      }
      const post = await Post.findByIdAndUpdate(id, { updates }, { new: true });
      return post;
    },
  },
};

module.exports = resolvers;
