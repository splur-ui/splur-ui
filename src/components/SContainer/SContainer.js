import './SContainer.styl'

export default {
    name: 's-container',
    render: function(createElement) {
        return createElement('div',{ class: { 's-container': true }, style: { paddingTop: this.computed.appbarheight } }, this.$slots.default)
    }
}