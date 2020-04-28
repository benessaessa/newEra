$(document).ready(function(){
    $(".next").click(function(){
      $(".step2").show(1000);
      $(".step1").hide(1000);
    });
    $(".back").click(function(){
        $(".step1").show(1000);
        $(".step2").hide(1000);
    });
});
$(function () {
    $(".datepicker").datepicker();
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});