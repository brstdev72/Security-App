var Groups=Ti.UI.currentWindow;

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume');
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	Groups.add(firstView);
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	Groups.add(firstView);
});

Ti.App.addEventListener('resume', function(e) {
	Ti.API.info('resume')
});

Ti.App.addEventListener('pause', function(e) {
	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	Groups.add(firstView);
});

	var groups = Ti.App.Properties.getString('group');
	var cols = Ti.App.Properties.getString('col');
	
	 var conn = Ti.Database.install('/Security.sqlite', 'Security');
	 var userGroupResultSet = conn.execute('SELECT * FROM Groups');
	 var count= userGroupResultSet.fieldCount;
     var  this_Groups =[];
     this_Groups.push('All');
	 while (userGroupResultSet.isValidRow()){
     this_Groups.push(userGroupResultSet.fieldByName('groups'));
	 userGroupResultSet.next();
    // alert(this_account_no+'      '+this_bank_name);
}
	userGroupResultSet.close();
	
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
		var subself = Ti.UI.createView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
		Groups.add(subself);
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
		Groups.close();
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
		text : 'Groups',
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
	
var nextmainview=Ti.UI.createScrollView({
	height:'auto',
	width:'100%',
	top:'10%',
	layout:'vertical'
});
nextview.add(nextmainview);
var tableData = [];
for(var i=0;i<this_Groups.length;i++){	
var row=Ti.UI.createTableViewRow({
	height:'auto',
	width:'100%',
	backgroundColor:'white',
	layout:'vertical'
});
row.addEventListener('click',function(e){
	// Ti.App.Properties.setString('rowId',e.index);
	// Ti.App.Properties.setString('cols',cols);
	Ti.App.Properties.setString('Groups', this_Groups[e.index]);
	// Ti.App.Properties.setString('bankName', this_bank_name[e.index]);
			var frontview = Ti.UI.createWindow({
				backgroundColor : 'white',
				url : Ti.Filesystem.resourcesDirectory + 'ui/common/FrontView.js'
			});
			frontview.open();
	});
	var text2 = Ti.UI.createLabel({
		text : this_Groups[i],
		color : 'black',
		font : {
			fontSize : tmp3,
			fontWeight:'bold',   
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		top:'10%'
	});	
	row.add(text2); 
	 // var text3 = Ti.UI.createLabel({
		// text : ' ',
		// color : 'gray',
		// font : {
			// fontSize : tmp1,  
		// },
		// height : 'auto',
		// width : 'auto',
		// left : '5%',
	// });
	// row.add(text3);

 tableData.push(row);
}
// Create a TableView.
var accountdata = Ti.UI.createTableView({
	data:tableData
}); 
// Listen for click events.
accountdata.addEventListener('click', function(e) {
	//alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
});
// Add to the parent view.
nextmainview.add(accountdata);
