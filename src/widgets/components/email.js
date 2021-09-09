import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import "./Email.css";

const Email = () => {
   const frmContact = { userEmail:'',  emailTitle:'', emailDetails:'' };
   const [contact, setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_4i839n3', e.target, 'user_5PDKjUy4Fc4lB2wTxq25D')
    .then((result) => {
        console.log(result.text);
        setContact(frmContact);
        setShowMessage(true);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <section id="email" className="Email">
      <div className="container">
	      { showMessage ? <div className="alert" role="alert">Gracias por tu interés, pronto me pondré en contacto contigo.</div> : ''}
        <form onSubmit={sendEmail}>
          <div className="input">
            <label>Nombre:</label>
            <input type="text" name="user_name" autoComplete= "off"  required/>
          </div>
          <div className="input">
            <label>Email:</label>
            <input type="email" name="user_email" autoComplete= "off"  required/>
          </div>
          <div className="textarea">
            <label>Mensaje:</label>
            <textarea name="message" maxLength="350" required/>
          </div>
          <div className="button">
            <button type="submit">Enviar</button>
          </div>
        </form>
	    </div>
    </section>
  );
}

export default Email;