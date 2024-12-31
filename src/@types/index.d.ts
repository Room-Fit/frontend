declare type CSSAbsoluteUnit = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px";
declare type CSSRelativeUnit =
    | "em"
    | "ex"
    | "ch"
    | "rem"
    | "lh"
    | "rlh"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "vb"
    | "vi"
    | "svw"
    | "svh"
    | "lvw"
    | "lvh"
    | "dvw"
    | "dvh"
    | "%";

declare type SizeProp = `${number}${CSSAbsoluteUnit | CSSRelativeUnit}`;

declare type Children = {
    children: React.ReactNode;
};
