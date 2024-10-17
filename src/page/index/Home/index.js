import { Button , Space , Image , Avatar , Skeleton , Swiper , NoticeBar , Grid } from 'antd-mobile';
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
         <NoticeBar className="Home-NoticeBar" content={demoLongText.map(item=>       
           <span>{item.key}.{item.text}&nbsp;&nbsp;&nbsp;&nbsp;</span>   
         )}/>
         <Grid columns={5} gap={8}>
            <Grid.Item>
               <div className="Grid">A</div>               
            </Grid.Item>
            <Grid.Item>
               <div className="Grid">B</div>               
            </Grid.Item>
            <Grid.Item>
               <div className="Grid">C</div>               
            </Grid.Item>
            <Grid.Item>
               <div className="Grid">D</div>               
            </Grid.Item>
            <Grid.Item>
               <div className="Grid">E</div>               
            </Grid.Item>                        
         </Grid>
      </div>         
   )
}
export default Home;