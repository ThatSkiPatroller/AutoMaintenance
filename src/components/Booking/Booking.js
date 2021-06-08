import React, { Fragment, useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { DatePicker } from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {Button,Card, CardTitle,Col,Container,Form,FormGroup,Input,Jumbotron,Label,Modal, ModalHeader, ModalBody,
    Row
  } from "reactstrap";
// pick a date util library
import initialTimeSlots from "../../initialTimeSlots.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';
import { Checkbox } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';


  const Booking = () => {

    var isOvernightDelivery = false
    var startTime = ""
    var endTime = ""
    var date = ""

    const [checkOverNight, setCheckOverNight] = React.useState(true);
        const [state, dispatch] = useReducer(
        (state, action) => {
          switch (action.type) {
            case "inputChange":
              return { ...state, [action.fieldName]: action.fieldValue };
            case "bookTimeSlot":
              return {
                ...state,
                timeslots: state.timeslots.map(timeslot => {
                  if (timeslot.id !== state.timeslotID) {
                    return timeslot;
                  }
                  return {
                    ...timeslot,
                    booked: true,
                    contactName: state.contactName,
                    contactPhone: state.contactPhone,
                    contactDate: state.contactDate,
                    contactStartTime:state.startTime,
                    contactEndTime: state.endTime
                  };
                })
              };
            case "closeBookingModal":
              return {
                ...state,
                bookingModalStatus: "closed",
                timeslotID: null,
                contactName: "",
                contactPhone: ""
              };
            case "openBookingModal":
              return {
                ...state,
                bookingModalStatus: "opened",
                timeslotID: action.timeslotID
              };
            case "closeReviewingModal":
              return {
                ...state,
                reviewingModalStatus: "closed",
                timeslotID: null,
                contactName: "",
                contactPhone: ""
              };
            case "openReviewingModal":
              const { contactName, contactPhone } = state.timeslots.find(
                ({ id }) => id === action.timeslotID
              ) || { contactName: "y", contactPhone: "u" };
              return {
                ...state,
                reviewingModalStatus: "opened",
                timeslotID: action.timeslotID,
                contactName,
                contactPhone
              };
            default:
              return state;
          }
        },
        {
          timeslots: initialTimeSlots,
          bookingModalStatus: "closed",
          reviewingModalStatus: "closed",
          contactName: "",
          contactPhone: "",
          timeslotID: null
        }
      );
        const {
        timeslots,
        bookingModalStatus,
        reviewingModalStatus,
        contactName,
        contactPhone,
        contactDescription,
        contactStartTime,
        contactEndTime,
        contactDate,
        contactIsOvernight
         } = state;
    
        function onCloseBookingModal(e) {
            dispatch({ type: "closeBookingModal" });
        }
        function handleDayChange(day) {
          date = day
        }

        function onOpenBookingModal(e) {
            const timeslotID = parseInt(e.target.getAttribute("data-timeslot-id"), 10);
            var sTime= e.target.getAttribute("data-timeslot-start-time");
            var eTime = e.target.getAttribute("data-timeslot-end-time");
            var isOvernight  = e.target.name
            alert(sTime)
            alert(eTime)
            alert(isOvernight)
            alert(date)
            dispatch({ type: "openBookingModal", timeslotID });            
        }
        function onCloseBookingModal() {
            dispatch({ type: "closeBookingModal" });
        }
        function onOpenReviewingModal(e) {
            const timeslotID = parseInt(e.target.getAttribute("data-timeslot-id"), 10);
            dispatch({ type: "openReviewingModal", timeslotID });
        }
       
        function onCloseReviewingModal() {
            dispatch({ type: "closeReviewingModal" });
        }
    
        function onFormFieldChange(e) {
            dispatch({
            type: "inputChange",
            fieldName: e.target.name,
            fieldValue: e.target.value
            });
        }
        
      function onBookTimeSlot(e) {
        e.preventDefault();
        if (contactName === "") {
          return;
        } else if (contactPhone === "") {
          return;
        }
       
        alert("over" + startTime)
        alert("startt" + endTime)

        dispatch({ type: "bookTimeSlot" });
        dispatch({ type: "closeBookingModal" });
      }
      function onUpdateTimeSlot(e) {
        e.preventDefault();
        dispatch({ type: "bookTimeSlot" });
        dispatch({ type: "closeReviewingModal" });
      }
      const FORMAT = 'MM/DD/YYYY';

      return (
    <React.Fragment>
      <Jumbotron className="text-sm-left text-md-center">
        <Container>
          <Row>
          <label htmlFor="appointmentDate">Appointment Date</label>
          <p className="lead">Tap or click on an available timeslot below to book an appointment.{" "} Time slots marked in <span className="red-text">red</span> are already booked. </p>
          </Row>
          <Row className="date">
          <DayPickerInput formatDate={formatDate}
          format={FORMAT} onDayChange={handleDayChange}  dayPickerProps={{  disabledDays: [new Date(6 ,12, 2021), { daysOfWeek: [0, 6] }],
            }} initialMonth={new Date(6, 2021)} placeholder={`${formatDate(new Date(), "MM/DD/YYYY")}`}/>
          </Row>
        </Container>
        <Row>
            <Button onClick={onOpenBookingModal} name="true" > Make it overnight </Button>
        </Row> 
        {

      <div>
          {timeslots.map(({ id, startTime, endTime, booked }) => {
              return (
                <Row>
                <Button onClick={onOpenBookingModal} name="false" data-timeslot-start-time={startTime} data-timeslot-end-time={endTime}> {`${startTime} - ${endTime}`}</Button>
                </Row> 
              );
            }
          )}
        <Modal isOpen={bookingModalStatus === "opened"}  toggle={onCloseBookingModal}  className="bookingModal">
          <ModalHeader toggle={onCloseBookingModal}>
            Please Enter Your Contact Information. In case,if you have picked up overnight delivery your car will be picked up by 10:00 PM and return before 6:00 AM
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onBookTimeSlot}>
              <FormGroup>
                <Label for="contactName">Your Name</Label>
                <Input  type="text" name="contactName" id="contactName" placeholder="First and Last Name" onChange={onFormFieldChange} value={contactName}/>
              </FormGroup>
              <FormGroup>
                <Label for="contactPhone">Your Phone Number</Label>
                <Input type="tel" name="contactPhone" id="contactPhone" placeholder="1-(555)-555-5555" onChange={onFormFieldChange} value={contactPhone}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactdescription">Description for service needed </Label>
                <Input type="text" name="contactDescription" id="contactDescription" placeholder="" onChange={onFormFieldChange} value={contactDescription}
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                className="mx-1"
                onClick={onBookTimeSlot}
              >
                Book This Time Slot
              </Button>
              <Button
                color="secondary"
                className="mx-1"
                onClick={onCloseBookingModal}
              >
                Nevermind
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={reviewingModalStatus === "opened"}
          toggle={onCloseReviewingModal}
          className="reviewingModal"
        >
          <ModalHeader toggle={onCloseReviewingModal}>
            Update Your Contact Information.
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onUpdateTimeSlot}>
              <FormGroup>
                <Label for="contactName2">Your Name</Label>
                <Input
                  type="text"
                  name="contactName"
                  id="contactName2"
                  placeholder="First and Last Name"
                  onChange={onFormFieldChange}
                  value={contactName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactPhone2">Your Phone Number</Label>
                <Input
                  type="tel"
                  name="contactPhone"
                  id="contactPhone2"
                  placeholder="1-(555)-555-5555"
                  onChange={onFormFieldChange}
                  value={contactPhone}
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                className="mx-1"
                onClick={onUpdateTimeSlot}
              >
                Save Updates
              </Button>
              <Button
                color="secondary"
                className="mx-1"
                onClick={onCloseReviewingModal}
              >
                Nevermind
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
     
      }
       </Jumbotron>
      </React.Fragment>
  );
}

export default Booking;
