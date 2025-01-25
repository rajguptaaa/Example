//          ---- fullfiled
// promise /
//         \
//          ---- rejected

//  x------------------------------------------------------------------------------------------

// Promise is a objetc: Pending (type = promise, state = pending, result = undefined) 
//              Success (type = promise, state = fullfiled, result = data )
//              failed (type= promise, state = rejected,  result = error)


//  x------------------------------------------------------------------------------------------

//API - request, response (fetch API)
//    - async await


//  x------------------------------------------------------------------------------------------

// task queue $ callStack - event looop 

//  x------------------------------------------------------------------------------------------
// Example URL for fetching JSON data
// const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

// // Fetch data from the API
// fetch(apiURL)
//   .then((response) => {
//     // Check if the response is successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     // Parse the response JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Handle the fetched data
//     console.log("Fetched Data:", data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error("Error fetching data:", error);
//   });


// Function to fetch user data from an API
// async function fetchUserData() {
//   const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log('User Data:', data);

//   } catch (error) {
//     console.error('Error fetching user data:', error);
//   }
// }

// fetchUserData();



async function fetchUserData() {
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    const data = await response.json();

    // console.log('User Data:', data);

    // data.forEach(user => {
    //   console.log(`Name: ${user.name}, Email: ${user.email} ${user.phone}`);
    // });

    // const userInfo = data.map(user => ({ name: user.name, email: user.email }));
    // console.log('User Info:', userInfo);

    data.map(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });

  } catch (error) {
    console.error(error);
  }
}
fetchUserData();


// map returns a new array with the results of the function applied to each element, while forEach does not return anything. Both map and forEach can modify the original array if the callback function modifies its elements.

// browser -> Promise_Queue -> even_loop -> callStack(if empty)