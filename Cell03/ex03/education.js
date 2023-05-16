const images = [
    
    
    "https://as1.ftcdn.net/v2/jpg/03/89/07/14/1000_F_389071495_EXbWden6z83WkqXyz6yyCya7uNzyc70h.jpg"
    
  ];
  
  let currentImageIndex = 0;
  
  function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
  }
  
  setInterval(changeBackground, 5000);
  
  function openEducation() {
    let source = "file:///C:/Users/210085/TESTING/Cell03/ex03/education.html";
    window.open(source);
  }
  
  function openEducation() {
    let source = "file:///C:/Users/210085/TESTING/Cell03/ex03/education.html";
    window.open(source);
  }