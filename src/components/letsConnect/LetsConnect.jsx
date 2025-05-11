import React from 'react'

const LetsConnect = () => {
  return (
    <>
      <section>
        <div class="container">
            <h2 class="section-title"> Let’s Connect </h2>

            <div class="wrapper_contact">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="contact-form mb-3">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="inputForm p-2">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./src/assets/connect/username.png" class="img-fluid" alt="" />
                                            </span>
                                            <input type="text" class="form-control" placeholder="Name" aria-label="Name"
                                                aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-6">
                                    <div class="inputForm p-2">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./src/assets/connect/phone.png" class="img-fluid" alt="" />
                                            </span>
                                            <input type="tel" class="form-control" placeholder="Phone number"
                                                aria-label="Phone number" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="inputForm p-2">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./src/assets/connect/email.png" class="img-fluid" alt="" />
                                            </span>
                                            <input type="email" class="form-control" placeholder="Email address"
                                                aria-label="Phone number" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="inputForm p-2">
                                        <div class="input-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Write  your message here!"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="contact-img mb-3 ms-1 ms-md-4">
                            <img src="./src/assets/connect/connect-img.png" alt="contact image" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    </>
  )
}

export default LetsConnect;
