import React from 'react';
import makeup from '../assets/images/natural-makeup-layed-out.jpg'

import '../appointment.css'

function AppointmentPage() {
    return (
        <main id="appt-main">
            <div className="flex-container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Schedule</h1>
                        <form className="appt-form">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Name</label>
                                <input type="name" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
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