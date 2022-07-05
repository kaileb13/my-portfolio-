const userMessage = document.querySelector('#usermessage');
const remainingCharac = document.querySelector('.remain-character');

const maxCharacLenght = userMessage.maxLength;

function inputValue(event) {
    const inputElement = event.target.value; 

    const inputElementValue = inputElement.length; 

    let remainingCharacLength = maxCharacLenght - inputElementValue;

    remainingCharac.textContent = remainingCharacLength;

    // if (remainingCharacLength <= 550){remainingCharac.add('style')} else {
    //     remainingCharac.remove('style')
    // }
     
}
userMessage.addEventListener('input', inputValue);
