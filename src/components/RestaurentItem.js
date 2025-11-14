import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { resImageURL } from "../utils/constants";

const RestaurentItem = ({ restaurent }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    restaurent?.info;
  const { link } = restaurent?.cta;
  return (
    <Card>
      <Card.Img variant="top" src={resImageURL + cloudinaryImageId} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Rating</p>
        <p>{sla.slaString}</p>
        <a href={link} className="btn btn-primary w-100 mt-2">
          Book Now
        </a>
      </Card.Body>
    </Card>
  );
};

export default RestaurentItem;
