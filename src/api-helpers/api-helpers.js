import axios from 'axios';

export const getAllTours = async () => {
    try {
        const res = await axios.get("/tour");
        if (res.status !== 200) {
            console.log("No Data");
            return [];
        }
        const data = await res.data;
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const sendUserAuthRequest= async(data,signup)=>{
    const res = await axios.post(`/user/${signup?"signup":"login"}`,{
        name: signup? data.name:"",
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err));
    if (res.status !== 200 && res.status !== 201) {
        console.log("Unexpected Error Occurred");
      }
    
      const resData = await res.data;
      return resData;

}

export const sendAdminAuthRequest = async (data) => {
    const res = await axios
      .post("/admin/login", {
        email: data.email,
        password: data.password,
      })
      .catch((err) => console.log(err));
  
    if (res.status !== 200) {
      return console.log("Unexpected Error");
    }
  
    const resData = await res.data;
    return resData;
  };

export const getTourDetails=async(id)=>{
    const res = await axios.get(`/tour/${id}`).catch((err)=>console.log(err))
    if(res.status!==200){
        return console.log("Unexpected Error")
    }
    const resData = await res.data;
    return resData;
}

export const newBooking= async (data)=>{
    const res = await axios.post('/booking',{
        tour:data.tour,
        members:data.members,
        date:data.date,
        user:localStorage.getItem("userId")

    }).catch((err)=>console.log(err));
    if (res.status !== 201) {
        return console.log("Unexpected Error");
      }
      const resData = await res.data;
      return resData;
}

export const getUserBooking=async()=>{
    const id = localStorage.getItem("userId")
    const res = await axios.get(`/user/bookings/${id}`).catch((err)=>console.log(err));
    if (res.status !== 200) {
        return console.log("Unexpected Error");
      }
      const resData = await res.data;
      return resData;
}

export const deleteBooking = async (id) => {
    const res = await axios
      .delete(`/booking/${id}`)
      .catch((err) => console.log(err));
  
    if (res.status !== 200) {
      return console.log("Unexpected Error");
    }
  
    const resData = await res.data;
    return resData;
  };
  export const getUserDetails = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));
    if (res.status !== 200) {
      return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
  };

  export const addTour= async (data) =>{
    const res = await axios.post("/tour",{
        place:data.place,
        description:data.description,
        bookingDate:data.bookingDate,
        picsUrl:data.picsUrl,
        featured:data.featured,
        attractions:data.attractions,
        admin:localStorage.getItem("adminId"),
    },{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }).catch((err)=>console.log(err))
    if(res.status!==201){
        return console.log("Unexpected Error in adding token")
    }
    const resData = await res.data;
    return resData
    
  }
  export const getAdminById = async () => {
    const adminId = localStorage.getItem("adminId");
    const res = await axios
      .get(`/admin/${adminId}`)
      .catch((err) => console.log(err));
  
    if (res.status !== 200) {
      return console.log("Unexpected Error Occurred");
    }
  
    const resData = await res.data;
    return resData;
  };