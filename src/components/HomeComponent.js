import React from 'react'
function Home() {
    return (
        <div>
            <div className="describe conatiner-fluid col-12">
                <h1>Rimo</h1>
                <hr />
                <p className="content container-fluid">It is a system developed for managing various activities in the Event. This project also keeps 
                details of the Various Event . It is headed by Event head. He will be the administrator. This system is designed in favour of the Event 
                management which helps them to save the records of the students about their rooms and other things. </p>
            </div>
            <div className="feature container-fluid col-12">
                <h2 className="feature-heading">Features</h2>
                <hr className="feature-line" />
                <div className="row offset-1 col-10"><p className="feature-sub">This Event Management System allows you to manage all the necessary details of the Events.</p></div>
                <div className="row offset-1 col-10">
                    <ul className="feature-content">
                        <li>It allows you to manage all the Event efficiently.</li>
                        <li>It allows you to manage different Rooms in different <a href ="index.html"> Places </a>  </li>
                    </ul>
                </div>
            </div>
            
            

            <div className="hostel">
                <img src="assets/hostel.png" alt="hostel"/>
            </div>
        </div>
    )
}

export default Home;