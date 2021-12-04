import {calculationBiorhythm,calculationBiorhythms} from './calculation';

it('calculate the biorhythm',() => {
    // const result = calculationBiorhythm('1995-01-01','2020-02-18')
    const {physical} = calculationBiorhythms('1995-01-01','2020-02-18')
    expect(physical).toBeCloseTo(0.5196)
})

it('calculate the biorhythm',() => {
    // const result = calculationBiorhythm('1995-01-01','2020-02-18')
    const {emotional} = calculationBiorhythms('1995-01-01','2020-02-18')
    expect(emotional).toBeCloseTo(-0.9010)
})

it('calculate the biorhythm',() => {
    // const result = calculationBiorhythm('1995-01-01','2020-02-18')
    const {intellectual} = calculationBiorhythms('1995-01-01','2020-02-18')
    expect(intellectual).toBeCloseTo(0.8146)
})