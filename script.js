/*==================================================
COLA BLANCA
Macramé Artesanal Costa Rica
JavaScript v2.0
==================================================*/


/*==================================================
NAVBAR SCROLL EFFECT
==================================================*/

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



/*==================================================
SMOOTH SCROLL PARA COLECCIONES
==================================================*/


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const target = document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }


    });


});



/*==================================================
ANIMACIONES AL APARECER
==================================================*/


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.15

});



document.querySelectorAll(

".product-card, .value-card, .step, .collection-card"

).forEach(element=>{


    element.classList.add("hidden");

    observer.observe(element);


});



/*==================================================
CRM GOOGLE SHEETS
==================================================*/


const form = document.getElementById("customerForm");


form?.addEventListener("submit", async(e)=>{


    e.preventDefault();



    const message = document.getElementById("form-message");


    const data = {


        name:
        document.getElementById("name").value,


        phone:
        document.getElementById("phone").value,


        email:
        document.getElementById("email").value,


        product:
        document.getElementById("product").value,


        message:
        document.getElementById("message").value


    };



    try{


        /*
        AQUÍ IRÁ TU URL DE GOOGLE APPS SCRIPT

        Ejemplo:

        const scriptURL =
        "https://script.google.com/macros/s/TU_ID/exec";

        */


        const scriptURL =
        "TU_GOOGLE_APPS_SCRIPT_URL";


        await fetch(scriptURL,{

            method:"POST",

            mode:"no-cors",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify(data)


        });



        message.innerHTML =
        "✅ Gracias por contactarnos. Te responderemos pronto.";


        form.reset();



    }catch(error){


        message.innerHTML =
        "❌ Ocurrió un error. Intenta nuevamente.";


        console.error(error);


    }



});



/*==================================================
CURRENT YEAR FOOTER
==================================================*/


const year =
document.querySelector("#year");


if(year){

    year.textContent =
    new Date().getFullYear();

}
