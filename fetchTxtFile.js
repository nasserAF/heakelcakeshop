/*    fetch('../fetchTxtFile.txt')
  .then(response => response.text())
  .then(texts => {
    const formattedText = texts.replace(/\n/g, '<br>');
    document.getElementById('draft').innerHTML = formattedText;
  })
  .catch(error => console.error('Error fetching file:', error));



const imgArr = ["../img/about3.jpg","../img/about2.jpg","../img/about.jpg","../img/0_1_S.png"]

  //fetch('../img/about.jpg')
  imgArr.forEach(element => {
    fetch(element)
  .then(response => response.blob())
  .then(blob => {
    const imageObjectURL = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.style = "width:120px;"
    img.src = imageObjectURL;
    document.body.appendChild(img);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });

  });

 */










  function extractImageURLs(url) {
    return fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgElements = doc.querySelectorAll('img');
  
        const imgURLs = [];
        imgElements.forEach(img => {
          imgURLs.push(img.src);
          console.log(img.src)
          const img1 = document.createElement('img');
          img1.style = "width:320px;";
          img1.src = img.src;
          document.body.appendChild(img1);
        });
  
        return imgURLs;
      });
  }

  
  // Example usage:
  extractImageURLs('https://www.youtube.com')
    .then(imgURLs => {
      console.log(imgURLs); // Array of image URLs found on the page
    })
    .catch(error => {
      console.error('Error fetching URL or extracting images:', error);
    });














  /* fetch('../img/20221006_032801.mp4') // Replace with your audio/video file URL
  .then(response => response.blob())
  .then(blob => {
    const mediaObjectURL = URL.createObjectURL(blob);

    // Option 1: Using <audio> tag
    const audioElement = document.createElement('audio');
    audioElement.src = mediaObjectURL;
    audioElement.controls = true; // Show playback controls
    document.body.appendChild(audioElement);

    // Option 2: Using <video> tag (for video files)
    // const videoElement = document.createElement('video');
    // videoElement.src = mediaObjectURL;
    // videoElement.controls = true;
    // document.body.appendChild(videoElement);
  })
  .catch(error => {
    console.error('Error fetching audio/video:', error);
  });
   */






 /*  fetch('../img/20221006_032801.mp4') // Replace with your video file URL
  .then(response => response.blob())
  .then(blob => {
    const videoObjectURL = URL.createObjectURL(blob);

    const videoElement = document.createElement('video');
    videoElement.src = videoObjectURL;
    videoElement.controls = true; // Show playback controls
    videoElement.width = 640; // Set width (optional)
    videoElement.height = 360; // Set height (optional)
    document.body.appendChild(videoElement);
  })
  .catch(error => {
    console.error('Error fetching video:', error);
  });

 */






  


/*   
  fetch('../draft.txt')
  .then(response => response.text())
  .then(text => {
    document.getElementById('draft').textContent = text;
  })
  .catch(error => console.error('Error fetching file:', error));

 */


/* 
  fetch('../draft.txt')
  .then(response => response.text())
  .then(text => {
    console.log(text)
    let draft = document.getElementById("draft");
    
    draft.textContent = text;
    console.log("draft",draft)
})
  .catch(error => console.error('Error fetching file:', error));

   */


  