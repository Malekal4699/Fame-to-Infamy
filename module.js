//CONFIG.debug.hooks=true;
Hooks.once('init', async function() {
    ftiInit();
});

Hooks.once('ready', async function() {
    ftiLaunch();

});

