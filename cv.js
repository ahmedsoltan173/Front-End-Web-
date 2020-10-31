$(document).ready(function(){

		$(".Name").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".first").text($(this).val());
	});
	$(".address").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".Second").text($(this).val());
	});
		$(".phone").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".third").text($(this).val());
	});
		$(".dataaa").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".four").text($(".data").val()+"-"+ $(".dataa").val()+"-"+$(".dataaa").val());
	});
		$(".status").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".five").text($(this).val());
	});
	$(".e-mail").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".six").text($(this).val());
	});
	/***********************************************/
	function filePreview(input){
		if(input.files&&input.files[0]){
			var reader= new FileReader();
			reader.onload=function(e){
				$('#file').after(function(){
					$(".aaa").remove();
				});
				$('.hhh').after('<div class="col-lg-5 col-md-5 col-sm-3 col-xs-3 aaa " ><img src="'+e.target.result+'"    position="relative"left="5"  /></div>');

			}
			reader.readAsDataURL(input.files[0]);
		}
	}
		$('#file').change(function(){
		filePreview(this);
	});

/*********************************************************************************************************/
$(".ed_1").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-first").text($(this).val());
	});
$(".ed-1").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_first").text($(this).val());
	});


$(".ed_2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-second").text($(this).val());
	});
$(".ed-2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_second").text($(this).val());
	});

$(".ed--2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span-2").text($(this).val());
	});



$(".ed_3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-third").text($(this).val());
	});
$(".ed-3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_third").text($(this).val());
	});
$(".ed--3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span-3").text($(this).val());
	});



$(".ed_4").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-four").text($(this).val());
	});
$(".ed-4").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_four").text($(this).val());
	});
$(".ed--4").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span-4").text($(this).val());
	});


$(".ed_5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-five").text($(this).val());
	});
$(".ed-5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_five").text($(this).val());
	});
$(".ed--5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span-5").text($(this).val());
	});



$(".ed_6").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-six").text($(this).val());
	});
$(".ed-6").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_six").text($(this).val());
	});
$(".ed--6").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span-6").text($(this).val());
	});



$(".ed_7").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed-seven").text($(this).val());
	});
$(".ed-7").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed_seven").text($(this).val());
	});
$(".ed--7").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span-7").text($(this).val());
	});




/*********************************************************************************************************/
$(".ed__1").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--first").text($(this).val());
	});
$(".ed-_1").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__first").text($(this).val());
	});


$(".ed__2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--second").text($(this).val());
	});
$(".ed-_2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__second").text($(this).val());
	});

$(".ed---2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span--2").text($(this).val());
	});



$(".ed__3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--third").text($(this).val());
	});
$(".ed-_3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__third").text($(this).val());
	});
$(".ed---3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span--3").text($(this).val());
	});



$(".ed__4").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--four").text($(this).val());
	});
$(".ed-_4").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__four").text($(this).val());
	});
$(".ed---4").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span--4").text($(this).val());
	});


$(".ed__5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--five").text($(this).val());
	});
$(".ed-_5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__five").text($(this).val());
	});
$(".ed---5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span--5").text($(this).val());
	});



$(".ed__6").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--six").text($(this).val());
	});
$(".ed-_6").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__six").text($(this).val());
	});
$(".ed---6").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span--6").text($(this).val());
	});



$(".ed__7").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed--seven").text($(this).val());
	});
$(".ed-_7").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ed__seven").text($(this).val());
	});
$(".ed---7").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".span--7").text($(this).val());
	});
/*******************************************************************************************************/
$(".skills__5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".skills--five").text($(this).val());
	});
/*********************************************************************************************************/
$(".hobbies__5").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".hobbies--five").text($(this).val());
	});
/********************************************************************************************************/
$(".ref---1").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ref-1").text($(this).val());
	});
$(".ref-_1").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ref_one").text($(this).val());
	});

	$(".ref---2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ref-2").text($(this).val());
	});
$(".ref-_2").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ref_two").text($(this).val());
	});
/**********************************************************************************************************/
$(".refre").click(function(){

$(".refrence").css("visibility","visible");
$(this).text(".")
	$(this).hide(800);
});

//$(".add").click(function(){
//$(this).after('<div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 " ><span class="ref--3" style="font-weight:bold;margin-right:5px;font-size:16px;  ">hfdkjd</span><p class="ref_third"style="font-size:16px; display:inline; "></p></div></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 "><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 " ><input type="text" name="" class="ref---3" style="width:150px; margin-right:10px;  "></div><div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 " ><input type="text" name="" class="ref-_3" style="width:300px; "></div></div></div>')

//});
/*************************************************************************************************************/
	$(".ref---3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ref--3").text($(this).val());
	});
$(".ref-_3").on("keyup",function(){ //    keydown    && keypress        When you press any key wilfunction
		$(".ref_third").text($(this).val());
	});
/****************************************************************************************************************/
$(".theskills").click(function(){

$(".skil").css("visibility","visible");
$(this).text(".")
	$(this).hide(800);
});
/***********************************************************************************************************/

/****************************************************************************************************************/
$(".theskills").click(function(){

$(".skil").css("visibility","visible");
$(this).text(".")
	$(this).hide(800);
});
/***********************************************************************************************************/
/****************************************************************************************************************/
$(".thehobbies").click(function(){

$(".hobbies").css("visibility","visible");
$(this).text(".")
	$(this).hide(800);
});
/***********************************************************************************************************/
$(".theEnd").click(function(){
	$(".done").css("visibility","hidden");
	$(".done").remove();
	$(".theskills").hide(800);
	$(".thehobbies").hide(800);
	$(".theFinish").css("visibility","visible");
	$(this).text(".");
	$(this).hide(800);
	$(".refre").text(".")
	$(".refre").hide(800);
	$(".kkk").css("visibility","visible");

});


$(".theFinish").click(function(){
		$(".finish").attr({
	     
		"class":"col-lg-12 col-md-12 col-sm-12 col-xs-12"
		});
		$(this).text(".");
		$(this).hide(1000);
		$("h1").text(".");
		$("h1").hide(1000);
		$(".print").css("visibility","visible");
		/**********************************/

	});
$(".print").click(function(){
	$(this).hide();
})

});