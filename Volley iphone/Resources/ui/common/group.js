var groupwindow = Ti.UI.currentWindow;


var border = Math.round(Ti.Platform.displayCaps.platformWidth * 0.002);
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var tmp = (Titanium.Platform.displayCaps.platformHeight * 2.8) / 100;
var groupself = Ti.UI.createScrollView({
	height : '100%',
	width : '100%',
});
groupwindow.add(groupself);
var passwoedself = Ti.UI.createView({
	height : '100%',
	width : '100%'
});
groupself.add(passwoedself);
var nextview = Ti.UI.createView({
	backgroundColor : 'white',
	height : '55%',
	width : '86%',
	top : '20%',
	left : '7%',
	borderColor : '#B7B7B7',
	borderWidth : border
});
passwoedself.add(nextview);

var nextsubview1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '14%',
	width : '100%',
	top : '0%',
	left : '0%',
});
nextview.add(nextsubview1);
var text = Ti.UI.createLabel({
	text : 'Select Group',
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
	image : '/images/grouop_icon.png',
	width : '9%',
	height : '70%',
	right : '7%',
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
	groupwindow.close();
});
nextsubview1.add(topleftImageView);

// Create an array of explicitly defined custom TableViewRows
var tbl_data = [];
for (var i = 0; i < 2; i++) {
	var row = Ti.UI.createTableViewRow({
		backgroundColor:'red',
		height:'13%',
		width : '100%',
	});
	// var passwordsubview1 = Ti.UI.createView({
	// width : '86%',
	// height : '12%',
	// backgroundColor : '#0054A5',
	// //top : '19%',
	// left : '7%',
	// right : '7%',
	// borderRadius : corner,
	// borderWidth : '0%'
// });
// //nextview.add(passwordsubview1);
// // Create an ImageView.
// 
// var maintext = Ti.UI.createLabel({
	// text : 'All',
	// color : 'white',
	// font : {
		// fontSize : tmp
	// },
	// height : 'auto',
	// width : 'auto',
	// left : '5%',
// });
// // Add to the parent view.
// //passwordsubview1.add(maintext);
// 
// var text = Ti.UI.createLabel({
	// text : '(3)',
	// color : 'white',
	// font : {
		// fontSize : tmp
	// },
	// height : 'auto',
	// width : 'auto',
	// right : '3%',
// });
// 
	// row.add(passwordsubview1);
	// row.add(maintext);
	// row.add(text);
	tbl_data.push(row);
}
// now assign that array to the table's data property to add those objects as rows
var table = Titanium.UI.createTableView({
	top : '19%',
	data : tbl_data,
	height:'auto',
	width:'auto'
});
nextview.add(table);
// var passwordsubview1 = Ti.UI.createView({
	// width : '86%',
	// height : '12%',
	// backgroundColor : '#0054A5',
	// top : '19%',
	// left : '7%',
	// right : '7%',
	// borderRadius : corner,
	// borderWidth : '0%'
// });
// nextview.add(passwordsubview1);
// // Create an ImageView.
// 
// var maintext = Ti.UI.createLabel({
	// text : 'All',
	// color : 'white',
	// font : {
		// fontSize : tmp
	// },
	// height : 'auto',
	// width : 'auto',
	// left : '5%',
// });
// // Add to the parent view.
// passwordsubview1.add(maintext);
// 
// var text = Ti.UI.createLabel({
	// text : '(3)',
	// color : 'white',
	// font : {
		// fontSize : tmp
	// },
	// height : 'auto',
	// width : 'auto',
	// right : '3%',
// });
// 
// // Add to the parent view.
// passwordsubview1.add(text);

// var passwordsubview2 = Ti.UI.createView({
// width : '86%',
// height : '12%',
// backgroundColor : '#0054A5',
// top : '34%',
// left:'7%',
// right:'7%',
// borderRadius: corner,
// borderWidth: '0%'
// });
// nextview.add(passwordsubview2);
// // Create an ImageView.
//
// var maintext = Ti.UI.createLabel({
// text : 'Business',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '5%',
// });
// // Add to the parent view.
// passwordsubview2.add(maintext);
//
// var text = Ti.UI.createLabel({
// text : '(1)',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// right : '3%',
// });
//
// // Add to the parent view.
// passwordsubview2.add(text);
//
// var passwordsubview4 = Ti.UI.createView({
// width : '86%',
// height : '12%',
// backgroundColor : '#0054A5',
// top : '49%',
// left:'7%',
// right:'7%',
// borderRadius: corner,
// borderWidth: '0%'
// });
// nextview.add(passwordsubview4);
// // Create an ImageView.
//
// var maintext = Ti.UI.createLabel({
// text : 'Personal',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '5%',
// });
// // Add to the parent view.
// passwordsubview4.add(maintext);
//
// var text = Ti.UI.createLabel({
// text : '(2)',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// right : '3%',
// });
//
// // Add to the parent view.
// passwordsubview4.add(text);
//
// var passwordsubview5 = Ti.UI.createView({
// width : '86%',
// height : '12%',
// backgroundColor : '#0054A5',
// top : '64%',
// left:'7%',
// right:'7%',
// borderRadius: corner,
// borderWidth: '0%'
// });
// nextview.add(passwordsubview5);
// // Create an ImageView.
//
// var maintext = Ti.UI.createLabel({
// text : 'Unassigned',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '5%',
// });
// // Add to the parent view.
// passwordsubview5.add(maintext);
//
// var text = Ti.UI.createLabel({
// text : '(0)',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// right : '3%',
// });
//
// // Add to the parent view.
// passwordsubview5.add(text);
//
// var bottomtext = Ti.UI.createLabel({
// text : 'Favorites Only',
// color : '#525252',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// left : '10%',
// top:'83%'
// });
// // Add to the parent view.
// nextview.add(bottomtext);
//
// var bottombtn = Ti.UI.createView({
// width : '30%',
// height : '12%',
// backgroundImage : '/images/generate.png',
// top : '81%',
// right:'7%',
// });
// bottombtn.addEventListener('click',function(){
// bottombtntext.text='Off';
// });
// nextview.add(bottombtn);
//
// var bottombtntext = Ti.UI.createLabel({
// text : 'On',
// color : 'white',
// font : {
// fontSize : tmp
// },
// height : 'auto',
// width : 'auto',
// });
// bottombtn.add(bottombtntext);
