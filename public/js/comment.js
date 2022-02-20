$(document).ready(function() {
	const psotInfo = $('#postInfo');
	const addCommentBtn = $(".addCommentBtn");
	
    addCommentBtn.on('click', async function(event) {
		const attribute = event.target.getAttribute('comname');
		const newComment = $(`#newComment[comname="${attribute}"]`).val();
		const newComPostId = $(`#newComPostId[comname="${attribute}"]`).val();
		event.preventDefault();
		await $.post('/api/comments/newcomment', {
			remarks: newComment,
			postId: newComPostId,
		});
		window.location.reload();
	});
});