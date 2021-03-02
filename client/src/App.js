import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import { Home, Campsites, TravelServices, Trails, Login, Register}from './pages';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// import GoogleMap from 'google-map-react';
// import axios from 'axios';
// import Pusher from 'pusher-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// }
// const markerStyle = {
//   height: '50px',
//   width: '50px',
//   marginTop: '-50px'
// }
// const imgStyle = {
//   height: '100%'
// }
// const Marker = ({ title }) => (
//   <div style={markerStyle}>
//     <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
//     <h3>{title}</h3>
//   </div>
// );
// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       center: { lat: 40.6183, lng: -111.8163 },
//       locations: {},
//       users_online: [],
//       current_user: ''
//     }
//   }

//   componentDidMount() {
//     let pusher = new Pusher('9fc95fa77ecdd821257a', {
//       authEndpoint: "http://localhost:3128/pusher/auth",
//       cluster: "us3"
//     })
//     this.presenceChannel = pusher.subscribe('presence-channel');

//     this.presenceChannel.bind('pusher:subscription_succeeded', members => {
//       this.setState({
//         users_online: members.members,
//         current_user: members.myID
//       });
//       this.getLocation();
//       this.notify();
//     })

//     this.presenceChannel.bind('location-update', body => {
//       this.setState((prevState, props) => {
//         const newState = { ...prevState }
//         newState.locations[`${body.username}`] = body.location;
//         return newState;
//       });
//     });

//     this.presenceChannel.bind('pusher:member_removed', member => {
//       this.setState((prevState, props) => {
//         const newState = { ...prevState };
//         // remove member location once they go offline
//         delete newState.locations[`${member.id}`];
//         // delete member from the list of online users
//         delete newState.users_online[`${member.id}`];
//         return newState;
//       })
//       this.notify()
//     })

//     this.presenceChannel.bind('pusher:member_added', member => {
//       this.notify();
//     })
//   }

//   notify = () => toast(`Users online : ${Object.keys(this.state.users_online).length}`, {
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     type: 'info'
//   });

//   getLocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.watchPosition(position => {
//         let location = { lat: position.coords.latitude, lng: position.coords.longitude };
//         this.setState((prevState, props) => {
//           let newState = { ...prevState };
//           newState.center = location;
//           newState.locations[`${prevState.current_user}`] = location;
//           return newState;
//         });
//         axios.post("http://localhost:3128/update-location", {
//           username: this.state.current_user,
//           location: location
//         }).then(res => {
//           if (res.status === 200) {
//             console.log("new location updated successfully");
//           }
//         });
//       })
//     } else {
//       alert("Sorry, geolocation is not available on your device. You need that to use this app");
//     }
//   }

//   render() {
//     let locationMarkers = Object.keys(this.state.locations).map((username, id) => {
//       return (
//         <Marker
//           key={id}
//           title={`${username === this.state.current_user ? 'My location' : username + "'s location"}`}
//           lat={this.state.locations[`${username}`].lat}
//           lng={this.state.locations[`${username}`].lng}
//         >
//         </Marker>
//       );
//     });

//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route path='/' exact component={Home} />
//             <Route path='/campsites' component={Campsites} />
//             <Route path='/trails' component={Trails} />
//             <Route path='/travelservices' component={TravelServices} />
//           </Switch>
//         </Router>

//         <GoogleMap
//           style={mapStyles}
//           bootstrapURLKeys={{ key: 'AIzaSyAP93BAoflNBnB8aYrKvbJ8CwCCMRSa4fA' }}
//           center={this.state.center}
//           zoom={14}
//         >
//           {locationMarkers}
//         </GoogleMap>
//       </div>
//     )
//   }
// }

function App() {
  return (
    <>
     <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/campsites' component={Campsites} />
         <Route path='/trails' component={Trails} />
         <Route path='/travelservices' component={TravelServices} />
         <Route path='/login' component={Login} />
         <Route path='/register' component={Register} />
       </Switch>
     </Router>
    </>
  );
}

export default App;
