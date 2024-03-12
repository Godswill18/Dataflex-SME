const pickUp = document.getElementById('autocomplete1' )



function initAutocomplete() {
    pickUp = new google.maps.places.Autocomplete(pickUp,{
        types: ['establishment'], componentRestrictions: {'Nigeria': ['NG']},
        fields: ['place_id', 'geometry', 'name']
    });
    pickUp.addEventListener('place_changed', onPlaceChanged());
}

function onPlaceChanged(){
    var place = pickUp.getPlace();

    if(!place.geometry){
        pickUp.placeholder = 'Enter a place';
    }else {
        document.getElementById('details').innerHTML = place.name;
    }
}
