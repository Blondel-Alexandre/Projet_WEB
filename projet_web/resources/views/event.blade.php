@extends('Layout')
<link href="{{asset('css/event.css')}}" rel="stylesheet" />

@section ('contenu')

    <form action="/api/addComment" method="post">

        <h1 class="title">Evènement</h1>
        <a class="btn btn-secondary" href="/inputEvent" role="button">ajouter un évènement</a>
        <hr>
            <div id="eventpast">
                <img src="pictures/event1.png" width="626" height="469" class="responsive" />
                <p>
                    
                    <div>
                        <a
                            class="keypast" href="linkeventpast"> event 1 passé
                        </a>
                        <br>
                        <span class="desc">
                            premier event tmtc tro cool enfaite hate de la suite blablabla .....
                        </span>
                        <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
                        <a class="btn btn-info" href="/addphoto2" role="button">Photo</a>
                    </div>
                   
                <div class="addpast">
                    <label for="comment">Commentaire</label>
                    <input type="text" id="comment" name="tppComment_comment">
                    <button type="submit">Envoyer</button>
                </div>
                </p>

            </div>

            <hr>

            <div id="eventfuture">
                <img src="pictures/event1.png" width="626" height="469" class="responsive" />
                <p class="mot">
                    <a
                        class="keyfuture" href="eventsignin"> event 1 futur
                    </a>
                    <br>
                    <span class="desc">
                        toujours event bla bla duhf cheh fetrtui dhu hd
                    </span>
                <div class="addfuture">
                    <a class="btn btn-success" href="/eventsignin" role="button">S'inscrire</a>
                    <a class="btn btn-warning" href="/" role="button">Recuperer les inscrits</a>
                </div>
            </div>

            <hr>

            <div id="eventpast">
                <img src="pictures/event1.png" width="626" height="469" class="responsive" />
                <p>
                    
                    <div>
                        <a
                            class="keypast" href="linkeventpast"> event 1 passé
                        </a>
                        <br>
                        <span class="desc">
                            premier event tmtc tro cool enfaite hate de la suite blablabla .....
                        </span>
                        <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
                        <a class="btn btn-info" href="/addphoto2" role="button">Photo</a>
                    </div>
                   
                <div class="addpast">
                    <label for="comment">Commentaire</label>
                    <input type="text" id="comment" name="tppComment_comment">
                    <button type="submit">Envoyer</button>
                </div>
                </p>

            </div>

            <hr>

            <div id="eventfuture">
                <img src="pictures/event1.png" width="626" height="469" class="responsive" />
                <p class="mot">
                    <a
                        class="keyfuture" href="eventsignin"> event 1 futur
                    </a>
                    <br>
                    <span class="desc">
                        toujours event bla bla duhf cheh fetrtui dhu hd
                    </span>
                <div class="addfuture">
                    <a class="btn btn-success" href="/eventsignin" role="button">S'inscrire</a>
                    <a class="btn btn-warning" href="/" role="button">Recuperer les inscrits</a>
                </div>
            </div>
    </form>

@endsection
