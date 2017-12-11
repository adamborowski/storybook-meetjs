import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from 'material-ui';
import contrast from 'font-color-contrast';

const ContrastHeading = props => {

    const {color, style, ...rest} = props;

    return <Typography type="headline"
                       style={{
                           background: color,
                           color: contrast(color),
                           ...style
                       }}
                       {...rest}
    />;
};

ContrastHeading.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
};

export default ContrastHeading;