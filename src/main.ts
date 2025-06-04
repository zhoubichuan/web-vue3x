import { createApp, type App } from 'vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import AppComponent from '@/App.vue';

import microApp from '@/extends/micro-app';
import type { MicroAppProps } from '@/extends/micro-app';
import GlobalDirective from '@/directives';
import router from '@/router';
import 'amfe-flexible'

let app: App;

const render = (microAppProps?: MicroAppProps) => {
    app = createApp(AppComponent);
    app.use(router);
    app.use(GlobalDirective);

    if (microAppProps) {
        const { container } = microAppProps;
        const rooElement = container && container.querySelector('#template-project');
        rooElement && app.mount(rooElement);
    } else {
        app.mount('#template-project');
    }
};

renderWithQiankun({
    bootstrap() {
        console.log(' book bootstrap');
    },
    mount(props) {
        console.log(' book mount', props);
        microApp.setMicroAppProps(props as MicroAppProps);
        render(microApp.props);
    },
    update(props) {
        console.log(' book update', props);
        microApp.setMicroAppProps(props as MicroAppProps);
    },
    unmount(props) {
        console.log(' book unmount', props);
        app && app.unmount();
    }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}
