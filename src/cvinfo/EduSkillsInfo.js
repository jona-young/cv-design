import React from 'react';
import './EduSkillsInfo.css';

function EduSkillsInfo () {
    return (
        <div className="eduskills">
            <div className="circle">
            </div>
            <div>
                <p className="eduskills__contact"><b>Address: </b>123 Numerical Blvd</p>
                <p className="eduskills__contact"><b>Phone: </b>(123) 456-7890</p>
                <p className="eduskills__contact"><b>Email: </b>email@email.com</p>
                <p className="eduskills__contact"><b>Github: </b>jona-young</p>
            </div>
            <div className="eduskills__education">
                <p className="eduskills__title">
                    EDUCATION
                </p>
                <p className="eduskills__major">
                    Communications, Culture, and Information Technology
                </p>
                <p className="eduskills__school">
                    University of Toronto
                    <br />
                    2010 - 2015
                </p>
                <p className="eduskills__major">
                    Sport Management
                </p>
                <p className="eduskills__school">
                    Humber College
                    <br />
                    2015-2018
                </p>
            </div>
            <div className="eduskills__title">
                KEY SKILLS
            </div>
        </div>
    )
}

export default EduSkillsInfo;