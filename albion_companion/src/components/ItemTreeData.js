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
      {value: 'MAIN_FIRESTAFF_KEEPER', label: 'Wild Staff'},
      {value: 'MAIN_NATURESTAFF_KEEPER', label: 'Druidic Staff'},
      {value: '2H_NATURESTAFF_HELL', label: 'Blight Staff'},
      {value: '2H_NATURESTAFF_KEEPER', label: 'Rampant Staff'},
      {value: 'MAIN_NATURESTAFF_AVALON', label: 'Ironroot Staff'},
      {value: 'MAIN_NATURESTAFF_CRYSTAL', label: 'Forgebark Staff'},
    ]
  }
]
const treeData = [
];
treeData.push.apply(treeData, weapons)

export default treeData

