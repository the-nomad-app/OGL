import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (

    <div className='cards'>
      <h1>Check Out Some Of My Work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src="https://user-images.githubusercontent.com/69743567/97772219-83cff900-1b0a-11eb-9973-820d6ff72f48.PNG"
              text='Find the perfect pet for you with Pick-your-pet'
              label='Pets'
              path="https://github.com/CHANCEEWELL?tab=repositories"
            />
            <CardItem
              img src="https://raw.githubusercontent.com/chriscooley1/Workday-Scheduler-HW5/main/images/Work-Day-Scheduler.png"
              text='Modify you schedule with Workday Scheduler'
              label='Scheduler'
              path="https://github.com/CHANCEEWELL?tab=repositories"
            />
            <CardItem
              img src='https://raw.githubusercontent.com/chriscooley1/Workout-Tracker-HW17/main/images/fitness-tracker.png'
              text='Track your daily workouts using this Fitness Tracker'
              label='Fitness'
              path="https://github.com/CHANCEEWELL?tab=repositories"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='https://raw.githubusercontent.com/chriscooley1/Budget-Tracker-HW18/main/images/budget-tracker.png'
              text='Track your spending habits with this Budget Tracker'
              label='Budget'
              path=" https://mysterious-temple-74523.herokuapp.com/"
            />
            <CardItem
              img src='https://raw.githubusercontent.com/chriscooley1/Note-Taker-HW11/main/images/note-taker.png'
              text='Write down your thoughts with Note Taker'
              label='Notes'
              path="https://github.com/CHANCEEWELL?tab=repositories"
            />
            <CardItem
              img src='https://raw.githubusercontent.com/chriscooley1/Weather-Dashboard-HW6/main/images/Weather-Dashboard.png'
              text='Get your local weather forecast with Weather Dashboard'
              label='Weather'
              path="https://github.com/CHANCEEWELL?tab=repositories"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
