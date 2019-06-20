<template>
    <div id="viewer">
        <div class="inner">
            <div class="toggle"></div>
        </div>
        <div class="slide active">
            <video id="player"></video>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
    import {State, Mutation, Action} from 'vuex-class';
    import MobileDetect from 'mobile-detect';

    import {ICustomWindow, IVideoSource} from '@/interfaces';
    import EventBus from '@/events';
    import {pre} from '@/helpers';

    const Plyr = require('plyr');
    import 'plyr/dist/plyr.css';

    const md = new MobileDetect(window.navigator.userAgent);

    declare var window: ICustomWindow;

    @Component
    export default class PlayerSection extends Vue {

        @Prop(Number)
        public episode: number | undefined;

        @State('videoSources')
        private videoSourceState!: IVideoSource[];

        private stream: IVideoSource = {};

        private player: any;

        private defaultTitle: string = 'Чернобыль';

        private isMobileDevice: boolean = false;

        private playerControlsDesktop: string[] = [
            'play-large',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'captions',
            'settings',
            'pip',
            'airplay',
            'download',
            'fullscreen',
        ];

        private playerControlsMobile: string[] = [
            'play-large',
            'play',
            'progress',
            'current-time',
            'duration',
            // 'mute',
            // 'captions',
            'settings',
            // 'pip',
            // 'airplay',
            'fullscreen',
        ];

        public mounted() {

            EventBus.$on('actionPlay', () => {
                this.onUrlChange(this.$route);
            });
            EventBus.$on('actionClose', () => {
                this.onClose();
            });

            if (md.phone()) {
                this.isMobileDevice = true;
            }
            this.$store.subscribe(({type}) => {
                if (type === 'setSources') {
                    this.playerInit(this.videoSourceState[this.$route.meta]);
                }
            });

        }

        private onClose(): void {

            if (!this.isMobileDevice) {
                return;
            }

            if (window.innerHeight > window.innerWidth) {
                this.player.stop();
            }
        }

        // @Watch('$route')
        private onUrlChange(routeData?: any): void {
            this.currentStream = this.videoSourceState[routeData.meta];
            this.playerChangeSource();
        }

        public get currentStream(): IVideoSource {
            return this.stream;
        }

        public set currentStream(data: IVideoSource) {
            this.stream = data;
        }

        private playerInit(currentSource: IVideoSource): void {

            let playerControls = this.playerControlsDesktop;

            if (this.isMobileDevice === true) {
                playerControls = this.playerControlsMobile;
            }

            this.player = new Plyr('#player', {
                title:    'Example title',
                urls:     {
                    download: currentSource.download,
                },
                controls: playerControls,
            });

            this.player.source = {
                type:    'video',
                title:   'Example title',
                sources: [
                    {
                        src:  currentSource['720'],
                        type: 'video/webm',
                        size: 720,
                    },
                    {
                        src:  currentSource['1080'],
                        type: 'video/webm',
                        size: 1080,
                    },
                ],
                poster:  currentSource.poster,
            };
            document.title = `«${currentSource.title}» - ${this.defaultTitle}`;
            window.player = this.player;

        }

        private playerChangeSource(): void {

            if (this.isMobileDevice) {
                const body = document.querySelector('body') as HTMLElement;
                body.classList.add('fullscreen');
            }

            this.player.source = {
                type:    'video',
                title:   'Example title',
                sources: [
                    {
                        src:  this.stream['480'],
                        type: 'video/webm',
                        size: 480,
                    },
                    {
                        src:  this.stream['720'],
                        type: 'video/webm',
                        size: 720,
                    },
                    {
                        src:  this.stream['1080'],
                        type: 'video/webm',
                        size: 1080,
                    },
                ],
                poster:  this.stream.poster,
            };
            this.player.config.urls.download = this.stream.download;
            // this.player.play();
            document.title = `«${this.stream.title}» - ${this.defaultTitle}`;
        }
    }
</script>
