const weapons = [
  {
    value: 'Holy Staff', label: 'Holy Staff', selectable: false, children: [
      { value: 'MAIN_HOLYSTAFF', label: 'Holy Staff'},
      { value: '2H_HOLYSTAFF', label: 'Great Holy Staff'},
    ]
  },
  {
    value: 'Nature Staff', label: 'Nature Staff', selectable: false, children: [
      {value: 'MAIN_NATURESTAFF', label: 'Nature Staff'},
      {value: '2H_NATURESTAFF', label: 'Great Nature Staff'},
    ]
  }
]
const treeData = [
];
treeData.push.apply(treeData, weapons)

export default treeData

