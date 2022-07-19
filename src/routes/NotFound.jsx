import Navbar from "../components/Navbar"
function NotFound(){
    return(
        <div>
            <Navbar/>
            <div className="whole">
                <div className="info">
                    <div className="letters">
                            <h1 className="Big"> 404 PAGE NOT FOUND</h1>
                            <p className="small">I think you are not supposed to be here...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound