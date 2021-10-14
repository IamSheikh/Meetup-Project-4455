import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetUpData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input
            type='text'
            required
            id='title'
            autoComplete='off'
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input
            type='text'
            required
            id='image'
            autoComplete='off'
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            required
            id='address'
            autoComplete='off'
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            row='5'
            autoComplete='off'
            ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
