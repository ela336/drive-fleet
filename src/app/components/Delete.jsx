
"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from "next/navigation";
import React from 'react';

const Delete = ({car}) => {
  const router = useRouter();

    const handleDelete = async () =>{
      const {data:tokendata} =await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cardetails/${car._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${tokendata.token}`
        }
      });

      const data = await res.json();
      router.push("/Myaddedcars");
    };
    return (
        <div>
           
<button
  
  className="btn border border-red-400 px-6 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
  onClick={() =>
    document.getElementById("delete_modal").showModal()
  }
>
  Delete
</button>

{/* Delete confirmation modal */}
<dialog
  id="delete_modal"
  className="modal modal-bottom sm:modal-middle"
>
  <div className="modal-box">

    <h3 className="text-xl font-bold text-[#0a0908]">
      Delete Car?
    </h3>

    <p className="py-4 text-[#5e503f]">
      Are you sure you want to delete this car?
      This action cannot be undone.
    </p>

    <div className="modal-action">

      {/* Cancel */}
      <form method="dialog">
        <button className="btn">
          Cancel
        </button>
      </form>

      {/* Confirm Delete */}
      <button
        onClick={handleDelete}
        className="btn btn-error"
      >
        Yes, Delete
      </button>

    </div>
  </div>
</dialog>
        </div>
    );
};

export default Delete;