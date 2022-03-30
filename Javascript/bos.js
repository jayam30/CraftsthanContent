$(document).ready(function () {
$(".box").hover(hoveron,hoveroff);
$("#Buyer").click(() => {
    $("html").load('../Buyer.html');
})
$("#Seller").click(() => {
  $("html").load('../Seller.html');
})
});

function hoveron() {
  $(".box #" + $(this).attr("id")).css({ "color": "rgb(223, 223, 223)","background-color": "rgb(41, 40, 41)"});
}

function hoveroff() {
    $(".box #" + $(this).attr("id")).css({ color: "rgb(0, 0, 0)" ,"background-color": "rgb(211, 211, 211)"});
}
