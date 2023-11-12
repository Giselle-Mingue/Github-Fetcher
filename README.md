# GitHub API Webpage

This webpage allows users to make API calls to GitHub to retrieve a list of repositories for a given GitHub user.

## Features

- Input field for entering the GitHub username.
- Button to trigger the API call.
- Dynamic display of repositories or followers based on user input.
- Error handling for cases such as invalid username or no repositories.

## Usage

1. Enter a GitHub username in the input field.
2. Click the "Get Repos" button to trigger the API call.
3. View the displayed list of repositories or followers with additional information.

## How to Run

1. Clone this repository.
2. Open the `index.html` file in a web browser.

## Implementation Details

The webpage uses the GitHub REST API to fetch data. The API endpoints used are:
- Repositories: `https://api.github.com/users/{username}/repos`

The user's input is validated and used to construct the API request. The response is then processed and displayed on the webpage.
