    // $(".st1").click(function() {
    //     $(".karaoke").prop("checked", true)
    // })
    $(document).ready(function(){
    $(".st1").click(function () {
        $(".karaoke").prop("checked", true);
      });
      $(".st2").click(function () {
        $(".pie").prop("checked", true);
      });
      $(".st3").click(function () {
        $(".icebucket").prop("checked", true);
      });
      $(".st4").click(function () {
        $(".makeup").prop("checked", true);
      });
      $(".st5").click(function () {
        $(".tiktok").prop("checked", true);
      });
      $("ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
      });
    })