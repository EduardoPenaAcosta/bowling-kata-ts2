import {CalculatorBowling} from './index';

/**
 * !TODO 
 * ! We will not check for valid rolls.
 * ! We will not check for correct number of rolls and frames.
 * ! We will not provide scores for intermediate frames.
 */

describe("Bowling spare calculator", () => {
    test("All of the frames are strike", () => {
        expect(CalculatorBowling("x x x x x x x x x x x x")).toEqual(300);
    })

    test("All the frames has points and misses", () => {
        expect(CalculatorBowling("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toEqual(300);
    })
    
})