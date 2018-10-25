
const EventEmitter = require('events');

const Logger = require('./logger');

const logger = new Logger();

// Register a listener
logger.on('messageLogged', function () {
    console.log('Listener called');
});

logger.log('message');
