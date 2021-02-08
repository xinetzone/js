$(function () {
    let coverSlider = $('.carousel');
    //用户触摸轮播自动 restartPlay 是否生效
    let initUserPressedOrDraggedActive = false
    //用户触摸轮播自动 restartPlay
    function initUserPressedOrDragged(instance) {
        setInterval(() => {
            if (instance.pressed || instance.dragged) {
                // console.log('initUserPressedOrDragged: ',instance.pressed,instance.dragged)
                restartPlay()
            }
        }, 1000)
    }
    coverSlider.carousel({
        duration: Number('120'),
        fullWidth: true,
        indicators: 'true' === 'true',
        onCycleTo() {
            if (!initUserPressedOrDraggedActive) {
                // console.log('initUserPressedOrDraggedActive')
                initUserPressedOrDragged(this)
                initUserPressedOrDraggedActive = true
            }
        },
    })
    let carouselIntervalId;
    // Loop to call the next cover article picture.
    let autoCarousel = function () {
        carouselIntervalId = setInterval(function () {
            coverSlider.carousel('next');
        }, 5000);
    };
    autoCarousel();
    function restartPlay() {
        clearInterval(carouselIntervalId);
        autoCarousel();

    };

    // prev and next cover post.
    $('#prev-cover').click(function () {
        coverSlider.carousel('prev');
        restartPlay();
    });
    $('#next-cover').click(function () {
        coverSlider.carousel('next');
        restartPlay();
    });
});