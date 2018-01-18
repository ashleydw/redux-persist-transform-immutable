var Immutable = require('immutable')
var Serialize = require('./serialize')
var reduxPersist = require('redux-persist')

module.exports = function (config) {
  config = config || {}

  var serializer =  Serialize(Immutable, config.records)

  return reduxPersist.createTransform(Serialize.stringify, Serialize.parse, config)
}
