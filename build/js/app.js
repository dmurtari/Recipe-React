$( "#recipes" ).on( "click", function( event ) {
    React.render(
        <RecipeList url='http://food2fork-api.herokuapp.com/recipe/search/chicken'/>,
        document.getElementById('content')
    )
})

$( "#markets" ).on( "click", function( event ) {
    React.render(
        <MarketList url='http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=80303'/>,
        document.getElementById('content')
    )
})
