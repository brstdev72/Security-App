var openaccount=Ti.UI.currentWindow;
	var groups = Ti.App.Properties.getString('group');
	var cols = Ti.App.Properties.getString('col');
	 var conn = Ti.Database.install('/Security.sqlite', 'Security');
	 if(groups=='All' || groups==''){
	 var userAccountResultSet = conn.execute('SELECT * FROM Account');
	 }else{
	 	var userAccountResultSet = conn.execute('SELECT * FROM Account WHERE groups=?',groups);
	 }
	 var count= userAccountResultSet.fieldCount;
     var  this_account_no =[];
     var this_bank_name =[];
     var this_groups =[];
	 while (userAccountResultSet.isValidRow()){
     this_account_no.push(userAccountResultSet.fieldByName('account_no'));
     this_bank_name.push(userAccountResultSet.fieldByName('bank_name'));
     this_groups.push(userAccountResultSet.fieldByName('groups'));    
	 userAccountResultSet.next();
    // alert(this_account_no+'      '+this_bank_name);
}
	userAccountResultSet.close();
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
		var subself = Ti.UI.createView({
		backgroundColor:'white',
		height : '100%',
		width : '100%'
	});
		openaccount.add(subself);
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
		openaccount.close();
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
		text : 'Accont Detail',
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
		image : '/images/account_icon.png',
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
var tableData = [];
for(var i=0;i<this_account_no.length;i++){
	
var row=Ti.UI.createTableViewRow({
	height:'auto',
	width:'100%',
	backgroundColor:'white',
	layout:'vertical'
});
row.addEventListener('click',function(e){
	
	Ti.App.Properties.setString('rowId',e.index);
	Ti.App.Properties.setString('gro',this_groups[e.index]);
	Ti.App.Properties.setString('cols',cols);
	Ti.App.Properties.setString('accountNo', this_account_no[e.index]);
	Ti.App.Properties.setString('bankName', this_bank_name[e.index]);
	
		var openaccountwindow = Ti.UI.createWindow({
			backgroundColor:'white',
			url:'ui/common/openaccountwindow.js',
			textfiled1:text1.getText().toString(),
			modal: true,
			fullscreen : true,
			navBarHidden : true,	
		});
		openaccountwindow.open();
	});
	var text2 = Ti.UI.createLabel({
		text : 'Bank account no: '+this_account_no[i],
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight:'bold',   
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		top:'10%'
	});	
	row.add(text2);	
	var text1 = Ti.UI.createLabel({
		text : 'Bank name: '+this_bank_name[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text1);
	
		var text3 = Ti.UI.createLabel({
		text : 'Group: '+this_groups[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text3);
	 
	 var text4 = Ti.UI.createLabel({
		text : ' ',
		color : 'gray',
		font : {
			fontSize : tmp1,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text4);

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
