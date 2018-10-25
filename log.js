
function log(message) {
	// Send an HTTP request
	console.log(message);
	console.log(__dirname);
	console.log(__filename);

}
module.exports = log;
