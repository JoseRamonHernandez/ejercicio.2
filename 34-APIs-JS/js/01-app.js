const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado  => 
            {
                console.log('El resultado es: ', resultado);
            })
}); 

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () =>{
    //console.log('lo oprimiste');
    if(Notification.permission === 'granted')
    {
        //console.log('lo oprimiste');
       const notificacion = new Notification('Esta es la notificacion al seleccionar granted',
       {
           icon: 'img/ccj.png',
           body: 'Codigo'
       });

       notificacion.onclick = function ( ) {
           window.open('https://www.codigoconjuan.com')
       }
    }
    
});