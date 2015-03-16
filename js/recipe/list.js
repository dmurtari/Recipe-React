var RecipeList = React.createClass({displayName: 'RecipeList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(recipe_id){
        var recipe = _.find(this.state.data, {recipe_id: recipe_id})
        this.refs.recipeView.setState({recipe:recipe})
    },

    render: function() {

        var self = this

        var recipes = this.state.data.map(function (recipe) {

          return (
            <RecipeListItem recipe={recipe} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="recipePage">
                <div className="recipeList six columns">
                    <div className="six columns">
                        <h4> Name </h4>
                    </div>
                    <div className="six columns">
                        <h4> Rating </h4>
                    </div>
                    {recipes}
                </div>
                <div className="recipeView six columns">
                    <RecipeView ref="doctorView"/>
                </div>
            </div>
        )
    }
})
