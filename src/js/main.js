import MainSlider from "./module/slider/slider-main";
import MiniSlider from "./module/slider/slider-mini";
import VideoPlayer from "./module/playVideo";
import Difference from "./module/difference";
import Form from "./module/forms";
import ValidationForm from "./module/validationForm";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();
    const play = new VideoPlayer('.showup .play', '.overlay');
    play.init();
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true,
    });
    showUpSlider.init();

    const moduleSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: 5000
    });
    moduleSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
        // animate: true
    });
    feedSlider.init();

    const officerOld = new Difference('.officerold', '.officer__card-item');
    officerOld.init();

    const officerNew = new Difference('.officernew', '.officer__card-item');
    officerNew.init();

    const forms = new Form('form', 'input');
    forms.init();

    const emailValid = new ValidationForm('[name="email"]');
    emailValid.noRussianLetter();

    const phoneMask = new ValidationForm('[name="phone"]','+1 (___) ___-____');
    phoneMask.initMask();

});
