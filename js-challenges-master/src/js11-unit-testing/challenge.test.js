import * as challenge from "./js11";

it("Should return the string 'Hello, nice to meet you.'", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
})

it("Should return the sum of two numbers together.'", () => {
    expect(challenge.sumTwoNumbers(3, 1)).toBe(4);
    expect(challenge.sumTwoNumbers(2, 5)).toBe(7);
    expect(challenge.sumTwoNumbers(6, 3)).toBe(9);
})

it("Should return string based on which number is larger", () => {
    expect(challenge.checkLarger(3, 3)).toBe("Both numbers are equal");
    expect(challenge.checkLarger(3, 1)).toBe("3 is bigger than 1");
    expect(challenge.checkLarger(2, 5)).toBe("5 is bigger than 2");
});

it("Should return new array of names based on length", () => {
    expect(challenge.filterByLength(["Paul", "Calum", "Rebecca"])).toMatchObject(["Paul", "Calum"]);
    expect(challenge.filterByLength(["Johnathan", "Sylvester", "Charlie"])).toBe("Sorry, no valid names supplied");
    expect(challenge.filterByLength(["Tom", "Dick", "Harry"])).toMatchObject(["Tom", "Dick", "Harry"]);
});

it("Should reduce all numbers correctly", () => {
    expect(challenge.reduceNumbers([255, 230, 30], 10)).toMatchObject([245, 220, 20]);
    expect(challenge.reduceNumbers([40, 30, 20], 50)).toMatchObject([0, 0, 0]);
    expect(challenge.reduceNumbers([300, 310, 320], 40)).toMatchObject([255, 255, 255]);
});