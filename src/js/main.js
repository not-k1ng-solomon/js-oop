import MainSlider from "./module/slider/slider-main";
import MiniSlider from "./module/slider/slider-mini";
import VideoPlayer from "./module/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();
    const play = new VideoPlayer('.showup .play', '.overlay');
    play.init();
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev'
    });
    showUpSlider.init();

    const moduleSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev'
    });
    moduleSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev'
    });
    feedSlider.init();
});
