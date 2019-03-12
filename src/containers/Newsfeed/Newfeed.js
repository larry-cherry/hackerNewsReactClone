import React, {Component} from 'react';
import AuxComp from '../../hoc/AuxComp';
import Posts from '../../components/Posts/Posts'; // img will need .img / .jpg


class Newsfeed extends Component {
    state = {
        posts: null
    }


    render() {
        let posts = null;
        if (this.state.posts) {
            posts = <Posts/>
        }

        return (
            <AuxComp>
                {posts}
            </AuxComp>
        );
    }
}

export default Newsfeed;