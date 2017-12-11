import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Button, Typography} from 'material-ui';
import anonymousAvatar from './001-anonymous.png';

const LoginPanel = (props) => {

    const {userData} = props;

    return <div style={{display: 'flex', flexDirection: 'row'}}>

        <Avatar
            alt={userData ? userData.name : 'anonymous'}
            src={userData ? userData.avatarUrl : anonymousAvatar}
        />
        { userData ?
            <Fragment>
                <div style={{marginLeft: 7, flexGrow: 1}}>
                    <Typography type="body1">{ userData.name }</Typography>
                    <Typography type="body2">{ userData.email }</Typography>
                </div>
                <Button>Log out</Button>
            </Fragment>
            :
            <Button>Log in</Button>
        }
    </div>;
};

LoginPanel.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        avatarUrl: PropTypes.string,
    })
};

export default LoginPanel;
