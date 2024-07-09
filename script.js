// ; tira imagem

function encrypt() {
    let textArea = document.getElementById('textArea');
    let text = textArea.value;
  
    if(text!=""){
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    document.getElementById('result__result').innerText = encryptedText;
    removeImgText();
    }else
    {
      setImgText()  
    }
  } 
  
  function descrypt() {
    let textArea = document.getElementById('textArea');
    let text = textArea.value;
  
      if(text!=""){
  
    let decryptedText = text.replace(/enter/g ,'e')
                            .replace(/imes/g  ,'i')
                            .replace(/ai/g  ,'a')
                            .replace(/ober/g  ,'o')
                            .replace(/ufat/g  ,'u');
                            
    document.getElementById('result__result').innerText = decryptedText;
    removeImgText();
  
      }
      else{
        setImgText()
  
      }
  
  }
  
  function removeImgText(){
  
    document.getElementById('img-cript').style.display = 'none';
    document.querySelector('.result__p__empty').style.display = 'none'; 
    document.querySelector('.result__p__notice').style.display = 'none'; 
    document.getElementById('btn-copy').removeAttribute('hidden');
  
  }
  
  function setImgText(){
  
   document.getElementById('img-cript').style.display = 'block';
    document.querySelector('.result__p__empty').style.display = 'block'; 
    document.querySelector('.result__p__notice').style.display = 'block'; 
    document.getElementById('btn-copy').setAttribute('hidden');
  }
  
  const btnCopy = document.getElementById('btn-copy');
  const copyFeedback = document.getElementById('copyFeedback'); 
  
  btnCopy.addEventListener('click', 
      function() {
      const resultText = document.getElementById('result__result');
      
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = resultText.innerText;
      
      document.body.appendChild(tempTextarea);
      
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999);
      
      document.execCommand('copy');
      
      document.body.removeChild(tempTextarea);
      copyFeedback.style.display = 'block';
  
      setTimeout(() => {
        copyFeedback.style.display = 'none';
    }, 2000);
      
  });
  
  const clearButton = document.getElementById('clearButton');
  
  clearButton.addEventListener('click', function() {
      document.getElementById('textArea').value = '';
  });