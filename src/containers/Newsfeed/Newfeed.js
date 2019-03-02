import React, {Component} from 'react';
import AuxComp from '../../hoc/AuxComp';
import Posts from '../../components/Posts/Posts'; // img will need .img / .jpg


class Newsfeed extends Component {
    state = {
        posts: null
    }


    render() {
        

        return (
            <AuxComp>
                <Posts />
            </AuxComp>
        );
    }
}

export default Newsfeed;