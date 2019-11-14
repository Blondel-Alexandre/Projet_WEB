@extends('Layout')
<link href="{{asset('css/event.css')}}" rel="stylesheet" />

@section ('contenu')

    <h1>Evènement</h1>

    <div id="eventpast">
        <img src="pictures/event1.png" width="626" height="469" class="responsive" />
        <p><a class="keypast" href="linkeventpast1"> event 1 passé </a>
            </br>
            <span
                class="desc">premier event tmtc jiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiitro cool enfaite hate de la suite blablabla ....hbdzih dchf ief jeprezu go tig"rof iruf oori uerfro o'trjrjk rigejr hergkorgm ggjregiojroier jrigj eoirjtoie jerutoerut nertyuiery t
            </span>
            <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
        </p>
    </div>
    <hr>
    <div id="eventfuture">
        <img src="pictures/event1.png" width="626" height="469" class="responsive" />  
        <p class="mot">
            <a
                class="keyfuture" href="linkeventfutur1"> event 1 futur
            </a>
            <span
                class="desc">toujours event bla bla duhf cheh fetrtui dhu hd
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
            </span> </p>
    </div>


@endsection
