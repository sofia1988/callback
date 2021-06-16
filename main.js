// pagina https://swapi.dev/

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const opts = { crossDomain : true};


// async-await
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
        .get(url, opts, function (data) {
          resolve(data)
        })
        .fail(() => reject(id))
    })
  }
  
  function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }

  async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
      var personajes = await Promise.all(promesas)
      console.log(personajes)
    } catch (id) {
      onError(id)
    }
  }
  
  obtenerPersonajes()


// // promesas en paralelo
// function obtenerPersonaje(id) {
//         return new Promise((resolve , reject) =>{
//          const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
//          $
//           .get(url, opts , function(data) {
//               resolve(data)
//           })
//           .fail(()=> reject(id)
//         ) })
//     }
//     function onError(id) {
//         console.log(`sucedio un error al obtener un personaje${id}`)
//     }

   
//     var ids =[ 1,2,3,4,5,6,7]
//     var promesas = ids.map(id => obtenerPersonaje(id))
    

//     Promise
//       .all(promesas)
//       .then(personajes => console.log(personajes))
//       .catch(onError)




// // promise(en serie no en parelo)
// function obtenerPersonaje(id) {
//     return new Promise((resolve , reject)=>{
//      const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
//      $
//       .get(url, opts , function(data) {
//           resolve(data)
//       })
//       .fail(()=> reject(id)
//     ) })
// }
// function onError(id) {
//     console.log(`sucedio un error al obtener un personaje${id}`)
// }
// obtenerPersonaje(1)
//     .then(personaje=>{
//         console.log(`el personaje 1 es ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(personaje=>{
//         console.log(`el personaje 2 es ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(personaje=>{
//         console.log(`el personaje 3 es ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(personaje=>{
//         console.log(`el personaje 4 es ${personaje.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(personaje=>{
//         console.log(`el personaje 5 es ${personaje.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(personaje=>{
//         console.log(`el personaje 6 es ${personaje.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(personaje=>{
//         console.log(`el personaje 7 es ${personaje.name}`)
        
//     })
//     .catch(onError)


    // callback
// function obtenerCharacter (id , callback) {
//     const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
//     $.get(url,opts, function(character) {
//         console.log(`hola ! yo soy ${character.name}`)

//     } )
// }

// es importante que no se ejecute la funcion solo que ha referencia,lo de abajo es conocido como callback hell
// obtenerCharacter(1,  function () {
//     obtenerCharacter(2 , function () {
//         obtenerCharacter(3 ,  function () {
//             obtenerCharacter(4 ,  function () {
//                 obtenerCharacter(5 , function () {
//                     obtenerCharacter(6),  function () {
//                         obtenerCharacter(7)
//                  }
//             })
//        })
//     })
// })
// })
