var password = Ti.UI.currentWindow;
var border = Math.round(Ti.Platform.displayCaps.platformWidth * 0.001);
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 4) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var tmp = (Titanium.Platform.displayCaps.platformHeight * 2.8) / 100;
//var smallchr[]={a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z};
var count = 0;
function randomString() {	
	if(count>=3){
	var randomstring = '';
	var small_chars = "abcdefghijklmnopqrstuvwxyz";
	var big_chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var special = "!@#$%^&*()_+";
	var characters = ".}{][";
	if(aSwitch1.value==true){
	for (var i=0; i<2; i++) {
		var rnum = Math.floor(Math.random() * small_chars.length);
		randomstring += small_chars.substring(rnum,rnum+1);
	}
	}
		if(aSwitch2.value==true){
	for (var i=0; i<2; i++) {
		var rnum = Math.floor(Math.random() * big_chars.length);
		randomstring += big_chars.substring(rnum,rnum+1);
	}
	}
	
			if(aSwitch3.value==true){
	for (var i=0; i<2; i++) {
		var rnum = Math.floor(Math.random() * numbers.length);
		randomstring += numbers.substring(rnum,rnum+1);
	}
	}
	
			if(aSwitch4.value==true){
	for (var i=0; i<2; i++) {
		var rnum = Math.floor(Math.random() * special.length);
		randomstring += special.substring(rnum,rnum+1);
	}
	}
	
			if(aSwitch5.value==true){
	for (var i=0; i<2; i++) {
		var rnum = Math.floor(Math.random() * characters.length);
		randomstring += characters.substring(rnum,rnum+1);
	}
	}
	//document.randform.randomfield.value = randomstring;
	var shuffled = randomstring.split('').sort(function(){return 0.5-Math.random()}).join('');
                var alertDialog = Titanium.UI.createAlertDialog( {
                    title: 'Password',
                    message: shuffled ,
                    buttonNames: [ 'Accept', 'Cancel' ],
                    cancel: 1
                });
 
                alertDialog.addEventListener( 'click', function ( theEvent ) {
                    if ( theEvent.index !== theEvent.cancel ) {
                        //alert('hello');
                    }
              
   	switch (theEvent.index) {
      case 0: 
		 var userPassword=shuffled;
		 if(userPassword!=''){
		 var conn = Ti.Database.install('/Security.sqlite', 'Security');
// this is correct
var theData = conn.execute('INSERT INTO Security_data (Password) VALUES(?)',userPassword);	
var FirstView = require('ui/common/FirstView');	
var firstView = new FirstView();
password.add(firstView);
}
      break;
      //This will never be reached, if you specified cancel for index 1
      case 1:   
      break;
      default:
      break;
  }
                });
                alertDialog.show();      
	// var a = Titanium.UI.createAlertDialog({
    // title:'Password',
    // message:shuffled,
	// });
// 	
// a.show();
	}else{
		alert('AtLeast 3 Type are Required');
	}
}
var passwoedself = Ti.UI.createScrollView({
	height : '100%',
	width : '100%'
});
password.add(passwoedself);
var nextview = Ti.UI.createView({
	backgroundColor : 'white',
	height : '92%',
	width : '86%',
	top : '5%',
	left : '7%',
	borderColor : '#B7B7B7',
	borderWidth : border
});
passwoedself.add(nextview);

var nextsubview1 = Ti.UI.createView({
	backgroundColor : '#0054A5',
	height : '9%',
	width : '100%',
	top : '0%',
	left : '0%',
});
nextview.add(nextsubview1);
var text = Ti.UI.createLabel({
	text : 'Generate Password',
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
	image : '/images/password_icon.png',
	width : '9%',
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
password.close();	
});
nextsubview1.add(backImageView);

var passwordsubview1 = Ti.UI.createView({
	width : '86%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '10%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview1.addEventListener('click', function() {
});
nextview.add(passwordsubview1);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Use Lower Case(a-z):',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview1.add(maintext);

var View1 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '14%'
});
// Add to the parent view.
passwordsubview1.add(View1);

// Create a Switch.
var aSwitch1 = Ti.UI.createSwitch({
	backgroundImage:'/images/off.png',
  	color:'white',
  	titleOff:'',
  	titleOn:'',
	value : false,
	right : '0%',
	width : '14%',
	height : '100%'
});
// Listen for change events.
aSwitch1.addEventListener('change', function(e) {
	Ti.API.info('Event value: ' + e.value + ', switch value: ' + aSwitch1.value);
	if(aSwitch1.value==true){
	aSwitch1.backgroundImage='/images/on.png';
	count++;
	}else{
		aSwitch1.backgroundImage='/images/off.png';	
		count--;
	}
});
passwordsubview1.add(aSwitch1);

var passwordsubview2 = Ti.UI.createView({
	width : '86%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '19%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview2.addEventListener('click', function() {
});
nextview.add(passwordsubview2);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Use Upper Case (A-Z):',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview2.add(maintext);

var View2 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '14%'
});
// Add to the parent view.
passwordsubview2.add(View2);

var aSwitch2 = Ti.UI.createSwitch({
	backgroundImage:'/images/off.png',
	titleOff:'',
  	titleOn:'',
  	color:'white',
	value : false,
	right : '0%',
	width : '14%',
	height : '100%'
});
// Listen for change events.
aSwitch2.addEventListener('change', function(e) {
	Ti.API.info('Event value: ' + e.value + ', switch value: ' + aSwitch2.value);
	if(aSwitch2.value==true){
	aSwitch2.backgroundImage='/images/on.png';
	count++;
	}else{
		aSwitch2.backgroundImage='/images/off.png';	
		count--;
	}
});
passwordsubview2.add(aSwitch2);
var passwordsubview3 = Ti.UI.createView({
	width : '86%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '28%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview3.addEventListener('click', function() {
});
nextview.add(passwordsubview3);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Use Numbers (0-9):',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview3.add(maintext);

var View3 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '14%'
});
// Add to the parent view.
passwordsubview3.add(View3);

var aSwitch3 = Ti.UI.createSwitch({
	backgroundImage:'/images/off.png',
	titleOff:'',
  	titleOn:'',
  	color:'white',
	value : false,
	right : '0%',
	width : '14%',
	height : '100%'
});
// Listen for change events.
aSwitch3.addEventListener('change', function(e) {
	Ti.API.info('Event value: ' + e.value + ', switch value: ' + aSwitch3.value);
	if(aSwitch3.value==true){
	aSwitch3.backgroundImage='/images/on.png';
	count++;
	}else{
		aSwitch3.backgroundImage='/images/off.png';	
		count--;
	}
});
passwordsubview3.add(aSwitch3);

var passwordsubview4 = Ti.UI.createView({
	width : '86%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '37%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview4.addEventListener('click', function() {
});
nextview.add(passwordsubview4);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Use Special(!@#$%):',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview4.add(maintext);

var View4 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '14%'
});
// Add to the parent view.
passwordsubview4.add(View4);

var aSwitch4 = Ti.UI.createSwitch({
	backgroundImage:'/images/off.png',
	titleOff:'',
  	titleOn:'',
  	color:'white',
	value : false,
	right : '0%',
	width : '14%',
	height : '100%'
});
// Listen for change events.
aSwitch4.addEventListener('change', function(e) {
	Ti.API.info('Event value: ' + e.value + ', switch value: ' + aSwitch4.value);
	if(aSwitch4.value==true){
	aSwitch4.backgroundImage='/images/on.png';
	count++;
	}else{
		aSwitch4.backgroundImage='/images/off.png';	
		count--;
	}
});
passwordsubview4.add(aSwitch4);

var passwordsubview5 = Ti.UI.createView({
	
	width : '86%',
	height : '8%',
	backgroundColor : '#0054A5',
	top : '46%',
	left : '7%',
	right : '7%',
	borderRadius : corner,
	borderWidth : '0%'
});
passwordsubview5.addEventListener('click', function() {

});
nextview.add(passwordsubview5);
// Create an ImageView.

var maintext = Ti.UI.createLabel({
	text : 'Allow Characters 1||00:',
	color : 'white',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '5%',
});
// Add to the parent view.
passwordsubview5.add(maintext);

var View5 = Ti.UI.createView({
	backgroundColor : '#0B4191',
	width : '0.5%',
	height : '100%',
	top : '0%',
	right : '14%'
});
// Add to the parent view.
passwordsubview5.add(View5);

var aSwitch5 = Ti.UI.createSwitch({
	backgroundImage:'/images/off.png',
	titleOff:'',
  	titleOn:'',
  	color:'white',
	value : false,
	right : '0%',
	width : '14%',
	height : '100%'
});
// Listen for change events.
aSwitch5.addEventListener('change', function(e) {
	Ti.API.info('Event value: ' + e.value + ', switch value: ' + aSwitch5.value);
	if(aSwitch5.value==true){
		
	aSwitch5.backgroundImage='/images/on.png';
	count++;
	}else{
		aSwitch5.backgroundImage='/images/off.png';	
		count--;
	}
});
passwordsubview5.add(aSwitch5);

var bottomtext = Ti.UI.createLabel({
	text : 'Number of Character :10',
	color : '#525252',
	font : {
		fontSize : tmp
	},
	height : 'auto',
	width : 'auto',
	left : '7%',
	top : '55%'
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
	thumbImage : '/images/slide_circule.png',
	leftTrackImage : '/images/slider.png',
	rightTrackImage : '/images/slide_bg.png',
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
	top : '68%'
});
// Add to the parent view.
nextview.add(bottomtext1);

var bottomView0 = Ti.UI.createView({
	backgroundColor : '#0054A5',
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
bottomView.addEventListener('click', function() {
	randomString();
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
	top : '87%'
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
	top : '91%'
});
// Add to the parent view.
nextview.add(bottomtext3);
