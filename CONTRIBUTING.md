
# Commits
* Write clear meaningful git commit messages (Do read http://chris.beams.io/posts/git-commit/)
* Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (More info at https://github.com/blog/1506-closing-issues-via-pull-requests )
* When you make very very minor changes to a PR of yours (like for example fixing a failing travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterwards so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at https://davidwalsh.name/squash-commits-git )
* When you're submitting a PR for a UI-related issue, please try to add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. This makes reviewing quick and easy for the reviewers.


## Issue or Bug
When filing a bug, please follow the [Github Issue Template Guideline](https://gist.github.com/auremoser/72803ba969d0e61ff070#file-issue_template-md)

# Creating a Pull Request
If you are going to work on an issue, please let us know that by commenting the issue page. We will then assign it to you.

When creating a Pull Request, please make sure your code follows the [Style Guide](#style-guide). 

This project follows the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model) structure in the git tree, so when creating a new feature or fixing an issue, please create the appropriate branch from the `development` branch. When your feature is finished, merge it back into `development` and create your pull request.

Additionally, each commit message must follow this set of rules:
- Reference the issue that you are fixing/adding as a feature
- Explain what the commit does (“Fixes issue #1), “Adds a button to the bottom bar for ‘Home’”)
- Use the present tense (“Add feature” not “Added feature”)
- Use the imperative mood (“Move cursor to…” not “Moves cursor to…”)

# Style Guide
When creating a pull-request to the project-Web-Wiz repo, you must:
- Format the code with  proper indentation.
- Comment any added Functions and Methods and try to briefly describe it or share any reference link if available.
- Name variables and methods according to the human readibility format.

## Happy Contributing 🥳🥳
