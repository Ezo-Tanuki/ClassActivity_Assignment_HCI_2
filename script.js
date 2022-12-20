// Add your answer here
$(() => {
    $(".text-contents").hide();

    $(".lesson").each(function() {

        $(this).children(".lesson-icon").mouseenter(function() {
            $(this).siblings(".text-contents").fadeIn();
        })

        $(this).children(".lesson-icon").mouseleave(function() {
            $(this).siblings(".text-contents").fadeOut();
        });
    });
});