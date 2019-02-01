import React , { Component } from 'react';
import Select from 'react-select';

import '../index.css';

class Cats extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: '',
        };
    }

    componentDidMount(){
        this.props.onLoad();
    }
    
    onChange(event) {
        this.props.chosenCat(event.value);
    }
   
    render(){
        const { cats } = this.props;
       
        return(
            <>
                <div>
                    <h2 className="cats-header">Cat Breed Selector</h2>
                </div>
                <div className="cat-selector-field">
                    <Select
                    className="cat-selector"
                    onChange={this.onChange.bind(this)}
                     options = {cats.map((item) => (
                        {
                            value: item,
                            label: item.name
                        }

                    ))}/>
                </div>
            </>
        )
    }
}

export default Cats;