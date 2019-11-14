@extends ('Layout')
    @section('contenu')

<!-- Styles -->
    <style>

form {
    /* Uniquement centrer le formulaire sur la page */
    margin: 0 auto;
    margin-top: 2px;
    width: 400px;
    /* Encadré pour voir les limites du formulaire */
    padding: 1em;
    border: 1px solid #CCC;
    border-radius: 1em;
  }

form div + div {
    margin-top: 1em;
  }

label {
    /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
    display: inline-block;
    width: 400px;
    text-align: left;
    padding: 0px 0px 5px 0px;
  }

input:focus, textarea:focus {
    /* Pour souligner légèrement les éléments actifs */
    border-color: #000;
  }

.button {
    /* Pour placer le bouton à la même position que les champs texte */
    padding-left: 90px; /* même taille que les étiquettes */
  }

button {
    /* Cette marge supplémentaire représente grosso modo le même espace que celui
       entre les étiquettes et les champs texte */
    margin-left: .5em;
  }
    </style>

    <form action="" method="post">
        <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="user_name">
        </div>

        <div>
            <label for="firstname">Prénom :</label>
            <input type="text" id="firtsname" name="user_firtsname">
        </div>

        <div>
            <label for="localisation">Centre CESI :</label>
            
            <SELECT name="localisation" size="1">
                <OPTION>Arras
                <OPTION>Lille
                <OPTION>Rouen
            </SELECT>
        </div>

        <div>
            <label for="mail">E-mail :</label>
            <input type="email" id="mail" name="user_mail">
        </div>

        <div>
            <label for="password">Mot de passe (Contenant 1 Maj, 1 Min, 1 Chiffre minimum ) :</label>
            <input type="password" id="password" name="user_password">
        </div>

        <div>
        
        </div>

        <div class="button">
            <button type="submit">S'inscrire</button>
        </div>

    </form>

@endsection
