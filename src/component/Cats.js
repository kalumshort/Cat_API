import React , { Component } from 'react';
import Cat from './Cat.js';
import Select from 'react-select';


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
        const selectedCat = event.value;
        this.setState({
            selected: selectedCat,
        })
    }
   
    render(){
        const { cats } = this.props;
        console.log(this.state.selected);
       
        return(
            <>
                <div>
                    <h2>Cats</h2>
                </div>
                <div>
                    <Select
                    onChange={this.onChange.bind(this)}
                     options = {cats.map((item, index) => (
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