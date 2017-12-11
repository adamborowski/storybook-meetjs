import React from 'react';
import {storiesOf} from '@storybook/react';
import LoginPanel from "./LoginPanel";

storiesOf('LoginPanel', module)
    .add('anonymous', () => <LoginPanel/>);