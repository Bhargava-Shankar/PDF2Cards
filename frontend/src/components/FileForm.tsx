import { useContext } from 'react';
import { formContext } from '../contexts/ContextProvider';
import uploadLogo from "/assets/uploadLogo.svg"
import "./css/FileForm.scss"
const FileForm = () => {
    const { handleSubmit, onSubmit, register } =
        useContext<any>(formContext);
  return (
      <>
          <div className="upload">
              <div className="upload__upload-box">
                  <div className="upload__upload-logo">
                      <img src={uploadLogo} alt="" />
                      <div className='title'>Upload Your File Here</div>
                      <p>File supported: .pdf</p>
                  </div>
                  <div className='or'>
                      OR
                  </div>
                  <div className="upload__choose-file">
                      <label htmlFor="file">Browse</label>
                      <input type="file" {...register("file")} id="file" />
                  </div>
              </div>
          </div>    

      </>
  )
}

export default FileForm
