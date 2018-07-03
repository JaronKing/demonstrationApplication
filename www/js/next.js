$(document).on( "pagecontainerbeforeshow", function( event, ui ) {
    var url = event.target.baseURI;
    if (url.indexOf('next.html') !== -1) {
    	var previousButtonTemplate = $('#previousButtonTemplate').html();
        Mustache.parse(previousButtonTemplate);
        var previousButtonValues = {
            title: 'previous before render',
            buttonClass: 'previousButton'
        };
        var renderedPreviousButton = Mustache.render(previousButtonTemplate, previousButtonValues);
        $('#previousDiv').append(renderedPreviousButton);
        $('#previousDiv').enhanceWithin();
    }
});

$(document).on('pageshow', function (event) {
    var url = event.target.dataset.url;
    if (url.indexOf('next.html') !== -1) {
    	var previousButtonTemplate = $('#previousButtonTemplate').html();
        Mustache.parse(previousButtonTemplate);
        var previousButtonValues = {
            title: 'previous after render',
            buttonClass: 'previousButton'
        };
        var renderedPreviousButton = Mustache.render(previousButtonTemplate, previousButtonValues);
        $('#previousDiv').append(renderedPreviousButton);
        $('#previousDiv').enhanceWithin();
    }
});

$(document).on('vclick', '.previousButton', function(event) {
    $.mobile.pageContainer.pagecontainer('change', 'index.html', {
        transition: "slide",
        allowSamePageTransition: false,
        reloadPage: false,
        changeHash: false,
        reverse: true
    });
});
