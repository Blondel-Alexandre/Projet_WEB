<!DOCTYPE html>
<html>
  <head>
    
    <meta charset="utf-8">

    <link rel="stylesheet" href="{{asset('css/header.css')}}">
    <link rel="stylesheet" href="{{asset('css/footer.css')}}">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://use.fontawesome.com/d1341f9b7a.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css">
    <title>BDE</title>
  </head>

  <body>
    <header>

        <h1>
            Site BDE
        </h1>

    </header>

    <nav>

      <ul>
<li><a href="/">Accueil</a></li>
<li><a href="/event">Evenement</a></li>
<li><a href="/shop">Boutique</a></li>
<li><a href="/signin" class="connexion">Connexion</a></li>

</ul>
<div class="hide">
<i class="fa fa-bars" aria-hidden="true"></i> Menu
</div>
</nav>
    <script type="text/javascript">
      $('.hide').on('click',function(){
        $('nav ul').toggleClass('show');
      });
    </script>


<main>

    @yield('contenu')
    
</main>

<footer class="footer">
  <div>
    
  </div>

  <div class="middle">
      <a class="btnn" href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="btnn" href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="btnn" href="#">
        <i class="fab fa-google"></i>
      </a>
      <a class="btnn" href="#">
        <i class="fab fa-instagram"></i>
      </a>
      <a class="btnn" href="#">
        <i class="fab fa-youtube"></i>
      </a>
      <li><a class="mention_legal" href="/legalmention">mention legal</a></li>
      <li><a class="contact" href="/contact">contact</a></li>
 
      
      
  </div>


</footer>

</body>
</html>