$(document).ready(function(){   


console.log("test");


 $('.titletext').hover(function(){
        $(this).addClass('blur');
    }).mouseout(function(){
        $(this).removeClass('blur');
    });



 // $('.titletext').click(function(){
 //        $("#downarrow1").addClass(".downarrow2");
 //    });









$("#theproject").click(function(){
		$(".projectimages").animate({opacity:1}, 2000);
		$("#x").animate({opacity:1}, 2000);
		$("#projectcopy").animate({opacity:1}, 2000);
		$("#projectcopytitle").animate({opacity:1}, 2000);
		$("#copyborder").animate({opacity:1}, 2000);
});


$("#x").click(function(){
		$(".projectimages").animate({opacity:0}, 2000);
		$("#x").animate({opacity:0}, 2000);
		$("#projectcopy").animate({opacity:0}, 2000);
		$("#projectcopytitle").animate({opacity:0}, 2000);
		$("#copyborder").animate({opacity:0}, 2000);
});


// $(".titletext").mouseleave(function(){
// 		$("#downarrow1").animate({opacity:0}, 500);
// });



$("#physmen").click(function(){
		$("#physmencopy").animate({opacity:1}, 2000);
		$("#physmenx").animate({opacity:1}, 2000);
		$("#physcopyborder").animate({opacity:1}, 2000);
		$("#physmentitle").animate({opacity:1}, 2000);
});


$("#physmenx").click(function(){
		$("#physmencopy").animate({opacity:0}, 2000);
		$("#physmenx").animate({opacity:0}, 2000);
		$("#physcopyborder").animate({opacity:0}, 2000);
		$("#physmentitle").animate({opacity:0}, 2000);
});





$("#implications").click(function(){
		$("#impx").animate({opacity:1}, 2000);
		$("#impcopytitle").animate({opacity:1}, 2000);
		$("#impcopy").animate({opacity:1}, 2000);
		$("#impborder").animate({opacity:1}, 2000);
});


$("#impx").click(function(){
		$("#impx").animate({opacity:0}, 2000);
		$("#impcopytitle").animate({opacity:0}, 2000);
		$("#impcopy").animate({opacity:0}, 2000);
		$("#impborder").animate({opacity:0}, 2000);
});










$( "#sec1" ).mouseenter(function() {
  $('.background').animate({opacity: 1}, 500 )
});

$( "#sec2" ).mouseenter(function() {
  $('.background').animate({opacity: .8}, 500 )
});


$( "#sec3" ).mouseenter(function() {
  $('.background').animate({opacity: .7}, 500 )
});

$( "#sec4" ).mouseenter(function() {
  $('.background').animate({opacity: .6}, 500 )
});

$( "#sec5" ).mouseenter(function() {
  $('.background').animate({opacity: .5}, 500 )
});

$( "#sec6" ).mouseenter(function() {
  $('.background').animate({opacity: .4}, 500 )
});

$( "#sec7" ).mouseenter(function() {
  $('.background').animate({opacity: .3}, 500 )
});

$( "#sec8" ).mouseenter(function() {
  $('.background').animate({opacity: .2}, 500 )
});

$( "#sec9" ).mouseenter(function() {
  $('.background').animate({opacity: .1}, 500 )
});

$( "#sec10" ).mouseenter(function() {
  $('.background').animate({opacity: 0}, 500 )
});








// $( "#sec2" ).mouseenter(function() {
//   $( ".background").animate({ 
//     	background-color: #333333, duration:1000 });
// });










// $("#theproject").mouseenter(function(){
// 		$(".projectimages").fadeTo( "slow", 1 );
// });





//  $('.theproject').click(function(){
//         $("#projpic2").addClass('.topimage');
//     // }).mouseout(function(){
//     //     $(this).removeClass('blur');
//     });






















// $("#fadepanel1").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });


// $("#fadepanel2").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });

// $("#fadepanel3").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });

// $("#fadepanel4").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });

// $("#fadepanel5").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });

// $("#fadepanel6").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });


// $("#fadepanel7").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });

// $("#fadepanel8").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });

// $("#fadepanel9").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// });






























	});  