

async function getInfo(){
    const  info = {
        nome: document.getElementById("name").value,
        sobrenome: document.getElementById("last-name").value,
        email: document.getElementById("email").value
    }   
    

    console.log (info)

    const response = await axios.post("http://138.68.29.250:8082/", info)

    console.log(response.data);
}