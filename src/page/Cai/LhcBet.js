import { Tabs , SideBar } from "antd-mobile";
import { useState } from "react";
import classnames from "classnames";
import "./index.css";


const LhcBet = () => {
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
    setSelectedNumbers([]);
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
  return (
    <div>
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
                  {SideBarData.map((item) => (                    
                    <SideBarData.Item className="Lhc-MianBan-SideBar-title"     
                      key={item.key}
                      title={item.title}                                               
                      />                
                  ))}
                </SideBar>
                {activeKey === "Special Code" && (
                  <div className="Lhc-MianBan-HaoMa">
                    {numbers.map((number) => {
                      const isSelected = selectedNumbers.includes(number.value);
                      const borderColor = colors[number.value % colors.length]; // 根据数字设置边框颜色
                      const backgroundColor = isSelected
                        ? borderColor
                        : "white"; // 如果选中则设置背景颜色
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
                                fontSize:'10px'
                             }}
                          >
                            {number.description}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                {activeKey === "Teshaw" && (<div className="Lhc-MianBan-HaoMa">特肖</div>)}
                {activeKey === "Wave color" && (<div className="Lhc-MianBan-HaoMa">波色</div>)}
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
          <div>
           已选注数: {betCount} 注
        </div>
        <div>
          <p>已选号码: {selectedNumbers.join(".")}</p>
        </div>    
        </div>        
    </div>
  );
};

export default LhcBet;