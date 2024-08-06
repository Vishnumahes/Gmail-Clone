import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IconButton from '@mui/material/IconButton';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();

    const openMail = () => {
        navigate(`/mail/${id}`);
    };

  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow__options'>
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className='emailRow__details'>
        <h3 className='emailRow__title'>
          {title}
        </h3>
        <div className='emailRow__message'>
          <h4>
            {subject} <span className='emailRow__description'> - {description}</span>
          </h4>
        </div>
        <div className='emailRow__time'>
          {time}
        </div>
      </div>
    </div>
  );
}

export default EmailRow;
