export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.querySelector('.play__circle').classList.contains('closed')) {
                    this.activeBtn = btn;
                    if (this.player) {
                        this.overlay.style.display = 'flex';

                        if (this.path !== btn.dataset.url) {
                            this.path = btn.dataset.url;
                            this.player.loadVideoById({videoId: this.path});
                        }
                    } else {
                        this.path = btn.dataset.url;
                        this.createPlay(this.path);
                    }
                }
            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.pauseVideo();
            // this.player.stopVideo();
        });
    }

    createPlay(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange,
            }
        });
        this.overlay.style.display = 'flex';
    }

    onPlayerStateChange(event) {
        try {
            const blockerElev = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

            if (event.data === 0) {
                if (blockerElev.querySelector('.play__circle').classList.contains('closed')) {
                    blockerElev.querySelector('.play__circle').classList.remove('closed');
                    blockerElev.querySelector('svg').remove();
                    blockerElev.querySelector('.play__circle').appendChild(playBtn);
                    blockerElev.querySelector('.play__text').textContent = 'PLAY VIDEO';
                    blockerElev.querySelector('.play__text').classList.remove('attention');
                    blockerElev.style.opacity = '1';
                    blockerElev.style.filter = 'none';
                }
            }
        }catch (e){}
    }

    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}