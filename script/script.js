const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}
// alert(1111);

const plus = document.querySelectorAll(".plus");

// document.getElementById('myButton').addEventListener('click', function() {
//     // alert('Div был нажат!');
// });


 // Получаем элементы
var modal = document.getElementById("myModal");
var btn = document.getElementById("myButton");
var span = document.getElementById("closeModal");

 // Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
 }

 // Закрываем модальное окно при нажатии на "x"
span.onclick = function() {
    modal.style.display = "none";
}

 // Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
