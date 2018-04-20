jQuery.sap.declare("oneStepBack.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

sap.ui.core.UIComponent.extend("oneStepBack.Component", {

    metadata : {
        manifest:"json",
        includes : [ "css/style.css"]   
	},
	createContent : function() {

		
		var master = sap.ui.view({
			id : "master",
			viewName : "oneStepBack.view.Master",
			type : sap.ui.core.mvc.ViewType.XML
		});	
		
		var initial = sap.ui.view({
			id : "initial",
			viewName : "oneStepBack.view.Initial",
			type : sap.ui.core.mvc.ViewType.XML
		});	
		
		var app = new sap.m.App('app', {
			initialPage : "master"
		});	
		
		app.addPage(master);	
		app.addPage(initial);			
		
	    var i18nModel = new sap.ui.model.resource.ResourceModel({
		      bundleUrl : "i18n/messageBundle.properties"
	    });
		app.setModel(i18nModel, "i18n");
		sap.ui.getCore().setModel(i18nModel, "i18n");
//		
//		var customers = new sap.ui.model.json.JSONModel();
//		customers.loadData(com.alterburo.crm.infovrp.billsearch.Component.getMetadata().getManifestEntry("sap.app").dataSources["init_data_alias"].uri, '', false);
//		sap.ui.getCore().setModel(customers, "customers");
//		app.setModel(customers, "customers");


		
		return app;		
	}
});