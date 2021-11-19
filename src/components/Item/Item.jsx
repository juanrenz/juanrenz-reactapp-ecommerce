import "./Item.css";
import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

const Item = ({ name, price, imgUrl, info }) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: 330,
    height: 500,
    alignItems: "center",
    margin: 20,
  };

  // <div className='card' style={styles}>
  //         <h1>{capitalize(name)}</h1>
  //         <h1>Precio: {price}</h1>
  //         <img src={imgUrl} style={{width: 300, height: 300}} alt=""/>
  //         <h3>Consola: {info} </h3>
  //     </div>

  return (
    <div style={styles}>
      <Card>
        <CardImage src={imgUrl} alt="Card Image" style={{width: 300, height: 350}}/>

        <CardBody>
          <H6 color="gray">{name}</H6>
          <Paragraph color="gray">
            {info}
            {price}
          </Paragraph>
        </CardBody>

        <CardFooter>
          <Button color="lightBlue" size="lg" ripple="light">
            Read More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
