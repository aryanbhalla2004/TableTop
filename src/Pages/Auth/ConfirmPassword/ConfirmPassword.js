import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const ConfirmPassword = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">Create New Password</h3>
      <p class="text-muted mb-4">Enter the email address or mobile number associated with your account.</p>
      <form>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">New Password</label>
          <input type="password" class="form-control" id="emailAddress" required="" placeholder="Enter New Password" />
        </div>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">Verify New Password</label>
          <input type="password" class="form-control" id="emailAddress" required="" placeholder="Confirm New Password" />
        </div>
        <div class="d-grid my-4">
          <button class="btn btn-primary full-width height-10px" type="submit">Continue</button>
       </div>
        <p class="text-2 text-dark">Return to <Link class="fw-500" to="/auth/login">Login</Link></p>
      </form>
    </motion.div>
  )
}

export default ConfirmPassword;