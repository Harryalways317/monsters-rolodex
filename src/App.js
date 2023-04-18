import "./App.css";
import { useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component"
import { useState } from "react";


const App =  ()  => {

  const [searchField,setSearchFieldValue] = useState("")
  const [monsters,setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      setMonsters(users)
    );
  },[])

  useEffect(()=>{
    const filteredMonstersList = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField)
  );
  setFilteredMonsters(filteredMonstersList)
  console.log("Filter Effect")
  },[monsters,searchField])




  const onSearchChange = (event) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFieldValue(searchFieldString);
  };
  return <div className="App">
      <h1 className="app-title">Cats Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="search-box"/>
      <CardList monsters = {filteredMonsters}/>

  </div>
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState(
    //       () => {
    //         return {
    //           monsters: users,
    //         };
    //       },
    //       () => {
    //         console.log(this.state.monsters);
    //       }
    //     )
    //   );
//   }
  // onSearchChange = (event) => {
  //   console.log(event.target.value);
  //   const searchField = event.target.value.toLocaleLowerCase();

  //   this.setState(() => {
  //     return { searchField };
  //   });
  // };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter((monster) =>
    //   monster.name.toLocaleLowerCase().includes(searchField)
    // );

//     return (
//       <div className="App">
//         <h1 className="app-title">Cats Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="search-box"/>
        // <CardList monsters = {filteredMonsters}/>
      
//       </div>
//     );
//   }
// }

export default App;
