const anchors1 = document.querySelectorAll('a[href*="#"]')

for (let anchor1 of anchors1) {
    anchor1.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor1.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block:"start"
        })
    })
}