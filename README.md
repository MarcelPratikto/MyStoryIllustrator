# MyStoryIllustrator
AI generated storybook images for k-12 students


# Server
All server code is in the Server directory. Open that directory and run `npm install` to install dependencies.
index.js is the main entry point of the app.
To run the app use the command:
`npm run start` OR
`npm run start-dev` (This will start a server that refreshes when you make code changes)
Look at the scripts section of package.json to see available scripts.
The server runs on port 3000 locally. This is where you can access it.
There are a few subfolders, routes, controllers, and models. Routes are used to decide which path was requested and direct to the appropriate controller. Controllers contain the logic. Models are templates of database tables


# Client / frontend
When you open the app, run`npm install`
Start the app with npm start (make sure you are in the Client/my-story-illustrator-client directory)