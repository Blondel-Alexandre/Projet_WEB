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
                'name' => '$name',
                'first_name' => '$first_name',
                'location' => '$location',
                'email' => '$email',
                'password' => '$password',
                'status' => '$status',
                'profile' => '$profile',
            ]
        ]);
}

}

