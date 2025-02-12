import { MdDelete } from "react-icons/md";
import "./coffees.css";
import { FaRegEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const Coffees = ({ coffee, coffees, setCoffees }) => {
  const { name, photo, chef, _id } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        cancelButtonColor: "#DD6B55",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {

          //using axios
          axios.delete(`https://coffee-master-server-psi.vercel.app/coffees/${_id}`)
          .then(data=>{
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(data.data);
            
          })
          // //using fetch
          // fetch(`https://coffee-master-server-psi.vercel.app/coffees/${_id}`, {
          //   method: "DELETE",
          //   mode: "cors",
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     console.log(data);
          //     swalWithBootstrapButtons.fire({
          //       title: "Deleted!",
          //       text: "Your file has been deleted.",
          //       icon: "success",
          //     });
          //   });

          const remaining = coffees.filter(
            (newCoffees) => newCoffees._id !== _id
          );
          setCoffees(remaining);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="bg-[#f5f4f1b6] p-8 flex justify-between rounded-lg  items-center  gap-5 shadow-md">
      <img src={coffee.photo} />
      <div className="-ml-5">
        <p className="ralewayFont text-[#1B1A1A] font-medium">
          Name:
          <span className="text-[#1B1A1AB3] font-normal">{coffee.name}</span>
        </p>
        <p className="ralewayFont text-[#1B1A1A] font-medium">
          chef:
          <span className="text-[#1B1A1AB3] font-normal">{coffee.chef}</span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link to={`/coffees/${_id}`}>
          <button className="btn eye text-2xl px-3 bg-[#D2B48C] text-white ">
            <FaRegEye></FaRegEye>
          </button>
        </Link>
        <Link to={`/coffees/update/${_id}`}>
          <button className="btn text-2xl px-3 bg-[#3C393B] text-white pencil">
            <HiPencil></HiPencil>
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn delete text-2xl px-3 bg-[#EA4744] text-white "
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default Coffees;
