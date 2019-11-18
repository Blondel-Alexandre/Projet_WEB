<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class login extends Controller
{
    // function to send the HTTP request to login with the token and to put the informations in a cookie
    private  function  login()
    {
        $mdp = $_POST['user_password'];
        $mdp_hached = md5($mdp);

        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/users/login', [
            'form_params' => [

                'email' => $_POST['user_mail'],
                'password' => $mdp_hached,
            ]
        ]);
    }
    private function loginFromToken($token)
    {
        try {
            $client = new Client();
            $res = $client->request('GET', 'http://localhost:8080/api/users/me', [
                'headers' => [
                    'authorization' => 'Bearer ' . $token
                ]
            ]);
        } catch (ClientException $e) {
            return redirect('/')->withCookie(cookie('loginState', 'error', 1));
        }
        if ($res->getStatusCode() === 200) {
            return redirect('/')->withCookies([cookie('userToken', $token, 1400), cookie('user', $res->getBody(), 1400)]);
        } else {
            return redirect('/Register');
        }

    }

// function to logout and to empty the cookie
    public function logout()
    {
        return redirect('/')->withCookies([cookie('userToken', null), cookie('user', null)]);
    }
}
