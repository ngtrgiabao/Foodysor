const blogList = [
    {
        id: "1",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "2",
        title: "MUA 1 TẶNG 1 - THỨ 5 HÀNG TUẦN",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",

        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "4",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "5",

        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",

        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "6",

        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",

        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
];

const row2 = document.querySelector(".rows-2");

row2.innerHTML = blogList
    .map(
        (
            item
        ) => `<a href="./chiTietKhuyenMai.html" class="flex justify-center m-4 z-[1]">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <img class="rounded-t-lg" src=${item.img} alt="../assets/images/banner-trang-khuyen-mai_1_.jpg"/>
                        <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-bold mb-2">${item.title}</h5>                            
                        </div>
                        </div>
                    </a>`
    )
    .join("");
