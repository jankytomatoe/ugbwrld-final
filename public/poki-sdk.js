window.PokiSDK = {
    init: function() {
        return Promise.resolve();
    },
    commercialBreak: function() {
        return Promise.resolve();
    },
    rewardedBreak: function() {
        return Promise.resolve(true);
    },
    displayAd: function() {
        return Promise.resolve();
    },
    destroyAd: function() {},
    getLeaderboard: function() {
        return Promise.resolve();
    },
    getSharableURL: function() {
        return Promise.resolve("");
    },
    getURLParam: function() {
        return "";
    },
    setDebug: function() {},
    gameplayStart: function() {},
    gameplayStop: function() {},
    gameLoadingStart: function() {},
    gameLoadingFinished: function() {},
    gameLoadingProgress: function() {},
    gameInteractive: function() {},
    roundStart: function() {},
    roundEnd: function() {},
    muteAd: function() {},
    happyTime: function() {},
    setPlayerAge: function() {},
    togglePlayerAdvertisingConsent: function() {},
    logError: function() {},
    sendHighscore: function() {},
    setDebugTouchOverlayController: function() {}
};
