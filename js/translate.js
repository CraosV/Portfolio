
  // document.addEventListener('DOMContentLoaded', function() {
  //   var miModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  //   miModal.show();
  // }); 

  var btnSpanish =document.getElementById("btnSpanish");
  var about = document.getElementById("about");
  var services = document.getElementById("services");
  var contact = document.getElementById("contact");
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var contactUs = document.getElementById("contactUs");
  var lblServices = document.getElementById("lblServices");
  /* cards */
  var tittle1 = document.getElementById("tittle1");
  var body1 = document.getElementById("body1");
  var tittle2 = document.getElementById("tittle2");
  var body2 = document.getElementById("body2");
  var tittle3 = document.getElementById("tittle3");
  var body3 = document.getElementById("body3");
  /* contact */
  var contactDown = document.getElementById("contactDown");
  var textContact = document.getElementById("textContact");
  var message = document.getElementById("message");
  var btnSend = document.getElementById("btnSend");
  /* footer */
  var rigthsR = document.getElementById("rigthsR");
  btnSpanish.addEventListener("click", function(){

    about.innerText = "Acerca De Nosotros";
    services.innerText = "Servicios";
    contact.innerText = "Contacto";
    text1.innerText = "Desarrollo de Software a Medida";
    text2.innerText = "Ofrecemos soluciones personalizadas para aplicaciones web y móviles, software empresarial y comercio electrónico. Nuestra pasión por la calidad y la comunicación transparente nos diferencia, garantizando resultados excepcionales para nuestros clientes.";
    contactUs.innerText = " Contáctenos";
    lblServices.innerText = " Servicios";
    offer.innerText = "Qué Ofrecemos?"
    /* cards */
    tittle1.innerText = " CMS PERSONALIZADOS";
    tittle2.innerText = " DISEÑO ADAPTABLE";
    tittle3.innerText = " MANTENIMIENTO Y SOPORTE";
    body1.innerText = "Descubra el poder de un CMS personalizado. Con nuestro servicio de desarrollo de CMS personalizados, obtendrá una herramienta diseñada exclusivamente para sus necesidades de gestión de contenidos. Desde blogs hasta sitios web complejos, nuestro CMS se adapta completamente a su visión.";
    body2.innerText = "Con nuestro enfoque en el diseño responsivo, puede estar seguro de que su sistema funcionará de forma óptima en cualquier pantalla. Tanto si necesitas una aplicación web compleja como un sistema empresarial, nuestra atención al detalle garantiza que cada elemento se adapte perfectamente a la pantalla.";
    body3.innerText = "Nos aseguramos de comprender sus necesidades específicas y le ofrecemos soluciones adaptadas a sus requisitos individuales. Si necesita actualizaciones de software, resolución de problemas técnicos o asesoramiento estratégico, estamos aquí para ayudarle en todo momento.";
    /* contact */
    contactDown.innerText = "Contacte con nosotros ";
    textContact.innerText = "Contacte con nosotros por correo electrónico o whatsapp para aclarar cualquier duda que tenga y recibir sus valiosas sugerencias. Esperamos conocerle y comprender sus necesidades.";
    message.innerText = "Mensaje";
    btnSend.innerText = "Enviar";
    /* footer */
    rigthsR.innerText = "Todos Los Derechos Reservados";
  });

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