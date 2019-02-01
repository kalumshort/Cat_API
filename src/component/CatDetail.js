import React , { Component } from 'react';


class CatDetail extends Component {
    render(){
        const { DisplayCat } = this.props;

        console.log(DisplayCat);
       
        return(
            <>
                <div className="display-cat-container">
                    <div>
                        <h2 className="display-cat-name">{DisplayCat.name}</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default CatDetail;