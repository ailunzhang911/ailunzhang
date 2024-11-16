import { NavBar, Button , Tabs, SideBar , Input , Image , Popup } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import classnames from "classnames";
import { LhcApi } from "@/utils";
import "./index.css";

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
  const Chips = [
    { id: 1, text: "10" },
    { id: 2, text: "20" },
    { id: 3, text: "30" },
    { id: 4, text: "50" },
    { id: 5, text: "100" }
  ];
  const [visible1, setVisible1] = useState(false);
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

  //号码选项
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  // 新增的状态用于统计选中的注数
  const [betCount, setBetCount] = useState(0);
  //SideBar数组
  const SideBarData = [
    {
      key: "Special Code",
      title: "特码",
    },
    {
      key: "Teshaw",
      title: "特肖",
    },
    {
      key: "Wave color",
      title: "波色",
    },
  ];
  // 用于管理Tabs切换
  const [activeTab, setActiveTab] = useState("Betting Area");
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  // 用于管理SideBar切换
  const [activeKey, setActiveKey] = useState("Special Code");
  const handleSideBarChange = (key) => {
    setActiveKey(key);
    //号码归零
    setSelectedNumbers([]);
    //注数归零
    setBetCount(0);
  };
  //选区背景颜色
  const colors = ["red", "blue", "green"];
  // 数字 1 到 49，并附带描述
  const numbers = Array.from({ length: 49 }, (_, index) => ({
    label: index + 1,
    description: "48.5", // 这个描述可以与后端数据集成
    value: index + 1,
  }));
  // 预定义的红、蓝、绿类别的数字集合
  const colorSets = {
    red: new Set([
      1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46,
    ]),
    blue: new Set([
      4, 3, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48,
    ]),
    green: new Set([
      5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49,
    ]),
  };
  // 根据数字所属类别返回相应的颜色类名
  const getColorClass = (number) => {
    for (const color in colorSets) {
      if (colorSets[color].has(number)) {
        return `${color}-bg`; // 返回相应的背景颜色类名
      }
    }
    return "";
  };
  /*
  // 点击数字时切换选中状态
  const handleClick = (number) => {
    setSelectedNumbers(
      (prev) =>
        prev.includes(number)
          ? prev.filter((n) => n !== number) // 如果已选中，则移除
          : [...prev, number] // 否则，添加到已选数字中
    );
    setBetCount((prevCount) =>
      selectedNumbers.includes(number) ? prevCount - 1 : prevCount + 1
    );
  };
  */
  const handleClick = (number) => {
  setSelectedNumbers((prev) => {
    const isSelected = prev.includes(number);
    const newSelectedNumbers = isSelected ? prev.filter((n) => n !== number) : [...prev, number];
    setBetCount(newSelectedNumbers.length);
    return newSelectedNumbers;
  });
 };
  const xiazhuType = [
  {
       "playType": "单码",
       "numbers": [],
       "amount": 100
  }];
  // 将 data 的内容依次存入 Chips 的 numbers 属性
  selectedNumbers.forEach((number) => {
     xiazhuType[0].numbers.push(number); // 将每个 number 推入 numbers 数组
  });
  console.log(xiazhuType);
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
      <div className="Lhc-MianBan">
        <Tabs
          style={{ "--active-line-height": "0px" }}
          onChange={handleTabChange}
        >
          <Tabs.Tab
            title="投注区"
            key="Betting Area"
            className={classnames("Lhc-MianBan-Tabs", {
              "Lhc-MianBan-Tabs-Active": activeTab === "Betting Area",
            })}
          >
            <div className="Lhc-MianBan-App">
              <SideBar 
                className="Lhc-MianBan-SideBar"
                onChange={handleSideBarChange}
                activeKey={activeKey}
                >
                {SideBarData.map(item => (
                  <SideBar.Item className="Lhc-MianBan-SideBar-title" key={item.key} title={item.title} />
                ))}
              </SideBar>
              {activeKey === "Special Code" && (
                <div className="Lhc-MianBan-HaoMa">
                  {numbers.map((number) => {
                    const isSelected = selectedNumbers.includes(number.value);
                    const borderColor = colors[number.value % colors.length]; // 根据数字设置边框颜色
                    const backgroundColor = isSelected ? borderColor : "white"; // 如果选中则设置背景颜色
                    return (
                      <div
                        key={number.value}
                        className={classnames(
                          "Lhc-MianBan-HaoMa-Selector",
                          getColorClass(number.value)
                        )}
                        style={{
                          borderColor,
                          backgroundColor,
                          color: isSelected ? "white" : "black", // 选中时文字为白色，未选中时文字为黑色
                        }}
                        onClick={() => handleClick(number.value)} // 点击数字时切换选中状态
                      >
                        {number.label}
                        <span
                          style={{
                            color: isSelected ? "white" : "black",
                            fontSize: "10px",
                          }}
                        >
                          {number.description}
                        </span>
                      </div>
                    );
                  })}                 
                </div>
              )}
              {activeKey === "Teshaw" && (
                <div className="Lhc-MianBan-HaoMa">特肖</div>
              )}
              {activeKey === "Wave color" && (
                <div className="Lhc-MianBan-HaoMa">波色</div>
              )}
            </div>
          </Tabs.Tab>
          <Tabs.Tab
            title="游戏记录"
            key="Game Record"
            className={classnames("Lhc-MianBan-Tabs", {
              "Lhc-MianBan-Tabs-Active": activeTab === "Game Record",
            })}
          >
            游戏记录
          </Tabs.Tab>
          <Tabs.Tab
            title="游戏规则"
            key="Rules of the game"
            className={classnames("Lhc-MianBan-Tabs", {
              "Lhc-MianBan-Tabs-Active": activeTab === "Rules of the game",
            })}
          >
            游戏规则
          </Tabs.Tab>
          <Tabs.Tab
            title="开奖验证"
            key="Prize-opening verification"
            className={classnames("Lhc-MianBan-Tabs", {
              "Lhc-MianBan-Tabs-Active":
                activeTab === "Prize-opening verification",
            })}
          >
            开奖验证
          </Tabs.Tab>
          <Tabs.Tab
            title="开奖记录"
            key="Award record"
            className={classnames("Lhc-MianBan-Tabs", {
              "Lhc-MianBan-Tabs-Active": activeTab === "Award record",
            })}
          >
            开奖记录
          </Tabs.Tab>          
        </Tabs>
             
        {activeTab === "Betting Area" && (
          <div className="Lhc-MianBan-ActiveBet">
            <div className="Lhc-MianBan-ActiveBet-1">
              <div className="Lhc-MianBan-ActiveBet-1-Button">
                <Image                     
                  width="25px"
                  height="25px"
                  onClick={() => {
                     setVisible1(true)
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ6SURBVHgB1VdRjtMwEJ1xUgnRIuUIvQHLCUhPQG+wVGX5XVCKtH/b/lVqyeafhZYTUE7Q7A3KDXIDKtr9obXNjJNA1V3RdJ0g8aQm9jjVe56xx2OEDL3eBx9RNMES9bqY9fudZdHv3YuLSVNu5Ret4UTTwxbr9dajV7Rr6/cn3vqHOgfUvkBcPG6IQS7SlRt1SbQn5kuEBT0Lq98Halg6W3e2a+MJ3q7UnAab3Fda+7cr2SZ7azjsJNgLrr+T3UONnVHYnUKJMN7dqLkGQ75EgW9BwSX3ESCpP3GeCSbnj7VQCZSIO+RStUaj7tSRooWACXmdPXMloALskVNkKTSPaia0w6iTaFQdbtN4u3QBd2aezVZu5JzHjCAtTs0bIXGhRNzndgdqS+mkNhbxLvgYU/tlKgQGpQm4N+bR64UZezNp5SIgI1e06Mdhd1ZKCP5GzuC4E/HvPpOH2Y6zFnCInEFun9A6aO+TWwsoTv7H7eFernnwGrAhT/8rryj13zxIgO3MpVS+CQmid3QIynD7Lo4SUDb5UQKqID9KQBXkhQVwtZQfLARPOe7TMsgLC9AaTRLhgyV9q2kQfDq1JS8sgE6t50YIH6OoB7kIKmbmNuSFBJgjVJuSbTken8WNhhvR+Z6XXb4NOeNgIpI/lc8VBRcVPOP1SrIYLx+3IS8kAHL3U1EB6Y9tMVluqBWH71/FYIGDArRW3+i+kFDrKwhc1DdU90fF635rAePwjGv8CCpCJUXpfyfAxBOV/b2wMFS6sA1vEFzzvj7P+jFUDEpqnk7zCvBtzJXS6dcc9SLL9T5UjJ3772e+CmLeI0+0hUAP/gFoayecVbn9C1xSAnz8dCFlAAAAAElFTkSuQmCC" />   
              </div>
              <div className="Lhc-MianBan-ActiveBet-1-Chips">
                {Chips.map((item)=>(
                  <div key={item.id} className="Lhc-MianBan-ActiveBet-1-Chips-img">
                    <span key={item.id}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="Lhc-MianBan-ActiveBet-1-Input-box">
                <Input className="Lhc-MianBan-ActiveBet-1-Input" placeholder="输入金额" />
              </div>
            </div>
            <div className="Lhc-MianBan-ActiveBet-2">
              <span>{betCount}</span>
              <p>已选号码: {selectedNumbers.join(".")}</p>
            </div>
            <Popup
              visible={visible1}
              showCloseButton
              onMaskClick={() => {
                setVisible1(false)
              }}
              onClose={() => {
                setVisible1(false)
              }}
              bodyStyle={{
                maxWidth: '450px',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                minHeight: '20vh', 
              }}
            >
              <div className="Lhc-MianBan-ActiveBet-2-Popup">
              </div>
              <div>
                 测试
              </div>
            </Popup>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lhc;
