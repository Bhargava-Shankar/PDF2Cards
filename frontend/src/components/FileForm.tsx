import { useContext,useRef, useState } from 'react';
import { formContext } from '../contexts/ContextProvider';
import uploadLogo from "/assets/uploadLogo.svg"
import fileLogo from "/assets/fileLogo.svg"
import deleteLogo from "/assets/deleteLogo.svg"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import "./css/FileForm.scss"
const Submit = () => {
    const navigate = useNavigate();
    return (
        <div className="upload__submit"> 
            <label htmlFor="submit-btn" >SUBMIT
            </label>
            <input type="submit" id="submit-btn" />
        </div>
   )
}
//COMPONENT START 
const FileForm = () => {
    const { handleSubmit, cardList} =
        useContext<any>(formContext);
    const inputRef = useRef<any>();
    const [file, setFile] = useState<any>();
    const handleChange = (e: any): void => {
        console.log(e.target);
        setFile(e.target?.files[0]);
    }
    const navigate = useNavigate();
  return (
      <>
          <div className='upload-container'>
              <form onSubmit={async (e) => {
                  await handleSubmit(e,file);
                  console.log(cardList);
                  navigate("/cards", cardList);
              }} className="upload">
                  <div className="upload__upload-content">
                      <img src={uploadLogo} alt="" />
                      <div>Upload Your File Here</div>
                      <p>Supported Formats: .pdf</p>
                  </div>
                  <div className="upload__file-input" ref={inputRef} onChange={handleChange}>
                      <label htmlFor="file">Browse</label>
                      <input type="file" id="file"/>
                  </div>
                  {
                      file?.name ? <div className="upload__uploaded-file">
                        <img src={fileLogo} className="fileLogo" alt="" />
                          <div className="fileName">
                              {file?.name}
                          </div>
                              <img src={deleteLogo} alt="" className="deleteLogo" />
                      </div> : <div></div>
                  }
                  <Submit></Submit>
              </form>
          </div>
              

      </>
  )
}

export default FileForm
