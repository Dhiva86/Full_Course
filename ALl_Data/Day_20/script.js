function App() {
    const data = [{
      image: "#",
      name:"Dhivakar",
      batch:"B43WE"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTZANi1eIVaDmAwJ96JSKryN8YuJxH_rW5w&usqp=CAU",
    name:"Sarath",
    batch:"B42WE"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTZANi1eIVaDmAwJ96JSKryN8YuJxH_rW5w&usqp=CAU",
  name:"Ajith",
  batch:"B41WE"
  }
  ]
    return (
      <div className="App">
       {data.map((person,index)=>(
        <Home
        key={index}
        image={person.image}
        name={person.name}
        batch={person.batch}
        />
       ))}
       
      </div>
    );
  }
  
//   export default App;
  
  // function Home(){
  //   const name = "Dhivakar"
  //   return(
  //     <div>
  //       <h1>Hello World {name} is Coming to conquer </h1>
  //     </div>
  //   )
  // }
  function Home(props){
   
  return(
    <div className='home-component'>
      <img 
      src={props.image} 
      alt={props.name}></img>
      <h2>{props.name}</h2>
      <h4>{props.batch}</h4>
    </div>
  )
  }