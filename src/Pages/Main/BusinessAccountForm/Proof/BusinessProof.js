import React from 'react'
import {  getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { useState } from 'react';

const BusinessProof = (props) => {
  const submit = () => {

    if(props.BusinessForm.one != "" && props.BusinessForm.two != "") {
      props.NextStep('three', 'four');
    } else {
      if(props.BusinessForm.one === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, one: true
        }));
      }

      if(props.BusinessForm.two === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, two: true
        }));
      }
    }
  }

  const [loading, setLoading] = useState({
    one: false,
    two: false,
  });

  const uploadFile = (e, item) => {
    props.SetFieldError(prevInput => ({
      ...prevInput, [item]: false
    }));
    setLoading(prevInput => ({
      ...prevInput, [item]: true
    }));
    props.SetFileStatus(prevInput => ({
      ...prevInput, [item]: false
    }));
    const name =  e.target.value.split('\\')[ e.target.value.split('\\').length - 1];
    const storage = getStorage();
    const storageRef = ref(storage, `Business Inquires/`+ `${props.BusinessForm.businessNumber && props.BusinessForm.businessNumber}/` + name);
    const file = e.target.files[0];
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    // switch (snapshot.state) {
    //   case 'paused':
    //     console.log('Upload is paused');
    //     break;
    //   case 'running':
    //     console.log('Upload is running');
    //     break;
    // }
    }, 
    (error) => {
      setLoading(prevInput => ({
        ...prevInput, [item]: false
      }));

      props.SetFileStatus(prevInput => ({
        ...prevInput, [item]: false
      }));

      props.SetError(prevInput => ({
        ...prevInput, [item]: true
      }));
    }, 
    () => {
      props.SetFileStatus(prevInput => ({
        ...prevInput, [item]: true
      }));

      setLoading(prevInput => ({
        ...prevInput, [item]: false
      }));

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        props.SetBusinessForm(prevInput => ({
          ...prevInput, [item]: downloadURL
        }));
      });
    }
  );
  }

  return (
    <form className="form-container" id="form-location">
      <div className='submition-preview'>
        <h4>Provide Business Ownership Documents</h4>
        <p>To confirm you legally own the business and verify your identity we need the documents listed below. Please upload digital photo/files of the following documents. Your documents are safe with us, we have multiple security layers that protect you documents.</p>
      </div>
      <div className='documents-upload'>
        <div className='single-doc'>
          <div className='status-container'>
            {props.FilesStatus && !props.FilesStatus.one && <p className='warning'><i class="bi bi-clock"></i> Pending</p>}  
            {props.FilesStatus && props.FilesStatus.one && <p className='done-uploaded'><i class="bi bi-check-circle"></i> Uploaded</p>}      
          </div>
          <div className='file-shadow-box'>
            {!loading.one && (!props.FilesStatus.one ? <i class="bi bi-file-earmark-lock"></i> : <i class="bi bi-check2-circle"></i>)}
            {loading.one && <div class="spinner-border text-primary mt-3 mb-3" role="status"><span class="sr-only">Loading...</span></div>}
          </div>
          <div class="mb-1 mt-2 scale-down1">
            <label for="formFile" className="small-lable">Identity / Address Proof</label>
            <input class="form-control" type="file" id="formFile" onChange={(e) => uploadFile(e, "one")} accept="application/pdf"/>
          </div>
        </div>
        <div className='single-doc'>
          <div className='status-container'>
          {props.FilesStatus && !props.FilesStatus.two && <p className='warning'><i class="bi bi-clock"></i> Pending</p>}             
          {props.FilesStatus && props.FilesStatus.two && <p className='done-uploaded'><i class="bi bi-check-circle"></i> Uploaded</p>}  
          </div>
          <div className='file-shadow-box'>
            {!loading.two && (!props.FilesStatus.two ? <i class="bi bi-file-earmark-lock"></i> : <i class="bi bi-check2-circle"></i>)}
            {loading.two && <div class="spinner-border text-primary mt-3 mb-3" role="status"><span class="sr-only">Loading...</span></div>}
          </div>
          <div class="mb-1 mt-2 scale-down1">
            <label for="formFile" className="small-lable">Business Proof</label>
            <input class="form-control" type="file" id="formFile" onChange={(e) => uploadFile(e, "two")} accept="application/pdf"/>
          </div>
        </div>
      </div>
      {props.FieldError.one && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please upload Identity/Address Proof documents before continue.</div>}
      {props.FieldError.two && <div id="validationServer03Feedback" className="mt-0 mb-5 error-message">Please upload Business Proof documents before continue.</div>}
      <div className='action-button-form-btns'>
        <p>Upload the documents by clicking on the buttons in the box.</p>
        <div>
          <a onClick={() => props.BackStep('two')}>Go Back</a>
          <a className="ghost-button-home" onClick={submit}>Complete</a>
        </div>
      </div>
    </form>
  )
}

export default BusinessProof;