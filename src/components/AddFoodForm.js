import { useState } from 'react';
import { Divider, Input } from 'antd';
import '../components/css/FoodBox.css';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit')

    addFood({
      name,
      image,
      calories,
      servings,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider id="styleFont">
          {' '}
          <b>Add Food Entry</b>
        </Divider>

        <label id="styleFontLabel">Name</label>
        <Input
          className="styleFont"
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Food name"
        />

        <label id="styleFontLabel">Image</label>
        <Input
          className="styleFont"
          type="text"
          value={image}
          onChange={handleImage}
          placeholder="Food image"
        />

        <label id="styleFontLabel">Calories</label>
        <Input
          className="styleFont"
          type="number"
          value={calories}
          onChange={handleCalories}
          placeholder="Food number calories"
        />

        <label id="styleFontLabel">Servings</label>
        <Input
          className="styleFont"
          type="number"
          value={servings}
          onChange={handleServings}
          placeholder="Food number servings"
        />

        <button className="buttonStyle" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
