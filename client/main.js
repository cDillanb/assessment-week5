
// Variables
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const commentsForm = document.getElementById("comments-form");
const commentsContainer = document.getElementById("comment-container");
const getPosterBtn = document.getElementById("get-poster-button");
const colorSelector = document.getElementById("color-selector");
const quoteBtn = document.getElementById("quoteButton");
const baseURL = "http://localhost:4000/api";

// functions
const catchErr = (err) => console.log(err);

const complimentUser = () => {
  axios
    .get(`${baseURL}/compliment/`)
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch(catchErr);
};

const getFortune = () => {
  axios
    .get(`${baseURL}/fortune/`)
    .then((res) => {
      const fortune = res.data;
      alert(fortune);
    })
    .catch(catchErr);
};

const createComment = (e) => {
  e.preventDefault();
  let newComment = document.createElement("p");
  const comment = document.getElementById("comment").value;
  let body = { comment };
  axios
    .post(`${baseURL}/comment`, body)
    .then((res) => {
      newComment.innerHTML = `${res.data.comment}`;
      commentsContainer.appendChild(newComment);
    })
    .catch(catchErr);
};

const getPoster = () => {
    axios
    .get(`${baseURL}/poster`)
    .then((res) => {
        console.log(res.data)
        document.getElementById('poster').innerHTML = `<img id="poster-img" src="${res.data}"/>`
    })
    .catch(catchErr)
}

const getQuote = () => {
    axios
        .get(`${baseURL}/quote`)
        .then((res) => {
            const quote = res.data;
            alert(quote);
        })
        .catch(catchErr);
}

const changeBackgroundColor = (e) => {
    e.preventDefault()
    let color = e.target.textContent
    let body = document.querySelector(".container")
    body.style.backgroundColor = `${color}`
}

// Listeners
complimentBtn.addEventListener("click", complimentUser);
fortuneBtn.addEventListener("click", getFortune);
commentsForm.addEventListener("submit", createComment);
getPosterBtn.addEventListener("click", getPoster);
quoteBtn.addEventListener("click", getQuote);
colorSelector.addEventListener("click", changeBackgroundColor)