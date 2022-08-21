import React from "react";

class HornedBeast extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <img src="https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=" alt="drink">{this.props.imageUrl}</img>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default HornedBeast