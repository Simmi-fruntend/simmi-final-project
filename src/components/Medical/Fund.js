import React, { Component } from "react";
import pic from "../../Assets/image3.png";
import pic1 from "../../Assets/Ellipse2.png";
import pic2 from "../../Assets/Ellipse1.png";
import pic3 from "../../Assets/image4.png";
import pic4 from "../../Assets/Polygon3.png";
import { Link } from "react-router-dom";
import { Form, Input } from "reactstrap";

export default class Fund extends Component {
  continue = () => {
    // e.preventDefault();
    this.props.nextStep();
  };
  previous = () => {
    // e.preventDefault();
    this.props.prevStep();
  };
  changeColor4() {
    document.getElementById("4").style.color = "black";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";

    document.getElementById("8").style.border = "10px solid #FF5F24";
      document.getElementById("6").style.border = "";
      document.getElementById("7").style.border = "";
      document.getElementById("5").style.border = "";
  }
  changeColor2() {
    document.getElementById("4").style.color = "white";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "black";
    document.getElementById("3").style.color = "white";

    document.getElementById("6").style.border = "10px solid #FF5F24";
    document.getElementById("5").style.border = "";
    document.getElementById("7").style.border = "";
    document.getElementById("8").style.border = "";
  }
  clickBack = (e) => {
    e.preventDefault();
    this.changeColor2();
    this.previous();
  };
  clickContinue = (e) => {
    e.preventDefault();
    this.validateButton()
  };
  uploadFiles() {
    document.getElementById("coverPhoto").click();
    console.log("first function called");
  }
  validateButton() {
    if (this.props.values.coverPhoto === null ||
      this.props.values.fundraiserName === "" ||
      this.props.values.story===""){
      
      document.getElementById("saveAndContinue").disabled = true;
      setTimeout(function(){
        document.getElementById("saveAndContinue").disabled = false;
      },1000)
      console.log("Button disabled")
      if(this.props.values.coverPhoto === null ||
      this.props.values.fundraiserName === "" ||
      this.props.values.story===""){
        alert("Sorry Sir/Mam, but you cannot proceed further. Please fill all the required details in the form.")
      } 
    }
    else {
      document.getElementById("saveAndContinue").disabled = false;
      alert("Make Sure there is green tick against every field or else it can lead to rejection of your form at the end")
      this.changeColor4();
      this.continue();

    }
  }

  render() {
    const { handleInputChange,handleFileChange } = this.props;
    return (
      <div>
        <img src={pic} className="medicalImage" alt="imageshown" />
        <div className="rectangle9000"></div>

        <img src={pic1} className="change2" alt="pic1" />
        <img src={pic2} className="change3" alt="sidebar" />
        <div className="polygon2"></div>

        <Form method="post">
          <Input
            type="text"
            onChange={handleInputChange}
            name="fundraiserName"
            id="fundraiserName"
            placeholder="Name your Fundraiser"
            className="fundText"
          />
          <textarea
            className="textArea"
            onChange={handleInputChange}
            name="story"
            id="story"
            cols="37"
            rows="8"
          ></textarea>
          <Input
            type="file"
            name="coverPhoto"
            style={{display:'none'}}
            onChange={handleFileChange}
            id="coverPhoto"
          ></Input>
        </Form>

        <h1 className="fundDetails">Fund Details</h1>
        <button onClick={this.uploadFiles.bind(this)}>
          <img src={pic3} className="Click" alt="main" />
        </button>
        <h3 className="uploadC">Upload a Cover photo</h3>

        <img src={pic4} className="play" alt="main" />
        <h3 className="fundName">Fundraiser Name</h3>

        <h3 className="story">what’s your story ?</h3>

        <div className="preview">
          <button className="previewText">Preview</button>
        </div>

        <h4 className="build">
          <Link to="/">How to build a story</Link>
        </h4>

        <div className="backRectangle3">
          <button onClick={this.clickBack} className="back3">
            Back
          </button>
        </div>
        <div className="scRectangle3">
          <button onClick={this.clickContinue} id='saveAndContinue' className="SC3">
            Raise Your Fund
          </button>
        </div>
      </div>
    );
  }
}
