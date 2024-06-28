// NavBar.js
import { useState } from "react";

const Menu_NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const menuOptions = {
    File: [
      {
        name: "File Operations 1",
        options: [
          { name: "New Dataset", icon: "📋" },
          { name: "Join Dataset", icon: "📌" },
          { name: "Delete Dataset", icon: "✂️" },
          { name: "New Dataset", icon: "📋" },
          { name: "Join Dataset", icon: "📌" },
          { name: "Delete Dataset", icon: "✂️" },
        ],
      },
      {
        name: "File Options 2",
        options: [
          { name: "New Dataset", icon: "📋" },
          { name: "Join Dataset", icon: "📌" },
          { name: "Delete Dataset", icon: "✂️" },
        ],
      },
      {
        name: "File Options 3",
        options: [
          { name: "New Dataset", icon: "📋" },
          { name: "Join Dataset", icon: "📌" },
          { name: "Delete Dataset", icon: "✂️" },
        ],
      },
    ],
    Home: [
      {
        name: "Clipboard 1 ",
        options: [
          { name: "Cut", icon: "✂️" },
          { name: "Copy", icon: "📋" },
          { name: "Paste", icon: "📌" },
          { name: "Cut", icon: "✂️" },
          { name: "Copy", icon: "📋" },
          { name: "Paste", icon: "📌" },
        ],
      },
      {
        name: "Clipboard 2 ",
        options: [
          { name: "Calculations", icon: "✂️" },
          { name: "Copy", icon: "📋" },
          { name: "Paste", icon: "📌" },
        ],
      },
      {
        name: "Clipboard 3 ",
        options: [
          { name: "Cut", icon: "✂️" },
          { name: "Copy", icon: "📋" },
          { name: "Paste", icon: "📌" },
        ],
      },
    ],
    Insert: [
      {
        name: "Cells 1",
        options: [
          { name: "Rows", icon: "🏗️" },
          { name: "Column", icon: "🏗️" },
          { name: "Column2", icon: "🏗️" },
          { name: "Rows", icon: "🏗️" },
          { name: "Column", icon: "🏗️" },
          { name: "Column2", icon: "🏗️" },
        ],
      },
      {
        name: "Cells 2",
        options: [
          { name: "Rows", icon: "🏗️" },
          { name: "Column", icon: "🏗️" },
          { name: "Column2", icon: "🏗️" },
        ],
      },
      {
        name: "Cells 3",
        options: [
          { name: "Rows", icon: "🏗️" },
          { name: "Column", icon: "🏗️" },
          { name: "Column2", icon: "🏗️" },
        ],
      },
    ],
    "Page Layout": [
      {
        name: "Page Setup 1",
        options: [
          { name: "Margins", icon: "↔️" },
          { name: "Orientation", icon: "🔄" },
          { name: "Size", icon: "📏" },
          { name: "Margins", icon: "↔️" },
          { name: "Orientation", icon: "🔄" },
          { name: "Size", icon: "📏" },
        ],
      },
      {
        name: "Page Setup 2",
        options: [
          { name: "Margins", icon: "↔️" },
          { name: "Orientation", icon: "🔄" },
          { name: "Size", icon: "📏" },
        ],
      },
      {
        name: "Page Setup 3",
        options: [
          { name: "Margins", icon: "↔️" },
          { name: "Orientation", icon: "🔄" },
          { name: "Size", icon: "📏" },
        ],
      },
    ],
    Formulas: [
      {
        name: "Function Library 1",
        options: [
          { name: "AutoSum", icon: "Σ" },
          { name: "Recently Used", icon: "🕒" },
          { name: "Financial", icon: "💰" },
          { name: "AutoSum", icon: "Σ" },
          { name: "Recently Used", icon: "🕒" },
          { name: "Financial", icon: "💰" },
        ],
      },
      {
        name: "Function Library 2",
        options: [
          { name: "AutoSum", icon: "Σ" },
          { name: "Recently Used", icon: "🕒" },
          { name: "Financial", icon: "💰" },
        ],
      },
      {
        name: "Function Library 3",
        options: [
          { name: "AutoSum", icon: "Σ" },
          { name: "Recently Used", icon: "🕒" },
          { name: "Financial", icon: "💰" },
        ],
      },
    ],
    Data: [
      {
        name: "Sort & Filter",
        options: [
          { name: "Sort", icon: "🔢" },
          { name: "Filter", icon: "🔍" },
          { name: "Filter2", icon: "🔍" },
          { name: "Sort", icon: "🔢" },
          { name: "Filter", icon: "🔍" },
          { name: "Filter2", icon: "🔍" },
        ],
      },
      {
        name: "Data Tools",
        options: [{ name: "Data Tools", icon: "🛠️" }],
      },
      {
        name: "Data Tools",
        options: [{ name: "Data Tools", icon: "🛠️" }],
      },
    ],
    Export: [
      {
        name: "Download 1",
        options: [
          { name: "Select Rows and Column", icon: "📝" },
          { name: "Complete Download", icon: "📚" },
          { name: "Download Last Savepoint", icon: "🔢" },
          { name: "Select Rows and Column", icon: "📝" },
          { name: "Complete Download", icon: "📚" },
          { name: "Download Last Savepoint", icon: "🔢" },
        ],
      },
      {
        name: "Download 2",
        options: [
          { name: "Select Rows and Column", icon: "📝" },
          { name: "Complete Download", icon: "📚" },
          { name: "Download Last Savepoint", icon: "🔢" },
        ],
      },
      {
        name: "Download 3",
        options: [
          { name: "Select Rows and Column", icon: "📝" },
          { name: "Complete Download", icon: "📚" },
          { name: "Download Last Savepoint", icon: "🔢" },
        ],
      },
    ],
    Help: [
      {
        name: "Help 1",
        options: [
          { name: "Tutorial", icon: "💬" },
          { name: "Community Blogs", icon: "❓" },
          { name: "Community Blogs", icon: "❓" },
          { name: "Tutorial", icon: "💬" },
          { name: "Community Blogs", icon: "❓" },
          { name: "Community Blogs", icon: "❓" },
        ],
      },
      {
        name: "Help 2",
        options: [
          { name: "Tutorial", icon: "💬" },
          { name: "Community Blogs", icon: "❓" },
          { name: "Community Blogs", icon: "❓" },
        ],
      },
      {
        name: "Help 3",
        options: [
          { name: "Tutorial", icon: "💬" },
          { name: "Community Blogs", icon: "❓" },
          { name: "Community Blogs", icon: "❓" },
        ],
      },
    ],
  };

  return (
    <div className="bg-green-700 text-white h-400">
      <div className="flex justify-between border-b border-green-600">
        {Object.keys(menuOptions).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium hover:bg-green-600 ${
              activeTab === tab
                ? "bg-green-600 border-t border-x border-green-500"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white text-black p-2 h-40">
        <div className="flex space-x-2">
          {menuOptions[activeTab]?.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-gray-100 rounded p-2 flex flex-col items-center border border-green-500 w-1/3"
            >
              <div className="text-xs font-bold mb-2">{group.name}</div>
              <div className="grid grid-cols-3 font-semibold gap-2">
                {group.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex flex-row items-center justify-center p-1 hover:bg-green-300 rounded cursor-pointer"
                  >
                    <div className="text-lg mb-1 mr-1 ">{option.icon}</div>
                    <div className="text-xs text-center">{option.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu_NavBar;
