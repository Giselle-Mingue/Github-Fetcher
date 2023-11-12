// Selecting DOM elements
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

// Adding event listener to the button
getButton.addEventListener("click", getRepos);

// Function to fetch and display user repositories
function getRepos() {
  // Get and format the input value
  let search = theInput.value.trim();
  let originalName = search.split(" ").join("");

  // Check if the input is empty
  if (theInput.value == "") {
    // Display a message for empty input
    reposData.innerHTML = "<h3> Please provide a valid Github Username </h3>";
  } else {
    // Fetch user repositories from the Github API
    fetch(`https://api.github.com/users/${originalName}/repos`)
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          // Handle different error cases
          if (response.status === 404) {
            throw new Error("User not found");
          } else {
            throw new Error("Error fetching repositories");
          }
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((repositories) => {
        // Clear previous data
        reposData.innerHTML = "";
        // Check if user has no repositories
        if (repositories.length === 0) {
          reposData.innerHTML = `<h3>${originalName} has no repositories.</h3>`;
        } else {
          // Display each repository
          repositories.forEach((repo) => {
            let mainDiv = document.createElement("div");

            // Display repository name
            let repoName = document.createTextNode(repo.name);
            mainDiv.appendChild(repoName);

            // Display a link to visit the repository
            let theUrl = document.createElement("a");
            let theUrlText = document.createTextNode("Visit Repository");
            theUrl.appendChild(theUrlText);
            theUrl.href = `https://github.com/${originalName}/${repo.name}`;
            theUrl.setAttribute("target", "_blank");
            mainDiv.appendChild(theUrl);

            // Display number of watchers
            let watchersSpan = document.createElement("span");
            let starsText = document.createTextNode(
              `Watchers: ${repo.watchers_count}`
            );
            watchersSpan.appendChild(starsText);
            mainDiv.appendChild(watchersSpan);

            // Display number of open issues
            let openIssueSpan = document.createElement("span");
            let openIssuesText = document.createTextNode(
              `Open Issues: ${repo.open_issues_count}`
            );
            openIssueSpan.appendChild(openIssuesText);
            mainDiv.appendChild(openIssueSpan);

            // Set class for styling
            mainDiv.className = "repo-box";
            // Append the repository div to the container
            reposData.appendChild(mainDiv);
          });
        }
      })
      .catch((error) => {
        // Display an error message
        reposData.innerHTML = `<h3>${error.message}</h3>`;
      });
  }
}
