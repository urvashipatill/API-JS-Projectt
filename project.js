 function addProduct(event){
    event.preventDefault()
    const pricevalue= event.target.price.value
    const productype=event.target.name.value
    const categoryvalue=event.target.category.value

    const obj={
        pricevalue,
        productype,
        categoryvalue
    }
    axios.post('https://crudcrud.com/api/c22f1d91abed4ee790c0ce6dde547b22/savedata',obj)
    .then((response) =>{
    showOnscreen(response.data)
    })
    .catch((err) =>{
        console.log(err)
    })
    document.getElementById('price').value=''
    document.getElementById('name').value=''
 }


 axios.get('https://crudcrud.com/api/c22f1d91abed4ee790c0ce6dde547b22/savedata')
 .then((response) =>{
    for(let i=0; i<response.data.length ;i++){
        showOnscreen(response.data[i])
    }
 })
 .catch((err) =>{
    console.log(err)
 })


 function showOnscreen(e){
  
    if(e.categoryvalue==='Men'){
        let parentNode= document.getElementById('mensection')
         let childHTML=`<li id=${e._id}> Price:${e.pricevalue} - Product:${e.productype} - Category:${e.categoryvalue}
         <button onclick="deleteProduct('${e._id}')">Delete</button> `
        parentNode.innerHTML= parentNode.innerHTML+ childHTML
        }
         else if(e.categoryvalue==='Women'){
            let parentNode= document.getElementById('womensection')
            let childHTML=`<li id=${e._id}> Price:${e.pricevalue} - Product:${e.productype} - Category:${e.categoryvalue}
            <button onclick="deleteProduct('${e._id}')">Delete</button> `
           parentNode.innerHTML= parentNode.innerHTML+ childHTML
        }
        else if(e.categoryvalue==='Kids'){
            let parentNode= document.getElementById('kidsection')
            let childHTML=`<li id=${e._id}> Price:${e.pricevalue} - Product:${e.productype} - Category:${e.categoryvalue}
           <button onclick="deleteProduct('${e._id}')">Delete</button> `
           parentNode.innerHTML= parentNode.innerHTML+ childHTML
        }
 }

 function deleteProduct(id){
    confirm('Do you want to delete the product?')
    {
        axios.delete(`https://crudcrud.com/api/c22f1d91abed4ee790c0ce6dde547b22/savedata/${id}`)
        .then((response) =>{
         let child=document.getElementById(id)
         let parentNode= child.parentElement
         parentNode.removeChild(child)
    
        })
        .catch((err) =>{
            console.log(err)
        })
    }
   
 }

