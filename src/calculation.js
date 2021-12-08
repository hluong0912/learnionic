import dayjs from 'dayjs';

export function calculationBiorhythm(birthDate, targetDate, cycle){
    const birthDay = dayjs(birthDate).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diffD = targetDay.diff(birthDay,'days')
    return (Math.sin(2*Math.PI*diffD/cycle))
}

export function calculationBiorhythms(birthDate, targetDate){
    return {
        physical: calculationBiorhythm(birthDate,targetDate,23) ,
        emotional:calculationBiorhythm(birthDate,targetDate,28) ,
        intellectual:calculationBiorhythm(birthDate,targetDate,33) ,
    }

}


export function calculationBiorhythmSeries(birthDate, startDate,size){
    const series = []
    const startDay = dayjs(startDate).startOf("day")
    for(let day = 1; day < size; day++){
        const targetDate = startDay.add(day, "days").toISOString()
        series.push(calculationBiorhythms(birthDate,targetDate))
    }
    return series;
}