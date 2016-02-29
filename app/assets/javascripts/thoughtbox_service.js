function fetchIndex(){
  $.ajax({
    type: 'GET',
    url: 'api/v1/links',
    success: function(indexLinks){
      renderIndex(indexLinks)
    }
  })
}
