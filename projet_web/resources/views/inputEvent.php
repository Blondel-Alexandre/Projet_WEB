@extends ('Layout')

<link href="{{asset('css/styleSignUp.css')}}" rel="stylesheet" />

@section ('contenu')



    <form action="/api/register" method="post">
        <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="event_name">
        </div>

        <div>
            <label for="date">Date :</label>
            <input type="date" id="firstname" name="event_date">
        </div>

        <div>
            <label for="price">Prix de participation :</label>
            <input type="number" id="price" name="event_price">

        <div>
            <label for="description">Description :</label>
            <textarea name="event_description" id="description" cols="30" rows="10"></textarea>
        </div>

        <div>
            <label for="localisation">Centre CESI :</label>

            <SELECT name="event_localisation" size="1">
                <OPTION>Arras
                <OPTION>Lille
                <OPTION>Rouen
            </SELECT>
        </div>

        <div>
            <label for="description">Statut :</label>
            <textarea name="event_description" id="description" cols="30" rows="10"></textarea>
        </div>


        <div class="button">
            <button type="submit">Ajouter l'évènement </button>
        </div>

    </form>

@endsection
