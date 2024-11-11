import { NavBar, Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import classnames from "classnames";
import { LhcApi } from "@/utils";
import "./index.css";
import LhcBet from "./LhcBet";

const Lhc = () => {
  // 导航 hook
  const navigate = useNavigate();

  // 定义一个静态的数组 Huise 用于显示骨架占位符内容
  const Huise = [
    { id: 1, text: "开" },
    { id: 2, text: "奖" },
    { id: 3, text: "正" },
    { id: 4, text: "在" },
    { id: 5, text: "同" },
    { id: 6, text: "步" },
    { id: 7, text: "中" },
  ];

  // 控制骨架的显示
  const [loading, setLoading] = useState(false);

  // 用于存储开奖信息的数据
  const [macaujc, setMacaujc] = useState([]);
  const [qiShu, setQiShu] = useState("2024XXX");

  // 定义一个函数用于获取数据
  const fetchData = async () => {
    setLoading(false); // 开始加载前先隐藏真实数据
    try {
      // 从 API 获取数据
      const res = await LhcApi.get("/api/macaujc2.com");
      if (Array.isArray(res) && res.length > 0) {
        const expect = res[0].expect;

        const openCodeArray = res[0].openCode.split(",");
        const waveArray = res[0].wave.split(",");
        const zodiacArray = res[0].zodiac.split(",");

        const combinedData = openCodeArray.map((code, index) => ({
          key: index,
          openCode: code,
          wave: waveArray[index],
          zodiac: zodiacArray[index],
        }));

        setMacaujc(combinedData);
        setQiShu(expect);
        setTimeout(() => {
          setLoading(true);
        }, 500);
      } else {
        console.error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect 钩子用于页面加载时获取数据
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="Lhc-index">
        <NavBar className="Lhc-NavBar" onBack={() => navigate("/Home")}>
          六合彩
        </NavBar>
      </div>
      <div className="Lhc-BanYuan">
        <div className="Lhc-KaiJiangJu">
          <div className="Lhc-KaiJiangJu-MoKuai">
            {/* 期数和倒计时 */}
            <div className="Lhc-KaiJiangJu-MoKuai-XinXiLan">
              <div className="Lhc-KaiJiangJu-MoKuai-XinXiLan-QiShu-DaoJiShi">
                <span>{qiShu}期</span>
                <span>倒计时:04:09:9</span>
              </div>
              <div className="Lhc-KaiJiangJu-MoKuai-XinXiLan-ShuaXin">
                <Button
                  className="Lhc-KaiJiangJu-MoKuai-XinXiLan-ShuaXin-Button"
                  size="small"
                  fill="solid"
                  onClick={fetchData}
                >
                  刷新
                </Button>
              </div>
            </div>
            {/* 判断 loading 状态来显示真实数据或骨架 */}
            {loading ? (
              <div className="Lhc-KaiJiangJu-MoKuai-HaoMa">
                {/* 显示开奖数据 */}
                {macaujc.map((item) => (
                  <div
                    className="Lhc-KaiJiangJu-MoKuai-HaoMa-data"
                    key={item.key}
                  >
                    <div className={classnames(item.wave)}>
                      <span>{item.openCode}</span>
                    </div>
                    <span>{item.zodiac}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="Lhc-KaiJiangJu-MoKuai-HaoMa">
                {/* 显示占位符 */}
                {Huise.map((item) => (
                  <div className="Lhc-KaiJiangJu-MoKuai-Grey" key={item.id}>
                    <div className="grey"></div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <LhcBet />
    </div>
  );
};

export default Lhc;