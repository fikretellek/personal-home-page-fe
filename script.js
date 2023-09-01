var images;

// Describe this function...
function showNextImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shownImage2 = document.getElementById('shownImage');
  images.push(images.shift());
  element_shownImage2.setAttribute("src", images[0]);
}

// Describe this function...
function showPreviousImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shownImage3 = document.getElementById('shownImage');
  images.unshift(images.pop());
  element_shownImage3.setAttribute("src", images[0]);
}


images = ['https://i1.sndcdn.com/artworks-000374202633-pqm4gy-t500x500.jpg', 'https://cdn.wallpapersafari.com/86/63/9jt7aq.jpg', 'https://live.staticflickr.com/65535/49389103952_ff4b2cf256.jpg'];
let element_shownImage = document.getElementById('shownImage');
element_shownImage.setAttribute("src", images[0]);


document.getElementById('btnNext').addEventListener('click', (event) => {
  showNextImage();

});

document.getElementById('btnPrevious').addEventListener('click', (event) => {
  showPreviousImage();

});



var comments, names, item;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function showComments() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_commentList = document.getElementById('commentList');
  element_commentList.replaceChildren();
  names.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = names[0];
    names.push(names.shift());
    let new_span = document.createElement('span');
    new_span.innerText = ' : ';

    new_li.appendChild(new_span);
    let new_span2 = document.createElement('span');
    new_span2.innerText = comments[0];
    comments.push(comments.shift());

    new_li.appendChild(new_span2);

    element_commentList.appendChild(new_li);
  });
}


comments = [];
names = [];


document.getElementById('btnAddComment').addEventListener('click', (event) => {
  names.push(document.getElementById('inputName').value);
  comments.push(document.getElementById('inputComment').value);
  showComments();

});