import bootstrap from './node_modules/bootstrap/dist/js/bootstrap.min.js';

$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var detail = button.data('detail') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Model Title')
  modal.find('.modal-body p').html(detail)
})