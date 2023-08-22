// Dark Mode 
let darkModu = () => {
    //alert("Dark modu");
    document.body.classList.toggle("dark_mode");
}

// input search
$(document).ready(function () {
    const searchApi = ["C Programlama Diziler", "C Programlama Fonksiyonlar", "PHP Fonksiyonlar", "PHP Dosyalama İşlemleri", "DOM"];
    $("#tags").autocomplete({
        source: searchApi
    })
});


// Footer (date)

// JavaScript
let newDate = () => {
    const date = new Date().getFullYear();
    // JS DOM
    //document.getElementById("date_id").innerHTML=new Date().getFullYear();

// Jquery DOM
    $("#date_id").html(date);
}
newDate()