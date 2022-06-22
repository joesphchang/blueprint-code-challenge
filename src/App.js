import './App.css';
import { useEffect, useState } from 'react'; 

function App() {
  const [details, setDetails] = useState([]);

	// 1. Randomize the order of the following number set: "44, 154, 32, 41, 7, 22, 17, 21, 9, 20" //
  function shuffle(array) {
	  let counter = array.length;
	  // While there are elements in the array
	  while (counter > 0) {
		  // Pick a random index
		  let index = Math.floor(Math.random() * counter);
		  // Decrease counter by 1
		  counter--;
		  // And swap the last element with it
		  let temp = array[counter];
		  array[counter] = array[index];
		  array[index] = temp;
	}
  // return array
	return array;
}
	let numArray = [44, 154, 32, 41, 7, 22, 17, 21, 9, 20];
	// console.log(shuffle(numArray));

	// 2. Find the mean of the following number set: "22, 14, 3, 5, 667, 19, 2, 41, 9, 70"

  function getMeans(array) {
    let total = 0;
    // for each number in the array
		for (let i = 0; i < array.length; i++) {
      // to get total, add each number in the array
			total += array[i];
		}
    // create an average by dividing the total and array length
	  let average = total / array.length;
    // return average 
    return average
  }

  let numbersArray = [22, 14, 3, 5, 667, 19, 2, 41, 9, 70];
  // console.log(getMeans(numbersArray)); 
  // Average = 85.2

	// 3. Fetch and parse the json data at https://blueprintinteractive.com/test.json 

  useEffect(() => {
    fetch('https://blueprintinteractive.com/test.json ')
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
      });
  }, []);



	return (
  <div className='App'>
      <h1>Parsed JSON Data</h1>
      <ul>
        {details.map((detail) => {
          return (
            <li>
              <p>First Name: {detail.firstname}</p>
              <p>Last Name: {detail.lastname}</p>
              <p>Email: {detail.email}</p>
              <p>Gender: {detail.gender}</p>
            </li>
          )
        })}
      </ul>
  </div>
  )
}

export default App;
