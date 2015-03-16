var MarketList = React.createClass({displayName: 'MarketList',

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

    handleListItemClicked: function(id){
        var market = _.find(this.state.data, {id: id})
        this.refs.marketView.setState({market:market})
    },

    render: function() {

        var self = this

        var market = this.state.data.map(function (market) {

          return (
            <MarketListItem market={market} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="marketPage">
                <div className="marketList six columns">
                  <div className="twelve columns">
                    <h2>Market< /h2>
                  </div>
                    {market}
                </div>
                <div className="marketView six columns">
                    <MarketView ref="marketView"/>
                </div>
            </div>
        )
    }
})
