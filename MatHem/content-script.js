// TODO: Use to auto load
document.addEventListener('load', (event) => {
    document.body.style.backgroundColor = 'orange';
    alert('page is fully loaded');
    var element = document.getElementsByTagName('h1');
    for(var i = 0; i < element.length; i++) {
        alert(element[i]);
    }
});


