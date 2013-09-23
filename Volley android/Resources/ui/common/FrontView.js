var frontview = Ti.UI.currentWindow;
var group_data = '';

var bc = Ti.Android.createBroadcastReceiver({
	onReceived : function() {
		Ti.API.info('Handling broadcast ACTION_SCREEN_OFF.');
		//load component dependencies
		var FirstView = require('ui/common/FirstView');

		//construct UI
		var firstView = new FirstView();
		frontview.add(firstView);
	}
});
Ti.Android.registerBroadcastReceiver(bc, [Ti.Android.ACTION_SCREEN_OFF]);

Ti.Android.currentActivity.addEventListener('resume', function(e) {
	// alert('resume');
	Ti.API.info('resume')
});

Ti.Android.currentActivity.addEventListener('pause', function(e) {
	//alert('pause');
});

var conn = Ti.Database.install('/Security.sqlite', 'Security');
var userAccountResultSet = conn.execute('SELECT * FROM Account');
var this_account_no = [];
var this_bank_name = [];
while (userAccountResultSet.isValidRow()) {
	this_account_no.push(userAccountResultSet.fieldByName('account_no'));
	this_bank_name.push(userAccountResultSet.fieldByName('bank_name'));
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	userAccountResultSet.next();
	// alert(this_account_no+'      '+this_bank_name);
}
var count = this_account_no.length;
userAccountResultSet.close();

var userBirthdayResultSet = conn.execute('SELECT * FROM Birthday');
var this_birthday_name = [];
var this_birthday_date = [];
while (userBirthdayResultSet.isValidRow()) {
	this_birthday_name.push(userBirthdayResultSet.fieldByName('name'));
	this_birthday_date.push(userBirthdayResultSet.fieldByName('date'));
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	userBirthdayResultSet.next();
}
//alert(this_birthday_name+'      '+this_birthday_date);
var count_b = this_birthday_name.length;
userBirthdayResultSet.close();

var userCallingcardResultSet = conn.execute('SELECT * FROM Callingcard');
var this_callingcard_name = [];
var this_callingcard_access_name = [];
while (userCallingcardResultSet.isValidRow()) {
	this_callingcard_name.push(userCallingcardResultSet.fieldByName('name'));
	this_callingcard_access_name.push(userCallingcardResultSet.fieldByName('access_no'));
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	userCallingcardResultSet.next();
}
// alert(this_callingcard_name+'      '+this_callingcard_access_name);
var count_C = this_callingcard_name.length;
userCallingcardResultSet.close();

var userCreditcardResultSet = conn.execute('SELECT * FROM Creditcard');
var this_creditcard_description = [];
var this_Creditcard_card_no = [];
var this_creditcard_expiration_date = [];
var this_Creditcard_name = [];
var this_creditcard_pin = [];
var this_Creditcard_bank = [];
while (userCreditcardResultSet.isValidRow()) {
	this_creditcard_description.push(userCreditcardResultSet.fieldByName('desception'));
	this_Creditcard_card_no.push(userCreditcardResultSet.fieldByName('card_no'));
	this_creditcard_expiration_date.push(userCreditcardResultSet.fieldByName('expiration_date'));
	this_Creditcard_name.push(userCreditcardResultSet.fieldByName('name'));
	this_creditcard_pin.push(userCreditcardResultSet.fieldByName('pin'));
	this_Creditcard_bank.push(userCreditcardResultSet.fieldByName('bank'));
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	userCreditcardResultSet.next();
}
var count_Cr = this_creditcard_description.length;
userCreditcardResultSet.close();
// alert(this_callingcard_name+'      '+this_Creditcard_card_no+'    '+this_creditcard_expiration_date+'    '+this_Creditcard_name+'  '+this_creditcard_pin+'   '+this_Creditcard_bank);

var userInsuranceResultSet = conn.execute('SELECT * FROM Insurance');
var this_insurance_description = [];
var this_insurance_policy_no = [];
var this_insurance_group_name = [];
var this_insurance_insured = [];
var this_insurance_date = [];
var this_insurance_phone_no = [];
while (userInsuranceResultSet.isValidRow()) {
	this_insurance_description.push(userInsuranceResultSet.fieldByName('desception'));
	this_insurance_policy_no.push(userInsuranceResultSet.fieldByName('policy_no'));
	this_insurance_group_name.push(userInsuranceResultSet.fieldByName('group_name'));
	this_insurance_insured.push(userInsuranceResultSet.fieldByName('insured'));
	this_insurance_date.push(userInsuranceResultSet.fieldByName('date'));
	this_insurance_phone_no.push(userInsuranceResultSet.fieldByName('phone_no'));
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	userInsuranceResultSet.next();
}
var count_I = this_insurance_description.length;
userInsuranceResultSet.close();

var userGroupResultSet = conn.execute('SELECT * FROM Groups');
var this_group = [];
this_group.push('All');
while (userGroupResultSet.isValidRow()) {
	this_group.push(userGroupResultSet.fieldByName('groups'));
	userGroupResultSet.next();
}

var count_g = this_group.length;
userGroupResultSet.close();

// alert(this_insurance_description+'      '+this_insurance_policy_no+'    '+this_insurance_group_name+'    '+this_insurance_insured+'  '+this_insurance_date+'   '+this_insurance_phone_no);
var tmp4 = (Titanium.Platform.displayCaps.platformHeight * 6) / 100;
var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var tmp = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.01);
var group_corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.05);
var self = Ti.UI.createScrollView({
	backgroundColor : 'white',
	height : '100%',
	width : '100%'
});
frontview.add(self);
var subself = Ti.UI.createView({
	height : '100%',
	width : '100%'
});
self.add(subself);
var topview = Ti.UI.createView({
	backgroundImage : '/images/header_bg.png',
	width : '100%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '0%'
});
subself.add(topview);
var topImageView = Ti.UI.createImageView({
	image : '/images/appicon.png',
	width : '12%',
	height : '100%',
	right : '0%'
});
topImageView.addEventListener('click', function() {
		var connect_dropBox = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'connect_dropBox.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	connect_dropBox.open();
});
topview.add(topImageView);

var projects = Ti.UI.createPicker({
	//selectionIndicator : true,
	width : '12%',
	height : '100%',
	backgroundColor : '#0055A6',
	backgroundImage : '/images/group_icon.png',
	right : '12.5%',
});

// Add data to the Picker.
var data = [];
for (var i = 0; i < count_g; i++) {
	data[i] = Ti.UI.createPickerRow({
		title : this_group[i],
		custom_item : [i]
	});
}
projects.add(data);
projects.value = 'All';
projects.setSelectedRow(0, 0, false);
// Listen for change events.
projects.addEventListener('change', function(e) {
	group_data = e.row.title;
	coloum = e.row.custom_item;
	if (group_data == 'All' || group_data == '') {
		var userAccountResultSet = conn.execute('SELECT * FROM Account');
	} else {
		var userAccountResultSet = conn.execute('SELECT * FROM Account WHERE groups=?', group_data);
	}
	var this_account_no = [];
	while (userAccountResultSet.isValidRow()) {
		this_account_no.push(userAccountResultSet.fieldByName('account_no'));
		userAccountResultSet.next();
	}
	var account_count = this_account_no.length;
	userAccountResultSet.close();

	if (group_data == 'All') {
		var userBirthdayResultSet = conn.execute('SELECT * FROM Birthday');
	} else {
		var userBirthdayResultSet = conn.execute('SELECT * FROM Birthday WHERE groups=?', group_data);
	}
	var this_birthday_name = [];
	while (userBirthdayResultSet.isValidRow()) {
		this_birthday_name.push(userBirthdayResultSet.fieldByName('name'));
		userBirthdayResultSet.next();
	}
	var birthday_count = this_birthday_name.length;
	userBirthdayResultSet.close();

	if (group_data == 'All') {
		var userCallingcardResultSet = conn.execute('SELECT * FROM Callingcard');
	} else {
		var userCallingcardResultSet = conn.execute('SELECT * FROM Callingcard WHERE groups=?', group_data);
	}
	var this_callingcard_name = [];
	while (userCallingcardResultSet.isValidRow()) {
		this_callingcard_name.push(userCallingcardResultSet.fieldByName('name'));
		userCallingcardResultSet.next();
	}
	var calling_count = this_callingcard_name.length;
	userCallingcardResultSet.close();

	if (group_data == 'All') {
		var userCreditcardResultSet = conn.execute('SELECT * FROM Creditcard');
	} else {
		var userCreditcardResultSet = conn.execute('SELECT * FROM Creditcard WHERE groups=?', group_data);
	}
	var this_creditcard_description = [];
	while (userCreditcardResultSet.isValidRow()) {
		this_creditcard_description.push(userCreditcardResultSet.fieldByName('desception'));
		userCreditcardResultSet.next();
	}
	var credit_count = this_creditcard_description.length;
	userCreditcardResultSet.close();

	if (group_data == 'All') {
		var userInsuranceResultSet = conn.execute('SELECT * FROM Insurance');
	} else {
		var userInsuranceResultSet = conn.execute('SELECT * FROM Insurance WHERE groups=?', group_data);
	}
	var this_insurance_description = [];
	while (userInsuranceResultSet.isValidRow()) {
		this_insurance_description.push(userInsuranceResultSet.fieldByName('desception'));
		userInsuranceResultSet.next();
	}
	var insurance_count = this_insurance_description.length;
	userInsuranceResultSet.close();

	account_text.text = '(' + account_count + ')', birthday_text.text = '(' + birthday_count + ')', calling_text.text = '(' + calling_count + ')', credit_text.text = '(' + credit_count + ')', insurance_text.text = '(' + insurance_count + ')'
	Ti.App.Properties.setString('group', group_data);
	Ti.App.Properties.setString('col', coloum);

});
// Add to the parent view.
topview.add(projects);

var Plus = Ti.UI.createView({
	backgroundColor : '#0055A6',
	width : '12%',
	height : '100%',
	right : '25%'
});
Plus.addEventListener('click', function() {
	subself.add(groupself);
});
topview.add(Plus);
var topImageView4 = Ti.UI.createImageView({
	image : '/images/group_plus.png',
	backgroundColor : '#0055A6',
	width : '70%',
	height : '70%',
});
Plus.add(topImageView4);

var toptext = Ti.UI.createLabel({
	text : 'Security',
	color : 'white',
	font : {
		fontSize : tmp3,
		fontWeight : 'bold'
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
});
// Add to the parent view.
topview.add(toptext);

var accountview = Ti.UI.createView({
	width : '100%',
	height : '7%',
	backgroundColor : '#0054A5',
	top : '10%'
});
accountview.addEventListener('click', function() {

});

subself.add(accountview);
// Create an ImageView.
var arrowImageView = Ti.UI.createImageView({
	image : '/images/arrow.png',
	width : '5%',
	height : '45%',
	top : '40%',
	left : '3%'
});
arrowImageView.addEventListener('click', function() {

});
// Add to the parent view.
accountview.add(arrowImageView);
// Create a Label.
var maintext = Ti.UI.createLabel({
	text : 'Bank Account',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '15%',
});
// Add to the parent view.
accountview.add(maintext);

var account_text = Ti.UI.createLabel({
	text : '(' + count + ')',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	right : '2%',
});
accountview.add(account_text);
// Create a Button.
var Add = Ti.UI.createButton({
	backgroundColor : '#001969',
	title : 'Add',
	height : '80%',
	font : {
		fontSize : tmp
	},
	width : '18%',
	right : '13%',
	color : 'white',
	borderRadius : corner,
	borderWidth : '0%'
});
// Listen for click events.
Add.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', true);
	var addaccount = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'addaccount.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	addaccount.open();
});
// Add to the parent view.
accountview.add(Add);
// Add to the parent view.

var accountsubview = Ti.UI.createView({
	width : '100%',
	height : '11%',
	backgroundColor : 'white',
	top : '17%'
});
accountsubview.addEventListener('click', function() {
	var openaccount = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'openaccount.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	openaccount.open();
});
subself.add(accountsubview);
var subImageView = Ti.UI.createImageView({
	image : '/images/account_icon.png',
	width : '10%',
	height : '60%',
	left : '3%',
	top : '20%'
});
subImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
accountsubview.add(subImageView);

var text = Ti.UI.createLabel({
	text : 'My bank account',
	color : 'black',
	font : {
		fontSize : tmp1,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '20%',
});

// Add to the parent view.
accountsubview.add(text);

var birthdayview = Ti.UI.createView({
	width : '100%',
	height : '7%',
	backgroundColor : '#0054A5',
	top : '28%'
});

subself.add(birthdayview)
// Create an ImageView.
var arrowImageView = Ti.UI.createImageView({
	image : '/images/arrow.png',
	width : '5%',
	height : '45%',
	top : '40%',
	left : '3%'
});
arrowImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
birthdayview.add(arrowImageView);
// Create a Label.
var maintext = Ti.UI.createLabel({
	text : 'Birthday',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '15%',
});

// Add to the parent view.
birthdayview.add(maintext);

var birthday_text = Ti.UI.createLabel({
	text : '(' + count_b + ')',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	right : '2%',
});

// Add to the parent view.
birthdayview.add(birthday_text);

// Create a Button.
var Add = Ti.UI.createButton({
	backgroundColor : '#001969',
	title : 'Add',
	height : '80%',
	font : {
		fontSize : tmp
	},
	width : '18%',
	right : '13%',
	color : 'white',
	borderRadius : corner,
	borderWidth : '0%'
});
// Listen for click events.
Add.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', true);
	var addbirthday = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'addbirthday.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	addbirthday.open();
});
// Add to the parent view.
birthdayview.add(Add);

var birthdaysubview = Ti.UI.createView({
	width : '100%',
	height : '11%',
	backgroundColor : 'white',
	top : '35%'
});
birthdaysubview.addEventListener('click', function() {
	var openbirthday = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'openbirthday.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	openbirthday.open();
});
subself.add(birthdaysubview);
var subImageView = Ti.UI.createImageView({
	image : '/images/birthday_icon.png',
	width : '10%',
	height : '60%',
	left : '3%',
	top : '20%'
});
subImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
birthdaysubview.add(subImageView);

var text = Ti.UI.createLabel({
	text : 'My Birthday',
	color : 'black',
	font : {
		fontSize : tmp1,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '20%',
});

// Add to the parent view.
birthdaysubview.add(text);

var callingcardview = Ti.UI.createView({
	width : '100%',
	height : '7%',
	backgroundColor : '#0054A5',
	top : '46%'
});
var businesswindow;
callingcardview.addEventListener('click', function() {
	// var businesswindow = Ti.UI.createWindow({
	// backgroundColor:'white',
	// url:'ui/common/business.js',
	// modal: true,
	// fullscreen : true,
	// navBarHidden : true,
	// });
	// businesswindow.open();
});

subself.add(callingcardview)
// Create an ImageView.
var arrowImageView = Ti.UI.createImageView({
	image : '/images/arrow.png',
	width : '5%',
	height : '45%',
	top : '40%',
	left : '3%'
});
arrowImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
callingcardview.add(arrowImageView);
// Create a Label.
var maintext = Ti.UI.createLabel({
	text : 'Calling Card',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '15%',
});

// Add to the parent view.
callingcardview.add(maintext);

var calling_text = Ti.UI.createLabel({
	text : '(' + count_C + ')',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	right : '2%',
});

// Add to the parent view.
callingcardview.add(calling_text);

// Create a Button.
var Add = Ti.UI.createButton({
	backgroundColor : '#001969',
	title : 'Add',
	height : '80%',
	font : {
		fontSize : tmp
	},
	width : '18%',
	right : '13%',
	color : 'white',
	borderRadius : corner,
	borderWidth : '0%'
});
// Listen for click events.
Add.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', true);
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
callingcardview.add(Add);

var callingcardsubview = Ti.UI.createView({
	width : '100%',
	height : '11%',
	backgroundColor : 'white',
	top : '53%'
});
callingcardsubview.addEventListener('click', function() {
	var opencallingcard = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'opencallingcard.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	opencallingcard.open();
});
subself.add(callingcardsubview);
var subImageView = Ti.UI.createImageView({
	image : '/images/calling_icon.png',
	width : '10%',
	height : '60%',
	left : '3%',
	top : '20%'
});
subImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
callingcardsubview.add(subImageView);

var text = Ti.UI.createLabel({
	text : 'My Calling Card',
	color : 'black',
	font : {
		fontSize : tmp1,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '20%',
});

// Add to the parent view.
callingcardsubview.add(text);

var carditcardview = Ti.UI.createView({
	width : '100%',
	height : '7%',
	backgroundColor : '#0054A5',
	top : '64%'
});
carditcardview.addEventListener('click', function() {
	// var creditwindow = Ti.UI.createWindow({
	// backgroundColor:'white',
	// url:'ui/common/credit.js',
	// modal: true,
	// fullscreen : true,
	// navBarHidden : true,
	// });
	// creditwindow.open();
});
subself.add(carditcardview)
// Create an ImageView.
var arrowImageView = Ti.UI.createImageView({
	image : '/images/arrow.png',
	width : '5%',
	height : '45%',
	top : '40%',
	left : '3%'
});
arrowImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
carditcardview.add(arrowImageView);
// Create a Label.
var maintext = Ti.UI.createLabel({
	text : 'Credit Card',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '15%',
});

// Add to the parent view.
carditcardview.add(maintext);

var credit_text = Ti.UI.createLabel({
	text : '(' + count_Cr + ')',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	right : '2%',
});
carditcardview.add(credit_text);
// Create a Button.
var Add = Ti.UI.createButton({
	backgroundColor : '#001969',
	title : 'Add',
	height : '80%',
	font : {
		fontSize : tmp
	},
	width : '18%',
	right : '13%',
	color : 'white',
	borderRadius : corner,
	borderWidth : '0%'
});
// Listen for click events.
Add.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', true);
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
carditcardview.add(Add);
var carditcardsubview = Ti.UI.createView({
	width : '100%',
	height : '11%',
	backgroundColor : 'white',
	top : '71%'
});
carditcardsubview.addEventListener('click', function() {
	var opencreditcard = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'opencreditcard.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	opencreditcard.open();
});
subself.add(carditcardsubview);
var subImageView = Ti.UI.createImageView({
	image : '/images/credit_icon.png',
	width : '10%',
	height : '60%',
	left : '3%',
	top : '20%'
});
subImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
carditcardsubview.add(subImageView);

var text = Ti.UI.createLabel({
	text : 'My Credit Card',
	color : 'black',
	font : {
		fontSize : tmp1,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '20%',
});

// Add to the parent view.
carditcardsubview.add(text);

var insuranceview = Ti.UI.createView({
	width : '100%',
	height : '7%',
	backgroundColor : '#0054A5',
	top : '82%'
});

subself.add(insuranceview)
// Create an ImageView.
var arrowImageView = Ti.UI.createImageView({
	image : '/images/arrow.png',
	width : '5%',
	height : '45%',
	top : '40%',
	left : '3%'
});
arrowImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
insuranceview.add(arrowImageView);
// Create a Label.
var maintext = Ti.UI.createLabel({
	text : 'Insurance',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '15%',
});

// Add to the parent view.
insuranceview.add(maintext);

var insurance_text = Ti.UI.createLabel({
	text : '(' + count_I + ')',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	right : '2%',
});

// Add to the parent view.
insuranceview.add(insurance_text);

var Add = Ti.UI.createButton({
	backgroundColor : '#001969',
	title : 'Add',
	height : '80%',
	font : {
		fontSize : tmp
	},
	width : '18%',
	right : '13%',
	color : 'white',
	borderRadius : corner,
	borderWidth : '0%'
});
// Listen for click events.
Add.addEventListener('click', function() {
	Ti.App.Properties.setBool('add', true);
	var addinsurance = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'addinsurance.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	addinsurance.open();
});
// Add to the parent view.
insuranceview.add(Add);
var insurancesubview = Ti.UI.createView({
	width : '100%',
	height : '11%',
	backgroundColor : 'white',
	top : '89%'
});
insurancesubview.addEventListener('click', function() {
	var openInsurance = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'openInsurance.js',
		modal : true,
		fullscreen : true,
		navBarHidden : true,
	});
	openInsurance.open();
});
subself.add(insurancesubview);
var subImageView = Ti.UI.createImageView({
	image : '/images/insurance_icon.png',
	width : '10%',
	height : '60%',
	left : '3%',
	top : '20%'
});
subImageView.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
});
// Add to the parent view.
insurancesubview.add(subImageView);

var text = Ti.UI.createLabel({
	text : 'My Insurance',
	color : 'black',
	font : {
		fontSize : tmp1,
		fontWeight : 'bold',
	},
	height : 'auto',
	width : 'auto',
	left : '20%',
});

// Add to the parent view.
insurancesubview.add(text);

//************************************************************************************************************************************

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
	height : '55%',
	width : '86%',
	left : '7%',
	borderColor : '#B7B7B7',
	borderWidth : border
});
passwoedself.add(nextview);

var nextsubview1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '20%',
	width : '100%',
	top : '0%',
	left : '0%',
});
nextview.add(nextsubview1);
var text = Ti.UI.createLabel({
	text : 'Create Group',
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
	image : '/images/group_icon.png',
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
	subself.remove(groupself);
});
nextsubview1.add(topleftImageView);

var nextsubview2 = Ti.UI.createView({
	height : '20%',
	width : '86%',
	top : '30%'
});
nextview.add(nextsubview2);

// Create a TextField.
var group_edit = Ti.UI.createTextField({
	value : '',
	height : '100%',
	width : '100%',
	font : {
		fontSize : tmp3
	},
	hintText : 'Group name',
	borderColor : '#0054A5',
	borderRadius : corner,
	borderWidth : '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
group_edit.addEventListener('return', function(e) {
	group_edit.blur();
});
// Add to the parent view.
nextsubview2.add(group_edit);

var nextsubview3 = Ti.UI.createView({
	height : '20%',
	width : '86%',
	bottom : '10%'
});
nextview.add(nextsubview3);

// Create a Button.
var Create = Ti.UI.createButton({
	title : 'Create',
	height : '100%',
	width : '40%',
	right : '0%',
	font : {
		fontSize : tmp3
	},
	backgroundColor : '#0054A5',
	color : 'white'

});

// Listen for click events.
Create.addEventListener('click', function() {

	var data = projects.columns[0];
	var len = data.rowCount;
	for (var x = len - 1; x >= 0; x--) {
		var row = data.rows[x]
		data.removeRow(row);
	}

	var theData = conn.execute('INSERT INTO Groups (groups) VALUES(?)', group_edit.value);
	var userGroupResultSet = conn.execute('SELECT * FROM Groups');
	var this_group = [];
	while (userGroupResultSet.isValidRow()) {
		this_group.push(userGroupResultSet.fieldByName('groups'));
		userGroupResultSet.next();
	}

	count_g = this_group.length;
	userGroupResultSet.close();

	// Add data to the Picker.
	data = [];
	for (var i = 0; i < count_g; i++) {
		data[i] = Ti.UI.createPickerRow({
			title : this_group[i],
			custom_item : [i]
		});
	}
	projects.add(data);
	subself.remove(groupself);
});

// Add to the parent view.
nextsubview3.add(Create);

var Cancel = Ti.UI.createButton({
	title : 'Cancel',
	height : '100%',
	width : '40%',
	left : '0%',
	font : {
		fontSize : tmp3
	},
	backgroundColor : '#0054A5',
	color : 'white'

});

// Listen for click events.
Cancel.addEventListener('click', function() {
	subself.remove(groupself);
});

// Add to the parent view.
nextsubview3.add(Cancel);
