import React, { useEffect, useState } from 'react';
import './Mail.css';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Mail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [emailData, setEmailData] = useState({
    subject: "",
    title: "",
    timestamp: "",
    message: "",
    isImportant: false
  });

  useEffect(() => {
    if (id) {
      // Simulate fetching data
      setEmailData({
        subject: "Subject ",
        title: "Title ",
        timestamp: "10pm",
        message: "This is the message content.",
        isImportant: true
      });
    }
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="mail">
      <div className='mail__tools'>
        <div className="mail__toolsLeft">
          <IconButton onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton><MoveToInboxIcon /></IconButton>
          <IconButton><ErrorIcon /></IconButton>
          <IconButton><DeleteIcon /></IconButton>
          <IconButton><EmailIcon /></IconButton>
          <IconButton><WatchLaterIcon /></IconButton>
          <IconButton><CheckCircleIcon /></IconButton>
          <IconButton><LabelImportantIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton><PrintIcon /></IconButton>
          <IconButton><ExitToAppIcon /></IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{emailData.subject || "No subject available"}</h2>
          {emailData.isImportant && <LabelImportantIcon className='mail__important' />}
          <p className="mail__title">{emailData.title}</p>
          <p className='mail__time'>{emailData.timestamp}</p>
        </div>
        <div className='mail__message'>
          <p>{emailData.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
