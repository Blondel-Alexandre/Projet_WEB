<?php


namespace App\Http\Controllers;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class getproduct extends Controller
{
    public function ajoutproduit()
    {

        echo "coucou";
        $client = new Client();
        $res = $client->request('GET', 'http://localhost:8080/api/product');
        $response = $res->getBody();
        $data = json_decode($response, true);
        return view('shop', compact('data'));


    }


}
