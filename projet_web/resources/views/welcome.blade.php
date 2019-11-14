@extends ('Layout')

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, init-scale=1">
    <link rel="stylesheet" href="style.css">

    <style>
        @keyframes slidy {
            0% { left: 0%; }
            10% { left: 0%; }
            20% { left: 0%; }
            30% { left: -100%; }
            40% { left: -100%; }
            50% { left: -100%; }
            60% { left: -200%; }
            70% { left: -200%; }
            80% { left: -200%; }
            90% { left: 0%; }
            100% { left: 0%; }
        }

        body {
            margin: 0;
        }

        div#slider {
            width: 80%;
            max-width: 1000px; }

        div#slider figure {
            position: relative;
            width: 500%;
            margin: 0;
            padding: 0;
            font-size: 0;
            text-align: left;
            animation: 10s slidy infinite;
        }

        div#slider figure img {
            width: 20%;
            height: auto;
            float: left;
        }

        div#slider {
            width: 80%;
            max-width: 1000px;
            overflow: hidden;
        }
    </style>
    <title>site bde</title>
</head>

@section('contenu')

    <!DOCTYPE html>
    <html>
    <head>
        <title>Cookie</title>

        <script type="text/javascript">

            function testConfirmCookie()  {

                var result = confirm("acceptez-vous les cookies");

                if(result)  {
                    alert("merci et bonne visite sur notre sites");
                } else {
                    alert("aurevoir");
                    document.location.href="https://www.cesi.fr/";
                }
            }

        </script>

    </head>
    <body>
    <h2>Confirmation Cookie</h2>

    <button onclick="testConfirmCookie()">Click me!</button>

    </body>
    </html>

    <body>
    <div id="slider">
        <figure>
            <img src="img/img1.jpg" alt="">
            <img src="img/img2.jpg" alt="">
            <img src="img/img3.jpg" alt="">
        </figure>
    </div>
    </body>

@endsection
