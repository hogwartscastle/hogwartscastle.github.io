
function homePageLoad() {
    $('#submit')
        .click(function () {
            $.cookie("name", $('#name').val());
            $.cookie("password", $('#password').val());
            window.location = "sortinghat.html";
        });
}

function sortingHatLoad() {
    $('#greeting').append("hello " + $.cookie("name", {path:"index.html"}));
}