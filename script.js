document.getElementById('toggleButton1').addEventListener('click', function() {
    const photo = document.getElementById('photo1');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none';
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton2').addEventListener('click', function() {
    const photo = document.getElementById('photo2');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none'; 
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton3').addEventListener('click', function() {
    const photo = document.getElementById('photo3');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none'; 
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton4').addEventListener('click', function() {
    const photo = document.getElementById('photo4');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none';
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton5').addEventListener('click', function() {
    const photo = document.getElementById('photo5');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none';
        this.textContent = 'Показать фотографию';
    }
});
