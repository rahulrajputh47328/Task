import React, { useRef, useState } from 'react';

const Student = () => {
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        profilePic: '',
        video: '',
      });
      const [profilePic, setProfilePic] = useState("");
      const [video, setVideo] = useState("");
      const [gridBody, setGridBody] = useState(false)

      const nameRef = useRef();
      const classRef = useRef();
      const photoRef = useRef();
      const videoRef = useRef();

    
      const handleSubmit = () => {
        if(nameRef.current.value && classRef.current.value && profilePic && video){setGridBody(true)
        setFormData({...formData,name:nameRef.current.value, class: classRef.current.value, profilePic: profilePic, video: video})
        
        nameRef.current.value = "";
        classRef.current.value = "";
        photoRef.current.value = "";
        videoRef.current.value = "";}
        
      };

      const clearingForm = () => {
        nameRef.current.value = "";
        classRef.current.value = "";
        photoRef.current.value = "";
        videoRef.current.value = "";
      }

      const editField = () => {
        nameRef.current.value = formData.name;
        classRef.current.value = formData.class;
      }
    
      const deletingEntry = () => {
        setFormData({...formData, name:"", class:"", profilePic:"", video:""})
        setGridBody(false)
        setVideo("")
        setProfilePic("")
      }

      return (
        <div>
          <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' ref={nameRef}/>
            </div>
            <div>
                <label htmlFor='class'>Class</label>
                <input id='class' type='text' ref={classRef}/>
            </div>
            <div>
                <label htmlFor='photo'>Photo</label>
                <input id='photo' type='file' ref={photoRef} onChange={()=>{
                    let selectedFileURL = URL.createObjectURL(photoRef.current.files[0]);
                    setProfilePic(selectedFileURL)
                }}/>
            </div>
            <div>
                <label htmlFor='video'>Video</label>
                <input id='video' type='file' ref={videoRef} onChange={()=>{
                    let selectedFileURL = URL.createObjectURL(videoRef.current.files[0]);
                    setVideo(selectedFileURL)
                }}/>
            </div>
            <div>
                <button type='button' onClick={() => handleSubmit()}>Save</button>
                <button type='button' onClick={() => clearingForm()}>Cancel</button>
            </div>
          </form>
          <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Photo</th>
                        <th>Vedio</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {gridBody && <tbody>
                    <tr>
                        <td>{formData.name}</td>
                        <td>{formData.class}</td>
                        <td><img src={formData.profilePic} alt="" width="100px" height="100px"></img></td>
                        <td><video src={formData.video} controls autoPlay  width="120px" height="100px"></video></td>
                        <td>
                            <button onClick={() => editField()}>Edit</button>
                            <button onClick={() => deletingEntry()}>Delete</button>
                        </td>
                    </tr>
                </tbody>}
            </table>
          </div>
        </div>
      );
    };

export default Student;

