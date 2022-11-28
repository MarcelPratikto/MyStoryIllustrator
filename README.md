# MyStoryIllustrator

AI generated storybook images for k-12 students. Children can write a story, and write captions underneath where the picture will go. The website will draw illustrations of their caption.

MSI is written in React and NodeJS, supported by SQL. Images are generated using Stable Diffusion.

## Server

All server code is in the Server directory. Open that directory and run `npm install` to install dependencies.
index.js is the main entry point of the app.

Before running the app, create the file 'Server/.env' and ensure it contains the correct values for HOST, DB_USER, PASSWORD, DB, and DIALECT to connect to your own database.

To run the app use the command:
`npm run start` OR
`npm run start-dev` (This will start a server that refreshes when you make code changes)

Look at the scripts section of package.json to see available scripts.

The server runs on port 3000 locally. This is where you can access it.

There are a few subfolders, routes, controllers, and models. Routes are used to decide which path was requested and direct to the appropriate controller. Controllers contain the logic. Models are templates of database tables.

## Client / frontend

When you open the app, run`npm install`
Start the app with npm start (make sure you are in the Client/my-story-illustrator-client directory).

## API Routes
### User Routes
|type|path|
|-|-|
|POST|/signup|
|POST|/login|
### Book Routes
|type|path|
|-|-|
|POST|/saveBook|
|GET|/getBook|
|POST|/getAllBooks|
|DELETE|/deleteBook|
|POST|/generateImage|
|PUT|/updateBook|
#### http://localhost:8080/signup
##### Input
{
    "username": "marcel1",
    "password": "password",
    "confirmPassword": "password"
}
##### Output
{
    "message": "User Created.",
    "id": 4
}

#### http://localhost:8080/login
##### Input
{
    "username": "marcel1",
    "password": "password"
}
##### Output
{
    "message": "Login successful. Token valid for the next 168 hours.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY2ODQ1NDAwOSwiZXhwIjoxNjY4NDU0MDA5fQ.c7jmmKMF9Uqfm3WD6VEXHTjr8LhJT8lMD1kpmLJMRs8"
}

#### http://localhost:8080/saveBook
##### Input
{
    "userId": 4,
    "title": "test",
    "author": "Marcel"
}
##### Output
{
    "message": "Book created.",
    "id": 28
}

#### http://localhost:8080/getBook
##### Input
{
    "bookId": 28
}
##### Output
{
    "Book": {
        "Id": 28,
        "Title": "test",
        "Author": "Marcel",
        "UserId": 4,
        "createdAt": "2022-11-14T19:38:12.225Z",
        "updatedAt": "2022-11-14T19:38:12.225Z"
    }
}

#### http://localhost:8080/getAllBooks
##### Input
{
    "userId": 1
}
##### Output
{
    "books": [
        {
            "id": 1,
            "title": "test1",
            "author": "Marcel",
            "createdAt": "2022-11-16T19:29:59.697Z",
            "updatedAt": "2022-11-16T19:29:59.697Z"
        },
        {
            "id": 2,
            "title": "test2",
            "author": "Marcel",
            "createdAt": "2022-11-16T19:30:32.316Z",
            "updatedAt": "2022-11-16T19:30:32.316Z"
        }
    ]
}

#### http://localhost:8080/deleteBook
##### Input
{
    "bookId": 28
}
##### Output
{
    "message": "Book deleted."
}

#### http://localhost:8080/generateImage
##### Input
{
    "username": "marcel1",
    "prompt": "pinapple under the sea",
    "style": "dr seuss"
}
##### Output
{
    "imageUrl": "http://weylin.ddns.net/marcel1/4c9b7e50645511ed88319f2af8e165c6.png"
}

#### http://localhost:8080/updateBook
##### Input
{
    "bookId": 29,
    "title": "Pineapple under the sea",
    "author": "Change author name",
    "pages": [
        {
            "PageNumber": 1,
            "ImageURL": "http://weylin.ddns.net/marcel1/4c9b7e50645511ed88319f2af8e165c6.png",
            "Text": "Text",
            "Caption": "Caption"
        }
    ]
}
##### Output
{
    "message": "Book updated",
    "book": {
        "id": 29,
        "title": "Pineapple under the sea",
        "author": "Change author name",
        "userId": 4,
        "pages": [
            {
                "PageId": 20,
                "PageNumber": null,
                "ImageURL": "",
                "Text": "",
                "Caption": "",
                "BookId": 29,
                "updatedAt": "2022-11-14T20:02:45.535Z",
                "createdAt": "2022-11-14T20:02:45.535Z"
            }
        ]
    }
}