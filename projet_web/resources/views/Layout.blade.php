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
<<<<<<< HEAD

=======
    
>>>>>>> bf76a5626fbee230b82049aafc58e694dd79603f
</main>

<footer class="footer">
  <div>

  </div>

  <div class="middle">
<<<<<<< HEAD
      <a class="btnn" href="https://www.facebook.com/Cesi.Arras.BDE/">
=======
      <a class="btnn" href="#">
>>>>>>> bf76a5626fbee230b82049aafc58e694dd79603f
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="btnn" href="https://twitter.com/BDE_Exia_Arras">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="btnn" href="#">
<<<<<<< HEAD
        <i class="fab fa-google"></i>
      </a>
      <a class="btnn" href="https://www.instagram.com/campus_cesi/?hl=fr">
        <i class="fab fa-instagram"></i>
      </a>
      <a class="btnn" href="https://www.youtube.com/user/groupecesi1">
        <i class="fab fa-youtube"></i>
      </a>
      <li><a class="mention_legal" href="/legalmention">mention legal</a></li>
      <li><a class="contact" href="/contact">contact</a></li>



=======
        <i class="fab fa-instagram"></i>
      </a>
      <li><a class="mention_legal" href="/legalmention">mention legal</a></li>
      <li><a class="contact" href="/contact">contact</a></li>
 
      
      
>>>>>>> bf76a5626fbee230b82049aafc58e694dd79603f
  </div>


</footer>

</body>
</html>
