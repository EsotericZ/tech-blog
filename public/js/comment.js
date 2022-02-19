$(document).ready(function() {
	const remarksField = $('#remarksField');
	// const addCommentBtn = $("#addCommentBtn");
	const addCommentBtn = $(".test");
	
    addCommentBtn.on('click', async function(event) {
		event.preventDefault();
		alert(this.id)
		await $.post('/api/comments/newcomment', {
			remarks: remarksField.val(),
		});
		// window.location.href = '/dashboard';
	});
});