import { useContext,useRef, useState } from 'react';
import { formContext } from '../contexts/ContextProvider';
import uploadLogo from "/assets/uploadLogo.svg"
import fileLogo from "/assets/fileLogo.svg"
import deleteLogo from "/assets/deleteLogo.svg"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import "./css/FileForm.scss"
const FileForm = () => {
    const { handleSubmit, onSubmit, register } =
        useContext<any>(formContext);
    const inputRef = useRef<any>();
    const [fileName, setFileName] = useState<string | null>(null);
    const handleChange = (e: any): void => {
        console.log(e.target);
        setFileName(e.target?.files[0].name);
    }
    const navigate = useNavigate();
  return (
      <>
          <div className='upload-container'>
              <form onSubmit={() => {
                  handleSubmit(onSubmit)
              }} className="upload">
                  <div className="upload__upload-content">
                      <img src={uploadLogo} alt="" />
                      <div>Upload Your File Here</div>
                      <p>Supported Formats: .pdf</p>
                  </div>
                  <div className="upload__file-input" ref={inputRef} onChange={handleChange}>
                      <label htmlFor="file">Browse</label>
                      <input {...register("file")} type="file" id="file"   
                    />
                  </div>
                  {
                      fileName ? <div className="upload__uploaded-file">
                   
                        <img src={fileLogo} className="fileLogo" alt="" />
                     
                          <div className="fileName">
                              {fileName}
                          </div>
                              <img src={deleteLogo} alt="" className="deleteLogo" />
                       
                      </div> : <div></div>
                  }
                  
                  <div className="upload__submit">
                      
                      <label htmlFor="submit-btn" >SUBMIT
                      </label>
                      <input type="submit" id="submit-btn" />
                  </div>

              </form>
          </div>
              

      </>
  )
}

export default FileForm
