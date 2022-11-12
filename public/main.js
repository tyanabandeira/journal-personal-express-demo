var faceSmile = document.getElementsByClassName("fa-smile-o");
var frown = document.getElementsByClassName("fa-frown-o")
var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        let _id = this.parentNode.parentNode.getAttribute("id").trim()
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(faceSmile).forEach(function(element) {
  element.addEventListener('click', function(){
    let _id = this.parentNode.parentNode.getAttribute("id").trim()
    fetch('smile', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

Array.from(frown).forEach(function(element) {

  element.addEventListener('click', function(){
    let _id = this.parentNode.parentNode.getAttribute("id").trim()
    let positiveMsg = [
      'You got this',
      'Sending major good vibes your way.',
      'Just wanted to send you a smile today',
      'Keep your face always toward the sunshine—and shadows will fall behind you. —Walt Whitman',
      'Make each day your masterpiece. - John Wooden',
      'One day at a time',
      'Things will work out',
      'Set yourself free'
    ]
    
    let randomPositiveMsg = positiveMsg[Math.floor(Math.random() * positiveMsg.length)]
    
    console.log(randomPositiveMsg)
    fetch('frown', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id,
        'positiveMsg': randomPositiveMsg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});










// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const intentions = this.parentNode.parentNode.childNodes[5].innerText
//         const grateful = this.parentNode.parentNode.childNodes[5].innerText
//         const affirmations = this.parentNode.parentNode.childNodes[5].innerText
//         const text = this.parentNode.parentNode.childNodes[5].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp,
//             'grateful': grateful,
//             'affirmations': affirmations,
//             'text': text
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     fetch('messages', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });


// Array.from(faceSmile).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     fetch('messages', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });



