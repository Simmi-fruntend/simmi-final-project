import React from "react";
import pic from "../../Assets/image3.png";
import pic1 from "../../Assets/Ellipse2.png";
import { Form, Input } from "reactstrap";
import pic2 from "../../Assets/Ellipse1.png";
// import PropTypes from 'prop-types';
export default class Medical extends React.Component {


  continue = () => {
    // e.preventDefault();
    this.props.nextStep();
  };
  previous = () => {
    // e.preventDefault();
    this.props.prevStep();
  };
  changeColor() {
    document.getElementById("4").style.color = "white";
    document.getElementById("1").style.color = "black";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";

    document.getElementById("5").style.border = "10px solid #FF5F24";
    document.getElementById("6").style.border = "";
    document.getElementById("7").style.border = "";
    document.getElementById("8").style.border = "";
  }
  changeColor3() {
    document.getElementById("4").style.color = "white";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "black";

    document.getElementById("7").style.border = "10px solid #FF5F24";
    document.getElementById("6").style.border = "";
    document.getElementById("5").style.border = "";
    document.getElementById("8").style.border = "";
  }
  clickBack = (e) => {
    e.preventDefault();
    this.changeColor();
    this.previous();
  };
  clickContinue = (e) => {
    e.preventDefault();
    this.validateButton();
  };

  validateButton() {
    if (
      this.props.values.hospitalName === "" ||
      this.props.values.hospitalLocation === "" ||
      this.props.values.targetAmount === "" ||
      this.props.values.date === "" ||
      this.props.values.medicalAilment === "" ||
      this.props.values.doctorName === "" ||
      this.props.values.doctorNumber === "" ||
      this.props.values.hospitalNumber === ""
    ) {
      document.getElementById("saveAndContinue").disabled = true;
      setTimeout(function () {
        document.getElementById("saveAndContinue").disabled = false;
      }, 1000);
      console.log("Button disabled");
      if (
        this.props.values.hospitalName === "" ||
        this.props.values.hospitalLocation === "" ||
        this.props.values.targetAmount === "" ||
        this.props.values.date === "" ||
        this.props.values.medicalAilment === "" ||
        this.props.values.doctorName === "" ||
        this.props.values.doctorNumber === "" ||
        this.props.values.hospitalNumber === ""
      ) {
        alert(
          "Sorry Sir/Mam, but you cannot proceed further. Please fill all the required details in the form."
        );
      }
    } else {
      document.getElementById("saveAndContinue").disabled = false;
      alert(
        "Make Sure there is green tick against every field or else it can lead to rejection of your form at the end"
      );
      this.changeColor3();
      this.continue();
    }
    //validate function
  }
 

  render() {
    const { handleInputChange} = this.props;
    //This function will coordinate to the errors function and will be in the render part

    return (
      <div>
        {/* <div className="medicalImage"></div> */}
        <img src={pic} className="medicalImage" alt="imageshown" />
        {/* <div className="rectangle2722"></div> */}

        <img src={pic1} className="change" alt="pic1" />
        <img src={pic2} className="change1" alt="sidebar" />
        <div className="polygon1"></div>
        <h1 className="cause">Cause Details</h1>
        <h3 className="target">Target Amount</h3>
        <h3 className="targetR">*</h3>
        <h5 className="small">Should be minimum ₹ 2000</h5>

        <h3 className="end">End Date</h3>
        <h3 className="endR">*</h3>

        <Form>
          <Input
            type="text"
            className="rectangleTarget"
            onChange={handleInputChange}
            // valid={errors.targetAmount === ""}
            // invalid={errors.targetAmount !== ""}
            name="targetAmount"
            id="targetAmount"
            placeholder="How much do you want to raise ?"

            required
          />

          <Input
            type="text"
            className="rectangleEnd"
            name="date"
            id="date"
            placeholder="yy-mm-dd"
            onChange={handleInputChange}

            required
          />
          <Input
            type="text"
            className="rectangleHospital"
            name="hospitalName"
            id="hospitalName"

            placeholder="Enter the hospital name"
            onChange={handleInputChange}

            required
          />
          <Input
            type="text"
            className="rectangleLocation"
            name="hospitalLocation"
            id="hospitalLocation"

            placeholder="Enter the Location"
            onChange={handleInputChange}

            required
          />
          <Input
            type="text"
            className="ailmentLocation"
            name="medicalAilment"
            id="medicalAilment"

            placeholder="Medical Ailment"
            onChange={handleInputChange}


            required
          />
          <Input type="text" className="rectangleSituation" />
          <Input
            type="text"
            className="rectangleDoctor"
            name="doctorName"
            id="doctorName"
    
            placeholder="Enter Doctor's Name"
            onChange={handleInputChange}
            required
          />
          <Input
            type="number"
            className="rectanglephone"
            name="doctorNumber"
            id="doctorNumber"

            placeholder="Enter Doctor's number"


            onChange={handleInputChange}
            required
          />
          <Input
            type="number"
            className="rectanglecontact"
            name="hospitalNumber"
            id="hospitalNumber"
  
            placeholder="Enter Hospital's phone number"

            onChange={handleInputChange}
            required
          />
        </Form>

        <h1 className="hospital">Hospital Details</h1>
        <h3 className="hName">Hospital Name </h3>
        <h3 className="hNameR">*</h3>
        <h3 className="location">Location</h3>
        <h3 className="ailment">Aliment </h3>

        <h3 className="situation">Current situation</h3>

        <h3 className="doctor">Doctor’s Name</h3>
        <div className="backRectangle2">
          <button onClick={this.clickBack} className="back2">
            Back
          </button>
        </div>
        <div className="scRectangle2">
          <button
            onClick={this.clickContinue}
            id="saveAndContinue"
            className="SC2"
          >
            Save & Continue
          </button>
        </div>
        <h3 className="phoneDoctor">Doctor’s Phone no.</h3>
        <h3 className="contactHospital">Contact no.</h3>

        <div className="question2 ">?</div>
        <div className="ellipseQ2"></div>
        <div className="question3 ">?</div>
        <div className="ellipseQ3"></div>
      </div>
    );
  }
}
