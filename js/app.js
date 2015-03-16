$( "#recipes" ).on( "click", function( event ) {
    React.render(
        <RecipeList url='data/doctors.json.data'/>,
        document.getElementById('content')
    )
})

$( "#markets" ).on( "click", function( event ) {
    React.render(
        <MarketList url='data/users.json.data'/>,
        document.getElementById('content')
    )
})
