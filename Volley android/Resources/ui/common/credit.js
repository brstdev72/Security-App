var credit = Ti.UI.currentWindow;

var CDescriptio = Ti.App.Properties.getString('CDescription');
var CDescription = CDescriptio.replace('Description: ', '');

var Car = Ti.App.Properties.getString('Card');
var Card = Car.replace('Card no: ', '');

var Expiratio = Ti.App.Properties.getString('Expiration');
var Expiration = Expiratio.replace('Expiration Date: ', '');

var CNam = Ti.App.Properties.getString('CName');
var CName = CNam.replace('Name: ', '');

var Pi = Ti.App.Properties.getString('Pin');
var Pin = Pi.replace('Pin: ', '');

var Ban = Ti.App.Properties.getString('Bank');
var Bank = Ban.replace('Bank: ', '');

var rows=Ti.App.Properties.getString('rowId');
var grou=Ti.App.Properties.getString('gro');
var colou=Ti.App.Properties.getString('cols');

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
credit.add(creditcrollsself);
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
	credit.close();
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
		image : '/images/credit_icon.png',
		width : '8%',
		height : '80%',
		left: '3%'
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
	text : 'Credit Card Detail',
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
		right:'3%',
	});
// Listen for click events.
Edit.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', false);
	Ti.App.Properties.setString('row', rows);
	Ti.App.Properties.setString('grou',grou);
	Ti.App.Properties.setString('colou', colou);
	Ti.App.Properties.setString('des', CDescription);
	Ti.App.Properties.setString('car', Card);
	Ti.App.Properties.setString('exp', Expiration);
	Ti.App.Properties.setString('nam', CName);
	Ti.App.Properties.setString('pinss', Pin);
	Ti.App.Properties.setString('ban', Bank);

	var addcreditcard = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'addcreditcard.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	addcreditcard.open();
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
	text : 'Description:',
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
	text : CDescription,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	///top:'25%'
});
// Add to the parent view.
data.add(subtext1);

var line1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.2%',
	width : '100%',
	//top: '30%'
});

data.add(line1);

var text2 = Ti.UI.createLabel({
	text : 'Card No:',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'31%'
});
text2.addEventListener('click', function() {
	//var password1=Ti.UI.createWindow({
	// backgroundImage: '/images/transp.png',
	// url:'password.js',
	// modal: true,
	// fullscreen : true,
	// navBarHidden : true,
	// });
	// password1.open();
});
// Add to the parent view.
data.add(text2);

var subtext2 = Ti.UI.createLabel({
	text : Card,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'36%'
});
// Add to the parent view.
data.add(subtext2);

var line2 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.2%',
	width : '100%',
	//top: '41%'
});

data.add(line2);

var text3 = Ti.UI.createLabel({
	text : 'Expiration Date',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'42%'
});
// Add to the parent view.
data.add(text3);

var subtext3 = Ti.UI.createLabel({
	text : Expiration,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'47%'
});
// Add to the parent view.
data.add(subtext3);

var line3 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.2%',
	width : '100%',
	//top: '52%'
});

data.add(line3);

var text4 = Ti.UI.createLabel({
	text : 'Name:',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'53%'
});
// Add to the parent view.
data.add(text4);

var subtext4 = Ti.UI.createLabel({
	text : CName,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'58%'
});
// Add to the parent view.
data.add(subtext4);

var line4 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.2%',
	width : '100%',
	//top: '63%'
});

data.add(line4);

var text5 = Ti.UI.createLabel({
	text : 'Pin:',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'64%'
});
// Add to the parent view.
data.add(text5);

var subtext5 = Ti.UI.createLabel({
	text : Pin,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'69%'
});
// Add to the parent view.
data.add(subtext5);

var line5 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.2%',
	width : '100%',
	//top: '74%'
});

data.add(line5);
var text6 = Ti.UI.createLabel({
	text : 'Bank:',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'75%'
});
// Add to the parent view.
data.add(text6);

var subtext6 = Ti.UI.createLabel({
	text : Bank,
	color : 'gray',
	font : {
		fontSize : tmp1
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
	//top:'80%'
});
// Add to the parent view.
data.add(subtext6);

var line6 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '0.2%',
	width : '100%',
	//top: '85%'
});

data.add(line6);

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

var typrImageView = Ti.UI.createImageView({
	image : '/images/icon_share.png',
	width : '9%',
	height : '70%',
	right : '3%',
});
nextsubview1.add(typrImageView);

var topleftImageView = Ti.UI.createImageView({
	image : '/images/back_icon2.png',
	width : '8%',
	height : '70%',
	top : '15%',
	right : '18%'
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
	emailDialog.subject = "Credit Card detail";
	emailDialog.toRecipients = ['email@yahoo.com'];
	emailDialog.messageBody = 'Description:' + CDescription +'\n'+ '<br>'+'Card number:' + Card +'\n'+'Expiration Date'+Expiration+'\n'+'Name'+CName +'\n'+'Pin'+Pin+'\n'+'Bank'+Bank;
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
	var intent = Ti.Android.createIntent({
		action : Ti.Android.ACTION_SENDTO,
		data : 'smsto:123456789'
	});
	intent.putExtra('sms_body', 'Description:' + CDescription +'\n'+ '<br>'+'Card number:' + Card +'\n'+'Expiration Date: '+Expiration+'\n'+'Name: '+CName +'\n'+'Pin: '+Pin+'\n'+'Bank: '+Bank);
	Ti.Android.currentActivity.startActivity(intent);
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

//************************************************************************************************************************
// var border = Math.round(Ti.Platform.displayCaps.platformWidth*0.002);
// var nextview = Ti.UI.createView({
// backgroundColor:'white',
// height : '80%',
// width : '86%',
// top:'5%',
// left:'7%',
// borderColor: '#B7B7B7',
// borderWidth:border
// });
//
// var nextsubview1 = Ti.UI.createView({
// backgroundColor:'#0054A5',
// height : '9%',
// width : '100%',
// top:'0%',
// left:'0%',
// });
// nextview.add(nextsubview1);
// var text = Ti.UI.createLabel({
// text : 'Select Type',
// color : 'white',
// font : {
// fontSize : tmp2,
// fontWeight:'bold',
// },
// height : 'auto',
// width : 'auto',
// left : '5%',
// });
// nextsubview1.add(text);
//
// var typrImageView = Ti.UI.createImageView({
// image : '/images/type_icon.png',
// width:'7%',
// height : '70%',
// right : '3%',
// top: '5%'
// });
// nextsubview1.add(typrImageView);
//
// var backImageView = Ti.UI.createImageView({
// image : '/images/back_icon2.png',
// width:'7%',
// height : '60%',
// right : '18%',
// });
// backImageView.addEventListener('click', function() {
// creditcrollsself.remove(nextview);
// });
// // Add to the parent view.
// nextsubview1.add(backImageView);
//
//
// var nextsubview2 = Ti.UI.createView({
// backgroundColor:'white',
// height : '9%',
// width : '100%',
// top:'9%',
// left:'0%',
// });
// nextview.add(nextsubview2);
// var subImageView = Ti.UI.createImageView({
// image : '/images/account_icon.png',
// width:'7%',
// height : '60%',
// left : '3%',
// });
// subImageView.addEventListener('load', function() {
// Ti.API.info('Image loaded!');
// });
// // Add to the parent view.
// nextsubview2.add(subImageView);
//
// var text = Ti.UI.createLabel({
// text : 'Bank Account',
// color : 'black',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '15%',
// });
//
// nextsubview2.add(text);
//
// var subImageView2 = Ti.UI.createImageView({
// image : '/images/divider.png',
// width:'100%',
// height : '3%',
// left : '0%',
// bottom: '0%'
// });
// nextsubview2.add(subImageView2);
//
// var nextsubview3 = Ti.UI.createView({
// backgroundColor:'white',
// height : '9%',
// width : '100%',
// top:'18%',
// left:'0%',
// });
// nextview.add(nextsubview3);
// var subImageView = Ti.UI.createImageView({
// image : '/images/birthday_icon.png',
// width:'7%',
// height : '60%',
// left : '3%',
// });
// subImageView.addEventListener('load', function() {
// Ti.API.info('Image loaded!');
// });
// // Add to the parent view.
// nextsubview3.add(subImageView);
//
// var text = Ti.UI.createLabel({
// text : 'Birthday',
// color : 'black',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '15%',
// });
//
// nextsubview3.add(text);
// var subImageView3 = Ti.UI.createImageView({
// image : '/images/divider.png',
// width:'100%',
// height : '3%',
// left : '0%',
// bottom: '0%'
// });
// nextsubview3.add(subImageView3);
//
// var nextsubview4 = Ti.UI.createView({
// backgroundColor:'white',
// height : '9%',
// width : '100%',
// top:'27%',
// left:'0%',
// });
// nextview.add(nextsubview4);
// var subImageView = Ti.UI.createImageView({
// image : '/images/phone-icon.png',
// width:'7%',
// height : '60%',
// left : '3%',
// });
// subImageView.addEventListener('load', function() {
// Ti.API.info('Image loaded!');
// });
// // Add to the parent view.
// nextsubview4.add(subImageView);
//
// var text = Ti.UI.createLabel({
// text : 'Calling Card',
// color : 'black',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '15%',
// });
//
// nextsubview4.add(text);
//
// var subImageView4 = Ti.UI.createImageView({
// image : '/images/divider.png',
// width:'100%',
// height : '3%',
// left : '0%',
// bottom: '0%'
//
// });
// nextsubview4.add(subImageView4);
//
// var nextsubview5 = Ti.UI.createView({
// backgroundColor:'white',
// height : '9%',
// width : '100%',
// top:'36%',
// left:'0%',
// });
// nextview.add(nextsubview5);
// var subImageView = Ti.UI.createImageView({
// image : '/images/credit_icon.png',
// width:'7%',
// height : '60%',
// left : '3%',
// });
// subImageView.addEventListener('load', function() {
// Ti.API.info('Image loaded!');
// });
// // Add to the parent view.
// nextsubview5.add(subImageView);
//
// var text = Ti.UI.createLabel({
// text : 'Credit Card',
// color : 'black',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '15%',
// });
//
// nextsubview5.add(text);
//
// var subImageView5 = Ti.UI.createImageView({
// image : '/images/divider.png',
// width:'100%',
// height : '3%',
// left : '0%',
// bottom: '0%'
//
// });
// nextsubview5.add(subImageView5);
//
// var nextsubview6 = Ti.UI.createView({
// backgroundColor:'white',
// height : '9%',
// width : '100%',
// top:'45%',
// left:'0%',
// });
// nextview.add(nextsubview6);
// var subImageView = Ti.UI.createImageView({
// image : '/images/insurance_icon.png',
// width:'7%',
// height : '60%',
// left : '3%',
// });
// subImageView.addEventListener('load', function() {
// Ti.API.info('Image loaded!');
// });
// // Add to the parent view.
// nextsubview6.add(subImageView);
//
// var text = Ti.UI.createLabel({
// text : 'Insurance',
// color : 'black',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '15%',
// });
//
// nextsubview6.add(text);
//
// var subImageView6 = Ti.UI.createImageView({
// image : '/images/divider.png',
// width:'100%',
// height : '3%',
// left : '0%',
// bottom: '0%'
// });
// nextsubview6.add(subImageView6);