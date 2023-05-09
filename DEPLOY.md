# [DEPLOYMENT](https://angular.io/guide/deployment)

## Deploy to GitHub Pages

### Resources

- [angular.io](https://angular.io/guide/deployment)
- [Medium: How to deploy Angular Apps to GitHub Pages (gh-pages)](https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4)

### Steps taken to deploy this app

- [First setup](<(https://angular.io/guide/deployment)>) (Did not use angular-cli-ghpages)

#### Deploy App Updates

- Commit all changes to main and push it to remote repository
- check out `gh-pages` git branch
- Create and check out a git branch named gh-pages.
- content_copy
  git checkout -b gh-pages
  Build your project using the GitHub project name, with the Angular CLI command ng build and the following options, where your_project_name is the name of the project that you gave the GitHub repository in step 1.

Be sure to include the slashes on either side of your project name as in /your_project_name/.

content_copy
ng build --output-path docs --base-href /your_project_name/
When the build is complete, make a copy of docs/index.html and name it docs/404.html.

Commit your changes and push.

On the GitHub project page, go to Settings and select the Pages option from the left sidebar to configure the site to publish from the docs folder.

Click Save.

Click on the GitHub Pages link at the top of the GitHub Pages section to see your deployed application. The format of the link is https://<user_name>.github.io/<project_name>.
