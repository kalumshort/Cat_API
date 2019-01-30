import React , { Component } from 'react';


class CatDetail extends Component {
    constructor(props){
        super(props);
       
    }
   
    render(){
        const { cat } = this.props;

        console.log(cat.cat);
       
        return(
            <>
                <div>
                    {/* <h2>{cat.cat}</h2> */}
                </div>
            </>
        )
    }
}

export default CatDetail;