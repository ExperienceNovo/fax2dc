var slider = new IdealImageSlider.Slider({
    selector: '#slider',
    height: 1000, // Required but can be set by CSS
    interval: 7000,
    transitionDuration: 500,
    effect: 'fade',
    keyboardNav: 'true',
});

slider.addCaptions();
slider.start();