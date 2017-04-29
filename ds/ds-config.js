module.exports = function(RED) {
	var Syno = require('syno');

	/*************/
	// DS Config //
	/*************/
	function DS_Config_Node(config) {
		RED.nodes.createNode(this, config);

		// Configuration options passed by Node Red
		this.config = config;

		this.syno = new Syno({
		    // Requests protocol : 'http' or 'https' (default: http) 
		    protocol: this.config.protocol,
		    // DSM host : ip, domain name 
		    host: this.credentials.host,
		    // DSM port : port number (default: 5000) 
		    port: this.credentials.port,
		    // DSM User account (required) 
		    account: this.credentials.account,
		    // DSM User password (required) 
		    passwd: this.credentials.passwd,
		    // DSM API version (optional, default: 6.0.2) 
		    apiVersion: this.config.apiVersion
		});


		// Define functions called by nodes
		var node = this;
	}
	RED.nodes.registerType("DS Config", DS_Config_Node, {
		credentials: {
			host: {type : "text"},
			port: {type : "text"},
			account: {type : "text"},
			passwd: {type : "password"}
		}
	});
};
