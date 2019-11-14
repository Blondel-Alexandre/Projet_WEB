@extends ('Layout')

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

        label {
         /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
            display: inline-block;
            width: 400px;
            text-align: left;
            padding: 0px 0px 5px 0px;
        }

        form div + div {
            margin-top: 1em;
        }

        input {
            padding-left: 10px;
        }

        .button {
            /* Pour placer le bouton à la même position que les champs texte */
            padding-left: 90px; /* même taille que les étiquettes */
            margin-left: .5em;
        }

        .a {
            text-decoration:none;
            style="color:#FF0000;"
        }

    </style>


@section ('contenu')


    <body>
    <form action="...">
        <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail">
        </div>

        <div>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="user_password">
        </div>

        <div class="button">
            <button type="submit">Connection</button>
            <a href="signUp.blade.php">S'inscrire !</a>
        </div>

    </form>
    </body>

@endsection
