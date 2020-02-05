$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    //get quotes from server when the page loads
    getQuotes();
    addQuote();
} // end onReady

function addQuote(){
    //get user input & place in an objet
    const objectToSent = {
        who: 'ASDF',
        quote: "QWER"
    }
    //use ajax to send obj to server via POST
    $.ajax({
        type: 'POST',
        url: '/quotes',
        data: objectToSent
    }).then( function(response){
        console.log('back from POST with ', response);
           //update DOM
           getQuotes();
        
    }).catch(function(err){
          //catch any errors 
        console.log('err');
        alert('no worky')
    })//end ajax
} //end addQuotes

// make a GET call to /quotes on server

function getQuotes() {
    console.log('in get quotes');
    //ask jQuery to make an ajax GET call to wack /quotes
    $.ajax({
        type: 'GET',
        url: '/quotes'
    }).then(function(response){
        console.log('back from the GET with', response);
        //loop throught the array
        //append to each to the DOM
        
    }).catch(function (err) {
        console.log(err);
        alert('error getting quotes. see console for details');
    }) // end ajax
} // end getQuotes