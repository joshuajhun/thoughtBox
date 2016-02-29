function renderIndex(indexLinks){
  var index = indexLinks.map(function(link){
    return(
      "<ul class='collection' id='link' data-id ='"+link.id+"'>"
      +"<li class='collection-item' contenteditable='true' id='linktitle'>"+link.title+"</li>"
      +"<li class='collection-item' contenteditable='true' id='linkurl'>"+(link.url)+"</li>"
      +"<button class='up'>+</button><button class='down'>-</button><li class='collection-item status'>"+link.status+"</li>"
      +"<button class='btn waves-effect waves-light' type='submit' name='action' id='delete-link'>Delete</button>"
      +"</ul>"
      )
  });
$("#index").append(index)
}

function renderPost(newLink){

    $("#index").prepend(
      "<ul class='collection' id='link' data-id ='"+newLink.id+"'>"
      +"<li class='collection-item' contenteditable='true' id='linkname'>"+newLink.name+"</li>"
      +"<li class='collection-item' contenteditable='true' id='linkbody'>"+newLink.url+"</li>"
      +"<button class='up'>+</button><button class='down'>-</button><li class='collection-item quality'>"+newLink.status+"</li>"
      +"<button class='btn waves-effect waves-light' type='submit' name='action' id='delete-link'>Delete</button>"
      +"</ul>"
      )
}
