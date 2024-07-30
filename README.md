TYPING EVENTS BY PLACING THEM INTO ONCLICK ~FIRST
const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        console.log("Clicked")
    return (
        <button
            onClick={handleClick}
        >
            Click Me
        </button>
    )

EXTENDING TYPE DEFINITIONS
type ButtonProps = {
    type?: "button" | "submit" | "reset";
    color?: "red" | "blue" | "green";
}
type SuperButtonProps = ButtonProps & {
    size: "md" | "lg"
}

USING BUILT-IN HELPER TYPES
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
}
// React.ComponentPropsWithoutRef<"button"> --> if using reference

DEFINING FUNCTIONS AND CHILDREN/USESTATE HOOKS
// type ButtonProps = {
//     // onClick: (text:string) => int
//     children: React.ReactNode
//     setCount: React.Dispatch<SetStateAction<number>>
// }

DIFFERENT REACT ELEMENTS (CHILDREN-USEFUL)
// //React.ReactNode accepts text and JSX elements
// //JSX.element only accept JSX elements

BASIC TYPE DEFINITION INSIDE OF PROP
type styleProps = {
    // style: {
    //     backgroundColor: string;
    //     fontSize: number;
    //     textColor: string;
    // }
    style: React.CSSProperties;
}

OR OPERATOR FOR COLOR
type Color = "red" | "blue" | "green";
