import { useParams } from "react-router-dom";

export const HelloColor = () => {

    const {textColor, backGroundColor} = useParams()

    const isValidColor = (color) => isNaN(color)


    return (
        <div style={{
            color: isValidColor(textColor) ? textColor : "black",
            backgroundColor: isValidColor(backGroundColor) ? backGroundColor : "white",
            padding: "20px",
            textAlign: "center",
        }}>
            <h1>The word is: Hello</h1>
        </div>
    )
}