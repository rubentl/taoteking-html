var isMenuLateral = false,
    isSeccionVisible = false;

function Ajax(url, elemento){
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    elemento.innerHTML = xmlhttp.responseText;
}

function menuLateral(){
   if (isMenuLateral) return;
   var menu = document.querySelector("nav");
   menu.style.textAlign = "left";
   menu.style.margin = "0%";
   menu.style.height = 'auto';
   menu.style.width = '20%';
   menu.style.float = 'left';
   var menu_a = document.querySelectorAll("nav a");
   for (i = 0; i < menu_a.length; i++){
        menu_a[i].style.fontSize = "50%";
        menu_a[i].style.display = "inline";
        menu_a[i].style.marginTop = "5%";
   }
   var titulo = document.querySelector("header");
   if (titulo != null){
        padre = titulo.parentNode;
        padre.removeChild(titulo);
   }
   isMenuLateral = true;
};

function seccionVisible(){
    if (isSeccionVisible) return;
    var seccion = document.querySelector("section");
    seccion.style.display = "inline";
    seccion.style.width = '70%';
    seccion.style.height = '88%';
    isSeccionVisible = true;
};

function ocultarArticulos(){
   var tao = document.getElementById("taoteking"),
       hua = document.getElementById("huahuching"),
       wen = document.getElementById("wentzu");
   tao.style.display = hua.style.display = wen.style.display = "none";
   tao.innerHTML = hua.innerHTML = wen.innerHTML = "";
};

function actualizar(){
  var  body = document.querySelector('body'),
       contenido = document.getElementById('contenedor'),
       width = window.innerWidth,
       height = window.innerHeight;
   // dimensiono body para que ocupe solo la ventana 
   body.style.width = width.toString() + 'px';
   body.style.height = height.toString() + 'px';
   // dimensiono contenido al 85%w y 90%h de body
   contenido.style.width = ((width*85)/100).toString() + 'px';
   contenido.style.height = ((height*90)/100).toString() + 'px';
   contenido.style.marginTop = '1%';
   // posiciono el logo desde el final del contenido
   document.getElementById('logo').style.bottom = '8%';
};

function main(){
   var link_tao = document.querySelector('a[href*="taoteking"]'),
       link_hua = document.querySelector('a[href*="huahuching"]'),
       link_wen = document.querySelector('a[href*="wentzu"]'),
       img = 0;
   ocultarArticulos();
   actualizar();
   // cambio el fondo  cada 9 segundo
   setInterval(function(){
       if (img > 11){
            img = 0;
       }
       var contenido = document.getElementById('contenedor');
       contenido.style.backgroundImage='url(Assets/fondo' + img.toString() + '.png)';
       img++;
   }, 9000);
   window.onresize = actualizar;
   // muestro el texto del tao te king
   link_tao.onclick = function(){
        var articulo = document.getElementById('taoteking');
        menuLateral();
        seccionVisible();
        ocultarArticulos();
        articulo.style.display = "inline";
        Ajax("Textos/taoteking.txt", articulo);
        actualizar();
    };
   // muestro el texto del hua hu ching
   link_hua.onclick = function(){
        var articulo = document.getElementById('huahuching');
        menuLateral();
        seccionVisible();
        ocultarArticulos();
        articulo.style.display = "inline";
        Ajax("Textos/huahuching.txt", articulo);
        actualizar();
    };
   // muestro el texto de wen tzu
   link_wen.onclick = function(){
        var articulo = document.getElementById('wentzu');
        menuLateral();
        seccionVisible();
        ocultarArticulos();
        articulo.style.display = "inline";
        Ajax("Textos/wentzu.txt", articulo);
        actualizar();
    };
}
