<!DOCTYPE html>
<html>
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
    <title>Carousel</title>
</head>

<body>
    <div id="slider">
        <figure>
                <img src="img/img1.jpg" alt="">
                <img src="img/img2.jpg" alt="">
                <img src="img/img3.jpg" alt="">
        </figure>
    </div>
</body>