
$(document).on('vclick', '#nextButton', function(event) {
    $.mobile.pageContainer.pagecontainer('change', 'next.html', {
        transition: "slide",
        allowSamePageTransition: false,
        reloadPage: false,
        changeHash: false
    });
});

var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log('device ready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
