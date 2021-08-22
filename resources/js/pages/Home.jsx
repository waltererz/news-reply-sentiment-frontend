import React from 'react';
import Container from '../system/Container';
import * as common from '../services/common';

export default function Home() {
    common.init();

    return <Container submenus="왼쪽">첫 페이지</Container>;
}
