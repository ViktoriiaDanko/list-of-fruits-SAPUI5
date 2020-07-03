sap.ui.define([
	"oft/fiori/controller/BaseController",
	"oft/fiori/models/model"
], function(Controller, model) {
	"use strict";

	return Controller.extend("oft.fiori.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.view.App
		 */
		onInit: function() {
			var oModel = model.createFruitModel();
			this.getView().setModel(oModel);
			//Step 1: Get The object of the app control
			var oApp = this.getView().byId("myApp");
			//Step 2: Create the object of both of out views
			var oView1 = new sap.ui.view({
				id:"idView1",
				viewName:"oft.fiori.view.View1",
				type: sap.ui.core.mvc.ViewType.XML
			});
			var oView2 = new sap.ui.view({
				id:"idView2",
				viewName:"oft.fiori.view.View2",
				type: sap.ui.core.mvc.ViewType.XML
			});
			//Step 3:add these views as part of app control
			oApp.addPage(oView1);
			oApp.addPage(oView2);
			oApp.setInitialPage(oView1);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oft.fiori.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oft.fiori.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oft.fiori.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});