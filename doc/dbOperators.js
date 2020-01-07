// COMPARISON OPERATORS FOR MONGODB ------------------------------------------------------------------
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)
// EXAMPLE: .find({ price: { $gt: 10, $lt: 20 } })


// LOGICAL OPERATORS FOR MONGODB ------------------------------------------------------------------
// or
// and
// EXAMPLE: .find().or([ { author: 'Name' }, { title: 'Title' } ])


// REGULAR EXPRESSION FOR MONGODB ------------------------------------------------------------------
// STARTS WITH SOME VALUE: .find({ author: /^VALUE/ })
// ENDS WITH SOME VALUE: .find({ author: /VALUE$/ })
// CONTAINS SOME VALUE: .find({ author: /.*VALUE.*/ })
// OBS: to remove key sensitive property add "i" after the second "/" -> .find({ author: /STRING$/i })

