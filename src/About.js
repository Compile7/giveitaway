import React from "react";

export default function About() {
    return (
        <>
            <main>
                {/*Heading */}
                <h1 class="title text-md text-center">About us</h1>
                {/*Heading */}

                {/*description */}
                <div class="page-description text-center">
                    We are a passionate group of individuals committed to creating positive change in the world. Join us as
                    we work together to make a difference!
                </div>
                {/*description */}

                {/*profile pictures */}
                <div class="profile-picture">
                    <div class="icon">
                        <img src="./images/neha.png" alt="Neha" />
                    </div>
                    <div class="icon">
                        <img src="./images/krishna.png" alt="krishna" />
                    </div>
                    <div class="icon">
                        <img src="./images/bhupendra.png" alt="Bhupendra" />
                    </div>
                    <div class="icon">
                        <img src="./images/abhimanyu.png" alt="Abhimanyu" />
                    </div>
                    <div class="icon">
                        <img src="./images/naman.png" alt="Naman" />
                    </div>
                    <div class="icon">
                        <img src="./images/kuldeep.png" alt="Kuldeep" />
                    </div>
                </div>
                {/*profile pictures */}
            </main>
            <div class="signup text-center">
                Want to join us as NGO ? <a href="https://forms.gle/Ka1zhB89ABRkQhKD8" target="_blank" rel="noopener noreferrer">Sign up</a>
            </div>
        </>
    )
}