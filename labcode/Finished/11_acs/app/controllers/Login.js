var acs = require('acs');

if(acs.isLoggedIn()) {
	// user is logged in so just close this view
	$.logincontainer.hide();
} else {
	Ti.API.info('not logged in')
}

var createCallback = function(user) {
	if(user) {
		$.logincontainer.hide();
	} else {
		$.submit.title = 'Try again ...';
		setTimeout(function(){
			$.submit.title = 'Create Account';
		}, 1000);
	}
};

$.submit.addEventListener('click', function() {
	$.name.blur();
	$.password.blur();
	$.submit.title = 'Working ...';
	acs.createUser($.name.value, $.password.value, createCallback)
});
