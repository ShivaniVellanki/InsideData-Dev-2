document.addEventListener('DOMContentLoaded', function () {
    KoreChatSDK.chatConfig = {
        botOptions: {
            API_KEY_CONFIG: {
                KEY: "9cb93b446f3744c0b678238a901b8aa18f904e3593184563a7e00e53d305ff8cstcd"
            },
            botInfo: {
                name: "Reactive_POC",
                customData: {}
            },
            clientId: "cs-de247d47-4b00-54b7-9261-eddaa39a754e",
            clientSecret: "e5WPiFqgun567KGjzq2LoUqvwnULI2q48/DrJnxdK1Q=",
            userIdentity: "shivani.vellanki@staples.com"
        },
        allowIframe: false,
        isSendButton: true
    };

    KoreChatSDK.chatWindowConfig = {
        container: "body" // attach to <body>
    };

    console.log("Initializing Kore SDK...");
    window.chatInstance = new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);

    // Button binding after short delay
    setTimeout(() => {
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
    }, 1000);
});
