import React , { Component } from 'react';
import Cat from './Cat.js';
import Select from 'react-select';


class Cats extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.onLoad();
    }
    

    render(){
        const { cats } = this.props;
       
        return(
            <>
                <div>
                    <h2>Cats</h2>
                </div>
                <div>
                    <Select options = {cats.map((item, index) => (
                        {
                            value: item.name,
                            label: item.name
                        }
                    ))}/>
                </div>
            </>
        )
    }
}

export default Cats;