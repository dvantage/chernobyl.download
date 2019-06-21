<template>
    <!-- Main -->
    <div id="main">
        <div id="app">
            <!-- Header -->
            <header id="header">
                <a href="/">
                    <img class="logo" src="./assets/images/logo.jpg" alt=""/>
                </a>
            </header>
            <!-- Thumbnail -->
            <section id="thumbnails">
                <article v-for="(item, key) in videoSourceState" :key="key">
                    <router-link :to="`/episode${item.episode}`" class="thumbnail" :data-id="item.episode"
                                 @click.native="actionPlay">
                        <img :src="item.poster" alt=""/>
                        <h3>Серия {{item.episode}}</h3>
                    </router-link>
                </article>

            </section>
            <!-- Footer -->
            <footer id="footer">
                <ul class="copyright">
                    <li>&copy;</li>
                    <li><a href="https://vladimirdorogov.com" target="_blank">Vladimir dorogov</a></li>
                </ul>
            </footer>
        </div>
        <router-view/>
    </div>
</template>
<script lang="ts">

    // @ts-ignore
    import {main} from './assets/js/main.js';
    import {Component, Vue} from 'vue-property-decorator';
    import {State, Mutation, Action} from 'vuex-class';
    import MobileDetect from 'mobile-detect';

    import EventBus from '@/events';
    import {IVideoSource} from '@/interfaces';
    import {pre} from '@/helpers';

    import '@/assets/css/main.css';

    const md = new MobileDetect(window.navigator.userAgent);

    @Component
    export default class App extends Vue {

        @State('videoSources')
        private videoSourceState!: IVideoSource[];

        @Action('getSources')
        private getVideoSources: any;

        private endpoint: string = 'https://api.chernobyl.download:3000';

        public async mounted() {
            if (md.phone()) {
                const body = document.querySelector('body') as HTMLElement;
                body.classList.add('mobile');
            }
            await this.getVideoSources(this.endpoint);
            main.init();
        }

        public actionPlay() {
            EventBus.$emit('actionPlay');
        }
    }
</script>


