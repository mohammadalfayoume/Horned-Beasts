import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return(
            <div>
                <HornedBeast title='This is title 1' imageUrl='https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=' description='This is description about first photo' />
                <HornedBeast title='This is title 2' imageUrl='https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=' description='This is description about second photo' />
            </div>
        )
    }
}

export default Main