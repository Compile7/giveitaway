import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ngodetails from "./Ngodetails.js";

export default function Category() {
  const [flag, setFlag] = useState(true);
  const [data, setData] = useState([]);
  const [curruntPage, setCurrentPage] = useState(0);
  const [food, setfood] = useState(false);
  const [stationary, setstationary] = useState(false);
  const [other, setother] = useState(false);
  const [clothes, setclothes] = useState(false);
  const [medicines, setmedicines] = useState(false);
  const [selectCity, setselectCity] = useState("null");
  // let flag = true;
  const onFoodChange = (e) => {
    setfood(e.target.checked);
  };
  const onStationaryChange = (e) => {
    setstationary(e.target.checked);
  };
  const onOtherChange = (e) => {
    setother(e.target.checked);
  };
  const onclothesChange = (e) => {
    setclothes(e.target.checked);
  };
  const onMedicineChange = (e) => {
    setmedicines(e.target.checked);
  };
  const onCityChange = (e) => {
    setselectCity(e.target.value);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("fname") == null) {
      console.log("hello");
      navigate("/user");
    }
  });

  const isExisting = () => {};

  const submitDetails = (e) => {
    // let food = document.getElementById('food').checked;
    // let stationary = document.getElementById('stationary').checked;
    // let other = document.getElementById('other').checked;
    // let clothes = document.getElementById('clothes').checked;
    // let medicines = document.getElementById('medicines').checked;
    // let selectCity = document.getElementById('selectCity').value;
    // console.log(e.target.value)
    setFlag(false);

    let url = `https://giveitaway-backend.onrender.com/api/v1/user/getngolist?page=${
      e.target.value
    }&pageSize=15${selectCity === "null" ? "" : `&city=${selectCity}`}`;
    fetch(url).then((response) => {
      response.json().then((result) => {
        // console.warn("result", result.Result);
        let outputdata = [];
        result.Result.forEach((item) => {
          if (food && item.category === "Food") {
            outputdata.push(item);
          }
          if (stationary && item.category === "Stationary") {
            outputdata.push(item);
          }
          if (other && item.category === "Other") {
            outputdata.push(item);
          }
          if (clothes && item.category === "Cloths") {
            outputdata.push(item);
          }
          if (medicines && item.category === "Medicines") {
            outputdata.push(item);
          }
        });
        // console.log(outputdata)
        setData(outputdata);
        setCurrentPage(parseInt(e.target.value));
      });
    });
  };
  isExisting();
  if (flag) {
    return (
      <>
        <main>
          <h1 className="title text-md text-center">Choose your Category</h1>
          <div className="category container">
            <div className="block">
              <div>
                <div className="icon">
                  <img src="./images/food.png" alt="" />
                </div>
                <div className="checkbox-wrpa">
                  <div className="checkbox">
                    <input
                      onChange={(e) => {
                        onFoodChange(e);
                      }}
                      type="checkbox"
                      name="food"
                      id="food"
                      value="false"
                    />
                    <label htmlFor="food">FOOD</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src="./images/stationary.png" alt="" />
                </div>
                <div className="checkbox-wrpa">
                  <div className="checkbox">
                    <input
                      onChange={(e) => {
                        onStationaryChange(e);
                      }}
                      type="checkbox"
                      name="stationary"
                      id="stationary"
                      value=""
                    />
                    <label htmlFor="stationary">Stationary</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="block center">
              <div>
                <div className="icon">
                  <img src="./images/other.png" alt="" />
                </div>
                <div className="checkbox-wrpa">
                  <div className="checkbox">
                    <input
                      onChange={(e) => {
                        onOtherChange(e);
                      }}
                      type="checkbox"
                      name="other"
                      id="other"
                      value="0"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div>
                <div className="icon">
                  <img src="./images/clothes.png" alt="" />
                </div>
                <div className="checkbox-wrpa">
                  <div className="checkbox">
                    <input
                      onChange={(e) => {
                        onclothesChange(e);
                      }}
                      type="checkbox"
                      name="clothes"
                      id="clothes"
                      value="0"
                    />
                    <label htmlFor="clothes">Clothes</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src="./images/medicine.png" alt="" />
                </div>
                <div className="checkbox-wrpa">
                  <div className="checkbox">
                    <input
                      onChange={(e) => {
                        onMedicineChange(e);
                      }}
                      type="checkbox"
                      name="medicines"
                      id="medicines"
                      value="0"
                    />
                    <label htmlFor="medicines">Medicines</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form container mt-24">
            <form action="">
              <div className="form-group">
                <select
                  onChange={(e) => {
                    onCityChange(e);
                  }}
                  name=""
                  id="selectCity"
                >
                  <option value="null">Select City</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Ajmer">Ajmer</option>
                  <option value="Udaipur">Udaipur</option>
                </select>
              </div>
            </form>
          </div>
        </main>
        <div className="cta big my-24">
          {/* <a href="/ngodetails">
            </a> */}
          <button
            className="text-center"
            value={0}
            onClick={(e) => {
              submitDetails(e);
            }}
          >
            Connect me with nearest NGO
          </button>
        </div>
        <div className="signup text-center">
          Want to join us as NGO ?{" "}
          <a
            href="https://forms.gle/Ka1zhB89ABRkQhKD8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up
          </a>
        </div>
      </>
    );
  } else {
    return (
      <div className="text-center">
        <Ngodetails data={data} />
        <div className="next-prew-button container">
          <button
            className="text-center"
            value={curruntPage - 1}
            onClick={submitDetails}
            disabled={curruntPage - 1 < 0 ? true : false}
          >
            Back
          </button>
          <span className="text-center"> {curruntPage + 1} </span>
          <button
            className="text-center"
            value={curruntPage + 1}
            onClick={submitDetails}
            disabled={data.length === 0 ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
