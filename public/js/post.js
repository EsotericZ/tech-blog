$(document).ready(function() {
	const titleField = $('#titleField');
    const bodyField = $('#bodyField');
	const addPostBtn = $("#addPostBtn");
	
    addPostBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/posts/newpost', {
			title: titleField.val(),
            body: bodyField.val(),
		});
		window.location.href = '/homepage';
	});
});