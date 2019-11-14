@extends('Layout')
 <link href="{{asset('css/boutique.css')}}" rel="stylesheet" />

@section ('contenu')
    <nav>
        <h1>boutique</h1>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Arras</a>
                <a class="dropdown-item" href="#">Rouen</a>
                <a class="dropdown-item" href="#">Strasbourg</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Autre campus</a>
            </div>
        </form>

    </nav>




    <div id="vente">
        <img src="pictures/boutique.jpg" />
        <p><a class="motcle" href="/link1shop"> vente 1 </a></br> <span class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla .....</span> </p>
    </div>
 <hr>
    <div id="vente">
        <img src="pictures/boutique.jpg" />
        <p><a class="motcle" href="link1shop2"> vente 2 </a><span class="desc">toujours event bla bla duhf cheh fetrtui dhu hd</span> </p>
    </div>
<hr>
    <div id="vente">
        <img src="pictures/boutique.jpg" />
        <p><a class="motcle" href="link1shop3"> vente 3 </a></br> <span class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla .....</span> </p>
    </div>
<hr>
    <div id="vente">
        <img src="pictures/boutique.jpg" />
        <p><a class="motcle" href="link1shop4"> vente 4 </a><span class="desc">toujours event bla bla duhf cheh fetrtui dhu hd</span> </p>
    </div>


@endsection
