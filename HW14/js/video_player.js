class VideoPlayerBasic {
    constructor(settings) {
        // "сольем" наши дефолтные сетинги с теми, что пришли
        this.settings = Object.assign(VideoPlayerBasic.getDefaultSettings(), settings)
    }

    init() {
        // сделаем проверку на то, что пришли в настройках непустые строки
        if (!this.settings.videoUrl) return console.error('NOT videoUrl')
        if (!this.settings.videoPlayerContainer) return console.error('NOT videoPlayerContainer')

        // создадим разметку на странице
        this.addTemplate()
        // найдем эл-ты для управления видосиком
        this.setElements()
        // обработчики
        this.setEvents()
    }

    addTemplate() {
        const template = this.createTemplate()
        const container = document.querySelector(this.settings.videoPlayerContainer)

        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('NOT videoPlayerContainer')
    }

    setElements() {
        this.container = document.querySelector(this.settings.videoPlayerContainer);
        this.video = this.container.querySelector('video');
        this.toggleBtn = this.container.querySelector('.toggle');
        this.progress = this.container.querySelector('.progress__filled');
        this.progressContainer = this.container.querySelector('.progress');
        this.inputVolume = this.container.querySelector('.player__slider_volume')
        this.inputPlaybackRate = this.container.querySelector('.player__slider_playbackRate')
        this.btnSkip = this.container.querySelectorAll('.skip')
    }

    setEvents() {
        this.video.addEventListener('click', this.toggleVideo)
        this.toggleBtn.addEventListener('click', this.toggleVideo)
        this.progressContainer.addEventListener('click', (e) => this.scrub(e))
        this.progressContainer.addEventListener('mousedown', () => this.isMouseDown = true)
        this.progressContainer.addEventListener('mouseup', () => this.isMouseDown = false)
        this.progressContainer.addEventListener('mousemove', (e) => {
            this.isMouseDown && this.scrub(e)
        })
        this.video.addEventListener('timeupdate', this.handleProgress)
        this.inputVolume.addEventListener('change', this.volume)
        this.inputPlaybackRate.addEventListener('change', this.playbackRate)
        this.btnSkip.forEach(element => {
            element.addEventListener('click', () => {
                this.skip(element.getAttribute('data-skip'))
            })
        });
        this.video.addEventListener('dblclick', (e) => this.dblclick(e))
    }
    dblclick = (e) => {
        if (e.clientX > 600) {
            this.video.currentTime += 2;
        } else {
            this.video.currentTime -= 2;
        }
    }

    skip = (e) => {
        this.video.currentTime += +e;
    }
    volume = () => {
        this.video.volume = this.inputVolume.value;
    }
    playbackRate = () => {
        this.video.playbackRate = this.inputPlaybackRate.value;
    }

    toggleVideo = () => {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggleBtn.textContent = this.video.paused ? ' || ' : ' ► ';
        this.video[method]()
    }
    scrub(e) {
        this.video.currentTime = (e.offsetX / this.progressContainer.offsetWidth) * this.video.duration
    }

    handleProgress = () => {
        const {
            currentTime,
            duration
        } = this.video
        const percent = (currentTime / duration) * 100
        this.progress.style.flexBasis = `${percent}%`
    }

    createTemplate() {
        const {
            videoUrl,
            volume,
            prev,
            next
        } = this.settings;

        return `
        <div class="player">
            <video class="player__video viewer" src="${videoUrl}"> </video>
            <div class="player__controls">
                <div class="progress">
                    <div class="progress__filled"></div>
            </div>
            <button class="player__button toggle" title="Toggle Play">►</button>
            <input type="range" name="volume" class="player__slider_volume" min=0 max="1" step="0.05" value="${volume}">
            <input type="range" name="playbackRate" class="player__slider_playbackRate" min="0.5" max="2" step="0.1" value="1">
            <button data-skip="${prev}" class="player__button skip">« 1s</button>
            <button data-skip="${next}" class="player__button skip">1s »</button>
            </div>
        </div>
        `
    }

    static getDefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: '',
            volume: 1,
            prev: -1,
            next: 1
        }
    }
}

const myPlayer = new VideoPlayerBasic({
    videoUrl: 'video/mov_bbb.mp4',
    videoPlayerContainer: 'body',
    prev: -2,
    next: 2
});

myPlayer.init();