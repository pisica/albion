const weapons = [
  {
    value: 'weapons', label: 'Weapons', selectable: false, children: [
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
  }
]
const chestArmor = [
  {
    value: 'Chest Armor', label: 'Chest Armor', selectable: false, children: [
      {
        value: 'cloth armor', label: 'Cloth Armor', selectable: false, children: [
          { value: 'ARMOR_CLOTH_SET1', label: 'Scholar Robe' },
          { value: 'ARMOR_CLOTH_SET2', label: 'Cleric Robe' },
          { value: 'ARMOR_CLOTH_SET3', label: 'Mage Robe' },
          { value: 'ARMOR_CLOTH_SET4', label: 'Druid Robe' },
          { value: 'ARMOR_CLOTH_SET5', label: 'Royal Robe' },
          { value: 'ARMOR_CLOTH_SET6', label: 'Fiend Robe' },
          { value: 'ARMOR_CLOTH_SET7', label: 'Cultist Robe' },
          { value: 'ARMOR_CLOTH_SET8', label: 'Feyscale Robe' },
          { value: 'ARMOR_CLOTH_SET9', label: 'Robe of Purity' },
        ]
      },
      {
        value: 'leather armor', label: 'Leather Armor', selectable: false, children: [
          { value: 'ARMOR_LEATHER_SET1', label: 'Mercenary Jacket' },
          { value: 'ARMOR_LEATHER_SET2', label: 'Hunter Jacket' },
          { value: 'ARMOR_LEATHER_SET3', label: 'Assassin Jacket' },
          { value: 'ARMOR_LEATHER_SET4', label: 'Stalker Jacket' },
          { value: 'ARMOR_LEATHER_SET5', label: 'Royal Jacket' },
          { value: 'ARMOR_LEATHER_SET6', label: 'Hellion Jacket' },
          { value: 'ARMOR_LEATHER_SET7', label: 'Specter Jacket' },
          { value: 'ARMOR_LEATHER_SET8', label: 'Mistwalker Jacket' },
          { value: 'ARMOR_LEATHER_SET9', label: 'Jacket of Tenacity' },
        ]
      },
      {
        value: 'plate armor', label: 'Plate Armor', selectable: false, children: [
          { value: 'ARMOR_PLATE_SET1', label: 'Soldier Armor' },
          { value: 'ARMOR_PLATE_SET2', label: 'Knight Armor' },
          { value: 'ARMOR_PLATE_SET3', label: 'Guardian Armor' },
          { value: 'ARMOR_PLATE_SET4', label: 'Graveguard Armor' },
          { value: 'ARMOR_PLATE_SET5', label: 'Royal Armor' },
          { value: 'ARMOR_PLATE_SET6', label: 'Demon Armor' },
          { value: 'ARMOR_PLATE_SET7', label: 'Judicator Armor' },
          { value: 'ARMOR_PLATE_SET8', label: 'Duskweaver Armor' },
          { value: 'ARMOR_PLATE_SET9', label: 'Armor of Valor' },
        ]
      }
    ]
  }
]
const headArmor = [
  {
    value: 'Head Armor', label: 'Head Armor', selectable: false, children: [
      {
        value: 'cloth helmet', label: 'Cloth Helmet', selectable: false, children: [
          { value: 'HEAD_CLOTH_SET1', label: 'Scholar Cowl' },
          { value: 'HEAD_CLOTH_SET2', label: 'Cleric Cowl' },
          { value: 'HEAD_CLOTH_SET3', label: 'Mage Cowl' },
          { value: 'HEAD_CLOTH_SET4', label: 'Druid Cowl' },
          { value: 'HEAD_CLOTH_SET5', label: 'Royal Cowl' },
          { value: 'HEAD_CLOTH_SET6', label: 'Fiend Cowl' },
          { value: 'HEAD_CLOTH_SET7', label: 'Cultist Cowl' },
          { value: 'HEAD_CLOTH_SET8', label: 'Feyscale Hat' },
          { value: 'HEAD_CLOTH_SET9', label: 'Cowl of Purity' },
        ]
      },
      {
        value: 'leather helmet', label: 'Leather Helmet', selectable: false, children: [
          { value: 'HEAD_LEATHER_SET1', label: 'Mercenary Hood' },
          { value: 'HEAD_LEATHER_SET2', label: 'Hunter Hood' },
          { value: 'HEAD_LEATHER_SET3', label: 'Assassin Hood' },
          { value: 'HEAD_LEATHER_SET4', label: 'Stalker Hood' },
          { value: 'HEAD_LEATHER_SET5', label: 'Royal Hood' },
          { value: 'HEAD_LEATHER_SET6', label: 'Hellion Hood' },
          { value: 'HEAD_LEATHER_SET7', label: 'Specter Hood' },
          { value: 'HEAD_LEATHER_SET8', label: 'Mistwalker Hood' },
          { value: 'HEAD_LEATHER_SET9', label: 'Hood of Tenacity' },
        ]
      },
      {
        value: 'plate helmet', label: 'Plate Helmet', selectable: false, children: [
          { value: 'HEAD_PLATE_SET1', label: 'Soldier Helmet' },
          { value: 'HEAD_PLATE_SET2', label: 'Knight Helmet' },
          { value: 'HEAD_PLATE_SET3', label: 'Guardian Helmet' },
          { value: 'HEAD_PLATE_SET4', label: 'Graveguard Helmet' },
          { value: 'HEAD_PLATE_SET5', label: 'Royal Helmet' },
          { value: 'HEAD_PLATE_SET6', label: 'Demon Helmet' },
          { value: 'HEAD_PLATE_SET7', label: 'Judicator Helmet' },
          { value: 'HEAD_PLATE_SET8', label: 'Duskweaver Helmet' },
          { value: 'HEAD_PLATE_SET9', label: 'Helmet of Valor' },
        ]
      }
    ]
  }
]
const footArmor = [
  {
    value: 'Foot Armor', label: 'Foot Armor', selectable: false, children: [
      {
        value: 'cloth shoes', label: 'Cloth Shoes', selectable: false, children: [
          { value: 'SHOES_CLOTH_SET1', label: 'Scholar Sandals' },
          { value: 'SHOES_CLOTH_SET2', label: 'Cleric Shoes' },
          { value: 'SHOES_CLOTH_SET3', label: 'Mage Shoes' },
          { value: 'SHOES_CLOTH_SET4', label: 'Druid Shoes' },
          { value: 'SHOES_CLOTH_SET5', label: 'Royal Shoes' },
          { value: 'SHOES_CLOTH_SET6', label: 'Fiend Shoes' },
          { value: 'SHOES_CLOTH_SET7', label: 'Cultist Shoes' },
          { value: 'SHOES_CLOTH_SET8', label: 'Feyscale Shoes' },
          { value: 'SHOES_CLOTH_SET9', label: 'Sandals of Purity' },
        ]
      },
      {
        value: 'leather shoes', label: 'Leather Shoes', selectable: false, children: [
          { value: 'SHOES_LEATHER_SET1', label: 'Mercenary Shoes' },
          { value: 'SHOES_LEATHER_SET2', label: 'Hunter Shoes' },
          { value: 'SHOES_LEATHER_SET3', label: 'Assassin Shoes' },
          { value: 'SHOES_LEATHER_SET4', label: 'Stalker Shoes' },
          { value: 'SHOES_LEATHER_SET5', label: 'Royal Shoes' },
          { value: 'SHOES_LEATHER_SET6', label: 'Hellion Shoes' },
          { value: 'SHOES_LEATHER_SET7', label: 'Specter Shoes' },
          { value: 'SHOES_LEATHER_SET8', label: 'Mistwalker Shoes' },
          { value: 'SHOES_LEATHER_SET9', label: 'Shoes of Tenacity' },
        ]
      },
      {
        value: 'plate shoes', label: 'Plate Shoes', selectable: false, children: [
          { value: 'SHOES_PLATE_SET1', label: 'Soldier Boots' },
          { value: 'SHOES_PLATE_SET2', label: 'Knight Shoes' },
          { value: 'SHOES_PLATE_SET3', label: 'Guardian Shoes' },
          { value: 'SHOES_PLATE_SET4', label: 'Graveguard Shoes' },
          { value: 'SHOES_PLATE_SET5', label: 'Royal Shoes' },
          { value: 'SHOES_PLATE_SET6', label: 'Demon Shoes' },
          { value: 'SHOES_PLATE_SET7', label: 'Judicator Shoes' },
          { value: 'SHOES_PLATE_SET8', label: 'Duskweaver Shoes' },
          { value: 'SHOES_PLATE_SET9', label: 'Boot of Valor' },
        ]
      }
    ]
  }
]
const treeData = [
];
treeData.push.apply(treeData, weapons)
treeData.push.apply(treeData, chestArmor)
treeData.push.apply(treeData, headArmor)
treeData.push.apply(treeData, footArmor)

export default treeData

