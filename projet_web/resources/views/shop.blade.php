@extends('Layout')
<link href="{{asset('css/boutique.css')}}" rel="stylesheet" />

@section ('contenu')

        <div class="title">
        <h1>Boutique</h1>
            <input class="title-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
            <a class="backet" href="backet" ><i class="fas fa-shopping-basket"></i></a>
        </div>
        
    <a class="btn btn-secondary" href="/shopInput" role="button">Ajouter un produit</a>

    <div id="vente">
        <p><a class="motcle" href="/link1shop"> vente 1 </a>
        <br> 
        <span class="desc">Premier produit</span> 
        </p>
    </div>
    <hr>
    <div id="vente">
        <p><a class="motcle" href="link1shop2"> vente 2 </a>
        <br>
        <span class="desc">Deuxieme produit</span> </p>
    </div>
    <hr>
    <div id="vente">
        <p><a class="motcle" href="link1shop3"> vente 3 </a>
        <br> 
        <span class="desc">Troisieme produit</span> </p>
    </div>
    <hr>
    <div id="vente">
        <p><a class="motcle" href="link1shop4"> vente 4 </a>
        <br>
        <span class="desc">Quatrieme produit</span> </p>
    </div>


@endsection
