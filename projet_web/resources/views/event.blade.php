@extends('Layout')
<link href="{{asset('css/event.css')}}" rel="stylesheet" />

@section ('contenu')

    <h1>Evènement</h1>

    <div id="event1">
        <img src="pictures/event1.png" />
        <p><a class="motcle" href="linkeventpast1"> event 1 passé </a>
            </br>
            <span
                class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla ....hbdzih dchf ief jeprezu go tig"rof iruf oori uerfro o'trjrjk rigejr hergkorgm ggjregiojroier jrigj eoirjtoie jerutoerut nertyuiery t
            </span>
            <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
        </p>
    </div>

    <div id="event2">
        <img src="pictures/event1.png" />
        <p class="mot">
            <a
                class="motcle2" href="linkeventfutur1"> event 1 futur
            </a>
            <span
                class="desc">toujours event bla bla duhf cheh fetrtui dhu hd
            </span>
        </p>
    </div>


    <div id="event3">
        <img src="pictures/event1.png" />
        <p>
            <a
                class="motcle" href="linkeventpast2"> event 2 passé
            </a>
            </br>
            <span
                class="desc">premier event tmtc tro cool enfaite hate de la suite blablabla .....
            </span>
            <a href="#" class="like"><i class="far fa-thumbs-up"></i></a>
        </p>
    </div>

    <div id="event4">
        <img src="pictures/event1.png" />
        <p class="mot">
            <a
                class="motcle2" href="linkeventfutur2"> event 2 futur
            </a>
            <span
                class="desc">toujours event bla bla duhf cheh fetrtui dhu hd
            </span> </p>
    </div>


@endsection
