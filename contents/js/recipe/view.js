var RecipeView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {

        if (this.state.recipe){
            return (
                <div className="recipeView" >
                    <h2 className="recipeName">
                        {this.state.recipe.title}
                    </h2>
                    {this.state.recipe.social_rank}
                    <p>Source: {this.state.recipe.source_url}</p>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})
