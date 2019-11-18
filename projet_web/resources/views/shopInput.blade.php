@extends ('Layout')

<link href="{{asset('css/form.css')}}" rel="stylesheet" />

@section('contenu')
    <form action="/api/addProduct" method="post">

        <h1> Ajout de produit </h1>

        <div>

            <div>
                <label for="name">Nom :</label>
                <input type="text" id="name" name="products_name">
            </div>

            <div>
                <label for="price">Prix :</label>
                <input type="price" id="price" name="products_price">
            </div>

            <div>
                <label for="description">Description :</label>
                <textarea   id="description"  name="products_description" cols="30" rows="10"></textarea>
            </div>

            <div>
                <label for="category">Categorie :</label>
                <input type="text" id="category" name="products_category">
            </div>

            <div>
                <label for="mail">E-mail :</label>
                <input type="email" id="email" name="products_email">
            </div>

            <div class="button">
                <button type="submit">Ajouter un produit a notre super BDD</button>
            </div>
        </div>
    </form>

@endsection
