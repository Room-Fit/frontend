import { ZodError } from "zod";

export type ThrownZodError = { errors: { message: string }[] };

export const zodSuccessCase = (result: object, expectedResult: Record<string, unknown>) => {
    expect(() => result).not.toThrow();
    expect(result).toEqual(expectedResult);
};

export const zodFailureCase = (
    result: (...args: never[]) => unknown,
    expectedThrowInstance: object,
    expectedMessage: string,
) => {
    try {
        result();
    } catch (error: unknown) {
        expect(error).toBeInstanceOf(expectedThrowInstance);
        if (error instanceof ZodError) {
            expect(error.issues[0].message).toBe(expectedMessage);
        }
    }
};
