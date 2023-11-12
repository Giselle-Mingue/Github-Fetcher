# Github Fetcher

## Overview

Github Fetcher is a simple web application that utilizes the Github REST API to retrieve information about a user's repositories. Users can input a Github username, and the application will display either the list of repositories based on the user's choice.

## Features

- Fetches and displays a list of repositories or followers from the Github API.
- Handles cases of empty input and no matches, providing appropriate messages.

## How to Use

1. Open `index.html` in a web browser.
2. Enter a Github username in the input field.
3. Click the "Get Repos" button to retrieve and display repositories.
4. Enjoy exploring the fetched Github data!

## Implementation Details

- The application uses the Github REST API to make requests for repositories or followers.
- The app checks for empty input before making the API call.
- Repository information is displayed with details such as name, watchers, and open issues.
