<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addUser extends Controller
{
    public function saveApiData()
    {
        echo "coucou";
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/users/register', [
            'form_params' => [
                'name' => $_POST['user_name'],
                'first_name' => $_POST['user_firstname'],
                'location' => $_POST['user_localisation'],
                'email' => $_POST['user_email'],
                'password' => $_POST['user_password'],
                'status' => 'status',
                'profile' => 'profile',
            ]
        ]);
}

}


