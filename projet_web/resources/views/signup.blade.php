@extends ('Layout')

<link href="{{asset('css/styleSignUp.css')}}" rel="stylesheet" />

@section('contenu')



    <form action="/addUser" method="">
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
            <input type="text" id="password" name="user_password">
        </div>

        <div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input required="required" type="checkbox" aria-label="Checkbox for following text input">
                        <a href="/cgv">Condition générale de vente (CGV)</a>
                    </div>
                </div>
            </div>

        </div>

        <div class="button">
            <button type="submit">S'inscrire</button>
        </div>

    </form>

@endsection
