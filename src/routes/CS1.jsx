import Navbar from "../components/Navbar"
import Unit from "../components/Unit"
function CS1(){
    return(
    <div>
        <Navbar/>
        <div className="whole">
            <div className="info">
                <h1 className="title">Computer Science 1: <span className="lighter">Chapter Index</span></h1>
                <Unit title="Chapter 1: Fundamentals of Java" lessons={["MyFirstProgram Activity: Primitive Types and the String", "Variable Manipulation", "The String Object: Functionalities", "The String Object: The Power of Concatenation", "The String Object: String Processing and Beyond Characters", "User’s Interaction: The Scanner and the JOptionPane"]} to="Chapter1"/>
                <Unit title="Chapter 2: Decision Structures" lessons={["Conditional Statements: Introducing the if statement", "Conditional Statements: Ordering and String Comparison", "Conditional Statements: Ordering and String Comparison", "Algorithm Design and Multiple Decisions: Switch Case and If-Statements"]} to="Chapter2"/>
                <Unit title="Chapter 3: Repetitive Structures" lessons={["Loops: The while, for, and do-while", "Loop a User Interaction", "Loop Validation: Post-Test, Sentinel, and Infinite Loops", "Loops Using Sentinels and Other Control Statements", "Nested Loops: Shapes, Patterns, and the Variable j", "File Processing"]}/>
                <Unit title="Chapter 4: Functions and Methods" lessons={["Method Definition and Call", "Method Definitions", "Iterative/Convergence Methods", "Encryption Using Methods"]}/>
                <Unit title="Chapter 5: Data Structures Pt. I: Arrays" lessons={["Arrays Basic Operations", "Arrays, Methods, and User Interaction", "Two Dimensional Arrays: The Matrix"]}/>
                <Unit title="Chapter 6: Object Oriented Programming" lessons={["Object Design and Implementation: The Dollar Part I", "Object Application and Algorithm Design: The Dollar Part II", "Object Design and Implementation: The MyString Object"]} border="no-border"/>
            </div>
        </div>
    </div>)
}

export default CS1