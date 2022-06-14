import React from 'react'
import Back from "../common/back/Back" ;
import { useForm, ValidationError } from '@formspree/react';
import "../../App.css"
import Thanks from "../thanks/thanks"

const Contact = () => {
  const [state, handleSubmit] = useForm("xknpnjdv");
  if (state.succeeded) {
    return <Thanks />;
  }
  return (
    <>
      <Back title="Contact"/>
      <div className="form">
        <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Please enter your email address" required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Please enter your message" required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default Contact