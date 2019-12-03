import component from './components/index'

import './styles/index.styl'

export function install(Vue){
    if(install.installed) return;
    install.installed = true;
    Vue.mixin({
        data: function () {
            return {
                computed: {
                    appbarheight: ''
                }
            }
        }
    })
    Vue.prototype.$splur = {
        appbarheight: 60
    };
    Object.keys(component).forEach(name => {
        Vue.component(name, component[name])
    })
}

const plugin = {
    install
}

let GlobalVue = null

if(typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if(GlobalVue) {
    GlobalVue.use(plugin)
}

export default component