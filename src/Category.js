import React from "react";


export default function Category() {
    return (
        <>
        <main>
        <h1 class="title text-md text-center">Choose your Category</h1>
        <div class="category container">
            <div class="block">
                <div>
                    <div class="icon">
                        <img src="./images/food.png" alt=""/>
                    </div>
                    <div class="checkbox-wrpa">
                        <div class="checkbox">
                            <input type="checkbox" name="food" id="food" value = "0"/>
                            <label for="food">FOOD</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="icon">
                        <img src="./images/stationary.png" alt=""/>
                    </div>
                    <div class="checkbox-wrpa">
                        <div class="checkbox">
                            <input type="checkbox" name="stationary" id="stationary" value = "0"/>
                            <label for="stationary">Stationary</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block center">
                <div>
                    <div class="icon">
                        <img src="./images/other.png" alt=""/>
                    </div>
                    <div class="checkbox-wrpa">
                        <div class="checkbox">
                            <input type="checkbox" name="other" id="other" value = "0"/>
                            <label for="other">Other</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div>
                    <div class="icon">
                        <img src="./images/clothes.png" alt=""/>
                    </div>
                    <div class="checkbox-wrpa">
                        <div class="checkbox">
                            <input type="checkbox" name="clothes" id="clothes" value = "0"/>
                            <label for="clothes">Clothes</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="icon">
                        <img src="./images/medicine.png" alt=""/>
                    </div>
                    <div class="checkbox-wrpa">
                        <div class="checkbox">
                            <input type="checkbox" name="medicines" id="medicines" value = "0"/>
                            <label for="medicines">Medicines</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form container mt-24">
                <form action="">
                    <div class="form-group">
                        <select name="" id="">
                            <option value="SelectCity">Select City</option>
                            <option value="SelectCity">Jaiput</option>
                            <option value="SelectCity">Ajmer</option>
                            <option value="SelectCity">Udaipur</option>
                        </select>
                    </div>

                </form>
            </div>
        </main>
        <div class="cta big my-24">
        <a href="/ngodetails"><button class="text-center">Connect me with nearest NGO</button></a>
        </div>
        <div class="signup text-center">
                Want to join us as NGO ? <a href="https://forms.gle/Ka1zhB89ABRkQhKD8" target="_blank" rel="noopener noreferrer">Sign up</a>
            </div>
    </>
    )
}