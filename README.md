USE AS TO ASSERT A TYPE OVER TYPESCRIPT (TYPICALLY TO RUN FUNCTIONS)
type ButtonColor = "red" | "blue" | "green"
const previousButtohnColor = localStorage.getItem("buttonColor") as ButtonColor

CREATE A TYPE WHICH OMITS NAME TYPE FROM USER
type User = {
    sessionId: string;
    name: string
}

type Guest = Omit<User, "name">

ALLOW FOR INTELLISENSE OF LIST
const buttonTextOptions = [
    "Click me!",
    "Click me again!",
    "Click me one more time",
] as const

SPECIFYING TYPES WITH USEREF()
const ref = useRef<HTMLButtonElement>(null)
    return (
        <button ref={ref}>
            Click Me
        </button>
    )

TYPING USESTATE ESPECIALLY WHEN NEED TO FETCH USER FIRST
type User = {
    name: string;
    age: number
}
const [user, setUser] = useState<User | null>(null)
const name = user?.name;

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
