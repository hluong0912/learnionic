import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
  IonDatetime,

} from '@ionic/react';
import React, {useState} from 'react';

import BiorythmCard from './components/BiorhythmCard';

function App() {
  const [name, setName] = useState('')
  const [selectedDate, setSelectedDate] = useState('2021-12-05')
  const targetDate = new Date().toISOString()
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {/* value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput> */}
       <IonItem>
         <IonLabel position="stacked">Name:</IonLabel>
          <IonInput value={name} type="text" placeholder="Your name"
          onIonChange={(e)=> setName(e.detail.value)}/>
       </IonItem>
       <IonItem>
         <IonLabel position="stacked">Birthday</IonLabel>
         <IonDatetime displayFormat="YYYY-MM-DD" value={selectedDate} 
         onIonChange={e => setSelectedDate(e.detail.value)}></IonDatetime>
       </IonItem>


        <BiorythmCard targetDate = {(targetDate)}/>
       


      </IonContent>
    </IonApp>
  );
}

export default App;
