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
import {useLocalStorage} from './hooks.js';
import './index.css';
function App() {
  const [name, setName] = useLocalStorage('name','')
  const [birthDate, setBirthDate] = useLocalStorage('birthDate','')
  const [targetDate, setTargetDate] = useLocalStorage('targetDate',new Date().toISOString())
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {/* value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput> */}
      {
         birthDate &&
         <BiorythmCard targetDate = {(targetDate)} birthDate = {birthDate}/>
        }
       <IonItem>
         <IonLabel position="stacked">Name:</IonLabel>
          <IonInput value={name} type="text" placeholder="Your name"
          onIonChange={(e)=> setName(e.detail.value)}/>
       </IonItem>
       <IonItem>
         <IonLabel position="fixed">Birthday</IonLabel>
         <IonDatetime displayFormat="YYYY-MM-DD" value={birthDate} 
         onIonChange={e => setBirthDate(e.detail.value)}></IonDatetime>
       </IonItem>
       <IonItem>
         <IonLabel position="fixed">Target Day</IonLabel>
         <IonDatetime displayFormat="YYYY-MM-DD" value={targetDate} 
         onIonChange={e => setTargetDate(e.detail.value)}></IonDatetime>
       </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
