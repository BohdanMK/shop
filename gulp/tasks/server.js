export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: "./dist"
        },
        notify: true,
        port: 3000,
    });
}