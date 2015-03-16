var MarketView = React.createClass({

	 getInitialState: function() {
        return {market: null}
    },

    render: function() {

        if (this.state.market){

            return (
                <div className="marketView" >
                    <h2 className="marketName">
                        {this.state.market.marketname}
                    </h2>

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }

})
