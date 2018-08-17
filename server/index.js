const {GraphQLServer} = require('graphql-yoga');
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    feed: (root, args, context, info) => {
      return context.db.query.rooms({}, info)
    },
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createRoom({
        data: {
          room: args.room,
        },
      }, info)
    }
  }
}

//3
const server = new GraphQLServer({
  typeDefs: `./server/schema.graphql`,
  resolvers,
  resolverValidationOptions :{
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'server/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/oleg-rudenko-7d1129/chatroom/idk',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`));