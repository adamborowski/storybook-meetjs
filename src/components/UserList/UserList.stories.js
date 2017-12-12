import React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs, array, boolean} from "@storybook/addon-knobs";
import {withInfo} from "@storybook/addon-info";
import UserList from './UserList';
import withPaper from "../__stories__/withPaper";

storiesOf('UserList', module)
// config

    .addDecorator(withKnobs)
    .addDecorator(withPaper)

    // stories

    .add('default with info', withInfo(`
This is a demo of UserList info
-------

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**. Itemized lists
look like:

  * this one
  * that one
  * the other one

> Block quotes are
> written like so.

`)(() => <UserList
            users={array('users', ['Kamil Stoch', 'Maciej Kot', 'Dawid Kubacki'])}
            loading={boolean('is loading', false)}
            style={{width: 300}}
        />)
    )

;

//todo inne zastosowania: live documentation