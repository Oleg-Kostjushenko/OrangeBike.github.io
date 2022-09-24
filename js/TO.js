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