import { useParams } from "react-router-dom"

export const Number = () => {

    const {number} = useParams()
    
    return(
        <h1>The number is: {number}</h1>
    )
}