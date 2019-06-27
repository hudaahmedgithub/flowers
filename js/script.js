$(function(){

$('.col-md-2').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
if($(this).data('class')==='all')
{
	$('.shulff.col-sm-3').hide();
}
});
);
