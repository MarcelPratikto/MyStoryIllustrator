import React from 'react';
import ReactDOM from 'react-dom/client';

import MyStories from './my_stories/my_stories';
import Header from './header/header';

import './global.css';
import './my_stories/my_stories.css';
import './my_stories/my_story_buttons.css';



const stories = [{Title : "testing title", CoverImageUri : "header/images/Long-arrow-alt-left.jpg"}]
const justSignedIn = false;
const editingStory = false;
    


const element = (
    <body>
        <Header justSignedIn = {justSignedIn} editingStory = {editingStory} />
        <MyStories stories={stories} />
    </body>

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
