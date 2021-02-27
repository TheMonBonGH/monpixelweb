function copy(text){
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function btnJava(){
  copy('mc.monpixel.xyz')
  swal("Success!", "Copied the Java address mc.monpixel.xyz to your clipboard!", "success");
}

function btnBedrock(){
  copy('Address: mc.monpixel.xyz\n Port: 1234')
  window.location.replace("minecraft://?addExternalServer=Monpixel Bedrock|monpixel.xyz:1234");
  swal("Success!", "Monpixel should have been added to your Minecraft Bedrock server list. If it didn't work, use the address monpixel.xyz with the port 1234 (it has been copied to your clipboard).", "success");
}

document.getElementById('play-button').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.bg-modal').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

// Make clicking the modal not close it
document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.body.addEventListener('keydown', function(e) {
  if (e.key == "Escape") {
    document.querySelector('.bg-modal').style.display = 'none';
  }
});


