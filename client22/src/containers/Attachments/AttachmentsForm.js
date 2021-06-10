// // Importing React since we are using React.
// import React from 'react';
// // Importing UI components from material-ui-next
// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField';
// import Card, { CardContent } from 'material-ui/Card';
// import { withStyles } from 'material-ui/styles';
// import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';
// // Import react-drop-to-upload component
// // https://www.npmjs.com/package/react-drop-to-upload
// // import DropToUpload from 'react-drop-to-upload';

// const styles = {
//   textField: {
//     marginTop: 50,
//   },
//   // Tell Material-UI what's the font-size on the html element is.
//   typography: {
//     htmlFontSize: 40,
//   },
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     borderStyle: 'solid',
//     borderWidth: 4,
//     borderColor: '#007AC1',
//   },
//   formControl: {
//     minWidth: 120,
//     marginTop: 30,
//   },
//   button: {
//     marginTop: 40,
//     padding: 15,
//     backgroundColor: '#007AC1',
//     color: 'white',
//   },
//   dragndrop: {
//     borderStyle: 'dashed',
//     padding: 35,
//     marginTop: 35,
//     textAlign: 'center',
//   },
// };

// class AttachmentsForm extends React.Component {
//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <Card className={classes.root}>
//           <CardContent>
//             <Typography gutterBottom variant="headline" component="h2">
//               Add attachment
//             </Typography>
//             <form noValidate autoComplete="off">
//               {/* <FormControl className={classes.formControl} fullWidth>
//                 <InputLabel htmlFor="select-doctor-dropdown">Select a doctor</InputLabel>
//                 <Select
//                   value={this.props.labDoctor}
//                   onChange={this.props.handleLabDoctorChange}
//                   inputProps={{
//                     doctor: '',
//                     id: 'select-doctor',
//                   }}
//                 >
//                   <MenuItem value="" />
//                   <MenuItem value="Pain">Dr. Pain</MenuItem>
//                   <MenuItem value="Joins">Dr. Jones</MenuItem>
//                   <MenuItem value="Johnson">Dr. Johnson</MenuItem>
//                   <MenuItem value="Smith">Dr. Smith</MenuItem>
//                   <MenuItem value="Phil">Dr. Phil</MenuItem>
//                   <MenuItem value="J"></MenuItem>Dr. J</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </Select>
//               </FormControl> */}
              
//               <FormControl className={classes.formControl} fullWidth>
//                 <InputLabel htmlFor="select-doctor">Select a doctor</InputLabel>
//                 <TextField
//                   id="select-doctor-dropdown"
//                   type="text"
//                   className={classes.textField}
//                   InputLabelProps={{
//                       shrink: true,
//                   }}
//                   value={this.props.attachmentDoctor}
//                   onChange={this.props.handleAttachmentDoctorChange}
//                 />
//               </FormControl>

//               <FormControl className={classes.formControl} fullWidth>
//                 <InputLabel htmlFor="lab-date">Date</InputLabel>
//                 <TextField
//                   id="lab-date"
//                   type="date"
//                   defaultValue="MM-DD-YYYY"
//                   className={classes.textField}
//                   InputLabelProps={{
//                       shrink: true,
//                   }}
//                   value={this.props.attachentDate}
//                   onChange={this.props.handleAttachmentDateChange}
//                 />
//               </FormControl>

//               <FormControl className={classes.formControl} fullWidth>
//                 <InputLabel htmlFor="lab-subject">Subject</InputLabel>
//                 <TextField
//                   id="lab-subject"
//                   type="text"
//                   className={classes.textField}
//                   InputLabelProps={{
//                       shrink: true,
//                   }}
//                   value={this.props.attachmentSubject}
//                   onChange={this.props.handleAttachmentSubjectChange}
//                 />
//               </FormControl>

//               {/* <DropToUpload
//                 onDrop={this.handleDrop}
//                 className={classes.dragndrop}
//               >
//               Drop file here to upload
//               </DropToUpload> */}

//               <Button size="large" color="primary" variant="raised" className={classes.button} onClick={this.props.handleFormSubmit}>
//                 Add attachment
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(AttachmentsForm);
