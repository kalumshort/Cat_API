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
        // const options = [
        //     <div>
        //     {cats.map((item) => (
        //         {
        //             value: item.name,
        //             label: item.name,
                  

        //         }
        //     ))}
        //     </div>
        // ]
        return(
            <>
                <div>
                    <h2>Cats</h2>
                </div>
                {/* <div>
                    {cats.map((item, index)=> (
                        <Cat
                            name={item.name}
                            key={index}
                        />
                    ))}
                </div> */}
                <div>
                    <Select options = {cats.map((item, index) => (
                        {
                            value: item.name,
                            label: item.name
                        }
                        // <Cat
                        //     name={item.name}
                        //     key={index}
                        // />

                        
                    ))}/>
                </div>
            </>
        )
    }
}

export default Cats;