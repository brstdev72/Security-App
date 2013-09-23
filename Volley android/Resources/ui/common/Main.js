	var main = Ti.UI.createView({
 		backgroundColor:'#0054A5',
	 	contentWidth:'100%',
    	contentHeight:'100%',
    	layout:'vertical'
	});
	// Create a Button.
	var password = Ti.UI.createButton({
		backgroundColor:'#525252',
		title : 'Create Password',
		height : '10%',
		width : '80%',
	});
	
	// Listen for click events.
	password.addEventListener('click', function() {
	});
	
	// Add to the parent view.
	main.add(password);
	
		// Create a Button.
	var Gen_password = Ti.UI.createButton({
		backgroundColor:'#525252',
		title : 'Genrate Password',
		height : '10%',
		width : '80%',
	});
	
	// Listen for click events.
	Gen_password.addEventListener('click', function() {
		alert('\'Create Password\' was clicked!');
	});
	
	// Add to the parent view.
	main.add(Gen_password);	