$('img').click(function () {
    let src = $(this).attr('src');
    $(this).attr('src', $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', src);
});