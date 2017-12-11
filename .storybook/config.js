import { configure } from '@storybook/react';
import 'typeface-roboto'

function loadStories() {

    const req = require.context('../src/', true, /^.*\.stories\.js$/)

}

configure(loadStories, module);
