// import AppContext from "./AppContext"
// import { useState } from "react";

// const AppState= (props) =>{

//     const [mode, setMode] = useState('light'); 
//     const [alert, setAlert] = useState(null);

//     const showAlert = (message, type)=>{
//         setAlert({
//           msg: message,
//           type: type
//         })
//         setTimeout(() => {
//             setAlert(null);
//         }, 1500);
//     }

//     const toggleMode = ()=>{
//         if(mode === 'light'){
//           setMode('dark');
//           document.body.style.backgroundColor = '#042743';
//           showAlert("Dark mode has been enabled", "success");
//         }
//         else{
//           setMode('light');
//           document.body.style.backgroundColor = 'white';
//           showAlert("Light mode has been enabled", "success");
//         }
//       }
//     return (
//         <AppContext.Provider value={toggleMode}>
//             {props.childre}
//         </AppContext.Provider>
//     );
// }
// export default AppState