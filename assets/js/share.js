let shareData = {
    title: 'Andre',
    text: 'Website E-commerce Glamary',
    url: 'https://www.glamary.store/',
  }
  let shareData2 = {
    title: 'MDN2',
    text: 'Learn web development on MDN!2',
    url: 'https://developer.mozilla.org2',
  }
  
  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');
  
  function share(num) {
    let data = num ? shareData2 : shareData;
    navigator.share(data)
        .then(() => resultPara.textContent = 'MDN shared successfully')
        .catch((e) => resultPara.textContent = 'Error: ' + e);
  };
  
  // btn.addEventListener('click', () => {
  //   share();
  // });
  