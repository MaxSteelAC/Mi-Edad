function calculateAge(){/*1*/
    const fechaNacimiento = document.getElementById("birthday").value;/*2*/
    console.log(fechaNacimiento)

    if(fechaNacimiento == ""){
        alert("Fecha Invalida")
    } else {
        calculateAgeByBirthday(fechaNacimiento)
    }

}
function calculateAgeByBirthday(birthday){/*3*/
    // calcular
    const fechaActual= new Date() // 2024-07-22 02:52
    const anoActual = fechaActual.getFullYear() // 2024
    const mesActual = fechaActual.getMonth()//07
    const diaActual = fechaActual.getDate()

    const cumpleanos = new Date(birthday)
    const anoDeCumpleanos = cumpleanos.getFullYear()
    const mesDeCumpleanos = cumpleanos.getMonth()//08

    const diaDeCumpleanosNumero = cumpleanos.setDate(cumpleanos.getDate() + 1)
    const diaDeCumpleanos = new Date(diaDeCumpleanosNumero).getDate() //25

    // Solucion #1
    // Resta para obtener la edad
    // let age = anoActual - anoDeCumpleanos //31
    
    // if(mesActual < mesDeCumpleanos){//07 < 08 
    //     age = age - 1//30
    // } else {
    //     if(mesActual === mesDeCumpleanos){ // 1
    //         if(diaActual < diaDeCumpleanos){ // 2
    //             age = age - 1
    //         }
    //     }
    // }

    // Solucion #2

    let age = anoActual - anoDeCumpleanos - 1

    if (mesActual > mesDeCumpleanos){ // 07 > 07
        age = age + 1
    }

    if (mesActual === mesDeCumpleanos && diaActual >= diaDeCumpleanos) {
        age = age + 1
    }

    // Imprimir
    document.getElementById("age").value =age;
    }

