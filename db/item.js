const itemList = [
    {
        id: "item1",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THANH LONG",
        price: "29000",
        des: "Burger Thanh Long Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Thanh Long Ruột Đỏ, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "burger"
    },
    {
        id: "item2",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THAN TRE",
        price: "39000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "burger"
    },
    {
        id: "item3",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THAN SẬY",
        price: "10000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "new"
    },
    {
        id: "item4",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER THANH LONG",
        price: "10000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "new"
    },
    {
        id: "item5",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER TRỨNG MUỐI",
        price: "10000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "burger"
    },
    {
        id: "item6",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER TRỨNG MUỐI",
        price: "10000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "new"
    },
    {
        id: "item7",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER TRỨNG MUỐI",
        price: "10000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "burger"
    },
    {
        id: "item8",
        img: "../assets/images/burger-thanh-long.png",
        title: "BURGER TRỨNG MUỐI",
        price: "10000",
        des: "Burger Than Tre Với Lớp Vỏ Xốp Mềm Được Làm Từ 100% Tinh Than Tre, Kết Hợp Cùng Lớp Sốt Phô Mai Sánh Min Và Bò Nướng Lửa Hồng Nhập Khẩu Úc.",
        type: "new"
    },
    {
        id: "item9",
        img: "../assets/images/strawberry-juice-1024x767.jpg",
        title: "NƯỚC ÉP DÂU TÂY",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "drink"
    },
    {
        id: "item10",
        img: "../assets/images/strawberry-juice-1024x767.jpg",
        title: "NƯỚC ÉP DÂU TÂY",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "drink"
    },
    {
        id: "item11",
        img: "../assets/images/strawberry-juice-1024x767.jpg",
        title: "NƯỚC ÉP DÂU TÂY",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "drink"
    },
    {
        id: "item12",
        img: "../assets/images/hamburger.png",
        title: "COMBO BURGER VIP 8",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "combo"
    },
    {
        id: "item13",
        img: "../assets/images/hamburger.png",
        title: "COMBO BURGER VIP 8",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "combo"
    },
    {
        id: "item14",
        img: "../assets/images/hamburger.png",
        title: "COMBO BURGER VIP 8",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "combo"
    },
    {
        id: "item15",
        img: "../assets/images/hamburger.png",
        title: "COMBO BURGER VIP 8",
        price: "23000",
        des: "Nước Ép Dâu Tây Được Làm Từ Dâu Tây Với Hương Vị Dâu Tây Tươi Mát, Kết Hợp Với Vị Sữa Chua Nguyên Chất.",
        type: "combo"
    }
];

function showProduct(){
    const items = document.getElementById("item");
    items.innerHTML = itemList
        .map(
            (i)=>
            `
            <a onclick="getPos('${i.id}')" href="./chitietsp.html" id="${i.id}" 
                class="block relative text-center font-bold bg-orange-400 shadow transition-all ease-in-out duration-500 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-105 active:scale-90 active:brightness-50 rounded-xl overflow-hidden cursor-pointer p-10 fadeIn">
                <img src=${i.img} alt="Hamburger" class="object-contain rounded-full"/>
                <p class="mt-4 text-xl text-white">${i.title}</p>
                <p class="text-red-600 text-xl mt-4">${i.price} VND</p>
            </a>
            `
        )
        .join("");
    upNumberCart(countItem());
    hideItem();
}

function getPos(id){
    let currentPos = itemList.findIndex(i=>i.id==id);
    localStorage.setItem("pos", currentPos);
}


function showDetail(pos){
    let num = localStorage.getItem(itemList[pos].id);
    if(num==null){
        num=0;
    }
    const itemDetail = document.getElementById("detail");
    itemDetail.innerHTML = 
    `
    <aside class="sm:flex items-center pushRight">
        <img
            class="rounded-full"
            src="${itemList[pos].img}"
            alt="burger-thanh-long"
        />
    </aside>
    <aside class="bg-red-100 p-10 rounded-2xl pushLeft">
        <h1 id="title" class="text-3xl font-bold">${itemList[pos].title}</h1>
        <p class="font-bold text-slate-600 mt-3 text-justify">
            ${itemList[pos].des}
        </p>
        <p class="font-bold mt-10 text-xl mb-2">Số Lượng</p>
        <div class="flex justify-between flex-col sm:flex-row">
            <div class="flex h-10 w-40 rounded overflow-hidden">
                <button
                    onclick="giamSoLuong('${itemList[pos].id}')"
                    class="bg-slate-600 w-full text-2xl font-semibold cursor-pointer active:scale-95 text-white text-center ">
                    <p class="h-full mt-px">-</p>
                </button>
                <input
                    oninput="calPrice('${itemList[pos].id}')"
                    id="soluong"
                    class="text-center font-semibold text-xl outline-none"
                    type="number"
                    min="0"
                    max="100"
                    value="${num}"/>
                <button
                    onclick="tangSoLuong('${itemList[pos].id}')"
                    class="bg-yellow-400 w-full text-2xl font-semibold cursor-pointer active:scale-95 text-slate-600">
                    <p class="h-full mt-px">+</p>
                </button>
            </div>
            <div class="text-red-600 font-bold text-2xl sm:mt-0 mt-10">
                <span id="item-price">
                    ${itemList[pos].price}
                </span>
                <span>VND</span>
            </div>
        </div>
        <button
            id="btn-add-cart"
            onclick="addCart('${itemList[pos].id}')"
            class="bg-orange-400 p-4 my-10 w-full rounded font-bold sm:text-2xl text-xl text-white hover:scale-105 active:brightness-75 active:scale-100"
        >
            Thêm vào giỏ hàng
        </button>
    </aside>
    `
    upNumberCart(countItem());
    calPrice(itemList[pos].id)
}

function giamSoLuong(id) {
    var so = document.getElementById("soluong");
    if(so.value>1){
        so.value--;
        calPrice(id);
    }
}

function tangSoLuong(id) {
    var so = document.getElementById("soluong");
    if(so.value<100){
        so.value++;
        calPrice(id);
    }
}

function addCart(id){
    var number = parseInt(document.getElementById("soluong").value);
    var name = document.getElementById("title").textContent;
    if(number>100){
        alert("Số lượng mua tối đa là 100!");
        return;
    }
    if(number<=0){
        alert("Số lượng mua tối thiểu là 1!");
        return;
    }
    if(typeof localStorage[id]==="undefined") {
        window.localStorage.setItem(id, number);
    } else {
        var currentNumber = parseInt(window.localStorage.getItem(id));
        if(currentNumber+number>100){
            window.localStorage.setItem(id, 100);
            alert("Số lượng mua tối đa là 100!");
            return;
        } else {
            window.localStorage.setItem(id, number);
        }
    }
    alert("Cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng.");
    upNumberCart(countItem());
}

function countItem(){
    let count = 0;
    itemList.forEach(function(item){
        let id = localStorage.getItem(item.id);
        if(id!=null){
            let num = parseInt(id);
            count+=num;
        }
    })
    return count;
}

function upNumberCart(num){
    let quan = document.getElementById("quantity");
    quan.textContent = num;
}

// ==============================================================

function showMonMoi(){
    let items = document.getElementById("item");
    let posNew = new Array;
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].type=="new"){
            posNew.push(i);
        }
    }
    items.innerHTML = posNew
    .map(
    (i)=>
    `
    <a onclick="getPos('${itemList[i].id}')" 
        href="./chitietsp.html" id="${i.id}" 
        class="new block relative text-center font-bold bg-orange-400 shadow transition-all ease-in-out duration-500 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-105 active:scale-90 active:brightness-50 rounded-xl overflow-hidden cursor-pointer p-10 fadeIn">
        <img src=${itemList[i].img} alt="Hamburger" class="object-contain rounded-full"/>
        <p class="mt-4 text-xl text-white">${itemList[i].title}</p>
        <p class="text-red-600 text-xl mt-4">${itemList[i].price} VND</p>
    </a>
    `
    )
    .join("");
    hideBtnMore();
}


function showBurger(){
    let items = document.getElementById("item");
    let posBur = new Array;
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].type=="burger"){
            posBur.push(i);
        }
    }
    items.innerHTML = posBur
    .map(
    (i)=>
    `
    <a onclick="getPos('${itemList[i].id}')" 
        href="./chitietsp.html" id="${i.id}" 
        class="fadeIn block relative text-center font-bold bg-orange-400 shadow transition-all ease-in-out duration-500 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-105 active:scale-90 active:brightness-50 rounded-xl overflow-hidden cursor-pointer p-10">
        <img src=${itemList[i].img} alt="Hamburger" class="object-contain rounded-full"/>
        <p class="mt-4 text-xl text-white">${itemList[i].title}</p>
        <p class="text-red-600 text-xl mt-4">${itemList[i].price} VND</p>
    </a>
    `
    )
    .join("");
    hideBtnMore();
}

function showCombo(){
    let items = document.getElementById("item");
    let posCom = new Array;
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].type=="combo"){
            posCom.push(i);
        }
    }
    items.innerHTML = posCom
    .map(
    (i)=>
    `
    <a onclick="getPos('${itemList[i].id}')" 
        href="./chitietsp.html" id="${i.id}" 
        class="fadeIn block relative text-center font-bold bg-orange-400 shadow transition-all ease-in-out duration-500 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-105 active:scale-90 active:brightness-50 rounded-xl overflow-hidden cursor-pointer p-10">
        <img src=${itemList[i].img} alt="Hamburger" class="object-contain rounded-full"/>
        <p class="mt-4 text-xl text-white">${itemList[i].title}</p>
        <p class="text-red-600 text-xl mt-4">${itemList[i].price} VND</p>
    </a>
    `
    )
    .join("");
    hideBtnMore();
}

function showThucUong(){
    let items = document.getElementById("item");
    let posThu = new Array;
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].type=="drink"){
            posThu.push(i);
        }
    }
    items.innerHTML = posThu
    .map(
    (i)=>
    `
    <a onclick="getPos('${itemList[i].id}')" 
        href="./chitietsp.html" id="${i.id}" 
        class="fadeIn block relative text-center font-bold bg-orange-400 shadow transition-all ease-in-out duration-500 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 hover:scale-105 active:scale-90 active:brightness-50 rounded-xl overflow-hidden cursor-pointer p-10">
        <img src=${itemList[i].img} alt="Hamburger" class="object-contain rounded-full"/>
        <p class="mt-4 text-xl text-white">${itemList[i].title}</p>
        <p class="text-red-600 text-xl mt-4">${itemList[i].price} VND</p>
    </a>
    `
    )
    .join("");
    hideBtnMore();
}

function hideBtnMore(){
    let btnShow = document.getElementById("btn-more");
    btnShow.style.display = "none";
}

function hideItem(){
    for(let i=6;i<itemList.length;i++){
        let item = document.getElementById(itemList[i].id);
        item.style.display = "none";
    }
}

function showMore(){
    for(let i=6;i<itemList.length;i++){
        let item = document.getElementById(itemList[i].id);
        item.style.display = "block";
    }
}

// Cart
function showCart(){
    let cart = document.getElementById("cart-show");
    let posArr = new Array;
    for(let i=0;i<localStorage.length;i++){
        let idx = itemList.findIndex(item=>item.id==localStorage.key(i));
        if(idx!=-1){
            posArr.push(idx);
        }
    }
    let total=0;
    posArr.forEach(i=>{
        let num = localStorage.getItem(itemList[i].id);
        let price = itemList[i].price;
        total += (num * price);
    })
    cart.innerHTML = 
    `
    <section id="cart-modal" class="flex justify-center items-center">
        <div id="cart-container" class="bg-white p-5 rounded sm:w-1/2 relative w-11/12">
            <div
                onclick="closeCart()"
                class="absolute top-0 right-2 p-4 rounded-full cursor-pointer text-2xl font-bold">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <h1 class="text-center text-2xl font-bold text-orange-400 mt-10">GIỎ HÀNG</h1>
            <div id="item-cart" class="mt-10 overflow-y-auto h-72">
                <!-- item in cart -->
                
            </div>
            <div class="mt-10">
                <div class="font-bold text-xl flex justify-between">
                    TỔNG CỘNG:
                    <div class="text-red-600">
                        <span>
                            ${total}
                        </span>
                        <span>VND</span>
                    </div>
                </div>
                <a href="thanhToan.html" class="block text-center font-bold text-xl text-white bg-orange-500 p-4 w-full rounded mt-4 active:brightness-75">THANH TOÁN</a>
            </div>
        </div>
    </section>
    `
    ;
    showItemCart();
}

function showItemCart(){
    let itemCart = document.getElementById("item-cart");
    let posArr = new Array;
    for(let i=0;i<localStorage.length;i++){
        let idx = itemList.findIndex(item=>item.id==localStorage.key(i));
        if(idx!=-1){
            posArr.push(idx);
        }
    }
    itemCart.innerHTML = posArr
    .map(
        (i)=>
        `
        <section id="${itemList[i].id}" class="flex items-center bg-orange-100 shadow mt-1">
            <img class="w-32 p-4 rounded-full" src="${itemList[i].img}">
            <div class="text-xl">
                <h1 class="font-bold">${itemList[i].title}</h1>
                <div class="text-sm flex justify-between sm:flex-row flex-col">
                    <span>Số lượng: ${localStorage.getItem(itemList[i].id)}</span>
                    <span>Thành tiền: ${localStorage.getItem(itemList[i].id)*itemList[i].price} </span>
                </div>
                <div class="flex mt-1 mb-1">
                    <a href="./chitietsp.html" 
                        onclick="modifyCart('${itemList[i].id}')"
                        class="bg-orange-300 p-1 rounded active:brightness-75 active:scale-95 text-sm">
                        Chỉnh sửa
                        <i class="fa-solid fa-pen"></i>
                    </a>
                    <button
                        onclick="removeCart('${itemList[i].id}')"
                        class="sm:ml-72 ml-2 bg-orange-300 p-1 rounded active:brightness-75 active:scale-95 text-sm">
                        Xóa
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </section>
    `
    )
    .join("");
}

function modifyCart(id){
    getPos(id);
    let pos = localStorage.getItem("pos");
    showDetail(pos);
    closeCart();
}

function closeCart(){
    let cart = document.getElementById("cart-show");
    cart.innerHTML = "";
}

function removeCart(id){
    let item = document.getElementById(id);
    item.innerHTML = "";
    localStorage.removeItem(id);
    upNumberCart(countItem());
    showCart();
    showProduct();
}

function calPrice(id){
    let so = document.getElementById("soluong");
    let price = document.getElementById("item-price");
    let currentPos = localStorage.getItem("pos");
    price.innerHTML = so.value * itemList[currentPos].price;
}


// Sub nav
function showNavMobile() {
    let menu = document.getElementById("nav-sub");
    let h = menu.clientHeight;
    if(h==0){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}