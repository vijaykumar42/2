
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var addColor = request.newClickedColor;
    document.getElementsByClassName("_2s1y")[0].style.background = addColor;
    // document.getElementById("globalContainer").style.background = addColor;
    // document.getElementById("content_container").style.background = addColor;

});
