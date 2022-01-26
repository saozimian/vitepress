module.exports = {
    title: 'Code Huan',
    description: 'Just playing demo',
    /**
     * 导航栏
     */
    themeConfig: {
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
        ],
        lastUpdated: 'Last Updated', // string | boolean
    },
}