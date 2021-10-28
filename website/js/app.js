if("serviceWorker" in navigator){
    navigator.serviceWorker.register('sw.js').then(registration =>{

        console.log('Sw');
        console.log(registration);
    }).catch(err =>{
        console.log('Sw Failed');
        console.log(err);
    })
    
}