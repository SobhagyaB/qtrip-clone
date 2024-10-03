// import React, { Component } from "react";
// import Mid from "./Mid";
// import Down from "./Down";
// import data from "./data.json"; // Adjust the import based on your structure

// export default class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchTerm: "",
//             filteredData: data.Bangalore // Assuming the key for Bangalore data is "Bangalore"
//         };
//     }

//     handleSearch = (event) => {
//         const term = event.target.value.toLowerCase();
//         const filtered = data.Bangalore.filter(item => 
//             item.name.toLowerCase().includes(term)
//         );
//         this.setState({ searchTerm: term, filteredData: filtered });
//     };

//     render() {
//         const { filteredData } = this.state;

//         return (
//             <>
//                 <Mid handleSearch={this.handleSearch} />
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "120px" }}>
//                     {filteredData.map(item => (
//                         <Down 
//                             key={item.id} 
//                             src={item.image} 
//                             h1={item.name} 
//                             p={`Cost per head: ${item.costPerHead} ${item.currency}`}
//                         />
//                     ))}
//                 </div>
//             </>
//         );
//     }
// }
