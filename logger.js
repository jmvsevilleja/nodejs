
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
	log(message) {
		// Send an HTTP request
		console.log(message);

		// Raise an event
		this.emit('messageLogged', { id: 1, url: 'http://'});
	}
}

/* function log(message) {
	// Send an HTTP request
	console.log(message);
	console.log(__dirname);
	console.log(__filename);

}
module.exports = log;
 */
module.exports = Logger;
