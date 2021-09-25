import React from "react";

const FilmItem = (props) => {
    return (
        <div>
            <img src={props.item.image.medium}/>
            <strong>{props.item.name}</strong>
            <div>
                {props.item.language}
            </div>
        </div>
    )
}

export default FilmItem;
