//FirstView Component Constructor
function FirstView() {
	var softInput = Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
	 var conn = Ti.Database.install('/Security.sqlite', 'Security');
	 var userResultSet = conn.execute('SELECT * FROM Security_data');
	 while (userResultSet.isValidRow()){ 	
    var this_user_password = userResultSet.fieldByName('Password');
    Ti.API.info(this_user_password);
    userResultSet.next();   
}
userResultSet.close();
	//create object instance, a parasitic subclass of Observable
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var self = Ti.UI.createScrollView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
	var main = Ti.UI.createView({
 		backgroundColor:'#0054A5',
	 	Width:'100%',
    	Height:'100%',
	});

	// Create a Button.
	var password = Ti.UI.createButton({
		//backgroundColor:'gray',
		title : 'Create Password',
		font:{
			fontSize : tmp3,
			fontWeight:'bold'
		},
		//color:'white',
		height : '10%',
		width : '80%',
		top:'35%'
	});
	// Listen for click events.
	password.addEventListener('click', function() {
		var create_password=Ti.UI.createWindow({
			backgroundColor:'white',
			url:'ui/common/create_password.js',	
			windowSoftInputMode: softInput
		});
		create_password.open();
	});
	// Add to the parent view.
	main.add(password);
	
		// Create a Button.
	var Gen_password = Ti.UI.createButton({
		//backgroundColor:'#525252',
		title : 'Genrate Password',
		font:{
			fontSize : tmp3,
			fontWeight:'bold'
		},
		height : '10%',
		width : '80%',
		top:'55%'
	});
	// Listen for click events.
	Gen_password.addEventListener('click', function() {
		var genrated_password=Ti.UI.createWindow({
			backgroundColor:'black',
			url:'ui/common/genrated_password.js',	
		});
		genrated_password.open();
	});	
	// Add to the parent view.
	main.add(Gen_password);	
	//**********************************************************************************************************************	
	

	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.01);
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var password = Ti.UI.createView({
		backgroundColor:'#525252',
		height : '100%',
		width : '100%',
		windowSoftInputMode:softInput
	});
		if(this_user_password==undefined){
		self.add(main);
	}else{	
		self.add(password);
	}
// Create a Button.
	var passwordlabel = Ti.UI.createScrollView({
		height : '10%',
		width : '80%',
		top:'20%',
	});		
		var text1 = Ti.UI.createLabel({
		text : 'Enter Password',
		font : {
			fontSize : tmp3,
			fontWeight:'bold'
		},
		color : '#0054A5',
	});
	passwordlabel.add(text1);
	// Add to the parent view.
	password.add(passwordlabel);
	// Create a TextField.
	var passwordField = Ti.UI.createTextField({
		height : '12%',
		top : '33%',
		width : '60%',
		font : {
			fontSize : tmp3,
		},
		hintText : 'Password',
		passwordMask:true,
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	// Listen for return events.
	passwordField.addEventListener('return', function(e) {
		passwordField.blur();
	});
	// Add to the parent view.
	password.add(passwordField);	
	
	// Create a Button.
	var Enter = Ti.UI.createButton({
		color:'#0054A5',
		title : 'Enter',
		font : {
			fontSize : tmp3,
		},
		height : '10%',
		width : '30%',
		top : '50%',
	});
	
	// Listen for click events.
	Enter.addEventListener('click', function() {
	if(passwordField.value==this_user_password){
			var frontview=Ti.UI.createWindow({
			backgroundColor:'white',
			url:'ui/common/FrontView.js'
		});
		frontview.open();
	}else{
		alert('Password not correct');
	}
	});
	// Add to the parent view.
	password.add(Enter);
	return self;
}
module.exports = FirstView;
