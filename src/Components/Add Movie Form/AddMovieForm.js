import React from 'react'
import './AddMovieForm.css'



function AddMovieForm (){
    return (
    <div className="shity_movie">
    <h1>Add your Shitty Movie</h1>
    <form action="submit" method="post">
 <ul>
  <li>
    <label> Movie Name:</label>
    <input type="text" className="movie_Name"/>
  </li>
  <li>
    <label>Image Link:</label>
    <input type="text" className="image_link" />
  </li>
  <li>
    <label >Description:</label>
    <textarea className="description" ></textarea>
  </li>
  <input type="submit" value="Submit"></input>
 </ul>
</form>
</div>
 )
}



export default AddMovieForm;