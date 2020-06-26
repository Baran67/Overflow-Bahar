$(function () {
			  $(document).scroll(function () {
				var $nav = $(".navbar-fixed-top");
				$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
			  });
			});
			
function submit(){
	if($("input[name=email]").val()=="")
	{
		$(".alert").html("Please enter a valid email address.");
	}
}

