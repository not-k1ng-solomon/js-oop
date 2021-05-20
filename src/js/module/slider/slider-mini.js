import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        // console.log(this.slides);
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    btnSwap(slide, course, n = 0) {
        if (n > 10) {
            return false;
        }
        if (slide.tagName === "BUTTON") {
            if (course === "next") {
                this.container.appendChild(this.slides[0]);
                this.btnSwap(this.slides[1], course, n + 1)
            } else if (course === "prev") {
                let active = this.slides[this.slides.length - 1];
                this.container.insertBefore(active, this.slides[0]);
                this.btnSwap(this.slides[this.slides.length - 1], course, n + 1)
            }
        }
        return true
    }

    nextSlide() {
        let swap = this.btnSwap(this.slides[1], 'next');
        if (swap === true) {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.nextSlide()
        });
        this.prev.addEventListener('click', () => {
            let swap = this.btnSwap(this.slides[this.slides.length - 1], 'prev');
            if (swap === true) {
                let active = this.slides[this.slides.length - 1];
                this.container.insertBefore(active, this.slides[0]);
                this.decorizeSlides();
            }
            // this.container.appendChild(this.slides[0]);
        });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
        this.decorizeSlides();
        this.bindTriggers();

        if (this.autoplay) {
            setInterval(() => {
                this.nextSlide()
            }, this.autoplay);
        }
    }
}