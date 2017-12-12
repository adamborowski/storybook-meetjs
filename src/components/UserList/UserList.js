import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemText, Avatar, CircularProgress, Typography} from 'material-ui';

const UserList = props=> {

    const {users, loading, ...rest} = props;


    return <List {...rest}>
        {
            loading ?
                <React.Fragment>
                    <CircularProgress style={{display: 'inline-block', margin: 30}}/>
                    <Typography type="caption">Loading users...</Typography>
                </React.Fragment>
                :
                users.map(user=><ListItem key={user}>
                        <Avatar>{user.trim().split(/\s+/).map(s=>s.charAt(0).toUpperCase()).slice(0, 2).join('')}</Avatar>
                        <ListItemText primary={user}></ListItemText>
                    </ListItem>
                )
        }
    </List>
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool
};

UserList.defaultProps = {
    loading: false,
    users: []
};

export default UserList;