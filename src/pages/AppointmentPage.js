import React from 'react';
import makeup from '../assets/images/natural-makeup-layed-out.jpg'

import '../appointment.css'

function AppointmentPage() {
    return (
        <main id="appt-main">
            <div className="flex-container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="text-center">SCHEDULE</h1>
                        <h4 className="text-center">Make an appointment with me!</h4>
                        <form className="appt-form">
                            <div class="mb-3 row">
                                <div className="col">
                                    <label>First Name</label>
                                    <input type="name" class="form-control" />
                                </div>
                                <div className="col">
                                    <label className="col">Last Name</label>
                                    <input type="name" class="form-control" />
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <label for="services">What services would you like?</label>
                                <select name="services" id="services" className="form-control">
                                    <option value="Hair">Hair</option>
                                    <option value="Makeup">Makeup</option>
                                    <option value="Group-Event">Group Event</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Details</label>
                                <textarea placeholder="Please give me as many details as you can about what you would like me to do for you!" class="form-control" />
                            </div>

                            <button type="submit" class="btn contact-btn">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4 booking-img-div" id="appt-img">
                        <img src={makeup} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AppointmentPage;