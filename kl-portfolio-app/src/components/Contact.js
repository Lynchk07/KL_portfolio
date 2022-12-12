// import React from 'react'
// // import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';
// import './style.css';

// // function contactForm() {
// //   return (
// //     <>
// //       <FloatingLabel
// //         controlId="floatingInput"
// //         label="Email address"
// //         className="mb-3"
// //       >
// //         <Form.Control type="email" placeholder="name@example.com" />
// //       </FloatingLabel>
// //       <FloatingLabel controlId="floatingPassword" label="Password">
// //         <Form.Control type="password" placeholder="Password" />
// //       </FloatingLabel>
// //     </>
// //   );
// // }

// // export default contactForm;

// function Form() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   // TODO: Create a password variable and a function "setPassword" using useState

//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'contactName') {
//       contactName(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !contactName) {
//       setErrorMessage('Email is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }

//     // If successful, we want to clear out the input after registration.
//     setUserName('');
//     // TODO: Set the password back to an empty string after the user clicks submit

//     setEmail('');
//     alert(`Hello ${userName}`);
//   };

//   return (
//     <div>
//       <p>Hello {userName}</p>
//       <form className="form">
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email"
//         />
//         <input
//           value={userName}
//           name="userName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="username"
//         />
//         {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
//         {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;
