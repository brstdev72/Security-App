var openCallingwindow = Ti.UI.currentWindow;

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume');
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	openCallingwindow.add(firstView);
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	openCallingwindow.add(firstView);
});

var callingNam = Ti.App.Properties.getString('callingName');
var callingName = callingNam.replace('Name: ', '');

var callingacces = Ti.App.Properties.getString('access_no');
var callingaccess = callingacces.replace('Access no: ', '');

var rows = Ti.App.Properties.getString('rowId');
var grou = Ti.App.Properties.getString('gro');
var colou = Ti.App.Properties.getString('cols');

var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var creditcrollsself = Ti.UI.createScrollView({
	height : '100%',
	width : '100%',
	maxZoomScale : 100,
	minZoomScale : 0.1,
	//With this property you can set the default zoom
	zoomScale : 1
});
openCallingwindow.add(creditcrollsself);
var creditself = Ti.UI.createView({
	height : '100%',
	width : '100%'
});
creditcrollsself.add(creditself);

var topview = Ti.UI.createView({
	backgroundImage : '/images/header_bg.png',
	width : '100%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '0%'
});
creditself.add(topview);
var topImageView = Ti.UI.createImageView({
	image : '/images/appicon.png',
	width : '8%',
	height : '70%',
	top : '15%',
	right : '3%'
});
topImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
topview.add(topImageView);

var topleftImageView = Ti.UI.createImageView({
	image : '/images/back_icon2.png',
	width : '8%',
	height : '70%',
	top : '15%',
	right : '18%'
});
topleftImageView.addEventListener('click', function() {
	openCallingwindow.close();
});
topview.add(topleftImageView);

var toptext = Ti.UI.createLabel({
	text : 'Security',
	color : 'white',
	font : {
		fontSize : tmp2,
		fontWeight : 'bold'
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
});
// Add to the parent view.
topview.add(toptext);
var creditview = Ti.UI.createView({
	width : '100%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '10%'
});
creditview.addEventListener('click', function() {
	//creditcrollsself.add(nextview);
});
creditself.add(creditview);
// Create an ImageView.
var creditImageView = Ti.UI.createImageView({
	image : '/images/calling_icon.png',
	width : '8%',
	height : '80%',
	left : '3%'
});
creditImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
creditview.add(creditImageView);

var tmp = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;

// Create a Label.
var maintext = Ti.UI.createLabel({
	text : 'Calling Card Detail',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '15%',
});
// Add to the parent view.
creditview.add(maintext);

var Edit = Ti.UI.createImageView({
	image : '/images/type_icon.png',
	width : '8%',
	height : '80%',
	right : '3%',
});
// Listen for click events.
Edit.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', false);
	Ti.App.Properties.setString('row', rows);
	Ti.App.Properties.setString('grou', grou);
	Ti.App.Properties.setString('colou', colou);
	Ti.App.Properties.setString('names', callingName);
	Ti.App.Properties.setString('accessss', callingaccess);

	var addcallingcard = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'addcallingcard.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	addcallingcard.open();
});
// Add to the parent view.
creditview.add(Edit);

var projects = Ti.UI.createImageView({
	//selectionIndicator : true,
	width : '9%',
	height : '80%',
	backgroundColor : '#0055A6',
	backgroundImage : '/images/icon_share.png',
	right : '13%',
});

projects.addEventListener('click', function(e) {
	creditself.add(groupself);
});
// Add to the parent view.
creditview.add(projects);

var data = Ti.UI.createView({
	backgroundColor : 'white',
	height : 'auto',
	width : 'auto',
	layout : 'vertical',
	top : '20%'
});
creditself.add(data);

var text1 = Ti.UI.createLabel({
	text : 'Name',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'20%'
});
text1.addEventListener('click', function() {
});
// Add to the parent view.
data.add(text1);

var subtext1 = Ti.UI.createLabel({
	text : callingName,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'25%'
});
// Add to the parent view.
data.add(subtext1);

var line1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.3%',
	width : '100%',
	//top: '30%'
});

data.add(line1);

var text2 = Ti.UI.createLabel({
	text : 'Access Number',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'31%'
});
// Add to the parent view.
data.add(text2);

var subtext2 = Ti.UI.createLabel({
	text : callingaccess,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//	top:'36%'
});
// Add to the parent view.
data.add(subtext2);

var line2 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.3%',
	width : '100%',
	//top: '41%'
});

data.add(line2);

var border = Math.round(Ti.Platform.displayCaps.platformWidth * 0.002);
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.2) / 100;
var groupself = Ti.UI.createScrollView({
	height : '100%',
	width : '100%',
});

var passwoedself = Ti.UI.createView({
	height : '100%',
	width : '100%'
});
groupself.add(passwoedself);
var nextview = Ti.UI.createView({
	backgroundColor : 'white',
	height : '35%',
	width : '86%',
	left : '7%',
	borderColor : '#B7B7B7',
	borderWidth : border
});
passwoedself.add(nextview);

var nextsubview1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '25%',
	width : '100%',
	top : '0%',
	left : '0%',
});
nextview.add(nextsubview1);
var text = Ti.UI.createLabel({
	text : 'Share Record Via',
	color : 'white',
	font : {
		fontSize : tmp2,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
nextsubview1.add(text);



var topleftImageView = Ti.UI.createImageView({
	image : '/images/back_icon2.png',
	width : '9%',
	height : '70%',
	top : '15%',
	right : '3%'
});
topleftImageView.addEventListener('click', function() {
	creditself.remove(groupself);
});
nextsubview1.add(topleftImageView);

var passwordsubview1 = Ti.UI.createView({
	width : '86%',
	height : '20%',
	backgroundColor : '#0054A5',
	top : '35%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview1.addEventListener('click', function() {
	creditself.remove(groupself);
	var emailDialog = Ti.UI.createEmailDialog()
	emailDialog.subject = "Calling Card detail";
	emailDialog.toRecipients = ['email@yahoo.com'];
	emailDialog.messageBody = 'Name:' + callingName +'\n'+ 'Access number:' + callingaccess;
	// var f = Ti.Filesystem.getFile('cricket.wav');
	// emailDialog.addAttachment(f);
	emailDialog.open();
});
nextview.add(passwordsubview1);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Email',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview1.add(maintext);

var passwordsubview2 = Ti.UI.createView({
	width : '86%',
	height : '20%',
	backgroundColor : '#0054A5',
	top : '65%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview2.addEventListener('click', function() {
	

	var module = require('com.omorandi');
	Ti.API.info("module is => " + module);

	//create the smsDialog object
	var smsDialog = module.createSMSDialog();

	//check if the feature is available on the device at hand
	if (!smsDialog.isSupported()) {
		//falls here when executed on iOS versions < 4.0 and in the emulator
		var a = Ti.UI.createAlertDialog({
			title : 'warning',
			message : 'the required feature is not available on your device'
		});
		a.show();
	} else {
		//pre-populate the dialog with the info provided in the following properties
		smsDialog.recipients = [''];
		smsDialog.messageBody = 'Name:' + callingName + '\n' + 'Access number:' + callingaccess;

		//add an event listener for the 'complete' event, in order to be notified about the result of the operation
		smsDialog.addEventListener('complete', function(e) {
		});
		smsDialog.open({
			animated : true
		});
	}
	
		
});
nextview.add(passwordsubview2);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Sms',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview2.add(maintext);
