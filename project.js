// on submit button event
async function addProduct(event) {
  try {
    event.preventDefault();
    const pricevalue = event.target.price.value;
    const productype = event.target.name.value;
    const categoryvalue = event.target.category.value;

    const obj = {
      pricevalue,
      productype,
      categoryvalue,
    };
    const response = await axios.post(
      "https://crudcrud.com/api/125022e5549e432fa6de1755339ac25d/savedata",
      obj
    );

    showOnscreen(response.data);
    document.getElementById("price").value = "";
    document.getElementById("name").value = "";
  } catch (error) {
    console.log(error);
  }
}

//  Store back data on screen
async function get() {
  try {
    const response = await axios.get(
      "https://crudcrud.com/api/125022e5549e432fa6de1755339ac25d/savedata"
    );

    for (let i = 0; i < response.data.length; i++) {
      showOnscreen(response.data[i]);
    }
  } catch (error) {
    console.log(error);
  }
}

function showOnscreen(e) {
  if (e.categoryvalue === "Men") {
    let parentNode = document.getElementById("mensection");
    let childHTML = `<li id=${e._id}> Price:${e.pricevalue} - Product:${e.productype} - Category:${e.categoryvalue}
         <button onclick="deleteProduct('${e._id}')">Delete</button> `;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  } else if (e.categoryvalue === "Women") {
    let parentNode = document.getElementById("womensection");
    let childHTML = `<li id=${e._id}> Price:${e.pricevalue} - Product:${e.productype} - Category:${e.categoryvalue}
            <button onclick="deleteProduct('${e._id}')">Delete</button> `;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  } else if (e.categoryvalue === "Kids") {
    let parentNode = document.getElementById("kidsection");
    let childHTML = `<li id=${e._id}> Price:${e.pricevalue} - Product:${e.productype} - Category:${e.categoryvalue}
           <button onclick="deleteProduct('${e._id}')">Delete</button> `;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
}

//    removing product
async function deleteProduct(id) {
  try {
    confirm("Do you want to delete the product?");
    {
      const response = await axios.delete(
        `https://crudcrud.com/api/125022e5549e432fa6de1755339ac25d/savedata/${id}`
      );

      let child = document.getElementById(id);
      let parentNode = child.parentElement;
      parentNode.removeChild(child);
    }
  } catch (error) {
    console.log(error);
  }
}
