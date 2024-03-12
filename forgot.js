const submit = document.getElementById('submit')
const emailBox = document.getElementById('emailBox')



submit.addEventListener("submit", function(e){
    e.preventDefault();
    emailBox.forEach(input => input.value = '');
    console.log('form was not submited')

});



function validateName(x)
{
  var re = /[A-Za-z@0-9.]/
      if(re.test(document.getElementById(x).value)){
      return true;
    }else{
      // document.getElementById(x ).style.background ='#e35152';
      document.getElementById(x + 'Error').style.display = "block";
      return false; 
    }
} 