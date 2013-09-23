var setting =Ti.UI.currentWindow;
var dropbox = require('ui/common/dropbox');


var client = dropbox.createClient({
	app_key : 'zxot0993e5n95oy', // <--- you'll want to replace this
	app_secret : 'mck7siov3qze5oz', // <--- and this with your own keys!
	root : "dropbox"                  // optional (defaults to sandbox)
});


if(client.isAuthorized()) {

Ti.App.Properties.setString('DROPBOX_TOKENS', null);
}

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume');
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	setting.add(firstView);
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	setting.add(firstView);
});

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume')
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	setting.add(firstView);
});
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
		var subself = Ti.UI.createView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
		setting.add(subself);
	var topview = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		width : '100%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '0%'
	});
	subself.add(topview);
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
	
	var toptext = Ti.UI.createLabel({
		text : 'Security',
		color : 'white',
		font : {
			fontSize : tmp3,
			fontWeight:'bold'
		},
		height : 'auto',
		width : 'auto',
		left : '3%',
	});
	// Add to the parent view.
	topview.add(toptext);
		var backImageView = Ti.UI.createImageView({
		image : '/images/back_icon2.png',
		width:'7%',
		height : '60%',
		right : '18%',	
	});
	backImageView.addEventListener('click', function() {
		setting.close();
	});
	// Add to the parent view.
	topview.add(backImageView);
	
var border = Math.round(Ti.Platform.displayCaps.platformWidth*0.005);
var nextview = Ti.UI.createView({
	backgroundColor:'white',
		height : '87%',
		width : '92%',
		top:'10%',
		left:'4%',
		borderColor: '#B7B7B7',
        borderWidth:border
	});
	subself.add(nextview);
	var nextsubview1 = Ti.UI.createView({
		backgroundColor:'#0054A5',
		height : '9%',
		width : '100%',
		top:'0%',
		left:'0%',
	});
	nextview.add(nextsubview1);
	var text = Ti.UI.createLabel({
		text : 'Settings',
		color : 'white',
		font : {
			fontSize : tmp3, 
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	nextsubview1.add(text);
	
		var typrImageView = Ti.UI.createImageView({
		image : '/images/group_icon.png',
		width:'8%',
		height : '70%',
		right : '3%',	
	});
	nextsubview1.add(typrImageView);
	
var nextmainview=Ti.UI.createView({
	height:'auto',
	width:'100%',
	top:'10%',
	layout:'vertical'
});
nextview.add(nextmainview);

var resetview1 = Ti.UI.createView({
	width : '96%',
	height : '10%',
	backgroundColor : '#0054A5',
	top : '2%',
	left : '2%',
	borderRadius : corner,
	borderWidth : '0%'
});
resetview1.addEventListener('click', function() {
		var reset_password = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'reset_password.js',
		fullscreen : true,
		navBarHidden : true,
	});
	reset_password.open();
});
nextmainview.add(resetview1);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Reset Password',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
resetview1.add(maintext);

var View1 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '16%'
});
// Add to the parent view.
resetview1.add(View1);

// Create a Switch.
var imagepass = Ti.UI.createImageView({
  	image:'/images/password_icon.png',
	right : '3%',
	width : '11%',
	height : '80%'
});
resetview1.add(imagepass);


var resetview2 = Ti.UI.createView({
	width : '96%',
	height : '10%',
	backgroundColor : '#0054A5',
	top : '2%',
	left : '2%',
	borderRadius : corner,
	borderWidth : '0%'
});
resetview2.addEventListener('click', function() {
	/*	var dropbox = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'connect_dropBox.js',
		fullscreen : true,
		navBarHidden : true,
	});
	dropbox.open();*/
	
	 
client.login(function(options) {
uploadFile();
	//logout();
});

});
nextmainview.add(resetview2);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Sync to Dropbox',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
resetview2.add(maintext);

var View1 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '16%'
});
// Add to the parent view.
resetview2.add(View1);

// Create a Switch.
var imagepass = Ti.UI.createImageView({
  	image:'/images/password_icon.png',
	right : '3%',
	width : '11%',
	height : '80%'
});
resetview2.add(imagepass);

var logout = function() {
//cookiejar.clearWebViewCookies('.dropbox.com');
Ti.App.Properties.setString('DROPBOX_TOKENS', null);
}
var style;
if (Ti.Platform.name === 'iPhone OS'){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
}
else {
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}
var indicator=Ti.UI.createActivityIndicator({
  color: 'black',
  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
  message: '  Uploading File  ',
  style:style,

  height:Ti.UI.SIZE,
  width:Ti.UI.SIZE,
  indicatorColor:'white',

});
subself.add(indicator);




// see : https://www.dropbox.com/developers/apps

var getAccount = function() {

var options = {
};
client.account(options, function(status, reply) {
Ti.API.info(status);
Ti.API.info(reply);
});
};
var uploadFile = function() {
indicator.show();
var options = {
overwrite : true// , // optional
};
var database=Ti.Database.open('Security');
database.file.setRemoteBackup(false);

var filepath=database.file.nativePath;
database.close();


var contents = Ti.Filesystem.getFile(filepath);
client.put("Security.sqlite", contents, options, function(status, reply) {
Ti.API.info(status);
Ti.API.info("reply"+reply);
Ti.App.Properties.setString('DROPBOX_TOKENS', null);
indicator.hide();
});
};

