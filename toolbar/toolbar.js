var oojs = (function(oojs) {

	oojs.creatToolber = function(elementId){
		var element = document.getElementById(elementId); 
		var items = element.queryselectorAll(".toolbar-item"); 

		return {
			items : createToolbarItems(items), 
			add : function
		};
	};

	return oojs; 

} (oojs || {}));

// var toolbar = oojs.createToolbar("myToolbar");

// var toolbarItem = toolbar.items[0];

// toolbarItem.setEnabled(true); //or false
// toolbarItem.getEnabled(); 


// toolbarItem.enabled = true; //or false 

// var enabled - toolbarItem.enabled; 

