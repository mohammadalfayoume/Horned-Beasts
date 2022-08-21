import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return(
            <div>
                {/* <HornedBeast title='This is title' />
                <HornedBeast imageUrl='./mocha.png' />
                <HornedBeast description='This is discreption'/> */}
                <HornedBeast />
                <HornedBeast />

            </div>
        )
    }
}

export default Main