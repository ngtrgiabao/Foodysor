const blogList = [
    {
        id: "1",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "../assets/images/burger-thanh-long.png",
        time: "Last friday at 10:34 pm",
        desc: "Những ai từng thử qua bánh mì thanh long chắc hẳn đều biết nó có vị ngọt hơn loại thông thường nhờ vào lượng đường tự nhiên đến từ ruột quả thanh long đỏ. Lớp bánh bun thanh long lần này cũng vậy. Khi ăn bạn sẽ dễ dàng cảm nhận được vị ngọt của lớp vỏ bánh màu hồng, vị mằn mặn của nhân tôm - gà quay flava hay miếng thịt zinger kết hợp cùng một ít độ chua - cay nồng của các loại nước sốt, rau xà lách, cà chua và ớt chuông bên trong.",
    },
    {
        id: "2",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "../assets/images/banner-trang-khuyen-mai_1_.jpg",
        time: "Last friday at 10:34 pm",
        desc: "Những ai từng thử qua bánh mì thanh long chắc hẳn đều biết nó có vị ngọt hơn loại thông thường nhờ vào lượng đường tự nhiên đến từ ruột quả thanh long đỏ. Lớp bánh bun thanh long lần này cũng vậy. Khi ăn bạn sẽ dễ dàng cảm nhận được vị ngọt của lớp vỏ bánh màu hồng, vị mằn mặn của nhân tôm - gà quay flava hay miếng thịt zinger kết hợp cùng một ít độ chua - cay nồng của các loại nước sốt, rau xà lách, cà chua và ớt chuông bên trong.",
    },
    {
        id: "3",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "",
        time: "Last friday at 10:34 pm",
        desc: "Những ai từng thử qua bánh mì thanh long chắc hẳn đều biết nó có vị ngọt hơn loại thông thường nhờ vào lượng đường tự nhiên đến từ ruột quả thanh long đỏ. Lớp bánh bun thanh long lần này cũng vậy. Khi ăn bạn sẽ dễ dàng cảm nhận được vị ngọt của lớp vỏ bánh màu hồng, vị mằn mặn của nhân tôm - gà quay flava hay miếng thịt zinger kết hợp cùng một ít độ chua - cay nồng của các loại nước sốt, rau xà lách, cà chua và ớt chuông bên trong.",
    },
    {
        id: "4",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "",
        time: "Last friday at 10:34 pm",
        desc: "Những ai từng thử qua bánh mì thanh long chắc hẳn đều biết nó có vị ngọt hơn loại thông thường nhờ vào lượng đường tự nhiên đến từ ruột quả thanh long đỏ. Lớp bánh bun thanh long lần này cũng vậy. Khi ăn bạn sẽ dễ dàng cảm nhận được vị ngọt của lớp vỏ bánh màu hồng, vị mằn mặn của nhân tôm - gà quay flava hay miếng thịt zinger kết hợp cùng một ít độ chua - cay nồng của các loại nước sốt, rau xà lách, cà chua và ớt chuông bên trong.",
    },
    {
        id: "5",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "",
        time: "Last friday at 10:34 pm",
        desc: "Những ai từng thử qua bánh mì thanh long chắc hẳn đều biết nó có vị ngọt hơn loại thông thường nhờ vào lượng đường tự nhiên đến từ ruột quả thanh long đỏ. Lớp bánh bun thanh long lần này cũng vậy. Khi ăn bạn sẽ dễ dàng cảm nhận được vị ngọt của lớp vỏ bánh màu hồng, vị mằn mặn của nhân tôm - gà quay flava hay miếng thịt zinger kết hợp cùng một ít độ chua - cay nồng của các loại nước sốt, rau xà lách, cà chua và ớt chuông bên trong.",
    },
    {
        id: "6",
        title: "Burger thanh long của Ơ BURGER liệu có gì đặc biệt so với các loại burger thông thường?",
        img: "",
        time: "Last friday at 10:34 pm",
        desc: "Những ai từng thử qua bánh mì thanh long chắc hẳn đều biết nó có vị ngọt hơn loại thông thường nhờ vào lượng đường tự nhiên đến từ ruột quả thanh long đỏ. Lớp bánh bun thanh long lần này cũng vậy. Khi ăn bạn sẽ dễ dàng cảm nhận được vị ngọt của lớp vỏ bánh màu hồng, vị mằn mặn của nhân tôm - gà quay flava hay miếng thịt zinger kết hợp cùng một ít độ chua - cay nồng của các loại nước sốt, rau xà lách, cà chua và ớt chuông bên trong.",
    },
];

const row2 = document.querySelector(".rows-2");

row2.innerHTML = blogList
    .map(
        (item) => `<div class="flex justify-center m-4">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img class="rounded-t-lg" src=${item.img} alt=""/>
                            </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">${item.title}</h5>
                            <p class="text-gray-700 text-base mb-4">${item.desc}</p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Xem Thêm</button>
                        </div>
                        </div>
                    </div>`
    )
    .join("");
// s