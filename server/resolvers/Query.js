async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
      OR : [
        { room_contains: args.filter},
      ],
    }
    : {}

    const queriedRooms = await context.db.query.rooms(
      { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
    `{ id }`,
  )

    const countSelectionSet = `
      {
        aggregate {
          count
        }
      }
    `

    const roomsConnection = await context.db.query.roomsConnection({}, countSelectionSet)

  return {
    count: roomsConnection.aggregate.count,
    linkIds: queriedRooms.map(room => room.id)
  }
}

module.exports = {
  feed,
}