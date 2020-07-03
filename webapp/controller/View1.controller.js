sap.ui.define([
	"oft/fiori/controller/BaseController",
//	"oft/fiori/Popover",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("oft.fiori.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.view.View1
		 */
//		onInit: function(oEvent) {
 //		},

		onPop: function (oEvent) {

			// create popover
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("popoverNavCon", "oft.fiori.Popover", this);
				this.getView().addDependent(this._oPopover);
			}

			this._oPopover.openBy(oEvent.getSource());
		},
		
		onPressItem: function(oEvent){
			//Here we get the object of the item selected by user
			var oItem = oEvent.getParameter("listItem");
			//What is the concept called which gives me address of the element - Context
			var sPath = oItem.getBindingContextPath();
			//Get the object of view 2 and bind this address as ABSOLUTE PATH to second view
			var oApp = this.getAppObject();
			var oView2 = oApp.getPages()[1];
			oView2.bindElement(sPath);
			
			this.onNext();
			
			console.log(sPath);
		},
		onSearch: function(oEvent){
			var queryString = oEvent.getParameter("query");
			if(!queryString){
				queryString = oEvent.getParameter("newValue");
			}
			
			var oFilter = new sap.ui.model.Filter("name", 
												  sap.ui.model.FilterOperator.Contains,
												  queryString);
			var oFilter2 = new sap.ui.model.Filter("benefit",
			                                       sap.ui.model.FilterOperator.Contains,
			                                       queryString);
			var oMainFilter = new sap.ui.model.Filter({
				filters: [oFilter, oFilter2],
				and: false
			});
			var aFilter = [oMainFilter];
			var oList = this.getView().byId("fruits");
			oList.getBinding("items").filter(aFilter);
		},
		
		onFilter: function(oEvent){
			var oValue = oEvent.getSource().getBindingContext();
			if(oValue.getPath() === "/SelectionCriteria/0"){
				var oFilter = new sap.ui.model.Filter("price", 
												  sap.ui.model.FilterOperator.LT,
												  50);
			}
			if(oValue.getPath() === "/SelectionCriteria/1"){
				var oFilter = new sap.ui.model.Filter("price", 
												  sap.ui.model.FilterOperator.BT,
												  50,80);
			}
			if(oValue.getPath() === "/SelectionCriteria/2"){
				var oFilter = new sap.ui.model.Filter("price", 
												  sap.ui.model.FilterOperator.GT,
												  80);
			}
			
			
			var oList = this.getView().byId("fruits");
			oList.getBinding("items").filter(oFilter);
		},

		onNext: function(){
			var oApp = this.getAppObject();
			oApp.to("idView2");
		}
		/**
		 * Similar to onAfterRendering, but this ohook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oft.fiori.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oft.fiori.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oft.fiori.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});