$(document).ready(function() {
	const remarksField = $('#remarksField');
	const addCommentBtn = $("#addCommentBtn");
	
    addCommentBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/comments/newcomment', {
			remarks: remarksField.val(),
		});
		window.location.href = '/dashboard';
	});
});