
async function getCupcakes(){
    const resp = await axios.get('http://127.0.0.1:5000/api/cupcakes')
    console.log(resp.data)
    return resp.data.cupcakes
}

async function putCupcatesOnPage(){
    cupcakes = await getCupcakes()
    console.log(cupcakes)
    for(let i = 0; i < cupcakes.length; i++)
    $('#cupcakes').append(`<li>
                            <div>
                               <img src="${cupcakes[i].image}" alt="cupcake" width="100" height="150">
                                ${cupcakes[i].flavor}</li>`)
}


$('#cupcakes_form').on("submit",async function(e){
    e.preventDefault()
    let flavor = $("#flavor").val()
    let size = $("#size").val()
    let rating = $("rating").val()
    let image = $("#image").val()
    let cupcakeData = {flavor, size, rating, image}
    let resp = await axios.post('http://127.0.0.1:5000/api/cupcakes', cupcakeData)
    alert('done')
})

putCupcatesOnPage()
