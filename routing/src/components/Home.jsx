import { useParams } from "react-router-dom";

export const Home = () => {
  const { value, color, backgroundcolor } = useParams();

  
  if (!value) {
    return <h1>Welcome</h1>;
  }

 
  if (!isNaN(Number(value))) {
    return <h1>The number is: {value}</h1>;
  }

  
  if (value && !color && !backgroundcolor) {
    return <h1>The word is: {value}</h1>;
  }

  
  if (value && color && backgroundcolor) {
    return (
      <h1 style={{ color: color, backgroundColor: backgroundcolor }}>
        The word is: {value}
      </h1>
    );
  }

  return <h1>Invalid Input</h1>;
};
