import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';
import {calculationBiorhythms} from '../calculation'
import BiorythmChart from './BiorhthmChart'

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
  }

function BiorythmCard({birthDate, targetDate}){
    const {physical, emotional, intellectual} = calculationBiorhythms(birthDate,targetDate)
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <BiorythmChart />
            <IonCardContent>
              <p>Physical: {physical.toFixed(4)}%</p>
              <p>Emotional: {emotional.toFixed(4)}%</p>
              <p>Intelectual: {intellectual.toFixed(4)}%</p>
            </IonCardContent>
       </IonCard>
    )
}

export default BiorythmCard;