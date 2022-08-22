import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data"


class Main extends React.Component {
    render() {
        return(
            <div>
                {data.map((card)=> {
                    return(
                        <div>
                            <HornedBeast title={card.title} image={card.image_url} descr={card.description} />
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Main