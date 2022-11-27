const blogList = [
    {
        id: "1",
        title: "MUA 1 TẶNG 1 - THỨ 5 HÀNG TUẦN",
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
        id: "3",
        title: "MUA 1 TẶNG 1 - THỨ 5 HÀNG TUẦN",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "4",
        title: "MUA 1 TẶNG 1 - THỨ 5 HÀNG TUẦN",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "5",
        title: "MUA 1 TẶNG 1 - THỨ 5 HÀNG TUẦN",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
    {
        id: "6",
        title: "MUA 1 TẶNG 1 - THỨ 5 HÀNG TUẦN",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
    },
];

const rows2 = document.querySelector(".rows-2");

rows2.innerHTML = blogList
    .map(
        (
            item
        ) => `<a href="./chiTietKhuyenMai.html" class="flex justify-center m-4 z-[1]">
                        <div class="rounded-lg shadow-lg bg-white sm:w-[20rem]">
                            <img class="rounded-t-lg" src=${item.img} alt="../assets/images/banner-trang-khuyen-mai_1_.jpg" loading="lazy"/>
                        <div class="p-6">
                            <h5 class="text-gray-900 sm:text-sm font-bold ">${item.title}</h5>                            
                        </div>
                        </div>
                    </a>`
    )
    .join("");
