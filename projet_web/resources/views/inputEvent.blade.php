@extends ('Layout')

<link href="{{asset('css/form.css')}}" rel="stylesheet" />

@section ('contenu')



    <form action="/api/addEvent" method="post">
        <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="event_name">
        </div>

        <div>
            <label for="date">Date :</label>
            <input type="date" id="date" name="event_date">
        </div>

        <div>
            <label for="price">Prix de participation :</label>
            <input type="number" id="price" name="event_price">

            <div>
                <label for="description">Description :</label>
                <textarea name="event_description" id="description" cols="30" rows="10"></textarea>
            </div>

            <div>
                <label for="location">Centre CESI :</label>

                <SELECT name="event_location" size="1">
                    <OPTION>Arras
                    <OPTION>Lille
                    <OPTION>Rouen
                </SELECT>
            </div>

            <div>
                <label for="status">Statut :</label>

                <input type="radio" id="Arras" name="status" value="Arras" checked>
                <label for="status">Arras</label>
            </div>

            <div>
                <input type="radio" id="Lille" name="status" value="Lille">
                <label for="status">Lille</label>
            </div>

            <div>
                <input type="radio" id="Rouen" name="status" value="Rouen">
                <label for="status">Rouen</label>
            </div>

            <div>
                <label for="mail">E-mail Organisateur :</label>
                <input type="email" id="email" name="event_mail">
            </div>


            <div class="button">
                <button type="submit">Ajouter l'évènement </button>
            </div>

    </form>

@endsection
