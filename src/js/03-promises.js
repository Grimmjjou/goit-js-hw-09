import Notiflix from 'notiflix';

const form=document.querySelector('.form');
form.addEventListener('submit',onSubmitForm);
function onSubmitForm(evt){
  evt.preventDefault();
  const {delay,step,amount}=evt.currentTarget.elements;
  if(delay.value<0||step.value<0||amount.value<0){
    Notiflix.Notify.warning('Додайте додатнє число!')
  }
  else{
    for(let i=0;i<amount.value;i++){
      let position=i+1;
      const delays=Number(delay.value)+step.value*i;
      createPromise(position, delays)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }
  }
  
}


function createPromise(position, delay) {
  return new Promise((Fulfill,rej)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{  if (shouldResolve) {
      Fulfill({ position, delay });
    } else {
      rej({ position, delay });
    }},delay)})
  
  

}
