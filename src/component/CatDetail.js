import React , { Component } from 'react';


class CatDetail extends Component {
    render(){
        const { DisplayCat } = this.props;

        console.log(DisplayCat);
       
        return(
            <>
                {DisplayCat.origin?
                    <div className="display-cat-container">

                        <div className="display-cat-top-info">
                            <h1 className="display-cat-name">{DisplayCat.name}</h1>
                            <p className="display-cat-desciption">{DisplayCat.description}</p>
                            <h3 className="display-cat-origin">  <span className="text-label">Origin: </span><br></br>{DisplayCat.origin}</h3>
                            <h2 className="display-cat-temper"> <span className="text-label">Temperament: </span><br></br>{DisplayCat.temperament}</h2>
                        </div>

                        <div className="display-cat-cubes">
                            <h2 className="display-cat-cube"> <span className="text-label">Affection Level:</span> <br></br>{DisplayCat.affection_level}</h2>
                            <h2 className="display-cat-cube">  <span className="text-label">Child Friendliness: </span><br></br>{DisplayCat.child_friendly}</h2>
                            <h2 className="display-cat-cube">  <span className="text-label">Energy Level: </span> <br></br>{DisplayCat.energy_level}</h2>
                            <h2 className="display-cat-cube">  <span className="text-label">Intelligence: </span><br></br> {DisplayCat.intelligence}</h2>
                            <h2 className="display-cat-cube">  <span className="text-label">Life-Span: </span><br></br>{DisplayCat.life_span}<span className="text-label"> Years</span> </h2>
                            <h2 className="display-cat-cube">  <span className="text-label">Social Needs: </span><br></br>{DisplayCat.social_needs}</h2>
                        </div>
                    </div>
                    :
                    <div>
                        <h1>please choose a breed</h1>
                    </div>
                }
            </>
        )
    }
}

export default CatDetail;