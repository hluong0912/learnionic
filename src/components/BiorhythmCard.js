import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';
import {calculationBiorhythms, calculationBiorhythmSeries} from '../calculation'
import BiorythmChart from './BiorhthmChart'
import './BiorhythmCard.css';
function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
  }

function BiorythmCard({birthDate, targetDate}){
    const {physical, emotional, intellectual} = calculationBiorhythms(birthDate,targetDate)
    const data = calculationBiorhythmSeries(birthDate,targetDate,20)
    .map((item) => ({...item, date:formatDate(item.date)}))
    
    return (
        <IonCard className="biorhythm-card ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <BiorythmChart data ={data}/>
            <IonCardContent>
              <p className="physical">Physical: {physical.toFixed(4)}%</p>
              <p className="emotional">Emotional: {emotional.toFixed(4)}%</p>
              <p className="intellectual">Intelectual: {intellectual.toFixed(4)}%</p>
            </IonCardContent>
       </IonCard>
    )
}

export default BiorythmCard;