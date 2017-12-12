import React from 'react';
import {Paper} from "material-ui";


export default (storyFn) => (
    <Paper style={{width: 340, padding: 10}}>
        {storyFn()}
    </Paper>
);