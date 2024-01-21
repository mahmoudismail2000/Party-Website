/// <reference types="../@types/jquery" />

let flagOpen = true;
$("#openSpanId").on("click", function () {
  if (flagOpen) {
    $("#openId").animate({ left: 0 }, 1000);
    $("#openSpanId").animate({ left: 270 }, 1000);
    flagOpen = false;
  } else {
    $("#openId").animate({ left: -270 }, 1000);
    $("#openSpanId").animate({ left: 0 }, 1000);
    flagOpen = true;
  }
});

$("#closeId").on("click", function () {
  $("#openId").animate({ left: -270 }, 1000);
  $("#openSpanId").animate({ left: 0 }, 1000);
  flagOpen = true;
});

$(".h3Class").on("click", function () {
  let ParaId = $(this).attr("id");
  $(`.paraSiblings`)
    .find(".caption")
    .not($(`#${ParaId}`).next())
    .slideUp(1000);
  $(`#${ParaId}`).next().slideToggle(1000);
});

$("#messageId").on("keydown keyup", function () {
  let lengthMessage = $("#messageId").val().length;
  if (lengthMessage < 100) {
    $("#spanCher").text(100 - lengthMessage);
  }
  if (lengthMessage >= 100) {
    $("#spanCher").text("your available character finished");
  }
});

let currentDate = new Date();
let setDate = new Date(
  "Sat Jan 15 2025 20:55:45 GMT+0200 (Eastern European Standard Time)"
);
let timeDifference = currentDate - setDate;

let seconds = (Math.round(timeDifference / 1000) % 60) * -1;
let minutes = (Math.round(timeDifference / (1000 * 60)) % 60) * -1;
let hours = (Math.round(timeDifference / (1000 * 60 * 60)) % 24) * -1;
let days = Math.round(timeDifference / (1000 * 60 * 60 * 24)) * -1;
setInterval(function () {
  if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
    clearInterval(1);
  } else {
    if (seconds > 0) {
      seconds -= 1;
      $(".seconds").text(seconds);
    } else {
      if (minutes > 0) {
        minutes -= 1;
        $(".minutes").text(minutes);
        seconds = 60;
      } else {
        if (hours > 0) {
          minutes = 60;
          hours -= 1;
          $(".hours").text(hours);
        } else {
          hours = 24;
          days -= 1;
          $(".days").text(days);
        }
      }
    }
  }
}, 1000);

$(function () {
  $(".seconds").text(seconds);
  $(".minutes").text(minutes);
  $(".hours").text(hours);
  $(".days").text(days);
  setInterval(function () {
    $("body").css("overflow-y", "visible");
    $("#loadId").addClass("d-none");
    $(".capLoading").addClass("d-none");
  }, 300);
  $('.skitter-large').skitter({
    fullscreen:true,
    hide_tools:true,
    
    
  });

});

$("a").on("click", function () {
  let sectionHref = $(this).attr("href");
  let sectionOffset = $(sectionHref).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 1500);
});


new WOW().init();

