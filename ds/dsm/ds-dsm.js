module.exports = function(RED) {
	var dsmReferences = require('./ds-dsm-references.js');
	var dsUtils = require('./../ds-utils.js');

	/************/
	// DS DSM //
	/************/
	function DS_DSM_Node(config) {
		RED.nodes.createNode(this, config);

		var node = this;

		// Save settings in local node
		node.dsm = config.dsm;
		node.dsmNode = RED.nodes.getNode(this.dsm);
		node.name = config.name;
		node.topic = config.topic;
		if( config.payload != '' )
			node.payload = JSON.parse(config.payload);

		if (this.dsmNode) {

			// Input handler, called on incoming flow
			this.on('input', function(msg) {

				// If no topic is given in the msg, then we use the topic in the config.
				var topic = (msg.topic) ? msg.topic : node.topic;
				if (!topic) {
					node.error('No topic given. Specify either in the config or via msg.topic!');
					return;
				}

				// If no payload is given in the msg, then we use the payload in the config.
				var payload = (msg.payload) ? msg.payload : node.payload;
				if (payload === null || payload === undefined) {
					node.error('invalid payload: ' + payload.toString());
					return;
				}

				node.dsmNode.syno.dsm[topic](payload, function(error, data) {
					if( error )
						node.error(error);
					else {
						msg.payload = data;
						node.send(msg);
					}
				});
			});
		} else {
			this.error(RED._("syno.errors.missing-config"));
		}
	}

	RED.nodes.registerType("DS DSM", DS_DSM_Node);

	/* ---------------------------------------------------------------------------
	 * Backend informations
	 * -------------------------------------------------------------------------*/
	dsUtils.provideReferences(RED, 'dsm', dsmReferences);
};