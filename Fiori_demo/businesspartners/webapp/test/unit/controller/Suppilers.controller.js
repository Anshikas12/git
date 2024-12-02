/*global QUnit*/

sap.ui.define([
	"ns/businesspartners/controller/Suppilers.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Suppilers Controller");

	QUnit.test("I should test the Suppilers controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
