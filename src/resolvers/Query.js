const Query = {
  community: (parent, { id }, context) => {
    return context.prisma.community({ id })
  },
  communities: (parent, args, context) => {
    return context.prisma.communities()
  }
}

module.exports = {
  Query,
}
