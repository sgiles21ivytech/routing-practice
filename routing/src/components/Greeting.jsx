import { useParams } from "react-router-dom";

export const Greeting = () => {

    const {greeting} = useParams()

    return(
        <h1>The word is: {greeting}</h1>
    )
}