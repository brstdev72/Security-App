addaccount = Ti.UI.currentWindow;

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume');
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	addaccount.add(firstView);
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	addaccount.add(firstView);
});

var conn = Ti.Database.install('/Security.sqlite', 'Security');
var userGroupResultSet = conn.execute('SELECT * FROM Groups');
var this_group = [];
while (userGroupResultSet.isValidRow()) {
	this_group.push(userGroupResultSet.fieldByName('groups'));
	userGroupResultSet.next();
}

var add = Ti.App.Properties.getBool('add');
var rowids=Ti.App.Properties.getString('row');
var groupss=Ti.App.Properties.getString('groupss');
var coloumn='';
var rowid=parseInt(rowids)+1;
var accountNo = Ti.App.Properties.getString('acNo');
var bankName = Ti.App.Properties.getString('baName');

coloumn=this_group.indexOf(groupss);
var count_g = this_group.length;
userGroupResultSet.close();

var group_data='Unassigned';

var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var tmp = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var account_no = '';
var bank_name = '';

var self = Ti.UI.createScrollView({
	height : '100%',
	width : '100%',
	
});
addaccount.add(self);
var subself = Ti.UI.createView({
	height : '100%',
	width : '100%',
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
		fontWeight : 'bold'
	},
	height : 'auto',
	width : 'auto',
	left : '3%',
});
// Add to the parent view.
topview.add(toptext);

var backImageView = Ti.UI.createImageView({
	image : '/images/back_icon2.png',
	width : '7%',
	height : '60%',
	right : '18%',
});
backImageView.addEventListener('click', function() {
	addaccount.close();
});
// Add to the parent view.
topview.add(backImageView);

var border = Math.round(Ti.Platform.displayCaps.platformWidth * 0.005);
var nextview = Ti.UI.createView({
	backgroundColor : 'white',
	height : '87%',
	width : '92%',
	top : '10%',
	left : '4%',
	borderColor : '#B7B7B7',
	borderWidth : border
});
subself.add(nextview);
var nextsubview1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '9%',
	width : '100%',
	top : '0%',
	left : '0%',
});
nextview.add(nextsubview1);
var text = Ti.UI.createLabel({
	text : 'Enter Bank Account Detail',
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
	image : '/images/type_icon.png',
	width : '7%',
	height : '70%',
	right : '3%',
});
nextsubview1.add(typrImageView);

var subnextview = Ti.UI.createScrollView({
	backgroundColor : 'white',
	height : '62%',
	width : '90%',
	top : '20%',
	left : '5%',
	layout:'vertical'
});
subself.add(subnextview);

var account_number = Ti.UI.createLabel({
	text : 'Bank account number',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	//top : '20%',
	left : '2%',
});
// Add to the parent view.
subnextview.add(account_number);

// Create a TextField.
var account_number_edit = Ti.UI.createTextField({
	value : '',
	height : 'auto',
	//top : '25%',
	width : '96%',
	font : {
		fontSize : tmp
	},
	hintText : 'Bank account number',
	borderColor : '#0054A5',
	borderRadius : corner,
	borderWidth : '1%',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
account_number_edit.addEventListener('return', function(e) {
	
});

// Add to the parent view.
subnextview.add(account_number_edit);

var Bank_Name = Ti.UI.createLabel({
	text : 'Bank name',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	//top : '36%',
	left : '2%',
});
// Add to the parent view.
subnextview.add(Bank_Name);

// Create a TextField.
var Bank_Name_edit = Ti.UI.createTextField({
	value : '',
	height : 'auto',
	//top : '41%',
	width : '96%',
	font : {
		fontSize : tmp
	},
	hintText : 'Bank name',
	borderColor : '#0054A5',
	borderRadius : corner,
	borderWidth : '1%',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Bank_Name_edit.addEventListener('return', function(e) {
	account_number_edit.blur();
});
// Add to the parent view.
subnextview.add(Bank_Name_edit);

var groupaccount = Ti.UI.createLabel({
	text : 'Group',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	//top : '20%',
	left : '2%',
});
// Add to the parent view.
subnextview.add(groupaccount);

var projects = Ti.UI.createPicker({
	selectionIndicator : true,
	width : '96%',
	height : 'auto',
});

// Add data to the Picker.
var data = [];

for(var i=0;i<count_g;i++){
	data[i] = Ti.UI.createPickerRow({title:this_group[i],custom_item:[i]});
}
projects.add(data);

// Listen for change events.
projects.addEventListener('change', function(e) {
	group_data=e.row.title;
	coloum=e.row.custom_item;
	//alert('You selected: row:' + e.row.title + ', column: ' + e.column + ', custom_item: ' + e.row.custom_item);
});

// Add to the parent view.
subnextview.add(projects);

// Create a Button.
var Submitbtn = Ti.UI.createButton({
	backgroundColor : '#0054A5',
	backgroundImage: 'none',
	title : 'Submit',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : '8%',
	width : '30%',
	bottom : '5%'
});
// Listen for click events.
Submitbtn.addEventListener('click', function() {
	account_no = account_number_edit.value;
	bank_name = Bank_Name_edit.value;
	//	 if(account_no!=''||bank_name!=''){
	var conn = Ti.Database.install('/Security.sqlite', 'Security');
	// this is correct
	if(add){
	var theData = conn.execute('INSERT INTO Account (account_no,bank_name,groups) VALUES(?,?,?)', account_no, bank_name,group_data);
	}else{
		var theData = conn.execute('UPDATE Account SET account_no=?,bank_name=?,groups=? WHERE rowid=?',account_no,bank_name,group_data,rowid);
	}
	var frontview = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : Ti.Filesystem.resourcesDirectory +'ui/common/FrontView.js'
	});
	frontview.open();
});
nextview.add(Submitbtn);

if (add) {
	account_number_edit.setvalue = '';
	Bank_Name_edit.setValue = '';
	//projects.setValue='';
	
} else {
	account_number_edit.value = accountNo;
	Bank_Name_edit.value = bankName;
	projects.setSelectedRow(0, coloumn, false);
	//projects.value=groupss;
}
