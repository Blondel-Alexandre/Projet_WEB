@extends('Layout')
<link href="{{asset('css/event.css')}}" rel="stylesheet" />

@section ('contenu')

    <h1>Evènement</h1>
    <a class="btn btn-secondary" href="/eventInput" role=button">ajouter un évènement<a/>
        <hr>
        <div id="eventpast">
            <img src="pictures/event1.png" width="626" height="469" class="responsive" />
            <p>
                <a
                    class="keypast" href="linkeventpast"> event 1 passé
                </a>
                </br>
                <span
                    class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla .....
                     </span>
                <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
                <br/>
                <a class="btn btn-info" href="/addphoto2" role="button">Photo</a>
                <br/>
                <label for="text">Commentaire</label>
                <input type="text" id="commentary" name="commentary">
            </p>
            <div>

            </div>
        </div>
        <hr>
        <div id="eventfuture">
            <img src="pictures/event1.png" width="626" height="469" class="responsive" />
            <p class="mot">
                <a
                    class="keyfuture" href="eventsignin"> event 1 futur
                </a>
                <span
                    class="desc">toujours event bla bla duhf cheh fetrtui dhu hd
                <br/>
                   <a class="btn btn-success" href="/eventsignin" role="button">S'inscrire</a>
            </span>
            </p>
        </div>
        <hr>
        <div id="eventpast">
            <img src="pictures/event1.png" width="626" height="469" class="responsive" />
            <p>
                <a
                    class="keypast" href="linkeventpast2"> event 2 passé
                </a>
                </br>
                <span
                    class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla .....
            </span>
                <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
                <br/>
                <a class="btn btn-info" href="/addphoto2" role="button">Photo</a>
            </p>
        </div>
        <hr>
        <div id="eventfuture">
            <img src="pictures/event1.png" width="626" height="469" class="responsive" />
            <p class="mot">
                <a
                    class="keyfuture" href="linkeventfutur2"> event 2 futur
                </a>
                <span
                    class="desc">toujours event bla bla duhf cheh fetrtui dhu hd
                <br/>
                    <a class="btn btn-success" href="/eventsignin2" role="button">S'inscrire</a>
            </span> </p>
        </div>


@endsection
