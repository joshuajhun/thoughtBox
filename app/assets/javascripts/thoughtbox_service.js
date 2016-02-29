function fetchIndex(){
  $.ajax({
    type: 'GET',
    url: 'api/v1/links',
    success: function(indexLinks){
      renderIndex(indexLinks)
    }
  })
}

function postLink(){
  $('#create-link').on('click', function(){

    var linkParams = { title: $('#link-name').val(), url: $("#link-url").val()}
    $.ajax({
      type: 'POST',
      url: '/api/v1/links',
      data: linkParams,
      success: function(newLink){
        renderPost(newLink)
        clearField()
      },
      error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
}

  function clearField(){
    $('#link-name').val("")
    $("#link-url").val("")
  }
