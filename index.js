var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "gh-pages",
    repo: "https://github.com/DonYau/DonYauQingniu.github.io.git"
  },
  function(err) {
    console.log(err);
  }
);
