@extends ('Layout')
@section ('contenu')

    <style>
        form {
            /* Uniquement centrer le formulaire sur la page */
            margin: 0 auto;
            margin-top: 20px;
            width: 400px;
            /* Encadré pour voir les limites du formulaire */
            padding: 1em;
            border: 1px solid #CCC;
            border-radius: 1em;
        }

        form div + div {
            margin-top: 1em;
        }

        input {
            padding-left: 140px;
        }

        .button {
            /* Pour placer le bouton à la même position que les champs texte */
            padding-left: 90px; /* même taille que les étiquettes */
            margin-left: .5em;
        }

    </style>


    <body>
    <form action="...">
        <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail">
        </div>

        <div>
            <label for="password">Mot de passe :</label>
            <input type="text" id="password" name="user_password">
        </div>

        <div class="button">
            <button type="submit">Connection</button>
        </div>

    </form>
    </body>

@endsection
