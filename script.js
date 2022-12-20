// Add your answer here
$(() => {
    $(".text-contents").hide();

    $(".lesson").each(function() {
        $(this).children(".lesson-icon").hover(function() {
            $(this).siblings(".text-contents").fadeIn();
        }, function() {
            $(this).siblings(".text-contents").fadeOut();
        });

    });
});