import config from '../config';
import * as common from '../services/common';

export default function SignOut() {
    common.init();

    return '로그아웃';
}
