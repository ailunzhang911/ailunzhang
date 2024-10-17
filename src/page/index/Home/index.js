import { Button , Space , Image , Avatar , Skeleton , Swiper , NoticeBar } from 'antd-mobile';
import classnames from 'classnames';
import { useState , useEffect } from 'react';
import './index.css';
import { http } from '@/utils';
const Home = () => 
{
   //判断登录
   const token = true;
   //余额
   const Money = 120;
   const [loading, setLoading] = useState(true); // 用于控制骨架的显示   
   const [value ,setValue] = useState([]);//用于管理请求数据 
   const [activeTab, setActiveTab] = useState('Index');//用于管理Tabs切换
   const demoLongText = [
    { key:1 , text:"爱自己这件事永远来的急" },
    { key:2 , text:"我不需人陪 我自寻找浪漫" },
    { key:3 , text:"我不该困在爱里 爱是无底洞 我永远自由" },
    { key:4 , text:"你就做你自己 爱你的人自然爱你" },
    { key:5 , text:"是花自然香 不必太张扬" }
    ]
   useEffect(() => {
     const fetchData = async () => {
       try {          
          const res = await http.get("/data");          
          setValue(res)
          setTimeout(() => {
            setLoading(false);
          }, 500); // 延迟0.5秒          
       } catch (error) {
          console.error("Error fetching data:", error);          
       }
     };
     fetchData();
   }, []);   
   return (     
      <div className="Home-index">
         <div className="w-full h-14 flex">
            <div className="w-6/12 h-14 flex items-center">
               <Image                  
                 width={100}
                 height={35}           
                 src="https://kk-hongkong-hall-new.dbq9.com/temps/images/2024/08/26/Cwux6F5HMeuVVUnI.png"/>
            </div>
            <div className="w-6/12 h-14 flex items-center justify-end">
               { token ?
               <div className="flex items-center justify-end h-14">   
                  <span className="mx-2">{Money}$</span>                
                  <Avatar
                     style={{ '--size': '40px','borderRadius':50 }}
                     src="https://avatars.githubusercontent.com/u/174471857?v=4&size=64"
                  />
               </div>         
               :
               <Space>
                  <Button
                     style={{
                        background: 'linear-gradient(90deg, #3d35c6 0%, #6c4fe0 100%)',
                        color: '#FFFFFF',
                     }}
                     size="small"
                     fill="solid"
                  >
                    登录
                  </Button>
                  <Button
                     style={{
                        border: '1px solid',
                        color: '#3d35c6',
                     }}
                     size="small"
                     fill="outline"
                  >
                    注册
                  </Button>
               </Space>
               }
            </div>
         </div>
         
         {loading ? 
         <Skeleton animated className="Home-Skeleton" />
         :
         <div className="Home-Skeleton">            
            <Swiper indicator={() => null} loop={true} autoplay>
               {value.map(item => (
                  <Swiper.Item className="Home-Skeleton" key={item.id}>
                     <Image 
                        width="100%"
                        height="100%"
                        src={item.img}
                      />
                  </Swiper.Item>
                  ))
               }
            </Swiper>
         </div>
         }
         <NoticeBar 
            className="Home-NoticeBar" 
            content={demoLongText.map(
              item=>       
                 <span>{item.key}.{item.text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )
            }         
         />
         <div className="Home-Tabs">
            <div
               className={classnames('Home-Tabs-App', {'Home-Tabs-App-Active': activeTab === 'Index'})}
               onClick={() => setActiveTab('Index')}
            >
                <Image 
                   width="50%"
                   height="50%" 
                   src="https://174.35.80.24/siteadmin/skin/lobby_asset/1-0-common/common/_sprite/icon_dtfl_rm_1.avif?manualVersion=1&version=2d13910092" 
                />
                <span>热门</span>                
            </div>
            <div 
               className={classnames('Home-Tabs-App', {'Home-Tabs-App-Active': activeTab === 'CaiPiao'})} 
               onClick={() => setActiveTab('CaiPiao')}
            >
                <Image 
                   width="50%"
                   height="50%" 
                   src="https://oss.vip9085aa6.top/siteadmin/skin/lobby_asset/1-0-common/common/_sprite/icon_dtfl_cp_1.avif?manualVersion=1&version=d5578aebfb" 
                />
                <span>彩票</span>
            </div>
            <div 
              className={classnames('Home-Tabs-App', {'Home-Tabs-App-Active': activeTab === 'DianZi'})} 
              onClick={() => setActiveTab('DianZi')}
            >
               <Image 
                   width="50%"
                   height="50%" 
                   src="https://174.35.80.24/siteadmin/skin/lobby_asset/1-0-common/common/_sprite/icon_dtfl_dz_1.avif?manualVersion=1&version=4986151e69" 
                />
               <span>电子</span>
            </div>        
            <div 
              className={classnames('Home-Tabs-App', {'Home-Tabs-App-Active': activeTab === 'TiYu'})} 
              onClick={() => setActiveTab('TiYu')}
            >
               <Image 
                   width="50%"
                   height="50%" 
                   src="https://oss.vip9085aa6.top/siteadmin/skin/lobby_asset/1-0-common/common/_sprite/icon_dtfl_ty_1.avif?manualVersion=1&version=43e268d5f9" 
                />
               <span>体育</span>               
            </div>                                            
         </div>
         {/* Tab 内容 */}
         <div className="Home-Tabs-Content">
            {activeTab === 'Index' && <div>热门游戏</div>}
            {activeTab === 'CaiPiao' && <div>彩票</div>}
            {activeTab === 'DianZi' && <div>电子</div>}
            {activeTab === 'TiYu' && <div>体育</div>}
         </div>               
      </div>         
   )
}
export default Home;