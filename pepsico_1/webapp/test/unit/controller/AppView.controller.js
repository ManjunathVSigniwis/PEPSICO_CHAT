/*global QUnit*/

sap.ui.define([
	"sappepsico/pepsico_1/controller/AppView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppView Controller");

	QUnit.test("I should test the AppView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
