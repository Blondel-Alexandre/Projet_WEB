<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addProduct extends Controller
{
    public function saveApiData()
    {
        echo "slt";
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/product/addProduct/', [
            'form_params' => [
                'name' =>  $_POST['$name'],
                'price' => $_POST['$price'],
                'description' => $_POST['$description'],
                'category' => $_POST['$category'],
                'email' => $_POST['$email']
            ]
        ]);
        return redirect("/addProduct");
    }
}
?>

