import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href="{props.gitHub}">github         </a>
            <a href="{props.linkedIn}">linkedin</a>
        </div>
    )
}
export default Links;