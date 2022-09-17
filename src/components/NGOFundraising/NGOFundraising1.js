import React, { Component } from "react";
import NGOFundraisingInitiate from "./NGOFundraising2";
import '../NGOFundraising/CSS/NGOFUNDRAISING.css'

import axios from "axios";
import NgoCampaign from "../NGOFundraising/ngoCampaign";


export default class NGOFundraisingProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      aim: "",
      ending_date: "",
      step: 1,
      checkbox: false,
      dataCampaign:[],
      isAllClicked:false
    };
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    console.log(this.state.step);
  };

  //previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    console.log(this.state.step);
  };

  changeColor(){
    
    document.getElementById("one").style.textDecoration = "underline";
    document.getElementById("two").style.textDecoration = "";
    document.getElementById("three").style.textDecoration = "";
    document.getElementById("four").style.textDecoration = "";
    document.getElementById("five").style.textDecoration = "";
  }
  changeColor1(){
    
    document.getElementById("two").style.textDecoration = "underline";
    document.getElementById("one").style.textDecoration = "";
    document.getElementById("three").style.textDecoration = "";
    document.getElementById("four").style.textDecoration = "";
    document.getElementById("five").style.textDecoration = "";
  }
  changeColor2(){
    
    document.getElementById("three").style.textDecoration = "underline";
    document.getElementById("one").style.textDecoration = "";
    document.getElementById("two").style.textDecoration = "";
    document.getElementById("four").style.textDecoration = "";
    document.getElementById("five").style.textDecoration = "";
  }
  changeColor3(){
    
    document.getElementById("four").style.textDecoration = "underline";
    document.getElementById("one").style.textDecoration = "";
    document.getElementById("two").style.textDecoration = "";
    document.getElementById("three").style.textDecoration = "";
    document.getElementById("five").style.textDecoration = "";
  }
  changeColor4(){
    
    document.getElementById("five").style.textDecoration = "underline";
    document.getElementById("one").style.textDecoration = "";
    document.getElementById("two").style.textDecoration = "";
    document.getElementById("three").style.textDecoration = "";
    document.getElementById("four").style.textDecoration = "";
  }
 
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  campaignCards = async (e) => {
    e.preventDefault();
    this.changeColor();
    const res = await axios.get(
      "http://127.0.0.1:8000/api/campaigns/",
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyMDQyMTMwLCJpYXQiOjE2NjIwNDE4MzAsImp0aSI6Ijk4MzVmNmJlZWNlNjQ1YWU5N2FlNDkzMTQ3OTBjZDRiIiwidXNlcl9pZCI6MX0.tHjE6mJH2CuQnEep-gkxahHjoVP37jEnABLSOgUTHQg",
        },
      }
    );
    console.log(res.data);
    this.setState({
      dataCampaign: res.data,
      isAllClicked: true,
    });
  };
  render() {
    const { title, step, aim, ending_date, checkbox } = this.state;
    const values = { title, aim, ending_date, checkbox };
    switch (step) {
      case 1:
        return <>
          <h1 className="heading">Help to raise funds for an NGO</h1>
          <div className="rec2731"></div>
          <button className="buttonAll text-3xl" onClick={this.campaignCards} id="one">All</button>
          <button className="buttonEducation" onClick={this.changeColor1} id="two">Education</button>
          <button className="buttonChildren" onClick={this.changeColor2} id="three">Children</button>
          <button className="buttonWomen" onClick={this.changeColor3} id="four">Women Empowerment</button>
          <button className="buttonHealthcare" onClick={this.changeColor4} id="five">Healthcare</button>

          <h3 className="projects">Identified Projects</h3>
          <h5 className="projectsSub">Please select the NGO projects who needs your help</h5>
          <a href='/' className="popular">Most Popular</a>
          <h3 className="moreResults">Show More Results</h3>

          {/* get dyanmic code here */}
          {this.state.isAllClicked && (
          <div className="container">
            <div className="row">
              {this.state.dataCampaign.map((element) => {
                return (
                  <div className="col-md-4" key={element.id}>
                    <NgoCampaign
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : ""
                      }
                    
                      category_tag={element.category_tag}
                      cover_photo={element.cover_photo}
                      ngo_name={element.ngo_name}
                      ngo_logo={element.ngo_logo}
                      current_amount_raised={element.current_amount_raised}
                      aim={element.aim}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        </>;
      case 2:
        return (
          <>
            <NGOFundraisingInitiate
              nextStep={this.nextStep}
              handleInputChange={this.handleInputChange}
              values={values}
              prevStep={this.prevStep}
            />
          </>
        );
      default:
        return <div></div>;
    }
  }
}
