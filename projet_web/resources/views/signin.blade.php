@extends ('Layout')

<link href="{{asset('css/form.css')}}" rel="stylesheet" />

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
            <a href="signup">S'inscrire !</a>
            <a href="/legalmention">Mentions légales</a>
        </div>

    </form>
    </body>

@endsection
