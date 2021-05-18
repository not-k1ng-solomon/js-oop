import Slider from "./module/slider";
import VideoPlayer from "./module/playVideo";

window.addEventListener('DOMContentLoaded',()=>{
    const slider = new Slider('.page','.next');
    slider.render();
    const play = new VideoPlayer('.showup .play', '.overlay');
    play.init();
});
