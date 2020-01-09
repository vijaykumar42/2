
img1 = document.getElementsByClassName("img1")[0];
img2 = document.getElementsByClassName("img2")[0];
img3 = document.getElementsByClassName("img3")[0];
img4 = document.getElementsByClassName("img4")[0];
img5 = document.getElementsByClassName("img5")[0];
img6 = document.getElementsByClassName("img6")[0];
img7 = document.getElementsByClassName("img7")[0];
img8 = document.getElementsByClassName("img8")[0];




function preload(){
  chrome.storage.sync.get(null, function(data){
    console.log(data.auth);
    if(data.auth.email){
      console.log("success");
      document.getElementsByClassName('container1')[0].style.display = "none";
      // document.getElementsByClassName('container2')[0].style.display = "block";
      email = data.auth.email;
      picture = data.auth.picture;
      document.getElementById('email').innerHTML = email;
      document.getElementById('profilepic').setAttribute("src", picture);

      img1.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#ff6236"});
        })
      })

      img2.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#998114"});
        })
      })

      img3.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#ff4a95"});
        })
      })

      img4.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#29ffa7"});
        })
      })
    }
    else {
      console.log("Failure");
      container2 = document.getElementsByClassName('container2')[0];
      console.log(container2);
      container2.style.display = "none";

      img1.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#ff6236"});
        })
      })

      img2.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#998114"});
        })
      })

      img3.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#ff4a95"});
        })
      })

      img4.addEventListener("click", function(){
        chrome.tabs.query({active:true, currentWindow: true }, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {newClickedColor : "#29ffa7"});
        })
      })
    }
  })
}


(main=()=>{
preload();
})();





  document.querySelector(".google-button").addEventListener('click', function() {
  chrome.identity.getAuthToken({interactive: true}, function(token) {
    if(chrome.runtime.lastError){
      alert(chrome.runtime.lastError.message);
      return;
    }
    console.log(token);

    fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)
      .then((res) => res.json())
            .then(function(data) {

              chrome.storage.sync.set({auth : data}, ()=> {
                  chrome.storage.sync.get(null,(data)=>{0});
              });

          });
      });
  });
