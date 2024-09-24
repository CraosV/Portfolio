
  // document.addEventListener('DOMContentLoaded', function() {
  //   var miModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  //   miModal.show();
  // }); 

  
  function msg()
  {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;

    var encodedText1 = encodeURIComponent(name);
    var encodedText2 = encodeURIComponent(mail);
    var encodedText3 = encodeURIComponent(message);

    var url =`https://wa.me/59160160922?text=*Nombres:*%20${encodedText1}%0A*Correo:*%20${encodedText2}%0A*Mensaje:*%20${encodedText3}`;
    window.open(url, '_blank');

  }
  // Escuchar el evento de scroll
	window.addEventListener('scroll', () => {
		const navbar = document.querySelector('.navbar');
		if (window.scrollY > 50) {
			navbar.classList.add('scrolled'); // Agrega la clase 'scrolled'
		} else {
			navbar.classList.remove('scrolled'); // Remueve la clase 'scrolled'
		}
	});
  AOS.init({
    offset: 10,    // offset (in px) from the original trigger point
    delay: 1.3,       // values from 0 to 3000, with step 50ms
    duration: 800,  // values from 0 to 3000, with step 50ms
    easing: 'ease-in-cubic, ease-out-cubic, ease-in-out-cubic', // default easing for AOS animations
    once: false,    // whether animation should happen only once
});