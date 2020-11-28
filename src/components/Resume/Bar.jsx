import React from 'react'

const Bar = ({ name, level }) => {
    let list = [
        "bg-secondary ",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info ",
        "bg-secondary ",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info ",
        "bg-secondary ",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info ",
    ];
    let number = Math.floor(Math.random() * 12);
    return (
        <div className="bar">
            <div class="progress" style={{ height: "30px" }}>
                <div class={`progress-bar progress-bar-striped ${list[number]}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${level}%` }}>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default Bar
