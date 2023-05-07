import React from "react";

class Info extends React.Component {
    render(){
        const title = "this is my title";
        const showTitle = false;
        return (
            <div>
        {showTitle ? title : "no title"}
        <h1>Inventory system</h1>
        <p>Manage your stuff</p>  
      </div>
        );
    }
}

export default Info;
