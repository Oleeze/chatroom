function feed(parent, args, context, info) {
  return context.db.query.rooms({}, info)
}

module.exports = {
  feed,
}