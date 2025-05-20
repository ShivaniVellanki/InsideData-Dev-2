// Wait for analytics to be available
document.addEventListener('DOMContentLoaded', function () {
    console.log('Analytics object before getting:', window.analytics);
    let insideData = getAnalytics();
    console.log('Analytics data retrieved:', insideData);

    // Helper function to read URL param
    function getURLParameter(name) {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    const shouldTriggerAgent = getURLParameter("agent");

    // Inject dialog launch if URL param is true
    if (shouldTriggerAgent === "true") {
        insideData.launchDialog = "TransferToSupportQueue"; // Dialog that does handoff to specific queue
    }

    KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY = '9cb93b446f3744c0b678238a901b8aa18f904e3593184563a7e00e53d305ff8cstcd';
    KoreChatSDK.chatConfig.botOptions.botInfo.customData = insideData;

    new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);
});
