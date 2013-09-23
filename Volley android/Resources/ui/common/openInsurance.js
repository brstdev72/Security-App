  var openInsurance=Ti.UI.currentWindow;
  var groups = Ti.App.Properties.getString('group');
  var cols = Ti.App.Properties.getString('col');
  var conn = Ti.Database.install('/Security.sqlite', 'Security');
   if(groups=='All' || groups==''){
  var userInsuranceResultSet = conn.execute('SELECT * FROM Insurance');
  }else{
  	var userInsuranceResultSet = conn.execute('SELECT * FROM Insurance WHERE groups=?',groups);
  }
	 var I_coun= userInsuranceResultSet.fieldCount;
	 var count_I=I_coun+1
	 var this_insurance_description=[];
	 var this_insurance_policy_no=[];
	 var this_insurance_group_name=[];
	 var this_insurance_insured=[];
	 var this_insurance_date=[];
	 var this_insurance_phone_no=[];
	 var this_groups =[];
	while (userInsuranceResultSet.isValidRow()){
    this_insurance_description.push(userInsuranceResultSet.fieldByName('desception'));
    this_insurance_policy_no.push(userInsuranceResultSet.fieldByName('policy_no'));
    this_insurance_group_name.push(userInsuranceResultSet.fieldByName('group_name'));
    this_insurance_insured.push(userInsuranceResultSet.fieldByName('insured'));
    this_insurance_date.push(userInsuranceResultSet.fieldByName('date'));
    this_insurance_phone_no.push(userInsuranceResultSet.fieldByName('phone_no'));
    this_groups.push(userInsuranceResultSet.fieldByName('groups'));
 //   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
    userInsuranceResultSet.next();  
}
 //alert(this_callingcard_name+'      '+this_callingcard_access_name);
	
	var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.5) / 100;
	var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
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
		openInsurance.add(subself);
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
		openInsurance.close();
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
		text : 'Insurance Detail',
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
		image : '/images/insurance_icon.png',
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

for(var i=0;i<this_insurance_description.length;i++){
	
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
	Ti.App.Properties.setString('Description', this_insurance_description[e.index]);
	Ti.App.Properties.setString('Policy', this_insurance_policy_no[e.index]);
	Ti.App.Properties.setString('Group', this_insurance_group_name[e.index]);
	Ti.App.Properties.setString('Insured', this_insurance_insured[e.index]);
	Ti.App.Properties.setString('Date', this_insurance_date[e.index]);
	Ti.App.Properties.setString('Phone', this_insurance_phone_no[e.index]);
		var openInsurancewindow = Ti.UI.createWindow({
			backgroundColor:'white',
			url:'ui/common/openInsurancewindow.js',
			modal: true,
			fullscreen : true,
			navBarHidden : true,	
		});
		openInsurancewindow.open();
	});
	var text = Ti.UI.createLabel({
		text : 'Description: '+this_insurance_description[i],
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
	row.add(text);	
	var text1 = Ti.UI.createLabel({
		text : 'Policy no: '+this_insurance_policy_no[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text1);
	
	var text2 = Ti.UI.createLabel({
		text : 'Group no: '+this_insurance_group_name[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	
	row.add(text2);
	
	var text3 = Ti.UI.createLabel({
		text : 'Insured: '+this_insurance_insured[i],
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
		text : 'Date: '+this_insurance_date[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	
	row.add(text4);
	
		var text5 = Ti.UI.createLabel({
		text : 'Phone no: '+this_insurance_phone_no[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	
	row.add(text5);
	
		var text8 = Ti.UI.createLabel({
		text : 'Group: '+this_groups[i],
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text8);
	 
	 var text7 = Ti.UI.createLabel({
		text : '  ',
		color : 'gray',
		font : {
			fontSize : tmp,  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	row.add(text7);
 tableData.push(row);
}
// Create a TableView.
var accountdata = Ti.UI.createTableView({
	data:tableData
}); 
// Listen for click events.
accountdata.addEventListener('click', function(e) {
//	alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
});
// Add to the parent view.
nextmainview.add(accountdata);
