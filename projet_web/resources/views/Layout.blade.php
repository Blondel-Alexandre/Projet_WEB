<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link href="{{asset('css/header.css')}}" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" rel="stylesheet">
    <!-- Styles -->
</head>

<body>

<header>

<nav class="navbar navbar-expand-lg navbar-light ">
    <a class="navbar-brand" href="https://www.cesi.fr/"><img class="cesi" src="pictures/cesientreprise.png"/> </a>
    <img class="bde" src="pictures/bdeexia3.png"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">Accueil <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/event">Evènement</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/shop">Boutique</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Campus
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Arras</a>
                    <a class="dropdown-item" href="#">Rouen</a>
                    <a class="dropdown-item" href="#">Strasbourg</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Autre campus</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            <ul class="social">
                <a href="https://www.facebook.com/BDECESIARRAS?__tn__=%2CdlC-R-R&eid=ARB0nX-9op5-hAKXV-tAay18Hyr0rs_HPKCWr8WO1C8lWWsVumTpKI3m8mjfFQCzaOx-FclHSb3zFcpQ&hc_ref=ARRwFbSrdyg_kbD5oBfDPVrjR1y6hXwcNiJwsuVy6vP8zVfMPNcVMFS6gW_8s6M6h-c" class="reseaux facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/BDE_Exia_Arras" class="reseaux twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/user/groupecesi1" class="reseaux youtube"><i class="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/school/cesiecoledingenieurs/" class="reseaux linkedin"><i class="fab fa-linkedin"></i></a>

            </ul>
        </ul>
        <a href="/signin" class="connexion btn btn-connexion">Connexion</a>
    </div>
</nav>
</header>

<main>

    @yield('contenu')
</main>

<footer class="footer">
    <a class="mention_legal" href="/legalmention">mention legal</a>
    <a class="contact" href="/contact">contact</a>

</footer>
</body>
</html>
