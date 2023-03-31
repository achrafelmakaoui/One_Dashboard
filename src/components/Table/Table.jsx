import React, { useState, useEffect } from "react";
import axios from "axios";
import './Table.css'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FilterListOffRoundedIcon from '@mui/icons-material/FilterListOffRounded';
import { useRef } from "react";
import Annee from "../Annee/Annee";
function FilterData() {
  const [grpStr, setGrpStr] = useState([]);
  const [typeUsage, setTypeUsage] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [MenuState, setMenuState] = useState(false);
  const [MenuState2, setMenuState2] = useState(true);

  const menu = useRef(null);
  const sidebar = useRef(null);

  const showhideMenu = () => {
      menu.current.classList.add("active");
      sidebar.current.classList.add("active");
      setMenuState(true);
      setMenuState2(false)
  };
  const closesideMenu = () => {
        menu.current.classList.remove("active");
        sidebar.current.classList.remove("active");
        setMenuState(false);
        setMenuState2(true)
    };
   
  
  const handleGrpStrChange = (event) => {
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;
    if (selectedValue === 'DPLAY') {
      if (isChecked) {
        setGrpStr(['AGENCE DE SERVICES PROVINCIALE LAAYOUNE','AGENCE DE SERVICES PROVINCIALE TARFAYA', 'AGENCE DE SERVICES PROVINCIALE BOUJDOUR', 'AGENCE DE SERVICES PROVINCIALE ES-SMARA', 'AGENCE DE SERVICES EL MARSA', 'AGENCE DE SERVICES LAAYOUNE EL WIFAQ']);
      } else {
        setGrpStr([]);
      }
    }else if(selectedValue === 'DPGEL') {
      if (isChecked) {
        setGrpStr(['AGENCE DE SERVICES PROVINCIALE GUELMIM','AGENCE DE SERVICES BOUIZAKARNE', 'SUCCURSALE TAGHJIJT', 'AGENCE DE SERVICES PROVINCIALE ASSA ZAG', 'SUCCURSALE ZAG', 'AGENCE DE SERVICES PROVINCIALE SIDI IFNI','SUCCURSALE MIRLEFT','AGENCE DE SERVICES LAKHSSASS','AGENCE DE SERVICES PROVINCIALE TAN TAN','SUCCURSALE TAN TAN PLAGE']);
      } else {
        setGrpStr([]);
      }
    }
    else if(selectedValue === 'DPDAK') {
      if (isChecked) {
        setGrpStr(['AGENCE DE SERVICES PROVINCIALE DAKHLA','SUCCURSALE BIR GANDOUZ']);
      } else {
        setGrpStr([]);
      }
    }
    
    else{
    if (isChecked) {
      setGrpStr([...grpStr, selectedValue]);
    } else {
      setGrpStr(grpStr.filter((value) => value !== selectedValue));
    }
  }
  };

  const handleTypeUsageChange = (event) => {
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;
    
    if (selectedValue === 'ALL') {
      if (isChecked) {
        setTypeUsage(['MT Général', 'Ménages', 'Patentés', 'Administratif', 'Public', 'Force Motrice Agricole', 'Force Motrice Industrielle']);
      } else {
        setTypeUsage([]);
      }
    } else {
      if (isChecked) {
        setTypeUsage([...typeUsage, selectedValue]);
      } else {
        setTypeUsage(typeUsage.filter((value) => value !== selectedValue));
      }
    }
  };
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/allonedata/filter", {
          params: {
            grp_str_input: grpStr, // send an array of selected values
            type_usage: typeUsage, // send an array of selected values
          },
        });

        setFilteredData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [grpStr, typeUsage]);
  const totalNBK_PS_12 = filteredData.reduce((total, doc) => {
    return total + doc.NBK_PS_12;
  }, 0);
  const totalNBK_PS = filteredData.reduce((total, doc) => {
    return total + doc.NBK_PS;
  }, 0);
  const totalMWH_PS_12 = filteredData.reduce((total, doc) => {
    return total + doc.MWH_PS_12;
  }, 0);
  const totalMWH_PS = filteredData.reduce((total, doc) => {
    return total + doc.MWH_PS;
  }, 0);
  const totalKDH_PS_12 = filteredData.reduce((total, doc) => {
    return total + doc.KDH_PS_12;
  }, 0);
  const totalKDH_PS = filteredData.reduce((total, doc) => {
    return total + doc.KDH_PS;
  }, 0);


  return (
    <div className="tb_ft">
      <div className="bnfil">
        <div className="h2filt">
          <h2>Filter {MenuState && (<FilterListRoundedIcon ref={menu} onClick={closesideMenu} className='filter_icon_on'/>)} {MenuState2 &&(<FilterListOffRoundedIcon  ref={menu} onClick={showhideMenu} className='filter_icon_off'/>)}</h2>
        </div>
        <div className="h2anne">
          <Annee/>
        </div>
      </div>

        <div className="filter" ref={sidebar}>
          <div className="tp_usg">
            <div className='tp_usag_tit'>
              <h4>Type Usage:</h4>
            </div>
            <div className="tp_usag_input">
              <div className="flx">
                <input type="checkbox" value='ALL'  onChange={handleTypeUsageChange} />
                <label>ALL</label>
              </div>
              <div className="flx">
              <input type="checkbox" value="MT Général" onChange={handleTypeUsageChange} />
              <label>MTG</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="Ménages" onChange={handleTypeUsageChange} />
                <label>MEN</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="Patentés" onChange={handleTypeUsageChange} />
                <label>PAT</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="Administratif" onChange={handleTypeUsageChange} />
                <label>ADM</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="Public" onChange={handleTypeUsageChange} />
                <label>PUB</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="Force Motrice Agricole" onChange={handleTypeUsageChange} />
                <label>FMA</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="Force Motrice Industrielle" onChange={handleTypeUsageChange} />
                <label>FMI</label>
              </div>
            </div>
          </div>
          <div className="grp_str">
            <div className="grp_str_tit">
              <h4>DP_Laâyoune:</h4>
            </div>
            <div className="grp_str_input">
              <div className="flx">
                <input type="checkbox" value="DPLAY" onChange={handleGrpStrChange} />
                <label>ALL</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE LAAYOUNE" onChange={handleGrpStrChange} />
                <label>L10</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE TARFAYA" onChange={handleGrpStrChange} />
                <label>L1A</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE BOUJDOUR" onChange={handleGrpStrChange} />
                <label>L1B</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE ES-SMARA" onChange={handleGrpStrChange} />
                <label>L1C</label>
              </div>
              <div className="flx">
                  <input type="checkbox" value="AGENCE DE SERVICES EL MARSA" onChange={handleGrpStrChange} />
                  <label>L1D</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES LAAYOUNE EL WIFAQ" onChange={handleGrpStrChange} />
                <label>L1E</label>  
              </div>
            </div>
          </div>  
          <div className="dpgelmim">
            <div className="dpgelmim_tit">
              <h4>DP_Guelmim:</h4>
            </div>
            <div className="dpgelmim_input">
              <div className="flx">
                <input type="checkbox" value="DPGEL" onChange={handleGrpStrChange} />
                <label>ALL</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE GUELMIM" onChange={handleGrpStrChange} />
                <label>L20</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES BOUIZAKARNE" onChange={handleGrpStrChange} />
                <label>L2A</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="SUCCURSALE TAGHJIJT" onChange={handleGrpStrChange} />
                <label>L2B</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE ASSA ZAG" onChange={handleGrpStrChange} />
                <label>L2C</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="SUCCURSALE ZAG" onChange={handleGrpStrChange} />
                <label>L2D</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE SIDI IFNI" onChange={handleGrpStrChange} />
                <label>L2E</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="SUCCURSALE MIRLEFT" onChange={handleGrpStrChange} />
                <label>L2F</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES LAKHSSASS" onChange={handleGrpStrChange} />
                <label>L2G</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE TAN TAN" onChange={handleGrpStrChange} />
                <label>L30</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="SUCCURSALE TAN TAN PLAGE" onChange={handleGrpStrChange} />
                <label>L3A</label>
              </div>
            </div>
          </div>
          <div className="dpdakhla">
            <div className="dpdakhla_tit">
              <h4>DP_DAKHLA:</h4>
            </div>
            <div className="dpdakhla_input">
              <div className="flx">
                <input type="checkbox" value="DPDAK" onChange={handleGrpStrChange} />
                <label>ALL</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="AGENCE DE SERVICES PROVINCIALE DAKHLA" onChange={handleGrpStrChange} />
                <label>L40</label>
              </div>
              <div className="flx">
                <input type="checkbox" value="SUCCURSALE BIR GANDOUZ" onChange={handleGrpStrChange} />
                <label>L4A</label>
              </div>
            </div>
              
          </div>
        </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <table id="tableau" className="table sticky table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left" rowSpan='2' style={{ padding:'0px 20px 30px 10px' }} >Tension</th>
                            <th scope="col" className="text-left" rowSpan='2' style={{ padding:'0px 20px 30px 8px' }} >Type Usage</th>
                            <th scope="col" className="text-left" rowSpan='2' style={{ padding:'0px 20px 30px 8px' }}>Groupe Str Régional</th>
                            <th scope="col" className="text-left" colSpan='4'>Nombre De Client</th>
                            
                            <th scope="col" className="text-left" colSpan='4'>Vente En MWH</th>
                            
                            <th scope="col" className="text-left" colSpan='4'>Vente En KDH</th>
                            
                            
                        </tr>
                        <tr>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>PS_12</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>PS</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>Ecart</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>Evo%</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>PS__12</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>PS</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>Ecart</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>Evo%</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>PS_12</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>PS</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>Ecart</th>
                            <th scope="col" className="text-left" style={{ padding:'0px 27px 8px 10px' }}>Evo%</th>
                        </tr>
                    </thead>
                    
            <tbody>
            {filteredData.map((item,index) => {
                let ecartMWH=(item.MWH_PS-item.MWH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                });
                let ecartKDH=(item.KDH_PS-item.KDH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                });
                
                let ecartNBK=(item.NBK_PS-item.NBK_PS_12);

                ///percentageMWH
                let percentageDiffMWH;
                let percentageMWH;
                if (item.MWH_PS_12 === 0) {
                    percentageDiffMWH = '-';
                  } else {
                    let diff = item.MWH_PS - item.MWH_PS_12;
                    percentageMWH = (diff / item.MWH_PS_12) * 100;
                    if (isNaN(percentageMWH)) {
                      percentageDiffMWH = 'N/A';
                    } else {
                      percentageDiffMWH = `${percentageMWH.toFixed(2)}%`;
                    }
                  }
                ///percentageKDH
                let percentageDiffKDH;
                let percentageKDH;
                if (item.KDH_PS_12 === 0) {
                    percentageDiffKDH = '-';
                  } else {
                    let diff = item.KDH_PS - item.KDH_PS_12;
                    percentageKDH = (diff / item.KDH_PS_12) * 100;
                    if (isNaN(percentageKDH)) {
                      percentageDiffKDH = 'N/A';
                    } else {
                      percentageDiffKDH = `${percentageKDH.toFixed(2)}%`;
                    }
                  }
                
                ///percentageNBK
                let percentageDiffNBK
                let percentageNBK;
                if (item.NBK_PS_12 === 0) {
                    percentageDiffNBK = '-';
                  } else {
                    let diff = item.NBK_PS - item.NBK_PS_12;
                    percentageNBK = (diff / item.NBK_PS_12) * 100;
                    if (isNaN(percentageNBK)) {
                      percentageDiffNBK = 'N/A';
                    } else {
                      percentageDiffNBK = `${percentageNBK.toFixed(2)}%`;
                    }
                  }
                  let typebsmy
                  if(item.type_usage==='MT Général'){
                    typebsmy='MT'
                  }else{
                    typebsmy='BT'
                  }
        return(
            <><tr key={index}>
              <td>{typebsmy}</td>
                <td className="text-left">{item.type_usage}</td>
                <td className="text-left" >{item.groupe_str_régional}</td>
                <td className="text-left">{(item.NBK_PS_12)}</td>
                <td className="text-left">{(item.NBK_PS)}</td>
                <td className="text-left">{ecartNBK}</td>
                <td className="text-left">{percentageDiffNBK}</td>
                <td className="text-left">{(item.MWH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</td>
                <td className="text-left">{(item.MWH_PS).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</td>
                <td className="text-left">{(ecartMWH)}</td>
                <td className="text-left">{percentageDiffMWH}</td>
                <td className="text-left">{(item.KDH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</td>
                <td className="text-left">{(item.KDH_PS).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</td>
                <td className="text-left">{(ecartKDH)}</td>
                <td className="text-left">{percentageDiffKDH}</td>
              </tr>
              </>      
      )
      })}
             <tr>
                <td colSpan='3' className='text-center' style={{ backgroundColor:'whitesmoke' }}><strong style={{ fontSize:'18px',color:'#376DBD'}}>Total</strong></td>
                <td><strong>{(totalNBK_PS_12)}</strong></td>
                <td><strong>{(totalNBK_PS)}</strong></td>
                <td><strong>{(totalNBK_PS-totalNBK_PS_12)}</strong></td>
                <td><strong>{(((totalNBK_PS-totalNBK_PS_12)/totalNBK_PS_12)*100).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })+'%'}</strong></td>
                <td><strong>{(totalMWH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</strong></td>
                <td><strong>{(totalMWH_PS).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</strong></td>
                <td><strong>{(totalMWH_PS-totalMWH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</strong></td>
                <td><strong>{(((totalMWH_PS-totalMWH_PS_12)/totalMWH_PS_12)*100).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })+'%'}</strong></td>
                <td><strong>{(totalKDH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</strong></td>
                <td><strong>{(totalKDH_PS).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</strong></td>
                <td><strong>{(totalKDH_PS-totalKDH_PS_12).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}</strong></td>
                <td><strong>{(((totalKDH_PS-totalKDH_PS_12)/totalKDH_PS_12)*100).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })+'%'}</strong></td>
                
              </tr>
      </tbody>
    </table>
    </div>
  );
}


export default FilterData;
