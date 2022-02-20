$(document).ready(function() {
	const titleField = $('#titleField');
    const bodyField = $('#bodyField');
	const addPostBtn = $("#addPostBtn");
	const editPostBtn = $(".editPostBtn");
	const deletePostBtn = $(".deletePostBtn");
	
    addPostBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/posts/newpost', {
			title: titleField.val(),
            body: bodyField.val(),
		});
		window.location.href = '/homepage';
	});

	editPostBtn.on('click', async function(event) {
		const attribute = event.target.getAttribute('editname');
		const newTitle = $(`#postTitle[editname="${attribute}"]`).val();
		const newBody = $(`#postBody[editname="${attribute}"]`).val();
		const postId = $(`#postId[editname="${attribute}"]`).val();
		console.log('clicked upd')
		console.log(newTitle)
		console.log(newBody)
		console.log(postId)
		event.preventDefault();
		await $.post('/api/posts/editpost', {
			title: newTitle, 
			body: newBody,
			id: postId,
		});
		window.location.reload();
	});

	deletePostBtn.on('click', async function(event) {
		const attribute = event.target.getAttribute('delname');
		const deleteId = $(`#deleteId[delname="${attribute}"]`).val();
		console.log('clicked del')
		console.log(deleteId)
		await $.post('/api/posts/deletepost', {
			id: deleteId,
		});
		window.location.reload();
	});

	$('.date').each(function() { 
        var dateFormat = $(this).text()
        var dateFormat = $.datepicker.formatDate('DD, M d, yy', new Date(dateFormat));
        $(this).html(dateFormat + "<br>");
    });
});