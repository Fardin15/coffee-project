import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-bold">Update coffee: {name}</h1>
      <form onSubmit={handleUpdate}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="flex flex-col md:w-1/2">
            <label>Coffee Name</label>
            <input
              defaultValue={name}
              className="py-3 px-2 w-full"
              type="text"
              name="name"
              placeholder="Coffee name"
            />
          </div>
          <div className="flex flex-col md:w-1/2 ml-4">
            <label>Available Quantity</label>
            <input
              defaultValue={quantity}
              className="py-3 px-2 w-full"
              type="text"
              name="quantity"
              placeholder="Available quantity"
            />
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex mb-8">
          <div className="flex flex-col md:w-1/2">
            <label>Supplier Name</label>
            <input
              defaultValue={supplier}
              className="py-3 px-2 w-full"
              type="text"
              name="supplier"
              placeholder="Supplier name"
            />
          </div>
          <div className="flex flex-col md:w-1/2 ml-4">
            <label>Taste</label>
            <input
              defaultValue={taste}
              className="py-3 px-2 w-full"
              type="text"
              name="taste"
              placeholder="Taste"
            />
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="flex flex-col md:w-1/2">
            <label>Category</label>
            <input
              defaultValue={category}
              className="py-3 px-2 w-full"
              type="text"
              name="category"
              placeholder="Category"
            />
          </div>
          <div className="flex flex-col md:w-1/2 ml-4">
            <label>Details</label>
            <input
              defaultValue={details}
              className="py-3 px-2 w-full"
              type="text"
              name="details"
              placeholder="Details"
            />
          </div>
        </div>
        {/* form photo row */}
        <div className="mb-8">
          <div className="flex flex-col w-full">
            <label>Photo URL</label>
            <input
              defaultValue={photo}
              className="py-3 px-2 w-full"
              type="text"
              name="photo"
              placeholder="Photo URL"
            />
          </div>
        </div>
        <input
          className="btn btn-block text-white bg-black"
          type="submit"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
