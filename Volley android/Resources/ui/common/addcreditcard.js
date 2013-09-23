var addcreditcard=Ti.UI.currentWindow;

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
var crdes = Ti.App.Properties.getString('des');
var crcar = Ti.App.Properties.getString('car');
var crexp = Ti.App.Properties.getString('exp');
var crnam = Ti.App.Properties.getString('nam');
var crpinss = Ti.App.Properties.getString('pinss');
var crban = Ti.App.Properties.getString('ban');

var group_data='Unassigned';

	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.01);
	var descreption='';
	var card_no='';
	var expiration_date='';
	var name='';
	var pin='';
	var bank='';
	
		var subself = Ti.UI.createView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
		addcreditcard.add(subself);
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
		addcreditcard.close();
	});
	// Add to the parent view.
	topview.add(backImageView);
	
var border = Math.round(Ti.Platform.displayCaps.platformWidth*0.005);
var nextview = Ti.UI.createView({
	backgroundColor:'white',
		height : '85%',
		width : '86%',
		top:'10%',
		left:'7%',
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
		text : 'Enter Credit Card Detail',
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
		width:'7%',
		height : '70%',
		right : '3%',
	});
	nextsubview1.add(typrImageView);
	
var nextmainview=Ti.UI.createScrollView({
	height:'auto',
	width:'100%',
	top:'10%',
	layout:'vertical'
});
nextview.add(nextmainview)
var creditName = Ti.UI.createLabel({
	text : 'Description',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '1%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(creditName);


// Create a TextField.
var creditName_edit = Ti.UI.createTextField({
	height : 'auto',
	//top : '6%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Description',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
creditName_edit.addEventListener('return', function(e) {
});

// Add to the parent view.
nextmainview.add(creditName_edit);

var card_number = Ti.UI.createLabel({
	text : 'Card number',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '15%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(card_number);


// Create a TextField.
var card_number_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '23%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Card number',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
card_number_edit.addEventListener('return', function(e) {
});
// Add to the parent view.
nextmainview.add(card_number_edit);

var Expiration_date = Ti.UI.createLabel({
	text : 'Expiration date',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '33%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Expiration_date);


// Create a TextField.
var Expiration_date_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '39%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Expiration date',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Expiration_date_edit.addEventListener('return', function(e) {
});
// Add to the parent view.
nextmainview.add(Expiration_date_edit);

var Name = Ti.UI.createLabel({
	text : 'Name',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '49%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Name);

// Create a TextField.
var Name_edit = Ti.UI.createTextField({
	height : 'auto',
	//top : '55%',
	left :'4%',
	width : '92%',
	hintText : 'Name',
	font : {fontSize:tmp},
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Name_edit.addEventListener('return', function(e) {
});
// Add to the parent view.
nextmainview.add(Name_edit);

var Pin = Ti.UI.createLabel({
	text : 'Pin',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '65%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Pin);


// Create a TextField.
var Pin_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '71%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Pin',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Pin_edit.addEventListener('return', function(e) {
});
// Add to the parent view.
nextmainview.add(Pin_edit);

var Bank_Name = Ti.UI.createLabel({
	text : 'Bank Name',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '81%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Bank_Name);


// Create a TextField.
var Bank_Name_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '87%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Bank Name',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Bank_Name_edit.addEventListener('return', function(e) {
	Bank_Name_edit.blur();
});
// Add to the parent view.
nextmainview.add(Bank_Name_edit);

var blank = Ti.UI.createLabel({
	text : ' ',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '81%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(blank);

var projects = Ti.UI.createPicker({
	selectionIndicator : true,
	width : '92%',
	height : 'auto',
	left:'4%',
});

// Add data to the Picker.
var data = [];

for(var i=0;i<count_g;i++){
	data[i] = Ti.UI.createPickerRow({title:this_group[i]});
}
projects.add(data);

// Listen for change events.
projects.addEventListener('change', function(e) {
	group_data=e.row.title;
	//alert('You selected: row:' + e.row.title + ', column: ' + e.column + ', custom_item: ' + e.row.custom_item);
});

// Add to the parent view.
nextmainview.add(projects);
// Create a Button.
var Submitbtn = Ti.UI.createButton({
	backgroundColor:'#0054A5',
	title : 'Submit',
	color:'white',
		font : {
		fontSize : tmp
	},
	height : '8%',
	width : '40%',
	//top:'97%'
});

// Listen for click events.
Submitbtn.addEventListener('click', function() {
	descreption=creditName_edit.value;
	card_no=card_number_edit.value;
	expiration_date=Expiration_date_edit.value;
	name=Name_edit.value;
	pin=Pin_edit.value;
	bank=Bank_Name_edit.value;	
	//	 if(account_no!=''||bank_name!=''){
		 var conn = Ti.Database.install('/Security.sqlite', 'Security');
// this is correct
if(add){
var theData = conn.execute('INSERT INTO Creditcard (desception,card_no,expiration_date,name,pin,bank,groups) VALUES(?,?,?,?,?,?,?)',descreption,card_no,expiration_date,name,pin,bank,group_data);
}else{
	var theData = conn.execute('UPDATE Creditcard SET desception=?,card_no=?,expiration_date=?,name=?,pin=?,bank=?,groups=? WHERE rowid=?', descreption, card_no, expiration_date, name, pin, bank, group_data, rowid);
}
	var frontview=Ti.UI.createWindow({
			backgroundColor:'white',
			url:'ui/common/FrontView.js'
		});
		frontview.open();
});
// Add to the parent view.
nextmainview.add(Submitbtn);
var blank1 = Ti.UI.createLabel({
	text : ' ',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '81%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(blank1);

if (add) {
	creditName_edit.setvalue = '';
	card_number_edit.setValue = '';
	Expiration_date_edit.setvalue = '';
	Name_edit.setValue = '';
	Pin_edit.setvalue = '';
	Bank_Name_edit.setValue = '';
	projects.setValue='';
	
} else {
	creditName_edit.value = crdes;
	card_number_edit.value = crcar;
	Expiration_date_edit.value = crexp;
	Name_edit.value = crnam;
	Pin_edit.value = crpinss;
	Bank_Name_edit.value = crban;
	projects.setSelectedRow(0, coloumn, false);
	projects.value=groupss;
}
