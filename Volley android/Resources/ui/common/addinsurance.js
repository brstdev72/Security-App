var addinsurance=Ti.UI.currentWindow;

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
var desc = Ti.App.Properties.getString('desc');
var poli = Ti.App.Properties.getString('poli');
var grou = Ti.App.Properties.getString('grou');
var coloumn=this_group.indexOf(groupss);
var insu = Ti.App.Properties.getString('insu');
var datess = Ti.App.Properties.getString('datess');
var phon = Ti.App.Properties.getString('phon');

var group_data='Unassigned';

	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.01);
		var descreption='';
		var policy_no='';
	 	var group_name='';
		var insured='';
		var date='';
		var phone_no=''; 
		var subself = Ti.UI.createView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
		addinsurance.add(subself);
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
		addinsurance.close();
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
		text : 'Enter Insurance Detail',
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
var Name = Ti.UI.createLabel({
	text : 'Description',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '1%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Name);


// Create a TextField.
var Name_edit = Ti.UI.createTextField({
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
Name_edit.addEventListener('return', function(e) {
});

// Add to the parent view.
nextmainview.add(Name_edit);

var Policy_number = Ti.UI.createLabel({
	text : 'Policy number',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '15%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Policy_number);


// Create a TextField.
var Policy_number_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '23%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Policy number',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Policy_number_edit.addEventListener('return', function(e) {

});
// Add to the parent view.
nextmainview.add(Policy_number_edit);

var Group_name = Ti.UI.createLabel({
	text : 'Group name',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '33%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Group_name);


// Create a TextField.
var Group_name_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '39%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Group name',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Group_name_edit.addEventListener('return', function(e) {

});
// Add to the parent view.
nextmainview.add(Group_name_edit);

var Insured = Ti.UI.createLabel({
	text : 'Insured',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '49%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Insured);


// Create a TextField.
var Insured_edit = Ti.UI.createTextField({
	height : 'auto',
	//top : '55%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Insured',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Insured_edit.addEventListener('return', function(e) {
});
// Add to the parent view.
nextmainview.add(Insured_edit);

var Datetext = Ti.UI.createLabel({
	text : 'Date',
	color : '#0054A5',
	font : {fontSize:tmp},
	//top : '65%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Datetext);


// Create a TextField.
var Datetext_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '71%',
	left :'4%',
	width : '92%',
	hintText : 'Date',
	font : {fontSize:tmp},
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Datetext_edit.addEventListener('return', function(e) {

});
// Add to the parent view.
nextmainview.add(Datetext_edit);

var Phone_number = Ti.UI.createLabel({
	text : 'Phone number',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '81%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(Phone_number);


// Create a TextField.
var Phone_number_edit = Ti.UI.createTextField({
	height : 'auto',
//	top : '87%',
	left :'4%',
	width : '92%',
	font : {fontSize:tmp},
	hintText : 'Phone number',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Phone_number_edit.addEventListener('return', function(e) {
	Phone_number_edit.blur();
});
// Add to the parent view.
nextmainview.add(Phone_number_edit);

var blank = Ti.UI.createLabel({
	text : ' ',
	color : '#0054A5',
	font : {fontSize:tmp},
//	top : '81%',
	left : '4%',
});
// Add to the parent view.
nextmainview.add(blank);
// Create a Button.

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
	descreption=Name_edit.value;
	policy_no=Policy_number_edit.value;
	group_name=Group_name_edit.value;
	insured=Insured_edit.value;
	date=Datetext_edit.value;
	phone_no=Phone_number_edit.value; 
			
	//	 if(account_no!=''||bank_name!=''){
		 var conn = Ti.Database.install('/Security.sqlite', 'Security');
// this is correct
if(add){
var theData = conn.execute('INSERT INTO Insurance (desception,policy_no,group_name,insured,date,phone_no,groups) VALUES(?,?,?,?,?,?,?)',descreption,policy_no,group_name,insured,date,phone_no,group_data);
	}else{
	var theData = conn.execute('UPDATE Insurance SET desception=?,policy_no=?,group_name=?,insured=?,date=?,phone_no=?, groups=? WHERE rowid=?', descreption, policy_no, group_name, insured, date, phone_no , group_data ,rowid);
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
	Name_edit.setvalue = '';
	Policy_number_edit.setValue = '';
	Group_name_edit.setvalue = '';
	Insured_edit.setValue = '';
	Datetext_edit.setvalue = '';
	Phone_number_edit.setValue = '';
	projects.setValue='';
	
} else {
	Name_edit.value = desc;
	Policy_number_edit.value = poli;
	Group_name_edit.value = grou;
	Insured_edit.value = insu;
	Datetext_edit.value = datess;
	Phone_number_edit.value = phon;
	projects.setSelectedRow(0, coloumn, false);
	projects.value=groupss;
}
