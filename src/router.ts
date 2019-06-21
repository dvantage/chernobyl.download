import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import App from '@/App.vue';
import PlayerSection from './views/PlayerSection.vue';

Vue.use(Router);

export default new Router({
    mode:            'history',
    // base:   '/',
    linkActiveClass: 'active',
    routes:          [
        {
            path:     '/',
            redirect: '/episode1',
        },
        {
            path:      '/episode1',
            name:      'episode1',
            component: PlayerSection,
            props:     {episode: 1},
            meta:      '0',
        },
        {
            path:      '/episode2',
            name:      'episode2',
            component: PlayerSection,
            props:     {episode: 2},
            meta:      '1',
        },
        {
            path:      '/episode3',
            name:      'episode3',
            component: PlayerSection,
            props:     {episode: 3},
            meta:      '2',
        },
        {
            path:      '/episode4',
            name:      'episode4',
            component: PlayerSection,
            props:     {episode: 4},
            meta:      '3',
        },
        {
            path:      '/episode5',
            name:      'episode5',
            component: PlayerSection,
            props:     {episode: 5},
            meta:      '4',
        },
    ],
});
