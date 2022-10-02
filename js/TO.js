const anchors4 = document.querySelectorAll('a[href*="#"]')

for (let anchor4 of anchors4) {
    anchor4.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor4.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block:"start"
        })
    })
}

let vipadMenu = false
$('.list1').click(function () {
    if (!vipadMenu) {
        $(".li1").slideDown()
    } else {
        $(".li1").slideUp()
    }
    vipadMenu = !vipadMenu
})

let vipadMenu1 = false
$('.list2').click(function () {
    if (!vipadMenu1) {
        $(".li2").slideDown()
    } else {
        $(".li2").slideUp()
    }
    vipadMenu1 = !vipadMenu1
})

let vipadMenu2 = false
$('.list3').click(function () {
    if (!vipadMenu2) {
        $(".li3").slideDown()
    } else {
        $(".li3").slideUp()
    }
    vipadMenu2 = !vipadMenu2
})