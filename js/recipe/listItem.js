var RecipeListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.recipe)
        this.props.onListItemClicked(this.props.recipe.recipe_id)
    },

    render: function() {

        var recipe = this.props.recipe

        return ( 
            <div className="recipe row" >
                <div className="recipeName six columns" onClick={this.handleClick}>
                    {recipe.title}                    
                </div>
                <div className="recipeCity six columns">
                    {recipe.social_rank}   
                </div>
            </div>
        )
  }
})