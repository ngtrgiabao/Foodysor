const itemList = [
    {
        id: "1",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THAN TRE",
        price: "129.000 VND"
    },
    {
        id: "2",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THAN TRÚC",
        price: "129.000 VND"
    },
    {
        id: "3",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THAN SẬY",
        price: "129.000 VND"
    },
    {
        id: "4",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THANH LONG",
        price: "129.000 VND"
    },
    {
        id: "5",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER TRỨNG MUỐI",
        price: "129.000 VND"
    }
]

const items = document.getElementById("item");
items.innerHTML = itemList
    .map(
        (i)=>`
        <a href="#item${i.id}" class="block text-center font-bold bg-orange-200 shadow transition-all ease-in-out duration-500 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-105 rounded-xl overflow-hidden">
            <img src=${i.img} alt="Hamburger" class="object-contain"/>
            <p class="mt-4">${i.title}</p>
            <p class="text-red-500 mt-4">${i.price}</p>
            <button class="bg-orange-400 text-white w-full h-10 mt-4">Mua</button>
        </a>`
    )
    .join("");