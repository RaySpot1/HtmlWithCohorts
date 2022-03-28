// import Logo from "./components/Logo"; // for function App()
import './App.css';
// import AuthButton  from "./components/AuthButton"; //for function App()
import Budget from './Budget';


// function App() {
//   const links = [
//     {
//         reviewsName: 'Reviews',
//     },
//     {
//       tipsName: 'Tips',
//     },
//     {
//       alertsName: 'Alerts',
//     },
//     {
//       blogsName: 'Blogs',
//     }
// ]
//   return (
//     <div className = "app-container">
//       <div className = "header-container">
//         <div className = "header">
//             <Logo/>
//             <div style={{display: 'flex', justifyContent: 'space-between', width: '20%', alignItems: 'center', marginLeft:'30em', color:'white'}}>
//               {links.map((link) => <a href="#"><p>{link.reviewsName}</p></a>)}
//               {links.map((link) => <a href="#"><p>{link.tipsName}</p></a>)}
//               {links.map((link) => <a href="#"><p>{link.alertsName}</p></a>)}
//               {links.map((link) => <a href="#"><p>{link.blogsName}</p></a>)}

//             </div>

//             <div className="signInButton">
//                 <AuthButton/>
//             </div>

            
//         </div>

//         <div>
//           <div className="discoverHeader">
//             <h1>Discover A Beautiful Place <br></br> With Us </h1>
//             <p>would you explore nature paradise in the world, lets find the <br></br> best destination in the world with us</p>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;


function App() {

  return (
    <div className="app-container">
      <Budget/>
    </div>
  );
}

export default App
