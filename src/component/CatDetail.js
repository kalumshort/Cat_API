import React , { Component } from 'react';


class CatDetail extends Component {
    render(){
        const { DisplayCat } = this.props;

        console.log(DisplayCat);
       
        return(
            <>
                <div>
                    <h2>{DisplayCat.name}</h2>
                </div>
            </>
        )
    }
}

export default CatDetail;