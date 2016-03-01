function searchLinks(){
  $("#search").keyup(function(event){
    var searchParam = $(this).val().toLowerCase();
    var allExisitingLinks = $('#index').children();

    allExisitingLinks.removeClass('invisible');

    var hideLinks = allExisitingLinks.filter(function(){
    var ideaLinkTitleAndUrl = $(this).find("#linktitle, #linkurl").text().toLowerCase()

    return !(ideaLinkTitleAndUrl.includes(searchParam))
  })
  hideLinks.addClass('invisible');
  })
}
