import React, { Component } from "react";
import {storage} from './firebase/index'
import FileUploader from "react-firebase-file-uploader";
 import Dropzone from "dropzone";
function ProfilePage() {

    return (<div class="wrapper">
    <h1>Upload image with progressbar.</h1>
    	<input type="hidden" name="resume_file_url" id="id_resume_file_url"/>
        <section>
            <div id="dropzone">
                <form class="dropzone needsclick demo-upload"  action="/upload">
                    <div class="dz-message needsclick">
                        <div class=" img-circle"> <i class="camera-img">
                            <img src="images/photo-camera.svg" alt=""/>
                                </i>Add photo of slide.</div>
                    </div>
                  
                </form>
            </div>


        </section>
        <div id="preview-template" style={{display:'none'}}>
            <div class="dz-preview dz-file-preview">
            	<div class="dz-image"><img data-dz-thumbnail=""/></div>
                <div class="dz-details">
                    <div class="dz-filename"><span class="uploading">Uploading - </span><span data-dz-name=""></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress=""></span></div>
                <div class="dz-error-message"><span data-dz-errormessage=""></span></div>
            </div>
        </div>
        </div>
        );
  }
 
export default ProfilePage;