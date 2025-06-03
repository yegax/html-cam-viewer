const download = document.getElementById('download');

download.addEventListener('click', function(e) {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });