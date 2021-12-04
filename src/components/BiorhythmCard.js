import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';



function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
  }

  

function BiorythmCard({targetDate}){

    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Physical: 83%</p>
              <p>Emotional: 34%</p>
              <p>Intelectual: 52%</p>

            </IonCardContent>
       </IonCard>

    )

}

export default BiorythmCard;