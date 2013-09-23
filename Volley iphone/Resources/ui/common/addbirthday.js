var addbirthday = Ti.UI.currentWindow;

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume');
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	addbirthday.add(firstView);
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	addbirthday.add(firstView);
});

var conn = Ti.Database.install('/Security.sqlite', 'Security');
var userGroupResultSet = conn.execute('SELECT * FROM Groups');
var this_group = [];
while (userGroupResultSet.isValidRow()) {
	this_group.push(userGroupResultSet.fieldByName('groups'));
	userGroupResultSet.next();
}

var count_g = this_group.length;
userGroupResultSet.close();


var add = Ti.App.Properties.getBool('add');
var rowids = Ti.App.Properties.getString('row');
var rowid = parseInt(rowids) + 1;
var groupss = Ti.App.Properties.getString('grou');
var coloumn=this_group.indexOf(groupss);
var Bnamne = Ti.App.Properties.getString('nam');
var bdate = Ti.App.Properties.getString('dat');

var group_data='Unassigned';

var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var tmp = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var name = '';
var date = '';
var dat ='';
var self = Ti.UI.createView({
	backgroundColor : 'white',
	height : '100%',
	width : '100%'
});
addbirthday.add(self);
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
	addbirthday.close();
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
	text : 'Enter Birthday Detail',
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

var Name = Ti.UI.createLabel({
	text : 'Name',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	//top : '20%',
	left : '2%',
});
// Add to the parent view.
subnextview.add(Name);

// Create a TextField.
var Name_edit = Ti.UI.createTextField({
	height : 'auto',
	//top : '25%',
	left : '2%',
	width : '96%',
	font : {
		fontSize : tmp
	},
	hintText : 'Name',
	borderColor : '#0054A5',
	borderRadius : corner,
	borderWidth : '1%',
	////softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Name_edit.addEventListener('return', function(e) {
});

// Add to the parent view.
subnextview.add(Name_edit);

var Birthday_Date = Ti.UI.createLabel({
	text : 'Birthday Date',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	//top : '36%',
	left : '2%',
});
// Add to the parent view.
subnextview.add(Birthday_Date);

// // Create a TextField.
// var Birthday_Date_edit = Ti.UI.createTextField({
	// height : 'auto',
	// top : '41%',
	// left : '10%',
	// width : '80%',
	// font : {
		// fontSize : tmp
	// },
	// hintText : 'Birthday Date',
	// borderColor : '#0054A5',
	// borderRadius : corner,
	// borderWidth : '1%',
	// //softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	// keyboardType : Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	// returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	// borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
// });
// 
// // Listen for return events.
// Birthday_Date_edit.addEventListener('return', function(e) {
	// Birthday_Date_edit.blur();
// });
// // Add to the parent view.
// subself.add(Birthday_Date_edit);

var value = new Date();

var picker = Ti.UI.createPicker({
	//top:'43%', 
	type : Ti.UI.PICKER_TYPE_DATE,
	value : value
});
var newdate='';
picker.addEventListener('change', function(e) {
	var pickerdate = e.value;
	var day = pickerdate.getDate();
	var months = pickerdate.getMonth();
	var month=months+parseInt('1');
	var year = pickerdate.getFullYear();
	newdate = day + "/" + month + "/" + year;
});

subnextview.add(picker);

var Birthday_group = Ti.UI.createLabel({
	text : 'Group',
	color : '#0054A5',
	font : {
		fontSize : tmp
	},
	//top : '36%',
	left : '2%',
});
// Add to the parent view.
subnextview.add(Birthday_group);

var projects = Ti.UI.createPicker({
	selectionIndicator : true,
	height : 'auto',
});

// Add data to the Picker.
var data = [];

for (var i = 0; i < count_g; i++) {
	data[i] = Ti.UI.createPickerRow({
		title : this_group[i]
	});
}
projects.add(data);

// Listen for change events.
projects.addEventListener('change', function(e) {
	group_data = e.row.title;
	//alert('You selected: row:' + e.row.title + ', column: ' + e.column + ', custom_item: ' + e.row.custom_item);
});

subnextview.add(projects);

// Add to the parent view.

// Create a Button.
var Submitbtn = Ti.UI.createButton({
	backgroundColor : '#0054A5',
	backgroundImage:'none',
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
	name = Name_edit.value;
	var pickerdate = picker.value;
	var day = pickerdate.getDate();
	var months = pickerdate.getMonth();
	var month=months+parseInt('1');
	var year = pickerdate.getFullYear();
	    newdate = day + "/" + month + "/" + year;
	date= newdate;
	//	 if(account_no!=''||bank_name!=''){
	var conn = Ti.Database.install('/Security.sqlite', 'Security');
	// this is correct
	if (add) {
		var theData = conn.execute('INSERT INTO Birthday (name,date,groups) VALUES(?,?,?)', name, date, group_data);
	} else {
		var theData = conn.execute('UPDATE Birthday SET name=?,date=?,groups=? WHERE rowid=?', name, date, group_data, rowid);
	}
	var frontview = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : Ti.Filesystem.resourcesDirectory +'ui/common/FrontView.js'
	});
	frontview.open();
});
// Add to the parent view.
nextview.add(Submitbtn);

if (add) {
	Name_edit.setvalue = '';
	//Birthday_Date_edit.setValue = '';
	//projects.setValue = '';
} else {
	var convertdate=bdate;
	var dates=[];
	dates=convertdate.split('/')
	var day=dates[0];
	
	var months=dates[1];
	var month=months-parseInt('1');
	var year=dates[2];

	Name_edit.value = Bnamne;
	var value = new Date();
	value.setFullYear(year);
	value.setMonth(month);
	value.setDate(day);
	picker.value = value;
	projects.setSelectedRow(0, coloumn, false);
	// projects.value = groupss;
}
