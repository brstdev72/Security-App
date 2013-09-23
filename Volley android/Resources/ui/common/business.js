var business=Ti.UI.currentWindow;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
	var businesscrollsself = Ti.UI.createScrollView({
		height : '100%',
		width : '100%'
	});
	business.add(businesscrollsself);
	var businessself = Ti.UI.createView({
		height : '100%',
		width : '100%'
	});
	businesscrollsself.add(businessself);
	
	var topview = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		width : '100%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '0%'
	});
	
	businessself.add(topview);
	
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
	
		var topleftImageView = Ti.UI.createImageView({
		image : '/images/back_icon2.png',
		width : '8%',
		height : '70%',
		top : '15%',
		right : '18%'
	});
	topleftImageView.addEventListener('click', function() {
		business.close();
	});
	topview.add(topleftImageView);
	
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
	
	var businessview = Ti.UI.createView({
		width : '100%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '10%'
	});
	businessself.add(businessview);
	// Create an ImageView.
	var creditImageView = Ti.UI.createImageView({
		image : '/images/credit_icon.png',
		width : '7%',
		height : '70%',
		top : '15%',
		left : '3%'
	});
	creditImageView.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businessview.add(creditImageView);
	
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 2.8) / 100;
		var tmp1 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
		var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 2.4) / 100;
		
		var businesstextview = Ti.UI.createView({
		width : '70%',
		height : '8%',
		top : '10.8%',
		left:'15%',
		layout:'vertical'
	});
	businessself.add(businesstextview);
	// Create a Label.
	var maintext = Ti.UI.createLabel({
		text : 'Business Visa',
		color : 'white',
		font : {
			fontSize : tmp2
		},
		height : 'auto',
		width : 'auto',
		left : '0%',
	});
	// Add to the parent view.
	businesstextview.add(maintext);
	
	var text = Ti.UI.createLabel({
		text : 'Personal Group',
		color : 'white',
		font : {
			fontSize : tmp2
		},
		height : 'auto',
		width : 'auto',
		left : '0%',
	});
	// Add to the parent view.
	businesstextview.add(text);
	
	var StarImageView = Ti.UI.createImageView({
		image : '/images/star_icon.png',
		width : '7%',
		height : '70%',
		top : '15%',
		right : '5%'
	});
	StarImageView.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businessview.add(StarImageView);
	
		var businesssubview1 = Ti.UI.createView({
		width : '90%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '21%',
		left:'7%',
		right:'7%',
		borderRadius: corner,
		borderWidth: '0%'
	});
	businesssubview1.addEventListener('click',function(){
		StarImageView1.image='/images/icon_mark.png';
	});
	businessself.add(businesssubview1);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Card No.(Top to view)',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	// Add to the parent view.
	businesssubview1.add(maintext);
	
	var StarImageView1 = Ti.UI.createImageView({
		image : '/images/icon.png',
			width : '6%',
		height : '40%',
		top : '25%',
		right : '5%'
	});
	StarImageView1.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businesssubview1.add(StarImageView1);
	
	var businesssubview2 = Ti.UI.createView({
		width : '90%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '31%',
		left:'7%',
		right:'7%',
		borderRadius: corner,
		borderWidth: '0%'
	});
	businesssubview2.addEventListener('click',function(){
		StarImageView2.image='/images/icon_mark.png';
	});
	businessself.add(businesssubview2);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Expiration Date:01/55',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	// Add to the parent view.
	businesssubview2.add(maintext);
	
	var StarImageView2 = Ti.UI.createImageView({
		image : '/images/icon.png',
			width : '6%',
		height : '40%',
		top : '25%',
		right : '5%'
	});
	StarImageView2.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businesssubview2.add(StarImageView2);
	
	var businesssubview3 = Ti.UI.createView({
		width : '90%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '41%',
		left:'7%',
		right:'7%',
		borderRadius: corner,
		borderWidth: '0%'
	});
	businesssubview3.addEventListener('click',function(){
		StarImageView3.image='/images/icon_mark.png';
	});
	businessself.add(businesssubview3);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Name John Doe',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',

	});
	// Add to the parent view.
	businesssubview3.add(maintext);
	
	var StarImageView3 = Ti.UI.createImageView({
		image : '/images/icon.png',
			width : '6%',
		height : '40%',
		top : '25%',
		right : '5%'
	});
	StarImageView3.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businesssubview3.add(StarImageView3);
	
	var businesssubview4 = Ti.UI.createView({
		width : '90%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '51%',
		left:'7%',
		right:'7%',
		borderRadius: corner,
		borderWidth: '0%'
	});
	businesssubview4.addEventListener('click',function(){
		StarImageView4.image='/images/icon_mark.png';
	});
	businessself.add(businesssubview4);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Pin(Top to view)',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',

	});
	// Add to the parent view.
	businesssubview4.add(maintext);
	
	var StarImageView4 = Ti.UI.createImageView({
		image : '/images/icon.png',
			width : '6%',
		height : '40%',
		top : '25%',
		right : '5%'
	});
	StarImageView4.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businesssubview4.add(StarImageView4);
	
	var businesssubview5 = Ti.UI.createView({
		width : '90%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '61%',
		left:'7%',
		right:'7%',
		borderRadius: corner,
		borderWidth: '0%'
	});
	businesssubview5.addEventListener('click',function(){
		StarImageView5.image='/images/icon_mark.png';
	});
	businessself.add(businesssubview5);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Bank Universal Bank',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',

	});
	// Add to the parent view.
	businesssubview5.add(maintext);
	
	var StarImageView5 = Ti.UI.createImageView({
		image : '/images/icon.png',
			width : '6%',
		height : '40%',
		top : '25%',
		right : '5%'
	});
	StarImageView5.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businesssubview5.add(StarImageView5);
	
	var businesssubview6 = Ti.UI.createView({
		width : '90%',
		height : '8%',
		backgroundColor : '#0054A5',
		top : '71%',
		left:'7%',
		right:'7%',
		borderRadius: corner,
		borderWidth: '0%'
	});
	businesssubview6.addEventListener('click',function(){
		StarImageView6.image='/images/icon_mark.png';
	});
	businessself.add(businesssubview6);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Security Code (Top to view)',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	// Add to the parent view.
	businesssubview6.add(maintext);
	
var StarImageView6 = Ti.UI.createImageView({
		image : '/images/icon.png',
		width : '6%',
		height : '40%',
		top : '25%',
		right : '5%'
	});
	StarImageView6.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	// Add to the parent view.
	businesssubview6.add(StarImageView6);
	
	var bottomtext1 = Ti.UI.createLabel({
		text : 'Modified: 02/23/2013 at 3.30 pm',
		color : '#373737',
		font : {
			fontSize : tmp,
			fontWeight:'bold',   
		},
		height : 'auto',
		width : 'auto',
		bottom: '13%'
	});
	// Add to the parent view.
	businessself.add(bottomtext1);
	
	var bottomtext2 = Ti.UI.createLabel({
		text : 'Nam libero tempore, cum soluta nobis est',
		color : 'gray',
		font : {
			fontSize : tmp2, 
		},
		height : 'auto',
		width : 'auto',
		bottom: '8%'
	});
	// Add to the parent view.
	businessself.add(bottomtext2);
	
var bottomtext3 = Ti.UI.createLabel({
		text : 'optio cumque nihil impedit quo minus',
		color : 'gray',
		font : {
			fontSize : tmp2, 
		},
		height : 'auto',
		width : 'auto',
		bottom: '5%'
	});
	// Add to the parent view.
	businessself.add(bottomtext3);