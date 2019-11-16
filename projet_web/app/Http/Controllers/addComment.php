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
                'date' => $_POST['$date'],
                'author' => $_POST['$author'],
                'appreciation' => $_POST['$appreciation'],
                'like' => $_POST['$like'],
                'public' => '$public',
                'ref' =>'$ref',
                'email' => $_POST['$email'],
            ]
        ]);
        return redirect("/addComment");
    }
}
?>
