<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class addActivity extends Controller {
    public function saveApiData()
    {
        //connection with server node.js
        $client = new Client();
        //request for add a Event
        $res = $client->request('POST', 'http://localhost:8080/api/activity/addEvent', [
            'form_params' => [
                'name' => $_POST['event_name'],
                'date' => $_POST['event_date'],
                'description' => $_POST['event_description'],
                'price' => $_POST['event_price'],
                'location' => $_POST['event_location'],
                'status' => $_POST['event_status'],
                'regularity' => 'oui',
                'public' => 'oui',
                'email' => $_POST['event_mail'],
            ]
        ]);
    }
}
?>
