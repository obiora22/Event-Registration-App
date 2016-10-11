var fs = require('fs');

module.exports.get = function (req, resp) {
  var event = fs.readFileSync('app/data/events/' + req.params.id + '.json', 'utf-8')
  resp.set('content-type', 'application/json')
  resp.send(event)
}

module.exports.getAll = function (req, resp) {
  var eventFiles = fs.readdirSync('app/data/events/', 'utf-8')

  resp.set('content-type', 'application/json')

  var events = eventFiles.map(function (event_file) {
    return JSON.parse(fs.readFileSync('app/data/events/' + event_file, 'utf-8'))
  })
  
  resp.send(events)
}

module.exports.save = function (req, resp) {
  fs.writeFileSync('app/data/events/' + req.params.id + '.json', JSON.stringify(req.body))
  resp.send(req.body)
}
