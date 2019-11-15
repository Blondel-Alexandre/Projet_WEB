inputEvent.blade.php@extends ('Layout')

<link href="{{asset('css/eventsignin.css')}}" rel="stylesheet" />

@section('contenu')

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
            <input type="text" id="name" name="user_name">
        </div>

        <div>
            <label for="firstname">Prénom :</label>
            <input type="text" id="firstname" name="user_firstname">
        </div>

        <div>
            <label for="mail">E-mail :</label>
            <input type="email" id="mail" name="user_mail">
        </div>

        <div class="button">
            <button type="submit">S'inscrire</button>
        </div>
    </div>

@endsection
