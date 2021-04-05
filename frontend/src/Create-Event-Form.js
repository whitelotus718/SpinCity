import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createEvent } from './store/events';


const CreateEventForm = () => {
    // const pokeTypes = useSelector(state => state.pokemon.types);
    // const eventTypes = useSelector(state => state.events.eventTypes)

    const dispatch = useDispatch();
    const history = useHistory();
    const [eventType, setEventType] = useState("");
    const [venueType, setVenueType] = useState('');
    const [musicType, setMusicType] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [size, setSize] = useState(50);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [venueImage, setVenueImage] = useState('');
    // const [userId, setUserId] = useState('');


    const updateEventType = (e) => setEventType(e.target.value);
    const updateVenueType = (e) => setVenueType(e.target.value);
    const updateMusicType = (e) => setMusicType(e.target.value);
    const updateTitle = (e) => setTitle(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateSize = (e) => setSize(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateVenueImage = (e) => setVenueImage(e.target.value);
    // const updateUserId = (e) => setUserId(e.target.value);
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const payload = {
        eventType,
        venueType,
        musicType,
        title,
        address,
        size,
        price,
        description,
        venueImage,
        // userId
    };
  
// Start editing from here again!!!

      const event = await dispatch(createEvent(payload));
      console.log("PAYLOAD!!!", payload)
      if (event) {
        // history.push(`/events/${event.id}`);
        history.push('/');
      }
    };
  
    const handleCancelClick = (e) => {
      e.preventDefault();
      history.push('/')
    };
  
    return (
      <section className="new-form-holder centered middled">
        <h2> Create an Event </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Type"
            required
            value={eventType}
            onChange={updateEventType} />
          <input
            type="text"
            placeholder="Venue Type"
            required
            value={venueType}
            onChange={updateVenueType} />
          <input
            type="text"
            placeholder="Music Type"
            required
            value={musicType}
            onChange={updateMusicType} />
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={updateTitle} />
          <input
            type="text"
            placeholder="Address"
            required
            value={address}
            onChange={updateAddress} />
          <input
            type="number"
            placeholder="Party Size"
            min="0"
            max="500"
            required
            value={size}
            onChange={updateSize} />
          <input
            type="number"
            placeholder="Price"
            min="0"
            max="9999"
            required
            value={price}
            onChange={updatePrice} />
          <input
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={updateDescription} />
          <input
            type="text"
            placeholder="Venue Image"
            required
            value={venueImage}
            onChange={updateVenueImage} />
          <button type="submit">Create new Event</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
      </section>
    );
  };
  
  export default CreateEventForm;
  