@extends('Layout')
<link href="{{asset('css/boutique.css')}}" rel="stylesheet" />

@section ('contenu')

        <div class="title">
        <h1>Boutique</h1>
            <input class="title-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
            <a class="backet" href="backet" ><i class="fas fa-shopping-basket"></i></a>
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> bf76a5626fbee230b82049aafc58e694dd79603f
    <a class="btn btn-secondary" href="/shopInput" role="button">Ajouter un produit</a>

        @foreach($data as $dataview)

            <div id="vente">
                <img src="pictures/boutique.jpg" />
                <p><a class="motcle" href="/link1shop"> {{$dataview['name']}} </a></br> <span class="desc">{{$dataview['description']}}</span> </p>
                <p></p>
            </div>
            <hr>

        @endforeach>



<<<<<<< HEAD
@endsection
=======
@endsection
>>>>>>> bf76a5626fbee230b82049aafc58e694dd79603f
