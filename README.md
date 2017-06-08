# newsScraper
Boot camp HW 18 - News scraper with commenting (Mongoose exercise)

This app scrapes news stories from Salon.com and lists them by title for selection.  Once selected, the article is saved to the database.  The user can navigate to the Saved Articles screen and see those articles listed and then choose one to add a comment about that article.  The option to remove the article from the Saved list is also available, as well as removing the comment.

The data is stored in a Mongo database and is accessed using mongoose.  The app is run by starting up the server.js on the command line and localhost:3000 in the browser.

The following node packages are required for execution of the app and will be installed when "npm install" is run on the command line:
- express
- express-handlebars
- mongoose
- body-parser
- cheerio
- request

