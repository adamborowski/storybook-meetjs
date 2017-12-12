import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, color} from '@storybook/addon-knobs';
import ContrastHeading from './ContrastHeading';


storiesOf('ContrastHeading', module)
// config

    .addDecorator(withKnobs)

    // stories

    .add('default', () => <ContrastHeading color={color('bg color', '#cc5511')} style={{padding: 20}}>
            { text('content', 'Lorem impsum, dolor sit amet...')}
        </ContrastHeading>
    )

;

// todo some progressbar, knobs: bool, number, ...others
// todo addon-actions - callbacks
//todo inne zastosowania: live documentation