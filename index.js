var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
<<<<<<< HEAD
    branch: "gh-pages",
    repo: "https://github.com/DonYau/DonYauQingniu.github.io.git"
=======
    branch: "master",
    repo: "https://github.com/YolandaQingniu/YolandaQingniu.github.io.git"
>>>>>>> dev
  },
  function(err) {
    console.log(err);
  }
);
