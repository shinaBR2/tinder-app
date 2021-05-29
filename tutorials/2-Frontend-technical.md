# Frontend technical

## User stories

The happy flow should be:
- Landing page which has an action button to find out the suitable people.
- After click on that, technically we will fetch the list of people.
- User now can see all of them, and reaction to one by one.
- User can see their history of reaction.

The next part should be the technical initialization process, after that, we will define list of UI component to achieve above user stories. 

## Initialize part

Following steps to init a frontend application

### Firebase project
Create new Firebase project

### Gatsby

Init GatsbyJS with the command `npm init gatsby`. Please note that this command **required empty folder**. So current if you have an existing folder, just do another one and copy everything after finish.

Some very essential gatsby plugins are:
- `gatsby-plugin-google-analytics`
- `gatsby-source-filesystem`
- `gatsby-plugin-image`
- `gatsby-plugin-manifest`
- `gatsby-plugin-react-helmet`
- `gatsby-plugin-sharp`
- `gatsby-plugin-sitemap`
- `gatsby-transformer-sharp`

Nice to have also:
-  `gatsby-plugin-gatsby-cloud`

About the styling solution, I chose `styled-components` but you can choose whatever.

## Implementation

### Part 1 - Feature analyze

According the user stories, we should have following pages (followed by GatsbyJS structure):
- Home page at `src\pages\index.js`
- User detail page at `src\pages\users\{User.id}.js`
- Reaction history page at `src\pages\my-reaction.js`

#### Home page

The minimum requirement for this page is just single action button

#### User detail page

There are some critical components in this page:
- `UserDetail` which show user image, additional information, and two buttons are `like` and `pass`.

#### My reaction page

This will show list of reacted people. When user click into a person, we will show detail in a dialog. Technically we will reuse the above `UserDetail` for this.

### Part 2 - UI implementation

Follow [this guide](https://www.gatsbyjs.com/docs/how-to/styling/other-css-frameworks/#material-ui) from Gatsby to install plugin for material UI. After that, using an existing layout for homepage, that's all, no funny or tricky here, the journey is going to be started soon.

The detail commands:
```
// Install Material UI core and icons
npm install @material-ui/core
npm install @material-ui/icons

// Install Gatsby's plugin
npm install gatsby-plugin-material-ui
```

Make sure to add `gatsby-plugin-styled-components` to plugin array in `gatsby-config.js`.

Back to the layout, I used [Album layout](https://material-ui.com/getting-started/templates/album/) for the homepage. And with some small modification, the home page UI is almost done now.