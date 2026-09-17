function showPage(pageId) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";


    let menuItems = document.querySelectorAll("li");

    menuItems.forEach(function(item) {
        item.classList.remove("active");
    });


    document.getElementById(pageId + "Nav").classList.add("active");
}


window.onload = function() {
    showPage("home");
};