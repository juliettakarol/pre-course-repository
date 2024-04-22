
export function Score(scores){
    const container = document.createElement('div')

    container.append(`catch: ${scores.catchOffer} --- miss: ${scores.missOffer}`)
    return container

}