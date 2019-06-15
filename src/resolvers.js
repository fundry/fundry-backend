const resolvers = {
  Query: {
    user: async (parent, args, { User }) => {
      const users = await User.find();

      return users.map(user => {
        user._id = user._id.toString();

        return user;
      });
    },

    users: async (parent, args, { User }) => {
      const users = await User.findById(args.id);

      return users;
    }
  },

  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save();
      user._id = user._id.toString();

      return user;
    }
  }
};

module.exports = resolvers;
