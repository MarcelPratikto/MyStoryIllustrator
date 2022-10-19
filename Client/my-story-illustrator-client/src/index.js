import React from 'react';
import ReactDOM from 'react-dom/client';

import MyStories from './my_stories/my_stories';
import Header from './header/header';

import {stories, justSignedIn, editingStory, pageTitle} from './constants';

const element = (
    <body>
        <Header justSignedIn = {justSignedIn} editingStory = {editingStory} pageTitle = {pageTitle}/>
        <MyStories stories={stories} />
    </body>

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
