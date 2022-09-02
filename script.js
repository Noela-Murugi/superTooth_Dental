const apiLocalHost = "http://localhost:3000";

function getDocNameById(){
    fetch('http://localhost:3000/doctors').then(resp=>resp.json()).then(docs=>{
        document.getElementById('doc-list').innerHTML = docs
        .map(doc=>`<li onClick="getDocDetails(${doc.id})">${doc.name}</li>`)
        .join('');
    })
}

function getDocDetails(docId){
    fetch(`http://localhost:3000/doctors/${docId}`)
    .then(response=>response.json())
    .then(doc=>{
        console.log(doc);
        document.getElementById('doc-name').innerHTML = doc.name;
        document.getElementById('doc-image').src = doc.image_url;
        document.getElementById('doc-description').innerHTML = doc.description;
        document.getElementById('review-list').innerHTML = doc.reviews
        .map(review=>`<li>${review}</li>`)
        .join('');
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    getDocNameById();
    getDocDetails(1);


    document.querySelector('#review-form').addEventListener('submit', e=>{
        e.preventDefault();
        let form = e.target;
        document.querySelector('#review-list').innerHTML += `<li>${form.review.value}</li>`;
        form.reset();
    })
})

function showAlert() {
    let myText = "You have successfully booked your Appointment.Thank you for choosing us!!.";
    alert (myText);
  }

document.addEventListener('DOMContentLoaded', () => {
  function getImageDetails(id){
      fetch (`http://localhost:3000/doctors/${id}`)
      .then((res) => res.json())
      .then((doc) => {
          document.querySelector('#doc-name').textContent = doc.name;
          document.querySelector('#doc-image').src = doc.image;
          document.querySelector('#like-button').addEventListener('click', function (){
              let countLike = document.querySelector('#like-count')
              doc.stars ++;
              countLike.textContent = `${doc.stars} stars`;
          })
      })
  }
  getImageDetails(1)
})

