var items = [
    {name: "Mercedes", imageURL:"https://cdn0.riastatic.com/photosnew/auto/photo/mercedes-benz_s-class__471044265f.jpg"},
    {name: "BMW", imageURL:"https://nextcar.ua/images/blog/527/bmw-xm__10_.jpg"},
    {name: "Skoda", imageURL:"https://i.infocar.ua/i/12/6276/1400x936.jpg"},
    {name: "McLaren", imageURL:"https://cdn2.unrealengine.com/fortnite-mclaren-m765lt-black-wheels-1920x1080-091be0adde7e.jpg"},
    {name: "Pagani", imageURL:"https://www.topgear.com/sites/default/files/2022/09/6_4.jpeg"},
    {name: "Porshe", imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/1200px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg"},
    {name: "Aston Martin", imageURL:"https://www.astonmartin.com/-/media/models---db12/db12_stills_ext_1230_villa_front_3-4_static_rgb_hero_crop_2.jpg?mw=1080&rev=-1&hash=7E344F495109F8BD4987D8DD0716FFF1"},
    {name: "Volkswagen", imageURL:"https://cars.usnews.com/static/images/Auto/custom/15519/2024_Volkswagen_Atlas_Angular_Front_1.jpg"},
    {name: "Tesla", imageURL:"https://finance-news-media.fra1.cdn.digitaloceanspaces.com/prod/6/2/62fd970baf05cbf465945d2946f4eacc"}
]

function searchItem(){
    var searchCar = document.getElementById("searchInput").value;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    var foundCar = items.find(item => item.name.toLocaleLowerCase() == searchCar.toLocaleLowerCase());

    if (foundCar){
        var imgEl = document.createElement("img");
        imgEl.src = foundCar.imageURL;
        imgEl.alt = foundCar.name;
        resultDiv.appendChild(imgEl)
    } else {
        resultDiv.innerText = "Предмет не знайдено";

    }
}