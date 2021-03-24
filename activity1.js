var score=0;
function UpdateScore(){
    score=score+1
    document.getElementById("ShowScore").innerHTML=score;
}
function SaveScore(){
    localStorage.setItem("score_storage",score)
}
function NextPage(){
window.location="https://www.office.com/"
}