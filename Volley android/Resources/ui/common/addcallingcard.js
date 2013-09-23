var addcallingcard=Ti.UI.currentWindow;

var conn = Ti.Database.install('/Security.sqlite', 'Security');
var userGroupResultSet = conn.execute('SELECT * FROM Groups');
var this_group = [];
while (userGroupResultSet.isValidRow()) {
	this_group.push(userGroupResultSet.fieldByName('groups'));
	userGroupResultSet.next();
}

var add = Ti.App.Properties.getBool('add');
var rowids = Ti.App.Properties.getString('row');
var groupss = Ti.App.Properties.getString('grou');
var coloumn=this_group.indexOf(groupss);
var rowid = parseInt(rowids) + 1;
var caamne = Ti.App.Properties.getString('names');
var caaccess = Ti.App.Properties.getString('accessss');

var count_g = this_group.length;
userGroupResultSet.close();

var group_data='Unassigned';

	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.01);
	var name='';
	var access_no='';
var self = Ti.UI.createScrollView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
	addcallingcard.add(self);
		var subself = Ti.UI.createView({
		height : '100%',
		width : '100%'
	});
		self.add(subself);
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
		addcallingcard.close();
	});
	// Add to the parent view.
	topview.add(backImageView);
	
var border = Math.round(Ti.Platform.displayCaps.platformWidth*0.005);
var nextview = Ti.UI.createView({
	backgroundColor:'white',
		height : '80%',
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
		text : 'Enter Calling Card Detail',
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
	

var Name = Ti.UI.createLabel({
	text : 'Name',
	color : '#0054A5',
	font : {fontSize:tmp},
	top : '20%',
	left : '10%',
});
// Add to the parent view.
subself.add(Name);


// Create a TextField.
var Name_edit = Ti.UI.createTextField({
	height : 'auto',
	top : '25%',
	left :'10%',
	width : '80%',
	font : {fontSize:tmp},
	hintText : 'Name',
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
subself.add(Name_edit);

var Access_number = Ti.UI.createLabel({
	text : 'Access number',
	color : '#0054A5',
	font : {fontSize:tmp},
	top : '36%',
	left : '10%',
});
// Add to the parent view.
subself.add(Access_number);


// Create a TextField.
var Access_number_edit = Ti.UI.createTextField({
	height : 'auto',
	top : '41%',
	left :'10%',
	width : '80%',
	font : {fontSize:tmp},
	hintText : 'Access number',
	borderColor:'#0054A5',
	borderRadius: corner,
	borderWidth: '1%',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
Access_number_edit.addEventListener('return', function(e) {
	Access_number_edit.blur();
});
// Add to the parent view.
subself.add(Access_number_edit);




var projects = Ti.UI.createPicker({
	selectionIndicator : true,
	width : '80%',
	height : 'auto',
	left:'10%',
	top:'53%'
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
subself.add(projects);
// Create a Button.
var Submitbtn = Ti.UI.createButton({
	backgroundColor:'#0054A5',
	title : 'Submit',
	color:'white',
		font : {
		fontSize : tmp
	},
	height : '8%',
	width : '30%',
	bottom:'5%'
});
// Listen for click events.
Submitbtn.addEventListener('click', function() {
	 name=Name_edit.value;
     access_no=Access_number_edit.value;   		
	//	 if(account_no!=''||bank_name!=''){
		 var conn = Ti.Database.install('/Security.sqlite', 'Security');
// this is correct
if(add){
var theData = conn.execute('INSERT INTO Callingcard (name,access_no,groups) VALUES(?,?,?)',name,access_no,group_data);
}else{
	var theData = conn.execute('UPDATE Callingcard SET name=?,access_no=?,groups=? WHERE rowid=?', name, access_no,group_data, rowid);
}
	var frontview=Ti.UI.createWindow({
			backgroundColor:'white',
			url:'ui/common/FrontView.js'
		});
		frontview.open();	
});
// Add to the parent view.
nextview.add(Submitbtn);

if (add) {
	Name_edit.setvalue = '';
	Access_number_edit.setValue = '';
	projects.setValue='';
} else {
	Name_edit.value = caamne;
	Access_number_edit.value = caaccess;
	projects.setSelectedRow(0, coloumn, false);
	projects.value=groupss;
}
