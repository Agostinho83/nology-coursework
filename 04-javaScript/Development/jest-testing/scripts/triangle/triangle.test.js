import { Triangle } from './triangle.js';

describe('Tests to determine whether or not a shape entered is a triangle', () => {

    describe('equilateral triangle', () => {
        test('all sides are equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true);
        });

        test('no sides are equal', () => {
            const triangle = new Triangle(3, 2, 1);
            expect(triangle.isEquilateral).toBe(false);
        });
    })

    describe('isosceles triangle', () => {
        test('last two sides are equal', () => {
            const triangle = new Triangle(4, 2, 2);
            expect(triangle.isIsosceles).toBe(true);
        });

    });

    describe('scalene triangle', () => {
        test('should no  sides be equal', () => {
            const triangle = new Triangle(4, 3, 2);
            expect(triangle.isScalene).toBe(true);
        });

        test('should no  sides be equal', () => {
            const triangle = new Triangle(0.5, 0.4, 0.6);
            expect(triangle.isScalene).toBe(true);
        });

    });

})