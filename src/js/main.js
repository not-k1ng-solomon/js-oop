import MainSlider from "./module/slider/slider-main";
import VideoPlayer from "./module/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page', btns: '.next'});
    slider.render();
    const play = new VideoPlayer('.showup .play', '.overlay');
    play.init();
});
