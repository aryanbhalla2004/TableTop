import { motion } from "framer-motion";
import { useOutletContext, useNavigate } from "react-router-dom";

const AccountType = () => {
  const [userInput, setUserInput] = useOutletContext();
  const history = useNavigate();
  const onAccountSection = (name) => {
    setUserInput(prevInput => ({
      ...prevInput, accountType: name
    }));

    history("/auth/signup/account-information");
  }
  

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">1. Choose Your Account Type</h3>
      <p class="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p>
      <form>
        <div class="card-selection" onClick={() => onAccountSection('Vendor')}>
          <span class="mx-3"><i class="bi bi-building"></i> Vendor/Business Account</span>
          <i class="bi bi-chevron-right"></i> 
        </div>
        <div class="card-selection mt-3" onClick={() => onAccountSection('Regular')}>
          <span class="mx-3"><i class="bi bi-person"></i> Regular Account</span>
          <i class="bi bi-chevron-right"></i>
        </div>
        <p class="text-2 text-dark text-center mt-4 mb-0"><i class="bi bi-arrow-left"></i> Go Back</p>
      </form>
    </ motion.div>
  )
} 

export default AccountType;