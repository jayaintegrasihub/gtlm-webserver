export function moduleObjectToArray(input) {
    let output = [];
    let numSets = Object.keys(input).filter(key => key.startsWith('en'));
    numSets.forEach((num) => {
        let intNum = num.match(/(\d+)/)[0];
        let obj = {
            en: input['en' + intNum],
            tag: input['tag' + intNum],
            invert: input['invert' + intNum],
            maskEn: input['maskEn' + intNum],
            maskRule: input['maskRule' + intNum],
            maskThresh: input['maskThresh' + intNum],
            edge: input['edge' + intNum],
            debounce: input['debounce' + intNum],
            mode: input['mode' + intNum],
            pollTime: input['pollTime' + intNum],
            pulsePerRot: input['pulsePerRot' + intNum]
        }
        output.push(obj);
    })
    return output;

}