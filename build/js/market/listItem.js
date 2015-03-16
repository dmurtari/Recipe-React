var MarketListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.market)
        this.props.onListItemClicked(this.props.market.id)
    },

    render: function() {

        var market = this.props.market

        return ( 
            <div className="market row" >
                <div className="marketName twelve columns" onClick={this.handleClick}>
                    {market.marketname}                    
                </div>
            </div>
        )
  }
})