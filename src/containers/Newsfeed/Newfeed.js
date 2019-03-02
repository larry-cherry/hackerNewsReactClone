import React, {Component} from 'react';
import AuxComp from '../../hoc/AuxComp';

class Newsfeed extends Component {
    state = {
        posts: null
    }


    render() {
        

        return (
            <AuxComp>
                <h1>Hello World!</h1>
            </AuxComp>
        );
    }
}

export default Newsfeed;