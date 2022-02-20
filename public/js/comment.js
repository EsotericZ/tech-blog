$(document).ready(function() {
	const addCommentBtn = $(".addCommentBtn");
	const newComment = $("#newComment");
	const newComPostId = $("#newComPostId");
	
    addCommentBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/comments/newcomment', {
			remarks: newComment.val(),
			postId: newComPostId.val(),
		});
		window.location.reload();
	});
});