import React, {useState} from 'react';
import axios from 'axios';
import {validateEmail} from '../../utils/helpers'
import '../../style/Contact.css';
import {FiUser, FiMail, FiMessageSquare, FiSend} from 'react-icons/fi';

export default function Contact() {
    

    // formData object to handle all values within a single state object
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
        // handles state changes by name of attribute and sets value
        const handleInputChange =(e) => {
            const {name, value} = e.target;
            setFormData({...formData, [name]: value}); // spread formData, update appropriate name value
        }
    
    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevents default behavior of refreshing the page

        if (!validateEmail(formData.email)) {
            setErrorMessage('Please enter a valid email');
            return; 
        }

        if (!e.target.name.value || !e.target.message.value) {
           setErrorMessage('Please ensure both Name and Message are filled in.'); 
            return;
        }

        try {
            axios
            .post("https://getform.io/f/53264379-8b01-4a18-8049-9ee92bcc816b", {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        },
        { headers: {'Accept': 'application/json'}})
            .then(response => console.log(response))
                .catch(error => console.log(error))
            }catch(err) {console.error(err);}

            setFormData({name:'', email:'', message:''}) // clear fields after submission
        }

    return (
        <div className='pageWrapper'>
            <h1>Contact Me</h1>
            <div className='formContainer'>
                <form className='formStyle' onSubmit={handleFormSubmit}>
                {/* checks for a value in error message, if there is one, display it */}
                {errorMessage && (<p>{errorMessage}</p>)}
            <div className='nameEmailInline'>
                <div className='inputGroup'>    
                <label><FiUser className='icons' /> Your Name </label> 
                    <input 
                     type='text'
                     name='name' 
                     value={formData.name}
                     onChange={handleInputChange} />
                </div>

                <div className='inputGroup'>    
                <label><FiMail className='icons' /> Your Email </label>
                    <input 
                     required
                     type='email'
                     name='email' 
                     value={formData.email}
                     onChange={handleInputChange} />
                </div>

            </div>
                <div className='inputGroup'>    
                <label><FiMessageSquare className='icons' /> Your Message </label>
                    <textarea className='textBox'
                     rows='8' 
                     name='message' 
                     value={formData.message}
                     onChange={handleInputChange}>
                     </textarea>
                </div>
                    <button className='submitButton'
                    type='submit'>SEND <FiSend className='icons' /></button>
            </form>
            </div>


            
        </div>
    );
}

