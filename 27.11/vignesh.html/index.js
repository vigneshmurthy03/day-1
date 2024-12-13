let testimonial_data=[
    {
        name:"vignesh",
        image:"https://picsum.photos/200/200?random=1",
        text_content:" i am very happy with the service provided by the company. They are very provissional and nice"

    },
    {
        name:"sheik",
        image:"https://picsum.photos/200/200?random=2",
        text_content:" i am very happy with the service provided by the company. They are very provissional and nice"

    },
    {
        name:"praveen",
        image:"https://picsum.photos/200/200?random=3",
        text_content:" i am very happy with the service provided by the company. They are very provissional and nice"

    },
]
let data=0
let name=document.querySelector(".container_name")
let image=document.querySelector(".container_img")
let text_content=document.querySelector(".container_content")

function testimonial(){
    let current=testimonial_data[data]
    name.innerHTML=current.name
    image.src=current.image
    text_content.innerHTML=current.text_content
    data++

    if(data===testimonial_data.length){
        data=0
    }
}

setInterval(()=>{
    testimonial()
},1000);
testimonial()

console.log("hello");