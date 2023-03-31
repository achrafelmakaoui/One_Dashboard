import axios from "axios";
import { useState } from "react";
import './AnnPost.css'
const AnnPost = () => {
  const [formData, setFormData] = useState({ Annee_Analyse: "" });
  const [PostAlert,SetPostAlert]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/annee/", formData);
      console.log(response.data); // log the saved data
      SetPostAlert(true)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="Post_Card">
      <form onSubmit={handleSubmit} className='PostAnnee'>
        <p htmlFor="Annee_Analyse" className="p">Mois D'Analyse:</p>
        <input
          type="month"
          id="Annee_Analyse"
          name="Annee_Analyse"
          value={formData.Annee_Analyse}
          onChange={handleChange}
          required
        />
        {PostAlert && (<p style={{ color:'green' }} className='alertP'>Mois D'analyse Posted</p>)}
        <button type="submit" className="btnpost">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AnnPost;
