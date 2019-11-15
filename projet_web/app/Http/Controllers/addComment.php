<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addComment extends Controller {
    public function saveApiData()
    {
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/comment/addComment', [
            'form_params' => [
                'date' => '$date',
                'author' => '$author',
                'appreciation' => '$appreciation',
                'like' => '$like',
                'public' => '$public',
                'ref' =>'$ref',
                'email' => '$email',
            ]
        ]);
    }
}
?>
