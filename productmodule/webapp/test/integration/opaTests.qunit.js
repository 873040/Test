/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"productmodule/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});