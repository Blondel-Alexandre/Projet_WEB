@extends ('Layout')


@section('contenu')
    <form action="/api/addProduct" method="post">

        <h1> evenement </h1>

        <div id="eventfutur1">

            <img src="pictures/event1.png" />
            <p>
                </br>
                <span
                    class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla .....
            </span>
            </p>
            <div>
                <label for="name">Nom :</label>
                <input type="text" id="name" name="tpproducts_name">
            </div>

            <div>
                <label for="price">Prix :</label>
                <input type="price" id="price" name="tpproducts_price">
            </div>

            <div>
                <label for="firstname">description :</label>
                <input type="text" id="firstname" name="tpproducts_description">
            </div>

            <div>
                <label for="category">categorie :</label>
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
