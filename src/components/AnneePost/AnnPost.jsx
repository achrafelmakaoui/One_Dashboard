import axios from "axios";
import { useState } from "react";
import './AnnPost.css'
const AnnPost = () => {
  const [formData, setFormData] = useState({ Annee_Analyse: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/annee/", formData);
      console.log(response.data); // log the saved data
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <h3 className="h3post">Insertion Année D'analyse</h3>
    <div className="Post_Card">
      <form onSubmit={handleSubmit} className='PostAnnee'>
        <p htmlFor="Annee_Analyse">Annee Analyse:</p>
        <input
          type="text"
          id="Annee_Analyse"
          name="Annee_Analyse"
          value={formData.Annee_Analyse}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btnpost">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AnnPost;
