function newRoomSubscribe (parent, args, context, info) {
  return context.db.subscription.room(
    { where: { mutation_in: ['CREATED'] } },
    info,
  )
}

const newRoom = {
  subscribe: newRoomSubscribe
}

module.exports = {
  newRoom,
}