function homePageLoad() {
    $('#submit')
        .click(function () {
            localStorage.setItem("name", $('#name').val());
            localStorage.setItem("password", $('#password').val());
            window.location = "sortinghat.html";
        });
}

function sortingHatLoad() {
    $('#greeting')
        .append("hello " + localStorage.getItem("name"));
}