import { motion } from "framer-motion";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
const AccountVendor = () => {
  const [value, setValue] = useState()
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">3. Vendor Information</h3>
      <p class="text-muted mb-4">The following information will be reviewed first</p>
      <form>
        <div class="mb-3">
          <label for="streetAddress" class="form-label">Street Address</label>
          <input type="address" class="form-control" id="streetAddress" required="" placeholder="Enter Your Address"/>
        </div>
        <p class="light-under-field-text font-weight-light">Store Number will be used to find your store location.</p>
        <div class="d-flex">
          <div class="mb-3 col-md-6 rm-padding-left">
            <label for="ZipCode" class="form-label">Business Name</label>
            <input type="text" class="form-control" id="ZipCode" required="" placeholder="Food Night"/>
          </div>
          <div class="mb-3 col-md-6 rm-padding-left rm-padding-right">
            <label for="City" class="form-label">Type of Service</label>
            <input type="text" class="form-control" id="City" required="" placeholder="Resturent or Garage"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="streetAddress" class="form-label">Business Number</label>
          <PhoneInput
          country={'us'}
          value={value}
          inputClass="form-control"
          onChange={setValue}
        />
        </div>
        
        
        <p class="light-under-field-text font-weight-light">The above location will be linked to the Store Number.</p>
        <div class="d-grid my-4">
          <button class="btn btn-primary full-width height-10px" type="submit">Finish</button>
        </div>
        <p class="text-2 text-dark text-center mt-4 mb-0"><i class="bi bi-arrow-left"></i> Go Back <a class="fw-500" href="Login.html">Login</a></p>
      </form>
    </motion.div>
  )
}

export default AccountVendor;