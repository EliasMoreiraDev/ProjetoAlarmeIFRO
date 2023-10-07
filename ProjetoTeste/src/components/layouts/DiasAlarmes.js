import './DiasAlarme.module.css'
import { useState } from 'react'

function DiasAlarme() {
    
    const [selectedDay, setSelectedDay] = useState(null);
    const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  
    const handleDayClick = (index) => {
      setSelectedDay(index);
    };
  
    return (
      <div className="dias-alarme">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`dia ${index === selectedDay ? 'selected' : ''}`}
            onClick={() => handleDayClick(index)}
          >
            {day}
          </div>
        ))}
      </div>
    );
  }
  
  export default DiasAlarme;