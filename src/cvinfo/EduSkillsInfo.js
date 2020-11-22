import React from 'react';
import './EduSkillsInfo.css';

function EduSkillsInfo () {
    return (
        <div className="eduskills">
            <div className="circle">
            </div>
            <div>
                <p><b>Address: </b>123 Numerical Blvd</p>
                <p><b>Phone: </b>(123) 456-7890</p>
                <p><b>Email: </b>email@email.com</p>
                <p><b>Github: </b>jona-young</p>
            </div>
            <div className="eduskills__education">
                education info
            </div>
            <div className="eduskills_keys">
                key skills info
            </div>
        </div>
    )
}

export default EduSkillsInfo;