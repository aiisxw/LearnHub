$(function(){
    let i = 0;
    const slides = $(".slide");

    function showSlide(n){
        slides.removeClass("active");
        slides.eq(n).addClass("active");
    }

    $(".next").click(function(){
        i = (i + 1) % slides.length;
        showSlide(i);
    });

    $(".prev").click(function(){
        i = (i - 1 + slides.length) % slides.length;
        showSlide(i);
    });


 $(document).ready(function(){

    $("#subscribe").click(function(){

        const email = $("input[type='email']").val().trim();

        if(email === "") {
            alert("Пожалуйста, введите email.");
            return;
        }

        // Самая простая проверка: есть ли @ и точка
        if(!email.includes("@") || !email.includes(".")) {
            alert("Пожалуйста, введите корректный email (должен содержать символ @ и точку).");
            return;
        }

        $("#thanks").fadeIn();
        setTimeout(() => $("#thanks").fadeOut(), 3000);

        $("input[type='email']").val(""); // очистка поля
    });

});

});