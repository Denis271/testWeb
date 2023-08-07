
//------------------Carousel-----------------------------
let positionCarousel = 0
let divsCircleCarousel = document.getElementById('conteinerCircleCarousel').getElementsByTagName("div"), x;
function arrowBackCarousel(){
    divsCircleCarousel[positionCarousel].style.background = "#C2C8CD";
    positionCarousel--
    if(positionCarousel<0)positionCarousel=4
    divsCircleCarousel[positionCarousel].style.background = "#2A6CEA";
    let ml = positionCarousel*373
    document.getElementById('innerCarousel').style.marginLeft = -ml+'px'
    log(positionCarousel*373)
}
function arrowNextCarousel(){
    divsCircleCarousel[positionCarousel].style.background = "#C2C8CD";
    positionCarousel++
    if(positionCarousel>4)positionCarousel=0
    divsCircleCarousel[positionCarousel].style.background = "#2A6CEA";
    let ml = positionCarousel*373
    document.getElementById('innerCarousel').style.marginLeft = -ml+'px'
    log(positionCarousel*373)
}
//--------------------questionAnswer------------------------
function openAnswer(id){
    let idd = "Answer"+id
    let idOpenBut ="openQuestionButton"+id
    let idCloseBut ="closeQuestionButton"+id
   
    let element = document.getElementById(idd);
    let styles = window.getComputedStyle(element);
    let styleDisplay = styles.getPropertyValue("display");
    if(styleDisplay=="none"){
        openBlock(idd)
        cancelBlock(idOpenBut)
        openBlock(idCloseBut)
    }else{
        cancelBlock(idd)
        openBlock(idOpenBut)
        cancelBlock(idCloseBut)
    } 
}
//--------------------------Form------------------------------------------
//примитивная проверка формы, которую также можно реализовать через onblur
function handleButform(){
    const elementForm = document.getElementById('form')
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    
    let name = elementForm.name.value;
    let tel = elementForm.tel.value;
    var valid = re.test(tel);
    event.preventDefault();
    if (valid){
        log('правильно')
        document.getElementById('inputPhone').style.border = "2px solid #ECEFF2"
        cancelBlock('errorInputFormPhone')
        cancelBlock('imCancelInputPhone')
        openBlock('imOkInputPhone')
    }else{
        log('не правильно')
        document.getElementById('inputPhone').style.border = "2px solid #F13636"
        openBlock('errorInputFormPhone')
        openBlock('imCancelInputPhone')
        cancelBlock('imOkInputPhone')
    }
    if (name){
        log(tel)
        log('правильно')
        document.getElementById('inputName').style.border = "2px solid #ECEFF2"
        cancelBlock('errorInputFormName')
        cancelBlock('imCancelInputName')
        openBlock('imOkInputName')
    }else{
        log('не правильно')
        document.getElementById('inputName').style.border = "2px solid #F13636"
        openBlock('errorInputFormName')
        openBlock('imCancelInputName')
        cancelBlock('imOkInputName')
    }
    tel =''

}
window.onload = () => {
document.getElementById('form').addEventListener(
  "submit",
  function(e){
    e.preventDefault();
    handleButform()
  }
)}
//---------------------сохранение измененных стилей в input при отсутствии фокуса если введен текст
function onblurInput(id) {
    //let id = 'inputPhone'
    var text = document.getElementById(id).value;
    let idLabel
    if(id=='inputName') idLabel='labelNameForm'
    else idLabel='labelPhoneForm'
    if(text!=''){
        document.getElementById(id).style.background = "#fff"
        document.getElementById(id).style.border = "2px solid #C2C8CD"
        document.getElementById(idLabel).style.top = "8px"
        document.getElementById(idLabel).style.fontSize = "14px"
        document.getElementById(idLabel).style.lineHeight = "24px"
        document.getElementById(idLabel).style.color = "#83898F"
        //border: 2px solid #C2C8CD;
    }else{
        document.getElementById(id).style.background = null
        document.getElementById(id).style.border = null
        document.getElementById(idLabel).style.top = null
        document.getElementById(idLabel).style.fontSize = null
        document.getElementById(idLabel).style.lineHeight = null
        document.getElementById(idLabel).style.color = null
    }
}
//--------------------------System---------------------------------------- 
function cancelBlock(id){
    document.getElementById(id).style.display = "none"
}
function openBlock(id){
    document.getElementById(id).style.display = "block"
}
function log(even){
    console.log(even)
} 
