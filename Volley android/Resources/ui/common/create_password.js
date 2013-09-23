var create_password=Ti.UI.currentWindow;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.01);
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var password = Ti.UI.createScrollView({
		backgroundColor:'#525252',
		height : '100%',
		width : '100%',
	});
	create_password.add(password);
// Create a Button.
	var passwordlabel = Ti.UI.createView({
		height : '10%',
		width : '80%',
		top:'20%',
	});		
		var text1 = Ti.UI.createLabel({
		text : 'Create Password',
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
		top : '30%',
		width : '60%',
		font : {
			fontSize : tmp3,
		},
		hintText : 'Password',
		passwordMask:true,
	//	softKeyboardOnFocus :  Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	// Listen for return events.
	passwordField.addEventListener('return', function(e) {
		//passwordField.blur();
	});
	// Add to the parent view.
	password.add(passwordField);
	
		var repasswordField = Ti.UI.createTextField({
		height : '12%',
		top : '45%',
		width : '60%',
		font : {
			fontSize : tmp3,
		},
		hintText : 'Retype-Password',
		passwordMask:true,
	//	softKeyboardOnFocus :  Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	// Listen for return events.
	repasswordField.addEventListener('return', function(e) {
		passwordField.blur();
	});
	// Add to the parent view.
	password.add(repasswordField);	
	// Create a Button.
	var Enter = Ti.UI.createButton({
		color:'#0054A5',
		title : 'Enter',
		font : {
			fontSize : tmp3,
		},
		height : '10%',
		width : '30%',
		top : '60%',
	});
	
	// Listen for click events.
	Enter.addEventListener('click', function() {
		passwordField.blur();
		if(passwordField.value!=repasswordField.value){
			alert('Password not matched');
		}else{
		 var userPassword=passwordField.value;
		 if(userPassword!=''){
		 var conn = Ti.Database.install('/Security.sqlite', 'Security');
// this is correct
var theData = conn.execute('INSERT INTO Security_data (Password) VALUES(?)',userPassword);	
var FirstView = require('ui/common/FirstView');	
var firstView = new FirstView();
create_password.add(firstView);
}
else{
	alert('Please enter password');
}
}

	//create_password.close();
	});
	// Add to the parent view.
	password.add(Enter);