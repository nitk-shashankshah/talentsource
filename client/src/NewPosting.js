import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
//import {KeyboardDatePicker} from '@material-ui/pickers';
//import { Formik } from 'formik';

class NewPosting extends React.Component {
    constructor(props){
        super(props);
        this.state={
            role: "",
            category: "",
            project: "",
            business: "",
            sponsor: "",
            duration: "",
            workAllocation: "",
            workLocation: "",
            startingDate: "",
            deadlineDate: "",
            targetAudience: "",
            roleDescription: "",

            durationStr: ""
        }
    }

    handleInputChange=(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    
    render(){
        const { role, category, project, business, sponsor, duration, workAllocation, workLocation, startingDate, deadlineDate, targetAudience, roleDescription, durationStr } = this.state;
        return(
            <div className='page-wrapper'>

            {/* heading row */}
            <div className='row'>
              <div className='column'>
                <div className='new-post-heading'>
                    New Posting
                </div>
              </div>
            </div>
            
            {/* row 1 */}
            <div className='row' style={{marginTop:"2rem"}}>
              <div className='column'>
                <div className="new-post-label">
                  Role
                </div>
                <div>
                <OutlinedInput
                    id="roleInput"
                    name="role"
                    value={role}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                />
                </div>
              </div>
              <div class='column'>
                <div className="new-post-label">
                Category
                </div>
                <div>
                <Select
                    id="category-select"
                    name="category"
                    value={category}
                    onChange={this.handleInputChange}
                    variant="outlined"
                    className="new-post-input"
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Internal Job Posting (IJP)">Internal Job Posting (IJP)</MenuItem>
                    <MenuItem value="Short Term Assignment (STA)">Short Term Assignment (STA)</MenuItem>
                    <MenuItem value="Special Project Assignment(SPA)">Special Project Assignment(SPA)</MenuItem>
                </Select>
                </div>
              </div>
              <div class='column'>
                <div className="new-post-label">
                    Project
                </div>
                <div>
                <OutlinedInput
                    id="projectInput"
                    name="project"
                    value={project}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                />
                </div>
              </div>
            </div>

            {/* row 2 */}
            <div className='row' style={{marginTop:"2rem"}}>
              <div className='column'>
                <div className="new-post-label">
                    Business Area
                </div>
                <div>
                <Select
                    id="business-area-select"
                    name="business"
                    value={business}
                    onChange={this.handleInputChange}
                    variant="outlined"
                    className="new-post-input"
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Research & Development">Research &amp; Development</MenuItem>
                    <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                    <MenuItem value="Global Commercial Ops">Global Commercial Ops</MenuItem>
                    <MenuItem value="Global Marketing">Global Marketing</MenuItem>
                </Select>
                </div>
              </div>
              <div className='column'>
                <div className="new-post-label">
                    Sponsor
                </div>
                <div>
                <OutlinedInput
                    id="sponsorInput"
                    name="sponsor"
                    value={sponsor}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                /><br />
                <span className="noteTxt">Provide the sponsor name/Email Address</span>
                </div>
              </div>
              <div className='column'>
                {/* empty column */}
              </div>
            </div>
            
            {/* row 3 */}
           <div className='row' style={{marginTop:"2rem"}}>
              <div className='column'>
                <div className="new-post-label">
                    Duration
                </div>
                <div>
                <OutlinedInput
                    id="duration-input"
                    name="durationStr"
                    value={durationStr}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                    style={{width:"10rem"}}
                />
                <Select
                    id="duration-select"
                    name="duration"
                    value={duration}
                    onChange={this.handleInputChange}
                    variant="outlined"
                    className="new-post-input"
                    style={{width:"9rem",marginLeft:"1rem"}}
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Weeks">Weeks</MenuItem>
                    <MenuItem value="Month">Month</MenuItem>
                    <MenuItem value="Year">Year</MenuItem>
                </Select>
                </div>
              </div>
              <div className='column'>
                <div className="new-post-label">
                    Work Allocation (%)
                </div>
                <div>
                <Select
                    id="work-allocation-select"
                    name="workAllocation"
                    value={workAllocation}
                    onChange={this.handleInputChange}
                    variant="outlined"
                    className="new-post-input"
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={75}>75</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select><br />
                <span className="noteTxt">How much percentage involvement required for this particular
project.</span>
                </div>
              </div>
              <div className='column'>
                <div className="new-post-label">
                    Work Location
                </div>
                <div>
                <span className="new-post-label" style={{width:"3rem"}}>Flexible
                <Checkbox
                    value="secondary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                </span>
                <Select
                    id="work-location-select"
                    name="workLocation"
                    value={workLocation}
                    onChange={this.handleInputChange}
                    variant="outlined"
                    className="new-post-input"
                    style={{width:"14rem",marginLeft:"0.2rem"}}
                    >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                    <MenuItem value="Basel">Basel</MenuItem>
                    <MenuItem value="GreenField">GreenField</MenuItem>
                </Select><br />
                <span className="noteTxt" style={{marginLeft:"6rem"}}>Choose a location if flexible is not selected</span>
                </div>
              </div>
            </div>

            {/* row 4 */}
            <div className='row' style={{marginTop:"2rem"}}>
              <div className='column'>
                <div className="new-post-label">
                    Assignment Starting Date
                </div>
                <div>
                <input type="date"
                    id="start-date-picker"
                    name="startingDate"
                    value={startingDate}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                /><br />
                <span className="noteTxt">MM/DD/YY</span>
                </div>
              </div>
              <div className='column'>
                <div className="new-post-label">
                    Submission Deadline
                </div>
                <div>
                <input type="date"
                    id="deadline-date-picker"
                    name="deadlineDate"
                    value={deadlineDate}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                /><br />
                <span className="noteTxt">MM/DD/YY</span>
                </div>
              </div>
              <div className='column'>
                <div className="new-post-label">
                    Target Audience
                </div>
                <div>
                <OutlinedInput
                    id="targetAudienceInput"
                    name="targetAudience"
                    value={targetAudience}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                /><br />
                <span className="noteTxt">Provide the target employee group whom the posting notification
be send to</span>
                </div>
              </div>
            </div>

            {/* row 5 */}
            <div className='row' style={{marginTop:"2rem", height:"12rem"}}>
              <div className='column'>
                <div className="new-post-label">
                    Role Description
                </div>
                <div>
                <TextField
                    id="roleDescriptionInput"
                    name="roleDescription"
                    value={roleDescription}
                    onChange={this.handleInputChange}
                    className="new-post-input"
                    multiline
                    rows="7"
                    variant="outlined"
                    style={{width:"75rem"}}
                />
                </div>
              </div>
            </div>
            
            {/* action button */}
            <div className='row' style={{marginTop:"2rem"}}>
              <div className='column'>
                <div style={{textAlign: "center", marginTop: "1rem",marginBottom: "1rem"}}>
                <Button variant="contained" className='new-post-action' style={{marginRight:"4rem"}}>
                    SAVE DRAFT
                </Button>
                <Button variant="contained" className='new-post-action' style={{marginRight:"4rem"}}>
                    PREVIEW
                </Button>
                <Button variant="contained" className='new-post-action'>
                    PUBLISH
                </Button>
                </div>
              </div>
            </div>
            
          </div>
        );
    }
}
export default NewPosting;