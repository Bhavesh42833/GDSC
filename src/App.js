import './App.css';
import React,{useRef,useEffect,useState} from 'react';
import axios from "axios";

function App() {
  
  // Variable to store data
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetchData();
  },[]);
  console.log({data});
  
  
  const fetchData=async()=>{
    try{
    const response = await axios.get("https://gdscdev.vercel.app/api")
    .then((response)=> setData(response.data.content.data));
  }
  catch(error){
    console.log("error fetching data");
  } 
}

   return (
    <div className='ConferenceDetails'>
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
      </style>
      <div className='Heading'>
       <p>Conference Details </p>
      </div>
      <div className='Box'>
         < Layout objects={data} />
      </div>
   </div>
  );
} 

function Layout(Data) {

  return(
    Data.objects.map((item)=>(
    <div className="box">
       <img className='BannerImage' src={item.banner_image} />
       <span className='Icon'>
          <img className='icon' src={item.organiser_icon} />
       </span>
       <h3 className='OrganiserName'>{item.organiser_name}</h3>
       <h2 className="title">{item.title}</h2> 
       <h3 className='Description'>{item.description}</h3>
       <h3 className="venue"><b>Venue:</b>  {item.venue_name},{item.venue_city},{item.venue_country}</h3>
       <h3 className="date-time"><b>Date-Time:</b> {item.date_time}</h3> 
    </div>

      )  
    )
  )

}










export default App;