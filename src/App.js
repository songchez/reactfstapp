import propTypes, {Proptypes} from "prop-types";

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      {foodilike.map(dish =>
        <Food
          key ={dish.id} 
          name ={dish.name} 
          image ={dish.image} 
          rating ={dish.rating}
        />
      )}
    </div>
  );
}

 
const foodilike = [{
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 5.0
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({name, image, rating})   {
  return (
    <div className="App">
      <h1>{name}</h1>
      <img src = {image} alt= {name}/>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

//타입을 확인해서 잘되고있는지 디버그
Food.prototype = {
  name: propTypes.string.isRequiered,
  picture: propTypes.string.isRequiered,
  rating: propTypes.number.isRequiered
};

export default App;
