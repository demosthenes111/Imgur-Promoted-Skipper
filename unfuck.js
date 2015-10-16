var POLL_INTERVAL = 200; // millis

// who needs jquery
function onUrlChange(somefxn){
    var oldHash = window.location.href;
    
    setInterval(function(){
        if(oldHash !== window.location.href){
            somefxn();
            oldHash = window.location.href;
        }
    }, POLL_INTERVAL);
}

// navigate to the next post
function next_post() {
	console.log("Skipping Promoted Post.");

	var nextButtons = document.getElementsByClassName("navNext");
	if (nextButtons.length > 0) {
		nextButtons[0].click();
	}
}

// returns true if this post is promoted
function has_promoted() {
	var promotedTags = document.getElementsByClassName("promoted-tag");
	return promotedTags.length > 0;
}

// magic sauce
onUrlChange(function() {
	// really hardcore business logic
	if (has_promoted()) {
		next_post();
	}
});


