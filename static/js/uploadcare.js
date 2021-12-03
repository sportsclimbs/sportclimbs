(function(src, cb) {
    var s = document.createElement('script'); s.setAttribute('src', src);
    s.onload = cb; (document.head || document.body).appendChild(s);
  })('https://ucarecdn.com/libs/blinkloader/3.x/blinkloader.min.js', function() {
    window.Blinkloader.optimize({
      pubkey:'8fd1a2c69b970e6ccb26',
      fadeIn:true,
      lazyload:true,
      smartCompression:true,
      responsive:true,
      retina:true,
      webp:true
    });
  })