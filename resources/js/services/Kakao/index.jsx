import { getCookie } from '../Cookie';

/**
 * 카카오로그인 토큰 생성여부를 확인하여, 액세스 토큰을 생성
 */
export const check = () => {
    const kakao_token = getCookie('kakao_access_token');

    if (kakao_token) {
        Kakao.Auth.setAccessToken(kakao_token);
        Kakao.Auth.getStatusInfo(({ status }) => {
            if (status === 'connected') {
                console.log('카카오로그인 완료 : ' + Kakao.Auth.getAccessToken());
            } else {
                Kakao.Auth.setAccessToken(null);
                console.log('유효하지 않은 카카오로그인 토큰');
            }
        });
    }
};
