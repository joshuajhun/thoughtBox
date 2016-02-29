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

function deleteIdea(){
$('#index').delegate("#delete-link", 'click', function(){
  var link = this.closest('#link')
    $.ajax({
      type: 'DELETE',
       url: '/api/v1/links/'+ $(link).attr('data-id'),
      success: function(){
        $(link).remove();
      },
      error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
}

function editLinkName(){
  $('#index').delegate('#linktitle', 'keydown',function(event){
    var fireOnEnter = event.which == 13
    if (fireOnEnter) {
    var linkId = this.closest('#link')
    var data = { title: this.textContent};
    event.preventDefault();
    this.blur()
    $.ajax({
      type: 'PUT',
      data: data,
       url: '/api/v1/links/'+ $(linkId).attr('data-id'),
      success: function(something){
        },
      })
    }
  })
}

function editLinkUrl(){
  $('#index').delegate('#linkurl', 'keydown',function(event){
    var fireOnEnter = event.which == 13
    if (fireOnEnter) {
    var linkId = this.closest('#link')
    var data = { url: this.textContent};
    event.preventDefault();
    this.blur()
    $.ajax({
      type: 'PUT',
      data: data,
       url: '/api/v1/links/'+ $(linkId).attr('data-id'),
      success: function(something){
        },
      })
    }
  })
}
var linkStatus = { unread: 0, read: 1}
var statusTexts = {0: 'unread', 1: 'read'}

function markAsRead(){
  $('#index').delegate('.up', 'click', function(){
    var linkId  = this.closest('#link')
    var status = linkId.getElementsByClassName('status')[0].textContent
    var changeStatus = linkId.getElementsByClassName('status')
    var statusId = linkStatus[status]

    statusId++
    $.ajax({
      type: 'PUT',
      data: {status: statusId},
      url: '/api/v1/links/'+ $(linkId).attr('data-id'),
      success: function(){;
          $(changeStatus).text(statusTexts[statusId])
      },
      error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
}
function markAsUnread(){
  $('#index').delegate('.down', 'click', function(){
    var linkId  = this.closest('#link')
    var status = linkId.getElementsByClassName('status')[0].textContent
    var changeStatus = linkId.getElementsByClassName('status')
    var statusId = linkStatus[status]

    statusId--

    $.ajax({
      type: 'PUT',
      data: {status: statusId},
      url: '/api/v1/links/'+ $(linkId).attr('data-id'),
      success: function(){;
          $(changeStatus).text(statusTexts[statusId])
      },
      error: function(xhr){
        console.log(xhr.responseText)
      }
    })
  })
}
