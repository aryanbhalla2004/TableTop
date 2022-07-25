import Amenity from "./Amenity/Amentiy";
import Form from "./Form/Form";
import "./AmenityList.css";

const AmenityList = (props) => {
  const { amenities, addAmenity, deleteAmenity } = props;

  return (
    <>
      <Form addAmenity={addAmenity} />
			<ul className="amenity-list">
  			{amenities.map(amenity => 
			    <Amenity
			      key={amenity.id} 
			      id={amenity.id} 
			      description={amenity.description} 
			      deleteAmenity={deleteAmenity}
			    />
			  )}
			</ul>
    </>
  );
}

export default AmenityList;