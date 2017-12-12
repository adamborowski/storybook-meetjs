import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions';

import LoginPanel from './LoginPanel';

import avatar002 from '../__stories__/002-user.png';
import avatar003 from '../__stories__/003-girl-1.png';
import avatar004 from '../__stories__/004-man.png'
import avatar005 from '../__stories__/005-girl.png';
import {Paper} from "material-ui";

const withPaper = (storyFn) => (
    <Paper style={{width: 340, padding: 10}}>
        {storyFn()}
    </Paper>
);

storiesOf('LoginPanel', module)
// config

    .addDecorator(withKnobs)
    .addDecorator(withPaper)

    // stories

    .add('anonymous', () => <LoginPanel onLogin={action('login clicked')} onLogout={action('logout clicked')}/>)

    .add('logged in', () => <LoginPanel
        userData={{
            name: text('user name', 'Adam Borowski'),
            email: text('user email', 'kontakt@adamborowski.pl'),
            avatarUrl: select('user avatar', [avatar002, avatar003, avatar004, avatar005], avatar004),
        }}
        onLogin={action('login clicked')}
        onLogout={action('logout clicked')}
    />)

;