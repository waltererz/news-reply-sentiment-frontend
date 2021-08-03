import React from 'react';
import Container from '../../system/Container';
import Content from './components/Content';

import '../../../sass/routes/user.scss';

class User extends React.Component {
    render() {
        return <Container content={<Content />} leftSide="왼쪽" />;
    }
}

export default User;
