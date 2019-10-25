module.exports = {
    presets: [
        '@vue/app',
        ['@babel/preset-env', { targets: { node: 'current' } }],
    ],
    plugins: ['syntax-class-properties', 'transform-class-properties'],
};
