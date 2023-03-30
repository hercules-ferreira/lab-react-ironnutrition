import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { Divider } from 'antd';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Search from './components/Search';
import imageNoProduct from '../src/image/no-product.png' 


function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const addFood = (foodObj) => {
    const foodListCopy = [...foodList, foodObj];
    setFoodList(foodListCopy);


    const foodListCopyFiltered = [...filteredFoodList, foodObj];
    setFilteredFoodList(foodListCopyFiltered)  

    console.log("Addfood")
  };
  const filterList = (str) => {
    const filteredList = foodList.filter((food) => {
      return food.name.toLowerCase().includes(str);
    });

    setFilteredFoodList(filteredList);
  };

  const deleteFood = (name) => {
    const filteredList = foodList.filter((food) => {
      return food.name !== name;
    });
    setFoodList(filteredList);
    const filteredRenderList = filteredFoodList.filter((food) => {
      return food.name !== name;
    });
    setFilteredFoodList(filteredRenderList);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />

      <Search filterList={filterList} />
      <br></br>
      <Divider id="styleFont"><b>Food List</b></Divider>

      {filteredFoodList.length === 0 ? (
          <img src={imageNoProduct} width={200}/>
      ) : 
      
      filteredFoodList.map((food) => {
        return <FoodBox key={uuidv4()} food={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
