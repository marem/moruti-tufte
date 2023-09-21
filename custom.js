document.addEventListener("DOMContentLoaded", function() {
  // Find the main content element
  var content = document.querySelector(".container.main-content");

  // Create a new div for the TOC sidenote
  var tocSidenote = document.createElement("div");
  tocSidenote.id = "toc-sidenote";

  // Generate the TOC from headings in the main content
  var toc = "<h2>Table of Contents</h2>";
  var headings = content.querySelectorAll("h2, h3, h4, h5, h6");
  headings.forEach(function(heading) {
    var level = parseInt(heading.tagName.charAt(1));
    var indent = (level - 2) * 20; // Adjust the indent based on your preference
    toc +=
      '<a href="#' + heading.id + '" style="margin-left: ' + indent + 'px;">' +
      heading.textContent + '</a><br>';
  });

  // Set the TOC content
  tocSidenote.innerHTML = toc;

  // Add the TOC sidenote to the body
  document.body.appendChild(tocSidenote);
});
