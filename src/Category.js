import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ngodetails from "./Ngodetails.js";
import Select from "react-select";
export default function Category() {
  let baseUrl = `https://giveitaway-backend.onrender.com`;
  const [flag, setFlag] = useState(true);
  const [data, setData] = useState([]);
  const [curruntPage, setCurrentPage] = useState(0);
  const [food, setfood] = useState(false);
  const [stationary, setstationary] = useState(false);
  const [other, setother] = useState(false);
  const [clothes, setclothes] = useState(false);
  const [medicines, setmedicines] = useState(false);
  const [selectCity, setselectCity] = useState("null");
  const [cityData, setCityData] = useState([]);
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
  // Function triggered on selection
  function onCityChange(data) {
    setselectCity(data);
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo") == null) {
      navigate("/user");
    }
  });
  useEffect(() => {
    let baseUrl = `https://giveitaway-backend.onrender.com`;
    fetch(`${baseUrl}/api/v1/user/getActiveCities`).then((response) => {
      response.json().then((result) => {
        result.Result = result.Result.map((value) => { return { "value": value["cityName"], "label": value["cityName"] } });
        setCityData(result.Result)
      });
    });
  },[]);
  
  const isExisting = () => { };

  const submitDetails = (e) => {
    let categories = "";
    if (food) {
      categories += categories.length ? '__Food' : 'Food';
    }
    if (stationary) {
      categories += categories.length ? '__stationary' : 'stationary';
    }
    if (other) {
      categories += categories.length ? '__other' : 'other';
    }
    if (clothes) {
      categories += categories.length ? '__clothes' : 'clothes';
    }
    if (medicines) {
      categories += categories.length ? '__medicines' : 'medicines';
    }

    fetch(`${baseUrl}/api/v1/user/getngolist?` + new URLSearchParams({
      page: e.target.value,
      pageSize: 15,
      ...selectCity !== "null" && { city: selectCity["value"] },
      ...categories.length && { categories }
    })).then((response) => {
      setFlag(false);
      response.json().then((result) => {
        setData(result.Result);
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
                <div className="icon checkbox-wrpa">
                  <div className="checkbox">
                    <input
                      onChange={(e) => {
                        onFoodChange(e);
                      }}
                      type="checkbox"
                      name="food"
                      id="myCheckboxFood"
                      value="false"
                    />
                    <label htmlFor="myCheckboxFood"><img src="./images/food.png" alt="" /><br />FOOD</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="icon">
                  <div className="checkbox checkbox-wrpa">
                    <input
                      onChange={(e) => {
                        onStationaryChange(e);
                      }}
                      type="checkbox"
                      name="stationary"
                      id="myCheckboxStationary"
                      value="false"
                    />
                    <label htmlFor="myCheckboxStationary"><img src="./images/stationary.png" alt="" /><br />Stationary</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="block center">
              <div>
                <div className="icon">
                  <div className="checkbox checkbox-wrpa">
                    <input
                      onChange={(e) => {
                        onOtherChange(e);
                      }}
                      type="checkbox"
                      name="other"
                      id="myCheckboxOther"
                      value="false"
                    />
                    <label htmlFor="myCheckboxOther"><img src="./images/other.png" alt="" /><br />Other</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div>
                <div className="icon">
                  <div className="checkbox checkbox-wrpa">
                    <input
                      onChange={(e) => {
                        onclothesChange(e);
                      }}
                      type="checkbox"
                      name="clothes"
                      id="myCheckboxClothes"
                      value="false"
                    />
                    <label htmlFor="myCheckboxClothes"><img src="./images/clothes.png" alt="" /><br />Clothes</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="icon">
                  <div className="checkbox checkbox-wrpa">
                    <input
                      onChange={(e) => {
                        onMedicineChange(e);
                      }}
                      type="checkbox"
                      name="medicines"
                      id="myCheckboxMedicines"
                      value="false"
                    />
                    <label htmlFor="myCheckboxMedicines"><img src="./images/medicine.png" alt="" /><br />Medicines</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form container mt-24">
            <form action="">
              <div className="form-group">
                <Select
                  options={cityData}
                  placeholder="Select city"
                  value={selectCity}
                  onChange={onCityChange}
                  isSearchable={true}
                />
              </div>
            </form>
          </div>
        </main>
        <div className="cta big my-24">
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
