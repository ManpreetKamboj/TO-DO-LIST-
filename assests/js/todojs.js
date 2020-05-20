$("ul").on("click","li",function(){

$(this).toggleClass("completed");

});
$("ul").on("click","span",function(event){

    $(this).parent().fadeOut(500,function(){
       $(this).remove();
    });
  event.stopPropogation;

});
$("input[type='text']").keypress(function(event)
{
	if(event.which===13)
	{
       var todotext=$(this).val();
       $(this).val("");
       $('ul').append("<li><span><i class='fa fa-minus-square'> </i> </span>" + todotext +"</li>");

	}
});