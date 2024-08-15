// import React from 'react'
// import "./SendMail.css";
// import CloseIcon from "@mui/icons-material/Close";
// import {Button} from "@mui/material";
// import {useForm} from "react-hook-form";
// function SendMail() {
//     const { register, handleSubmit,watch,errors} = useForm();
//   return <div className ="sendMail">
//     <div className='sendMail__header'>
//         <h3>New Message</h3>
//         <CloseIcon className ="sendMail__clone"/>
//     </div>
//     <form>
//     <input name='to'placeholder="To" type="email" ref={register({required:true})} />
//     <input namr='subject'placeholder="Subject" type="text" />
//     <textarea placeholder="Message..." className="sendMail__message" required />
//         <div className='sendMail__options'>
//             <Button className='sendMail__send'
//             variant="contained"
//             color="primary"
//             type="submit"
//             >
//                 Send
//             </Button>
//         </div>
//     </form>
//   </div>
// }

// export default SendMail

import React from 'react';
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register('to', { required: true })}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register('subject')}
        />
        <textarea
          placeholder="Message..."
          className="sendMail__message"
          {...register('message', { required: true })}
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
