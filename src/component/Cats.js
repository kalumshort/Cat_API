import React , { Component } from 'react';
import Cat from './Cat.js';

class Cats extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.OnLoad();
        // console.log('hsh')
    }

    render(){
        const { cats } = this.props;

        return(
            <>
                <div>
                    <h2>Cats</h2>
                </div>
                <div>
                    {cats.map((item, index)=> (
                        <Cat
                            name={item.name}
                            key={index}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default Cats;