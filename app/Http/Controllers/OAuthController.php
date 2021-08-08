<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class OAuthController extends Controller
{
    public function kakao(Request $request)
    {
        $code = $request->get('code');
        $redirect = redirect('/');

        if ($code) {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, 'https://kauth.kakao.com/oauth/token');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded;charset=utf-8']);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
                'grant_type' => 'authorization_code',
                'client_id' => '687d4ae54c748dc763eeb62978b197a4',
                'redirect_uri' => 'http://newsreply.erzsphilos.com/oauth/kakao',
                'code' => $code,
                'client_secret' => 'LKa8sLQ2N43gB5pQ6ScqD51mgJ5w7lfI',
            ]));

            $response = json_decode(curl_exec($ch));

            if (isset($response->access_token)) {
                $redirect->cookie(Cookie::make('kakao_access_token', $response->access_token, null, null, null, null, false));
            }
        }

        return $redirect;
    }
}
