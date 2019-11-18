@extends ('Layout')

<link href="{{asset('css/form.css')}}" rel="stylesheet" />

@section('contenu')
    <form action="/api/addProduct" method="post">

        <h1> Ajout d'événement </h1>

        <div>

            <div>
                <label for="name">Nom :</label>
                <input type="text" id="name" name="tpproducts_name">
            </div>

            <div>
                <label for="price">Prix :</label>
                <input type="price" id="price" name="tpproducts_price">
            </div>

            <div>
                <label for="description">Description :</label>
                <textarea name="event_description" id="description" cols="30" rows="10"></textarea>
            </div>

            <div>
                <label for="category">Categorie :</label>
                <input type="text" id="category" name="tpproducts_category">
            </div>

            <div>
                <label for="mail">E-mail :</label>
                <input type="email" id="mail" name="user_mail">
            </div>

            <div class="button">
                <button type="submit">S'inscrire</button>
            </div>
        </div>
    </form>

@endsection
