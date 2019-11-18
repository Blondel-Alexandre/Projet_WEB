<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addProduct extends Controller
{
    public function saveApiData()
    {
        //connection with server node.js
        $client = new Client();
        //request for add a product
        $res = $client->request('POST', 'http://localhost:8080/api/product/addProduct/', [
            'form_params' => [
                'name' =>  $_POST['products_name'],
                'price' => $_POST['products_price'],
                'description' => $_POST['products_description'],
                'category' => $_POST['products_category'],
                'email' => $_POST['products_email']
            ]
        ]);
        return redirect("/addProduct");
    }
}
?>
