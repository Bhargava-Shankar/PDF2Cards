import { useContext,useRef, useState } from 'react';
import { formContext } from '../contexts/ContextProvider';
import uploadLogo from "/assets/uploadLogo.svg"
import fileLogo from "/assets/fileLogo.svg"
import deleteLogo from "/assets/deleteLogo.svg"

import "./css/FileForm.scss"
const FileForm = () => {
    const { handleSubmit, onSubmit, register } =
        useContext<any>(formContext);
    const inputRef = useRef<any>();
    const [fileName, setFileName] = useState<string | null>(null);
    const handleChange = (e: any): void => {
        setFileName(e.target?.files[0].name);
    }
  return (
      <>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="upload">
              <div className="upload__upload-box">
                  <div className="upload__upload-logo">
                      <img src={uploadLogo} alt="" />
                      <div className='title'>Upload Your File Here</div>
                          <p>File supported: .pdf</p>
                        <div className="upload__browse">
                            <label htmlFor="file">Browse</label>
                              <input type="file" ref={inputRef}
                                  {...register("file")} id="file"
                                onChange={handleChange}
                            />
                        </div>
                  </div> 
                      {
                          fileName ? <div className="file">
                          <img className="fileLogo" src={fileLogo} />
                          <div className="file-name">{fileName}</div>
                          <div className='file-size'></div>
                          <img src={deleteLogo} className='deleteLogo' alt="" />
                      </div> : <div></div>
                      }
                    <div className="upload__submit-box" >
                        <label htmlFor="submit">SUBMIT</label>
                        <input type="submit" id='submit'/>
                    </div>
              </div>
                  
              </div>    
          </form>

      </>
  )
}

export default FileForm
