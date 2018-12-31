const Mutation = {
  createCommunity: async (parent, { name }, context) => {
    return context.prisma.createCommunity({ name })
  },
}

module.exports = {
  Mutation,
}
