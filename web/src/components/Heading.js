import React from 'react'
import "./app.css"
const Heading = () => {
  return (

<div class="contain">

<div class="jumbotron">
    <div class="container">
        <h1 class="heading"> Image Captioning</h1>
        <p> Upload your image to generate a caption... </p>
    </div>
</div>



<form class="form-inline" method="POST" action="http://127.0.0.1:5000/" enctype="multipart/form-data"> 
    <label><b> Image : &nbsp;&nbsp; </b></label>
    <input class="form-control" type="file" name="userfile" placeholder="Your image" />
    <button type="submit" class="btn btn-primary"> Submit</button>
</form>

<br />
<br />



    <div class="row">
        <div class="col-sm-4">
            <video width="320" height="240" controls>
            <source src="/" type="video/mp4"/>
            {/* {{your_result['image']}} { your_result['caption'] } */}
        </video>
        </div>
        <div class="col-sm-8">
            <p class="text"> Generated Caption : </p>
             <p> <b>caption here</b> </p>
        </div>
    </div>


</div>

    
  )
}

export default Heading

