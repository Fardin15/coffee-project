import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-bold">add coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="flex flex-col md:w-1/2">
            <label>Coffee Name</label>
            <input
              className="py-3 px-2 w-full"
              type="text"
              name="name"
              placeholder="Coffee name"
            />
          </div>
          <div className="flex flex-col md:w-1/2 ml-4">
            <label>Available Quantity</label>
            <input
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
              className="py-3 px-2 w-full"
              type="text"
              name="supplier"
              placeholder="Supplier name"
            />
          </div>
          <div className="flex flex-col md:w-1/2 ml-4">
            <label>Taste</label>
            <input
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
              className="py-3 px-2 w-full"
              type="text"
              name="category"
              placeholder="Category"
            />
          </div>
          <div className="flex flex-col md:w-1/2 ml-4">
            <label>Details</label>
            <input
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
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
