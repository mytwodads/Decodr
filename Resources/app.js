// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;

var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    //backgroundColor:'#fff',
    //width:280,
    //height:350,
    //top: 20,
    backgroundImage:'halfpaper.png',
    //fullscreen:true,	
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:15,fontFamily:'Arial Hebrew'},
	textAlign:'center',
	width:'auto',
	top: 30
});


win1.add(label1);
win1.open();

win1.addEventListener('click', function(){
	var win2 = Titanium.UI.createWindow({  
    	title:'Tab 2',
    	backgroundImage:'fullpaper2.png',
   		//backgroundColor:'#000',
    	//fullscreen:true,	
	});
	
	var view2 = Titanium.UI.createView({
		backgroundColor:"none",
		size:{height:270,width:240},
		top:0,
	});
	
	var view3 = Titanium.UI.createView({
		backgroundColor:"none",
		backgroundImage:'tear2.png',
		height:100,
		top:250,
	});

		
	var textfield2 = Titanium.UI.createButton({
		title:"Enter a secret word",
		font:{fontSize:20,fontFamily:"Comic Zine OT"},
		color:"#aa224c",
		backgroundColor:"fffff4",
		top:10,
		left:40,
		height:40,
		width:220,
		borderColor:"none",
		borderWidth:0,
		borderRadius:0,
		borderColor:"#fffff4",
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	

textfield2.addEventListener('click',function()
	{
	var w = Ti.UI.createWindow({
		backgroundImage:'fullpaper2.png'
	});
	
	var textfield3 = Titanium.UI.createTextField({
		height:32,
		hintText:"Enter a secret word",
		backgroundImage:'inputfield.png',
		width:160,
		font:{fontSize:13},
		color:'#333',
		paddingLeft:10,
		top:200,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
	});
	
	textfield3.addEventListener('blur',function()
	{
		var timer = setTimeout(function(){
			alert("animation beings now");
		},500);
		w.close();
	});
	
	w.add(textfield3);
	w.open({modal:true,modalTransitionStyle:Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL,modalStyle:Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET,navBarHidden:true});
});

	
	var label3 = Titanium.UI.createLabel({
		color:"#ccc",
		text:8,
		font:{fontSize:30,fontFamily:"Comic Zine OT"},
	});
	
	
	var label2 = Titanium.UI.createTextArea({
		autocorrect:false,
		value:"Hello hello hello hello hello hello hello hello hello hello hello hello hello Appcelerator FTW!",
		font:{fontSize:24,fontFamily:"Comic Zine OT"},
		color:"#aa224c",
		backgroundColor:"none",
		width:250, //you have to define the size in order for it to show up
		height:200,
		top:40,
		editable:true,
});

	var countdown2 = Titanium.UI.createLabel({
		text:"130",
		font:{fontSize:44,fontFamily:"Comic Zine OT"},
		color:"#ccc",
		right: 40,
		textAlign:"right",
		backgroundColor:"none",
		height:40,
		width: 270,
		top: 200,
	});
	
/*
var secretWord = Titanium.UI.createSearchBar({
	barColor:'#000',
	showCancel:true,
	autocorrect: false,
	hintText: "Enter the secret word",
	width:Titanium.Platform.displayCaps.platformWidth,
	top: 0,
	height: 60,
});

secretWord.addEventListener('cancel', function(e)
{
   	secretWord.blur();
});


win2.add(secretWord);
*/

	win2.addEventListener('dblclick', function(){
		win2.close({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,});
		win1.show();
	});
	view2.add(label2);
	view2.add(countdown2);
 	view3.add(textfield2);
	view2.add(view3);
	win2.add(view2);
	win2.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
	win1.hide();
});

/*
var secretWord = Titanium.UI.createSearchBar({
	barColor:'#000',
	showCancel:true,
	autocorrect: false,
	hintText: "Enter the secret word",
	width:Titanium.Platform.displayCaps.platformWidth,
	top: 0,
	height: 60,
});

secretWord.addEventListener('cancel', function(e)
{
   	secretWord.blur();
});


win1.add(secretWord);
*/