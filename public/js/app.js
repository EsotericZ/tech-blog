$(document).ready(function() {
	const emailField = $('#emailField');
	const passwordField = $('#passwordField');
	const signinBtn = $('#signinBtn');
	const logoutBtn = $('#logout');
	
	signinBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/login', {
			email: emailField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href = '/homepage';
	});
	
	logoutBtn.on('click', async function() {
		await $.post('/api/users/logout');
		window.location.href = '/';
	});

	function activityWatcher(){
		var secondsSinceLastActivity = 0;
		var maxInactivity = 300;
		setInterval(function(){
			secondsSinceLastActivity++;
			if (secondsSinceLastActivity > maxInactivity) {
				$.post('/api/users/logout');
				window.location.href = '/';
			}
		}, 1000);
	
		function activity(){
			secondsSinceLastActivity = 0;
		}
	
		var activityEvents = [
			'mousedown', 'mousemove', 'keydown',
			'scroll', 'touchstart'
		];

		activityEvents.forEach(function(eventName) {
			document.addEventListener(eventName, activity, true);
		});
	}
	
	activityWatcher();
});