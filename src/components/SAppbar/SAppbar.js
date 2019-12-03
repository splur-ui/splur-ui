import './SAppbar.styl'

export default {
    name: 's-appbar',
    render: function(createElement) {
        return createElement('div', { class: { 's-appbar': true, 's-appbar-fixed': this.fixed }, style: { height: this.height, backgroundColor: this.backgroundcolor } }, this.$slots.default)
    },
    props: {
        height: {
            type: String,
            default: '50px'
        },
        backgroundcolor: {
            type: String
        },
        fixed: {
            type: Boolean
        }
    },
    mounted: function () {
        this.computed.appbarheight = this.height
    },
    watch: {
        height: function(val) {
            this.computed.appbarheight = val
        }
    }
}