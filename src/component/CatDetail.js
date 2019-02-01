import React , { Component } from 'react';


class CatDetail extends Component {
    render(){
        const { DisplayCat } = this.props;

        console.log(DisplayCat);
       
        return(
            <>
                <div className="display-cat-container">

                    <div className="display-cat-top-info">
                        <h1 className="display-cat-name">{DisplayCat.name}</h1>
                        <p className="display-cat-desciption">{DisplayCat.description}</p>
                        <h3 className="display-cat-origin">{DisplayCat.origin}</h3>
                        <h2 className="displlay-cat-temper">{DisplayCat.temperament}</h2>
                    </div>

                    <div className="display-cat-cubes">
                        <h2 className="display-cat-cube">{DisplayCat.affection_level}</h2>
                        <h2 className="display-cat-cube">{DisplayCat.child_friendly}</h2>
                        <h2 className="display-cat-cube">{DisplayCat.energy_level}</h2>
                        <h2 className="display-cat-cube">{DisplayCat.intelligence}</h2>
                        <h2 className="display-cat-cube">{DisplayCat.life_span}</h2>
                        <h2 className="display-cat-cube">{DisplayCat.social_needs}</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default CatDetail;