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
                <Unit title="Chapter 3: Repetitive Structures" lessons={["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"]}/>
                <Unit title="Chapter 4: Functions and Methods" lessons={["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"]}/>
                <Unit title="Chapter 5: Data Structures Pt. I: Arrays" lessons={["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"]}/>
                <Unit title="Chapter 6: Object Oriented Programming" lessons={["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"]} border="no-border"/>
            </div>
        </div>
    </div>)
}

export default CS1