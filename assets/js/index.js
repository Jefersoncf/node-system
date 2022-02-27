
$('#add-user').submit(function(event) {
  alert('Add User successfully!');
});

$('#update-user').submit(function(event) {
  event.preventDefault();
  let unindexedArray = $(this).serializeArray();
  let data = {};

  $.map(unindexedArray, function(n, i) {
    data[n['name']] = n['value'];
  })
  console.log(data);

  const request = {
    'url': `http://localhost:3000/api/users/${data.id}`,
    'method': 'PUT',
    'data': data
  }
  $.ajax(request).done(function(response) {
    alert('Updated with successfully');
  });
});

if(window.location.pathname === '/') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function() {
    let id = $(this).attr('data-id')

    const request = {
      'url': `http://localhost:3000/api/users/${id}`,
      'method': 'DELETE'
    }

    if(confirm('Do you want to delete this record?')) {
      $.ajax(request).done(function(response) {
        alert('Deleted successfully');
        location.reload();
      })
    }
  })
}