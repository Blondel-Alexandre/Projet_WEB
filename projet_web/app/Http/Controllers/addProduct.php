<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addProduct extends Controller {
    public function saveApiData()
    {
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/product/addProduct/', [
            'form_params' => [
                'name' => '$name',
                'price' => '$price',
                'description' => '$description',
                'category' => '$category',
                'email' => '$email'
            ]
        ]);
    }
}
?>
