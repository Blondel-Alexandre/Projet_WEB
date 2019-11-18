<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addPhoto extends Controller {
    public function saveApiData()
    {
        //connection with server node.js
        $client = new Client();
        //request for add a photo
        $res = $client->request('POST', 'http://localhost:8080/api/photo/addPhoto', [
            'form_params' => [
                'date' => '$date',
                'author' => '$author',
                'picture' => 'picture',
                'public' => '$public',
                'like' => '$like',
                'email' => '$email',
            ]
        ]);
    }
}
