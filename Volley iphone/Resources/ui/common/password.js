var genpassword= Ti.UI.currentWindow;
var height =Ti.Platform.displayCaps.platformHeight;
var width = Ti.Platform.displayCaps.platformWidth; 
var border = Math.round(Ti.Platform.displayCaps.platformWidth*0.001);
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth*0.02);
	var tmp = (Titanium.Platform.displayCaps.platformHeight * 2.8) / 100;
var passwoedself = Ti.UI.createScrollView({
		height : '100%',
		width : '100%'
	});
	genpassword.add(passwoedself);	
var nextview = Ti.UI.createView({
	backgroundColor:'white',
		height : '92%',
		width : '86%',
		top:'5%',
		left:'7%',
		borderColor: '#B7B7B7',
        borderWidth:border
	});	
passwoedself.add(nextview);

var nextsubview1 = Ti.UI.createView({
		backgroundColor:'#0054A5',
		height : '9%',
		width : '100%',
		top:'0%',
		left:'0%',
	});
	nextview.add(nextsubview1);
	var text = Ti.UI.createLabel({
		text : 'Generate Password',
		color : 'white',
		font : {
			fontSize : tmp2,
			fontWeight:'bold',  
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
	});
	nextsubview1.add(text);
	
		var typrImageView = Ti.UI.createImageView({
		image : '/images/password_icon.png',
		width:'9%',
		height : '70%',
		right : '3%',	
	});
	nextsubview1.add(typrImageView);
	
	var backImageView = Ti.UI.createImageView({
	image : '/images/back_icon2.png',
	width : '9%',
	height : '70%',
	right : '18%',
});
backImageView.addEventListener('click',function(){
genpassword.close();	
});
nextsubview1.add(backImageView);

	var genpasswordsubview1 = Ti.UI.createView({
		width : '96%',
		height : '8%',
		backgroundColor : 'white',
		top : '10%',
		left:'2%',
		right:'2%',
	});
	nextview.add(genpasswordsubview1);
	// Create an ImageView.

	var maintext = Ti.UI.createLabel({
		text : 'Use Lower Case(a-z):',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		right : '37%',
	});
	// Add to the parent view.
	genpasswordsubview1.add(maintext);
	
	
	var SideImageView1 = Ti.UI.createImageView({
		image : '/images/off_btn.png',
		width : '30%',
		height : '50%',
		right : '2%'
	});
	SideImageView1.addEventListener('click', function() {
		SideImageView1.image = '/images/on_btn.png';
	});
	// Add to the parent view.
	genpasswordsubview1.add(SideImageView1);

	
	var genpasswordsubview2 = Ti.UI.createView({
		width : '96%',
		height : '8%',
		backgroundColor : 'white',
		top : '19%',
		left:'2%',
		right:'2%',
	});
	nextview.add(genpasswordsubview2);
	// Create an ImageView.

	var maintext2 = Ti.UI.createLabel({
		text : 'Use Upper Case(A-Z):',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		right : '37%',
	});
	// Add to the parent view.
	genpasswordsubview2.add(maintext2);
	
	
	var SideImageView2 = Ti.UI.createImageView({
		image : '/images/off_btn.png',
		width : '30%',
		height : '50%',
		right : '2%'
	});
	SideImageView2.addEventListener('click', function() {
		SideImageView2.image = '/images/on_btn.png';
	});
	// Add to the parent view.
	genpasswordsubview2.add(SideImageView2);
	
	var genpasswordsubview3 = Ti.UI.createView({
		width : '96%',
		height : '8%',
		backgroundColor : 'white',
		top : '28%',
		left:'2%',
		right:'2%',
	});
	nextview.add(genpasswordsubview3);
	// Create an ImageView.

	var maintext3 = Ti.UI.createLabel({
		text : 'Use Numbers (0-9):',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		right: '37%',
	});
	// Add to the parent view.
	genpasswordsubview3.add(maintext3);
	
	var SideImageView3 = Ti.UI.createImageView({
		image : '/images/off_btn.png',
		width : '30%',
		height : '50%',
		right : '2%'
	});
	SideImageView3.addEventListener('click', function() {
		SideImageView3.image = '/images/on_btn.png';
	});
	// Add to the parent view.
	genpasswordsubview3.add(SideImageView3);
	
	var genpasswordsubview4 = Ti.UI.createView({
		width : '96%',
		height : '8%',
		backgroundColor : 'white',
		top : '37%',
		left:'2%',
		right:'2%',
	});
	nextview.add(genpasswordsubview4);
	// Create an ImageView.

	var maintext4 = Ti.UI.createLabel({
		text : 'Use Special(!@#$%):',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		right: '37%',
	});
	// Add to the parent view.
	genpasswordsubview4.add(maintext4);
	
	var SideImageView4 = Ti.UI.createImageView({
		image : '/images/off_btn.png',
		width : '30%',
		height : '50%',
		right : '2%'
	});
	SideImageView4.addEventListener('click', function() {
		SideImageView4.image = '/images/on_btn.png';
	});
	// Add to the parent view.
	genpasswordsubview4.add(SideImageView4);
	
	var genpasswordsubview5 = Ti.UI.createView({
		width : '96%',
		height : '8%',
		backgroundColor : 'white',
		top : '46%',
		left:'2%',
		right:'2%',
	});
	nextview.add(genpasswordsubview5);
	// Create an ImageView.

	var maintext5 = Ti.UI.createLabel({
		text : 'Allow Characters 1||00:',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		right : '37%',
	});
	// Add to the parent view.
	genpasswordsubview5.add(maintext5);
	
	var SideImageView5 = Ti.UI.createImageView({
		image : '/images/off_btn.png',
		width : '30%',
		height : '50%',
		right : '2%'
	});
	SideImageView5.addEventListener('click', function() {
		SideImageView5.image = '/images/on_btn.png';
	});
	// Add to the parent view.
	genpasswordsubview5.add(SideImageView5);
	
		var bottomtext = Ti.UI.createLabel({
		text : 'Number of Character :10',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		top:'55%'
	});
	// Add to the parent view.
	nextview.add(bottomtext);
	
	// Create a Slider.
	var aSlider = Titanium.UI.createSlider({
		min : 0,
		max : 100,
		value : 25,
		width : '86%',
		height : 'auto',
		top : '62%',
		thumbImage: '/images/slide_circule.png',
        leftTrackImage: '/images/slider.png',
        rightTrackImage: '/images/slide_bg.png',
	});
	
	// Listen for change events.
	aSlider.addEventListener('change', function(e) {
		Ti.API.info('Slider value: ' + Math.round(e.value) + ' (actual: ' + Math.round(aSlider.value) + ')');
	});
	
	// Add to the parent view.
	nextview.add(aSlider);
	aSlider.show();
	
	var bottomtext1 = Ti.UI.createLabel({
		text : 'Strength :Very Week',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		top:'68%'
	});
	// Add to the parent view.
	nextview.add(bottomtext1);
	
	var bottomView0 = Ti.UI.createView({
		backgroundColor:'#0054A5',
		width : '86%',
		height : '0.5%',
		top : '75%',
	});
	bottomView0.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	nextview.add(bottomView0);
	
	var bottomView = Ti.UI.createView({
		backgroundImage : '/images/generate.png',
		width : '60%',
		height : '6%',
		top : '79%',
		left : '20%'
	});
	bottomView.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	nextview.add(bottomView);
	
	var bottomtext1 = Ti.UI.createLabel({
		text : 'Generate Password',
		color : 'white',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
	});
	// Add to the parent view.
	bottomView.add(bottomtext1);
	
		var bottomtext2 = Ti.UI.createLabel({
		text : 'Press button above to generate',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		top:'87%'
	});
	// Add to the parent view.
	nextview.add(bottomtext2);
	
		var bottomtext3 = Ti.UI.createLabel({
		text : 'another Password',
		color : '#525252',
		font : {
			fontSize : tmp
		},
		height : 'auto',
		width : 'auto',
		top:'91%'
	});
	// Add to the parent view.
	nextview.add(bottomtext3);
