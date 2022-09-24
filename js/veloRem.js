const anchors2 = document.querySelectorAll('a[href*="#"]')

for (let anchor2 of anchors2) {
    anchor2.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor2.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block:"start"
        })
    })
}