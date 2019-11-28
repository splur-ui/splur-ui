import './SApp.styl'

export default {
    name: 's-app',
    render: function(createElement) {
        return createElement('div', { class: 's-application' }, this.$slots.default)
    }
}