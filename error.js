function checkSelection() {
    // Checkbox'ları seçili olup olmadığını kontrol et
    var checkboxes = document.querySelectorAll('.food-checkbox');
    var selected = false;

    // Her bir checkbox'ı kontrol et
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected = true;
            break;  // Seçili bir checkbox bulunduğunda, döngüyü kır
        }
    }

    // Eğer hiçbir checkbox seçili değilse, uyarı göster
    if (!selected) {
        alert("Lütfen bir yemek veya içecek seçiniz.");
        return false;  // Sayfa geçişini engelle
    }
    
    // Seçili checkbox varsa, order-completed.html sayfasına yönlendir
    window.location.href = 'order-completed.html';
    return false; // Sayfanın otomatik olarak yeniden yüklenmesini engeller
}
