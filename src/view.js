class View {
  constructor(container) {
    this.container = container;
  }

  renderHome() {
    var header = document.createElement("h1");
    var searchForm = document.createElement("form");
    var searchInput = document.createElement("input");
    var submitButton = document.createElement("button");

    searchForm.setAttribute("id", "searchForm");
    searchForm.setAttribute("onsubmit", "return false");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("name", "search");
    searchInput.setAttribute("id", "search");
    searchInput.setAttribute("value", "");
    searchInput.setAttribute("placeholder", "JavaScript");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute("id", "submitButton");
    header.innerHTML = "Home";

    searchForm.appendChild(searchInput);
    searchForm.appendChild(submitButton);

    this.container.appendChild(header);
    this.container.appendChild(searchForm);
  }

  renderVideoList(videos) {
    var videoListDiv = document.createElement("div");
    var videoList = document.createElement("ul");

    videos.forEach(video => {
      var videoListItem = document.createElement("li");
      var imageUrl = video.snippet.thumbnails.default.url;
      var mediaContainer = document.createElement("div");
      var mediaHead = document.createElement("div");
      var mediaBody = document.createElement("div");
      var image = document.createElement("img");
      var header = document.createElement("h3");
      var description = document.createElement("p");

      videoListItem.setAttribute("class", "list-group-item");
      mediaContainer.setAttribute("class", "video-list media");
      mediaHead.setAttribute("class", "media-left");
      image.setAttribute("src", imageUrl);
      image.setAttribute("class", "media-object");
      mediaBody.setAttribute("class", "media-body");
      header.setAttribute("class", "media-heading");
      header.innerHTML = video.snippet.title;
      description.innerHTML = video.snippet.description;

      mediaHead.appendChild(image);
      mediaBody.appendChild(header);
      mediaBody.appendChild(description);

      videoListItem.appendChild(mediaHead);
      videoListItem.appendChild(mediaBody);

      videoList.appendChild(videoListItem);
    });
    videoListDiv.appendChild(videoList);
    this.container.appendChild(videoListDiv);
  }

  renderVideoDetail() {}

  clearPage() {
    console.log("clearing page");
    var rootDiv = document.getElementById("root");
    console.log(rootDiv);
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
  }
}

module.exports = View;
