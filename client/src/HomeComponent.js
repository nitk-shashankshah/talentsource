import React from 'react';
import './App.css';
import { Formik } from 'formik';

class Home extends React.Component {

    state = {
        response: '',
        post: '',
        responseToPost: '',
      };
      
      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
      
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };
      
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/createJob', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
      };
      
    render() {
        return (
          <div className="App">
            <p>{this.state.response}</p>

            <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <p>
          <label>
          Project/Assignment Name          
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </label>
          </p>
          <p>
          <label>
          Assignment Duration
          <select
            name="duration"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          >
            <option>
               6 months
            </option>
            <option>
               1 year
            </option>
          </select>
          {errors.password && touched.password && errors.password}
          </label>
          </p>
          <p>
          <label>
          Sponsor
          <input
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          </label>
          </p>
          <p>
          <label>
          Posting Status
          <select
            name="status"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          >
            <option>
              Open
            </option>
            <option>
               Released
            </option>
          </select>
          {errors.password && touched.password && errors.password}
          </label>
          </p>
          <p>
          <label>
          Business Value
          <textarea
            name="business_value"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          </label>
          </p>
          <p>
          <label>
          Contact Person
          <input
            name="contact_person"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          </label>
          </p>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>



            <form onSubmit={this.handleSubmit}>
              <p>
                <strong>New Posting</strong>
              </p>

              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />


              <button type="submit">Submit</button>
            </form>
            <p>{this.state.responseToPost}</p>
            {this.props.children}
          </div>
        );
      }
 }
 export default Home;