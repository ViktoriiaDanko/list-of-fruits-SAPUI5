sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(Controller) {
		return Controller.extend("oft.fiori.controller.BaseController", {
			//TODO: My reuse functions for all child controllers	
			
			getAppObject: function(){
				//return sap.ui.getCore().byId("idAppView--myApp");
				return this.getView().getParent();
				//debugger;
			}
			
		});
	});