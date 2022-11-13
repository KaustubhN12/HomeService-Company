let data1 = [
    {   
        id:1,
        logo:"https://i.ibb.co/Qn7hYDg/Screenshot-69.png",
        package:"PACKAGE",
        Name:"Wax & Glow",
        star:"https://i.ibb.co/2j8F3SL/Screenshot-56.png",
        rating:"4.79 (248.5K)",
        price:1795,
        time:"2 hrs 35 mins",
        line1:"Full arms (chocolate) + underarms (honey)",
        line2:"Full legs Chocolate",
        line3:"Crave beauty dazzling diamond facial",

    },
    {
        id:2,
        logo:"https://i.ibb.co/Qn7hYDg/Screenshot-69.png",
        package:"PACKAGE",
        Name:"Glow Better",
        star:"https://i.ibb.co/2j8F3SL/Screenshot-56.png",
        rating:"4.79 (315.5K)",
        price:1047,
        time:"1 hrs 50 mins",
        line1:"Crave beauty dazzling diamond facial",
        line2:"Upper lip threading",
        line3:"Eyebrow threading",

    },
    {
        id:3,
        logo:"https://i.ibb.co/Qn7hYDg/Screenshot-69.png",
        package:"PACKAGE",
        Name:"Mani-pedi special",
        star:"https://i.ibb.co/2j8F3SL/Screenshot-56.png",
        rating:"4.77 (288.9K)",
        price:896,
        time:"1 hrs 50 mins",
        line1:"Delux manicure(4-step)",
        line2:"Upper lip threading",
        line3:"Delux pedicure(4-step)",

    },
    {
        id:4,
        logo:"https://i.ibb.co/Qn7hYDg/Screenshot-69.png",
        package:"PACKAGE",
        Name:"Complete chocolate waxing",
        star:"https://i.ibb.co/2j8F3SL/Screenshot-56.png",
        rating:"4.78 (308K)",
        price:596,
        time:"1 hrs 15 mins",
        line1:"Full arms (chocolate) + underarms (honey)",
        line2:"Upper lip threading",
        line3:"Eyebrow threading",

    },
    {
        id:5,
        logo:"https://i.ibb.co/Qn7hYDg/Screenshot-69.png",
        package:"PACKAGE",
        Name:"Complete honey waxing",
        star:"https://i.ibb.co/2j8F3SL/Screenshot-56.png",
        rating:"4.78 (359.9K)",
        price:396,
        time:"1 hrs 10 mins",
        line1:"Full legs honey",
        line2:"Full legs Chocolate",
        line3:"Crave beauty dazzling diamond facial",

    }
]
let carttotal=document.querySelector("#carttotal")
let Added= JSON.parse(localStorage.getItem("cart"))||[]
function showservice (data){
    
    carttotal.textContent="₹"+Added.reduce((a,b)=>{
        return a+Number(b.price)*(b.quantity);
    },0)
      data.forEach(elem => {

        let div = document.createElement("div")

        let logo = document.createElement("img")
        logo.setAttribute("src",elem.logo)

        let package = document.createElement("span")
        package.innerText=elem.package

        let name = document.createElement("h2")
        name.innerText=elem.Name

        let star = document.createElement("img")
        star.setAttribute("src",elem.star)

        let rating = document.createElement("span")
        rating.innerText=elem.rating

        let price = document.createElement("h4")
        price.innerText="₹"+elem.price+" "+"●"+elem.time

        let hr1 = document.createElement("hr")

        let line1 = document.createElement("p")
        line1.innerText="●"+elem.line1

        let line2 = document.createElement("p")
        line2.innerText="●"+elem.line2

        let line3 = document.createElement("p")
        line3.innerText="●"+elem.line3

        let btn = document.createElement("button")
        btn.innerText="Add"
        btn.addEventListener("click",function(){
                
            let Added=JSON.parse(localStorage.getItem("cart"))||[]
            for(i=0;i<Added.length;i++){
             if(Added[i].id==elem.id){
                 return;
             }
            }
            Added.push({...elem,quantity:1});
             localStorage.setItem("cart",JSON.stringify(Added))
             
           })

        let hr2 = document.createElement("hr")

        div.append(logo,package,name,star,rating,price,hr1,line1,line2,line3,hr2,btn)

        document.querySelector("#getdata").append(div)
        
      });
}

showservice(data1)



    









document.querySelector("#openpopup").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";     
})