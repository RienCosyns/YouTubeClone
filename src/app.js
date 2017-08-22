var YTSearch = require("youtube-api-search");
var View = require("./view");

const API_KEY = "AIzaSyAUb7A_OhjujffpZM41z8XCM2KxTW_bsB4";

function app() {
  var view = new View(document.getElementById("root"));
  view.renderHome();

  document.getElementById("submitButton").onclick = function() {
    var searchTerm = document.getElementById("search").value;
    console.log(searchTerm);
    videoSearch(searchTerm);
  };

  function videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, videos => {
      console.log(videos);
      // set up video detail and video list
      view.renderVideoList(videos);
    });
  }
}

window.app = app;
