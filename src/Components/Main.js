import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return(
            <div>
                <HornedBeast title='This is title 1' description='This is description about first photo' />
                <HornedBeast title='This is title 2' description='This is description about second photo' />
            </div>
        )
    }
}

export default Main