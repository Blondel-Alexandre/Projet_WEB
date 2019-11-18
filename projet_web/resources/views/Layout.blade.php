<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://use.fontawesome.com/d1341f9b7a.js"></script>
    <link rel="stylesheet" href="{{asset('css/header.css')}}">
    <meta charset="utf-8">
    <title>BDE</title>
  </head>

  <body>
    <header>

        <h1 class="title">
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
    <a class="mention_legal" href="/legalmention">mention legal</a>
    <a class="contact" href="/contact">contact</a>

</footer>
</body>
</html>
