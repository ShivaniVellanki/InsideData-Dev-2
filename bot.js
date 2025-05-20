document.addEventListener('DOMContentLoaded', function () {
    console.log('Analytics object before getting:', window.analytics);
    let insideData = getAnalytics();
    console.log('Analytics data retrieved:', insideData);

    KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY = '9cb93b446f3744c0b678238a901b8aa18f904e3593184563a7e00e53d305ff8cstcd';
    KoreChatSDK.chatConfig.botOptions.botInfo.customData = insideData;

    // Show bot and store instance
    window.chatInstance = new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);

    // Wait for bot to be ready, then bind the Ask an Expert click
    window.addEventListener("KoreSDK.chatWindow.onOpen", function () {
        const expertBtn = document.getElementById('askExpertBtn');
        if (expertBtn) {
            expertBtn.addEventListener('click', function () {
                console.log("Ask an Expert clicked");
                if (window.chatInstance) {
                    window.chatInstance.send({
                        type: "command",
                        val: "/dialog TransferToSupportQueue"
                    });
                }
            });
        }
    });
});
