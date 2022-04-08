import React from "react"
import ReactDOM from "react-dom"

const heroes = [{
        id: 1,
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
        name: "Doraemon",
        age: 40,
        city: "Toyama",
    },
    {
        id: 2,
        imgSrc: "https://pbs.twimg.com/profile_images/493416454104969216/2gt_nClw_400x400.jpeg",
        name: "Goku",
        age: 11,
        city: "West City",
    },
    {
        id: 3,
        imgSrc: "https://pbs.twimg.com/media/DyXR3quXQAUBo81.jpg",
        name: "Itachi",
        age: 8,
        city: "Konoha",
    },
];

const Cards = (props) => {
    // child component => nerima props
    return React.createElement("div", { className: "card" }, [
        React.createElement("img", {
            className: "image",
            src: props.imgSrc,
        }),
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.age),
        React.createElement("h2", {}, props.city),
    ]);
};

const App = () => {
    // parent component => ngirim props
    return React.createElement(
        "div", {
            className: "container",
        },

        heroes.map((hero) =>
            React.createElement(Cards, {
                name: hero.name,
                age: hero.age,
                city: hero.city,
                imgSrc: hero.imgSrc,
                id: hero.id,
                key: hero.id,
            })
        )
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));