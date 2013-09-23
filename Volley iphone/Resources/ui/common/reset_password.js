var reset_password=Ti.UI.currentWindow;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.01);
var tmp3 = 20;
var tmp2 = 15;
var password = Ti.UI.createView({
	backgroundColor : '#525252',
	height : '100%',
	width : '100%',
});
reset_password.add(password);

var nextsubview1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '9%',
	width : '100%',
	top : '0%',
	left : '0%',
});
password.add(nextsubview1);
var text = Ti.UI.createLabel({
	text : 'Create Password',
	color : 'white',
	font : {
		fontSize : tmp3,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
nextsubview1.add(text);

var typrImageView = Ti.UI.createImageView({
	image : '/images/password_icon.png',
	width : '9%',
	height : '70%',
	right : '3%',
});
nextsubview1.add(typrImageView);

var backImageView = Ti.UI.createImageView({
	image : '/images/back_icon2.png',
	width : '9%',
	height : '70%',
	right : '18%',
});
backImageView.addEventListener('click',function(){
reset_password.close();	
});
nextsubview1.add(backImageView);

var passwordFieldView = Ti.UI.createScrollView({
	width : '100%',
	height : '40%',
	Top : '9%',
});
 password.add(passwordFieldView);

// Create a TextField.
var passwordField = Ti.UI.createTextField({
	height : '12%',
	top : '3%',
	width : '60%',
	font : {
		fontSize : tmp3,
	},
	hintText : 'Password',
	passwordMask : true,
	//	softKeyboardOnFocus :  Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
passwordField.addEventListener('return', function(e) {
	passwordField.focus();
});
passwordField.addEventListener('customeventname', function() {
	passwordField.focus();
});

passwordField.fireEvent('customeventname');
// Add to the parent view.
passwordFieldView.add(passwordField);

var repasswordField = Ti.UI.createTextField({
	height : '12%',
	top : '18%',
	width : '60%',
	font : {
		fontSize : tmp3,
	},
	hintText : 'Retype-Password',
	passwordMask : true,
	//	softKeyboardOnFocus :  Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
repasswordField.addEventListener('return', function(e) {
	repasswordField.focus();
});
// Add to the parent view.
passwordFieldView.add(repasswordField);
// Create a Button.
var Enter = Ti.UI.createButton({
	color : '#0054A5',
	title : 'Submit',
	font : {
		fontSize : tmp3,
	},
	height : '10%',
	width : '30%',
	top : '33%',
});

// Listen for click events.
Enter.addEventListener('click', function() {
	passwordField.blur();
	if (passwordField.value == '' || repasswordField.value == '') {
		passwordField.focus();
		alert('Please enter Password');
	} else if (passwordField.value != repasswordField.value) {
		passwordField.focus();
		alert('Password not matched');
	} else {
		passwordField.blur();
		var userPassword = passwordField.value;
		var conn = Ti.Database.install('/Security.sqlite', 'Security');
		// this is correct
		var theData = conn.execute('INSERT INTO Security_data (Password) VALUES(?)', userPassword);
		var frontview = Ti.UI.createWindow({
			backgroundColor : 'white',
			url : Ti.Filesystem.resourcesDirectory + 'ui/common/FrontView.js',
			fullscreen : true,
			navBarHidden : true
		});
		frontview.open();
	}
});
// Add to the parent view.
passwordFieldView.add(Enter);
