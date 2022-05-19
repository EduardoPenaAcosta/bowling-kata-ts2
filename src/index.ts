

function CalculatorBowling(frames: string): number {
    const splitFrames = frames.split(' ');
    const points = splitFrames.map((roll: string, index) => {
        roll.replaceAll('-','0')
        console.log(index)
        if (roll == 'x' && index < 10 ) {
            return 30;
        }
        return 0
    })
    .map(Number)
    .reduce((a, b) => (a + b))
    return points
}

export { CalculatorBowling };

