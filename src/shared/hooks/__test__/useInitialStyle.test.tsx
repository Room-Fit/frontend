import { useInitialStyle } from "../useInitialStyle";
import { render, screen } from "@testing-library/react";

describe("useInitialStyle()", () => {
    test("ref 에 해당하는 DOM 요소에 initialStyles 를 적용한다", () => {
        const Component = () => {
            const { ref } = useInitialStyle<HTMLDivElement>({
                opacity: "0",
                transform: "scale(0.8)",
            });
            return <div data-testid="test" ref={ref}></div>;
        };

        render(<Component />);

        const el = screen.getByTestId("test");

        expect(el.style.opacity).toBe("0");
        expect(el.style.transform).toBe("scale(0.8)");
    });

    test("Object.entries 를 통해 style 을 순회하며 key,value 를 반환한다", () => {
        const style: React.CSSProperties = {
            opacity: "0",
            transform: "scale(0.8)",
        };

        const styleKeys = Object.keys(style);

        expect(styleKeys).toEqual(["opacity", "transform"]);
        expect(style["opacity"]).toBe("0");
        expect(style["transform"]).toBe("scale(0.8)");
    });
});
