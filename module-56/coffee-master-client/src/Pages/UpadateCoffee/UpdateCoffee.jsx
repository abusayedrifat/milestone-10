import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./updateCoffee.css";
import Swal from 'sweetalert2'
import { RxArrowLeft } from "react-icons/rx";
import axios from "axios";

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData()

    const navigate = useNavigate()

    const handleBackToHome = ()=>{
        navigate('/')
    }

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target 
        const name = form.name.value 
        const chef = form.chef.value 
        const supplier = form.supplier.value 
        const taste = form.taste.value 
        const details = form.details.value
        const photo = form.photo.value 
    
        const coffeeData = {name,chef,supplier,taste,details,photo};
        console.log(coffeeData);
        form.reset()

        //using axios
        axios.put(`https://coffee-master-server-psi.vercel.app/coffees/${loadedCoffee._id}`,coffeeData)
        .then(data=>{

          if (data.data.acknowledged == true) {
            Swal.fire({
                title: 'success',
                text: 'Coffee added successfuly',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
          console.log(data.data);
          
        })

        // //using fetch
        // fetch(`https://coffee-master-server-psi.vercel.app/coffees/${loadedCoffee._id}`,{
        //     method:'PUT',
        //     mode: "cors",
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(coffeeData)
        // })
        // .then(res => res.json())
        // .then(data=>{
        //     console.log(data);
        //     if (data.acknowledged == true) {
        //         Swal.fire({
        //             title: 'success',
        //             text: 'Coffee updated successfuly',
        //             icon: 'success',
        //             confirmButtonText: 'OK'
        //           })
        //     }
        // })
      };
    
      useEffect(()=>{
        window.scroll(0,0)
      },[])
      return (
        <div className="bag">
            <div className="max-w-[75%] mx-auto">
            
                    <button onClick={handleBackToHome} className="pt-8 flex gap-2 items-center text-amber-800"> <RxArrowLeft></RxArrowLeft> back to home</button>
               
             
          <div className="flex justify-center pt-16 mb-52">
            <div className="bg-[#F4F3F0] min-w-[500px]  flex flex-col justify-center items-center py-10">
              <h1 className="text-4xl text-center my-5 font-bold">Update Existing Coffee Details</h1>
              <p className="text-[#1B1A1AB3]  text-lg mb-16 w-[70%] text-center ">
              It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
              </p>
    
              <form
                onSubmit={handleUpdateCoffee}
                className="flex flex-col w-full px-10 space-y-4"
              >
                <div className="flex flex-col lg:flex-row lg:gap-10 w-full sm:space-y-4 ">
                  <label className="flex flex-col w-full text-lg font-medium">
                    Name
                    <input
                      type="text"
                      placeholder="Enter coffee name"
                      className="input input-bordered "
                      name="name"
                      defaultValue={loadedCoffee.name}
                    />
                  </label>
                  <label className="flex flex-col w-full text-lg font-medium">
                    Chef
                    <input
                      type="text"
                      placeholder="Enter coffee chef"
                      className="input input-bordered w-full "
                      name="chef"
                      defaultValue={loadedCoffee.chef}
                    />
                  </label>
                </div>
    
                <div className="flex flex-col lg:flex-row lg:gap-10 w-full space-y-4 ">
                  <label className="flex flex-col w-full text-lg font-medium">
                    Supplier
                    <input
                      type="text"
                      placeholder="Enter Coffee supplier"
                      className="input input-bordered "
                      name="supplier"
                      defaultValue={loadedCoffee.supplier}
                    />
                  </label>
                  <label className="flex flex-col w-full text-lg font-medium">
                    Taste
                    <input
                      type="text"
                      placeholder="Enter coffee taste"
                      className="input input-bordered w-full "
                      name="taste"
                      defaultValue={loadedCoffee.taste}
                    />
                  </label>
                </div>
    
                <div className="flex flex-col lg:flex-row lg:gap-10 w-full space-y-4">
                  <label className="flex flex-col w-full text-lg font-medium">
                    Category
                    <input
                      type="text"
                      placeholder="Enter coffee category"
                      className="input input-bordered "
                      name="category"
                      defaultValue={loadedCoffee.category}
                    />
                  </label>
                  <label className="flex flex-col w-full text-lg font-medium">
                    Details
                    <input
                      type="text"
                      placeholder="Enter coffee details"
                      className="input input-bordered w-full "
                      name="details"
                      defaultValue={loadedCoffee.details}
                    />
                  </label>
                </div>
    
                <label className="flex flex-col text-lg font-medium">
                  Photo
                  <input
                    type="text"
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full"
                    name="photo"
                  />
                </label>
                <input
                  type="submit"
                  value="Update Coffee"
                  className=" my-5 btn w-full border-amber-800 text-amber-800"
                />
              </form>
            </div>
          </div>  
            </div>
            
        </div>
      );
};

export default UpdateCoffee;