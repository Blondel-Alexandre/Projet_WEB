<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addActivity extends Controller {
    public function saveApiData()
    {
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/activity/addActivity', [
            'form_params' => [
                'name' => '$name',
                'date' => '$date',
                'description' => '$description',
                'price' => '$price',
                'location' => '$location',
                'status' => '$status',
                'regularity' => '$regularity',
                'public' => '$public',
                'email' => '$email',
            ]
        ]);
    }
}
?>
