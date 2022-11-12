let data1 = [
    {
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

    }
]


function showservice (data){
      
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