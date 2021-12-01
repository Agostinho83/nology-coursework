import { getName } from "./index.js";

it("should return the string 'sam, 22 years old.'", () => {
    const output = getName('sam', 22);
    expect(output).toBe('sam, 22 years old.');
})

it('should return the name, followed by the age', () => {
    const output = getName('Ollie', 27);
    expect(output).toBe('Ollie, 27 years old.');
})