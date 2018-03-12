$(function(){
	//给音乐图标添加点击事件
	$(".music2").addClass("start").click(function(){
		var audio=document.getElementsByTagName("audio")[0];
		if(audio.paused){
			audio.play();
			$(".music2").css({
				"animation-play-state":"running",
			});
		}else{
			audio.pause();
			$(".music2").css({
				"animation-play-state":"paused",
			});
		}
	});
});