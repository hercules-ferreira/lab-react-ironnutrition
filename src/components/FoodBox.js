import { Card, Col, Button } from 'antd';
import '../components/css/FoodBox.css';

function FoodBox({ food, deleteFood}) {
  return (
    <Col className="card">
      <Card title={food.name} style={{ width: 360, height: 300, margin: 10 }}>
        <img src={food.image} alt={food.name} width={100} />

        <p>Calories: {food.calories} </p>

        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b>
        </p>

        <Button type="primary"  onClick={()=> deleteFood(food.name)} >Delete</Button>
        {/* onClick={()=> deleteFodd(food.name) } */}
      
      </Card>
    </Col>
  );
}

export default FoodBox;
