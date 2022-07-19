import Navbar from "../components/Navbar"
import "../components/Chapter.css"

function Chapter1(){
    return(
        <div>
            <Navbar/>
            <div className="whole">
                <div className="info">
                <h1 className="title">Computer Science 1: <span className="lighter">Chapter 1</span></h1>
                
                <div className="lesson">
                    <h1 className="lessonTitle">You can "glue" strings together</h1>
                    <p>This is called concatenation. Concatenation is the process of gluing Strings with any other data type, including objects, such as Strings. The process to concatenate must be done through the '+' operand.</p>
                    <div className="code">
                        <p> String x = "Hello";</p>
                        <p> String y = "World";</p>
                    </div>
                    <p>Let us create another variable z that will concatenate the value of x and y by using the `+` operator.</p>
                    <div className="code">
                        <p> String z = x + y</p>
                        <p> z</p>
                        <p> "HelloWorld"</p>
                    </div>
                </div>

                <div className="lesson">
                    <h1 className="lessonTitle">String Functionalities (a.k.a. methods)</h1>
                    <p>Methods are functionalities that belong to objects, such as String, which we will discuss more in detail on Ch. 4. Some of the popular methods can be seen in Table 3. Let us demonstrate these functionalities by testing them into the interactions window:</p>
                </div>

                <div className="lesson">
                    <h1 className="lessonTitle">The length() Method</h1>
                    <p>The length() method retrieves the total number of characters in the String. Let us define a String called s1, that will hold the String "hello", after calling the method, we obtain 5, since the String s1 has 5 characters, i.e., 'h', 'e', 'l', 'l', and 'o'.</p>
                    <div className="code">
                        <p>  String s1 = "hello"</p>
                        <p>  s1</p>
                        <p>  "hello"</p>
                        <p>  sl.length()</p>
                        <p>  5</p>
                    </div>
                </div>

                <div className="lesson">
                    <h1 className="lessonTitle">The charAt() Method</h1>
                    <p>Java is a zero-based numbering language, meaning that we start counting from 0 and not from 1. Let us access each character from the String `hello` starting from index 0</p>
                    <div className="code">
                        <p>  sl.charAt(0)</p>
                        <p>  'h'</p>
                        <p>  sl.charAt(1)</p>
                        <p>  'e'</p>
                        <p>  sl.charAt(2)</p>
                        <p>  'l'</p>
                        <p>  sl.charAt(3)</p>
                        <p>  'l'</p>
                        <p>  sl.charAt(4)</p>
                        <p>  'o'</p>
                    </div>
                    <p>Although the String `hello` has a length of 5, a typical error into access the index representing the length of the String, in this case, is 5. This mistake will lead us to an exception (discussed on detail on Ch. Ch. 8) as follows:</p>
                    <div className="code">
                        <p>  sl.charAt(5)</p>
                        <p>  java.lang.StringIndexOutOfBoundsException: String index out of range: 5 at java.lang.String.charAt(Unknown Source)</p>
                    </div>
                    <p>Let us now redefine the variable s1, by providing a different value for the String.</p>
                    <div className="code">
                        <p> s1 = "hElLo gUyS hOw aRe yOu" </p>
                        <p> "hElLo gUyS hOw aRe yOu"</p>
                    </div>
                </div>

                <div className="lesson">
                    <h1 className="lessonTitle">The toUpperCase() and the toLowerCase() Methods</h1>
                    <p>Notice that the variable s1 has a combination of the upper and lower case. The String counts with methods that change the case for the string. For example:</p>
                    <div className="code">
                        <p>  s1.toUpperCase() </p>
                        <p>  "HELLO GUYS HOW ARE YOU"</p>
                    </div>
                    <p>changes the String into upper case, where the toLowerCase() changes to a lower case.</p>
                    <div className="code">
                        <p>  s1.toLowerCase()</p>
                        <p>  "hello guys how are you"</p>
                    </div>
                    <p>It is important to recognize that if we call the variable s1, it will continue with the original state since we never update the variable.</p>
                    <div className="code">
                        <p>  s1.toLowerCase()</p>
                        <p>  s1</p>
                        <p>  "hElLo gUyS hOw aRe yOu"</p>
                    </div>
                    <p>Remember that the s1 is a variable, and the purpose of a variable is that its value eventually change. If that is the objective, then we need to assign (=) the new value of s1 to s1 as follows:</p>
                    <div className="code">
                        <p>  s1 = s1.toLowerCase()</p>
                        <p>  s1</p>
                        <p>  "hello guys how are you"</p>
                    </div>
                </div>

                <div className="lesson">
                    <h1 className="lessonTitle">The substring() method</h1>
                    <p>In addition to the functions (methods) listed above for the String, there is one additional called the substring that is quite useful for your programming projects.</p>
                    <p>The substring is a method from the object String that provides a partial subpart of the string depending on the two methods you use. </p>
                    <p>There are two methods for substring:</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Chapter1