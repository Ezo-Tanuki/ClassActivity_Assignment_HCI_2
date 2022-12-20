// Add your answer here
$(() => {
    $(".text-contents").hide();

    var $lesson_icon = $(".lesson-icon");
    // console.log($lesson);
    $lesson_icon.each(() => {
        var ref = this
        $(ref).mouseenter(() => {
            console.log(this)
            $(this).parent().children(".text-contents").fadeIn()
        })
    })

    // $(".lesson-icon").mouseenter((self) => {
    //     // this.parent().children("p").fadeIn();
    //     // $("img", this).fadeOut();
    //     $(".text-contents").fadeIn();
    // })

    // $(".lesson-icon").mouseleave(() => {
    //     $(".text-contents").fadeOut();
    //     // $("img", this).fadeOut();
    //     // $(".text-contents").fadeIn();
    // })
})