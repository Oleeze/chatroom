const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const  { APP_SECRET, getUserId} = require('../utils.js')

async function signup(parent, args, context, info) {
  //1 this will encrypt the users password
  const password = await bcrypt.hash(args.password, 10)
  //2 using Prisma binding instance to store the new user
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`)

  //3 Generats a JWT in app_secret
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  //1 retrieve the exisiting user record by email
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
  if (!user) {
    throw new Error('No such user found')
  }

  //2 Compares the provided password with what is stored
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

function post (parent, args, context, info) {
  const userId = getUserId(context)
  return context.db.mutation.createMessage(
    {
      data: {
        message: args.message,
        postedBy: { connect: { id: userId } },
      },
    },
    info,
  )
}

module.exports = {
  signup,
  login,
  post
}