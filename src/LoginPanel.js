import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from 'material-ui';

const LoginPanel = (props) => {

    const {userData} = props;

    return <div>
        { userData && <Typography type="display1"></Typography>}
    </div>;
};

LoginPanel.propTypes = {
    userData: PropTypes.shape({
        userName: PropTypes.string,
        userEmail: PropTypes.string,
        avatarUrl: PropTypes.string,
    })
};

export default LoginPanel;
