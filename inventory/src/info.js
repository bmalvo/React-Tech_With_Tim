import React from "react";
import {PropTypes} from 'prop-types';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const title = this.props.title;
        const showTitle = true;
        return (
            <div>
        <h1>{showTitle ? title : "React is insane"}</h1>
        <h1>Inventory system</h1>
        <p>Manage your stuff</p>  
      </div>
        );
    }
}


Info.defaultProps = {
    title : "Default title"
};

Info.propTypes = {
    title : PropTypes.string,
};

export default Info;
