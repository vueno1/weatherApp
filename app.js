//VARIABLES ////

////COLUMNA ARRIBA////
const inputval = document.querySelector ("#cityinput")//input donde pongo la ciudad
const btn = document.querySelector ("#add") //boton agregar

///DISPLAY ABAJO////
const city = document.querySelector ("#cityoutput") //input para ciudad
const descrip = document.querySelector ("#description")//input para descripcion 
const temp = document.querySelector ("#temp") // input para temperatura 
const inputHumedad = document.querySelector ("#humedad") // input para humedad
const wrapper = document.getElementsByClassName ("wrapper")[0]

//API utilizada = OPEN WEATHER

//KEY 
apik = "7e55a45f6baf75a226bcac9d6af5e1f2"

//funcion para pasar de kelvin a celious 
//1 kelvin = 272.15 celsius
const convertion = (valor) => {

    return (valor - 273).toFixed (2) //con 2 decimales. 
}

//al apretar el boton submit traemos la info de la API.
btn.addEventListener ("click", ()=> {

    //recordar poner el http:///.....
    fetch ( 'http://api.openweathermap.org/geo/1.0/direct?q='+inputval.value+'&appid='+ apik)
    .then (res => res.json ())
    .then (data => {

        //me trae un array y la recorro con foreach.
        data.forEach (elemento =>{

            const longitud = elemento.lon
            const latitud = elemento.lat

            //ahora tengo la longitud y latitud para saber bien la temperatura.

            //recordar poner el http:///.....
            fetch ('http://api.openweathermap.org/data/2.5/weather?lat='+ latitud + '&lon='+ longitud +'&appid='+apik)
            .then (res => res.json())
            .then (data => {

                console.log (data)

                const temperatura = data.main.temp
                const ciudad = inputval.value
                const humedad = data.main.humidity

                //cuando pongo createElemen el boton submit me sigue imprimiendo
                // const h2 = document.createElement ("h2")
                // h2.textContent = `Ciudad = ${ciudad}`
                // wrapper.appendChild (h2)

                // const p = document.createElement ("p")
                // p.textContent = `Temperatura = ${temperatura}°C`
                // wrapper.appendChild (p)

                // const p2 = document.createElement ("P")
                // p2.textContent = `Humedad = ${humedad}%`
                // wrapper.appendChild (p2)


                //cuando pongo el innerHTML no me lo vuelve a imprimir.
                //si hago console.log (me lo muestra en consola)
                city.innerHTML= `Ciudad = ${ciudad.toUpperCase()}`
                temp.innerHTML= `Temperatura = ${convertion(temperatura)} °C`
                inputHumedad.innerHTML=`Humedad = ${humedad}%`

            })
        })      

    })

})
