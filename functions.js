function getJSON(method, url, requestHeaders, success, failure)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      success(JSON.parse(xhttp.responseText));
    }
    else if (this.readyState == 4 && this.status != 200) failure(JSON.parse(xhttp.responseText));
  };
  xhttp.open("GET", url, true);
  if (requestHeaders.length > 0)
  {
    for (var i = 0; i < requestHeaders.length; i++)
    {
      var requestHeader = requestHeaders[i].split(":");
      console.log(requestHeader);
      xhttp.setRequestHeader(requestHeader[0].trim(), requestHeader[1].trim());
    }
  }
  xhttp.send();
}


function askForAuthentication()
{
  document.getElementById("body").innerHTML =
    "<p>Before you can continue, you need to authorize this application " +
    "to allow the usage of your Spotify account. " +
    "Don't worry, it's totally safe:</p>\n" +
    "<ul>\n" +
    "<li>Your username and password will not be processed by this website.</li>\n" +
    "<li>The only thing the authorization will generate is a token, which is stored in your browser, but only accessible by MFS.</li>\n" +
    "<li>With this token, we can access certain kinds of info. Everything we can access WILL be clarified in the authentication screen.</li>\n" +
    "<li>When you press the GO TO button, you will be brought to the Spotify page, and then back here. On the Spotify page, you can still cancel the Authorization.</li>\n" +
    "<li>NO info of yours will be stored on this website. The only thing that is stored is your token on YOUR machine, and that is it.</li>" +
    "<li>After a while, you may need to authenticate again, because tokens expire after a while.</li>\n" +
    "<li>When you authenticate this application, it will not ask for authentication again when making a new token (after logging out, for example).\n" +
         "The authentication lasts until you explicitly take it away in your <a href=\"https://www.spotify.com/account/apps/\">Spotify settings.</a></li>\n"
    "</ul>\n" +
    "<p>If you have any more questions, please do not hesitate to email " +
    "me at <a href=\"mailto:stijn.exe@gmail.com?Subject=Questions%20about%2030sGuess%20Authorization\">stijn.exe@gmail.com</a></p>";

  var button = document.createElement("button");
  button.innerHTML = "Authenticate";
  button.onclick = function()
    {
      window.location.replace(
        "https://accounts.spotify.com/authorize" +
        "?client_id=21f9d0d03aa647f8a0ebc10222f9617d" +
        "&redirect_uri=https://stijndotexe.github.io/30sGuess/authorize.html" +
        "&response_type=token" +
        "&scope=playlist-read-private" +
            "%20playlist-read-collaborative" +
            "%20user-library-read" +
            "%20user-follow-read");
    }
  document.getElementById("body").appendChild(button);
}

$.fn.sortOptions = function(){
    $(this).each(function(){
        var op = $(this).children("option");
        op.sort(function(a, b) {
            return a.text > b.text ? 1 : -1;
        })
        return $(this).empty().append(op);
    });
}
