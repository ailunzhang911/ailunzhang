import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { LhcApi } from '@/utils';
import './index.css';
const Lhc = () => 
{
   const Navigate = useNavigate();
   //开奖信息
   const [ Macaujc , setMacaujc ] = useState([]);
   //期数
   const [ QiShu , setQiShu ] = useState();
   useEffect(() => {
     const fetchData = async () => {
       try {          
         const res = await LhcApi.get("/api/macaujc2.com");
         if (Array.isArray(res) && res.length > 0) {
           // 使用 split 方法将 openCode 按逗号分割成数组
           //期数
           const expect = res[0].expect;      
           //号码
           const openCodeArray = res[0].openCode.split(',');
           //波色
           const waveArray = res[0].wave.split(',');
           //生肖
           const zodiacArray = res[0].zodiac.split(',');
           const combinedData = openCodeArray.map((code, index) => ({
            key: index,
            openCode: code,
            wave: waveArray[index],
            zodiac: zodiacArray[index]
           }));
          setMacaujc(combinedData);
          setQiShu(expect);
         } else {
           console.error("Unexpected response format");
         }          
       } catch (error) {
          console.error("Error fetching data:", error);          
       }
     };
     fetchData();
   }, []);
   return (     
      <div className="Lhc-index">
         <NavBar className="Lhc-NavBar" onBack={()=>{Navigate('/Home')}}>六合彩</NavBar>
         <div className="Lhc-KaiJiangJu">
            <div className="Lhc-KaiJiangJu-MoKuai">
               <div className="Lhc-KaiJiangJu-MoKuai-XinXiLan">
                  <span>{QiShu}期</span>
                  <span>倒计时:04:09:9</span>
               </div>
               <div className="Lhc-KaiJiangJu-MoKuai-HaoMa">
                  {Macaujc.map(item => (
                     <div className="Lhc-KaiJiangJu-MoKuai-HaoMa-data">
                        <div key={item.key} className={item.wave}>
                            <span>{item.openCode}</span>
                        </div>
                        <span>{item.zodiac}</span>                          
                     </div>     
                  ))}
               </div>
            </div>
         </div>
      </div>   
   )
}
export default Lhc;


