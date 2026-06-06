/**
 * 控制台命令精选 — 游戏内 HELP 为准，补丁后请核对
 */

export const cheatCategories = [
  'All',
  'Money',
  'Needs',
  'Skills',
  'Character',
  'Time',
  'Misc',
]

export const cheatCommands = [
  { command: 'PIGGYBANK', effect: '+1,000 Paradimes', category: 'Money', risk: 'safe', example: 'PIGGYBANK' },
  { command: 'MAKEITRAIN', effect: '+10,000 Paradimes', category: 'Money', risk: 'safe', example: 'MAKEITRAIN' },
  { command: 'JACKPOT', effect: '+50,000 Paradimes', category: 'Money', risk: 'safe', example: 'JACKPOT' },
  { command: 'PRINTMONEY [n]', effect: 'Add custom amount', category: 'Money', risk: 'safe', example: 'PRINTMONEY 25000' },
  { command: 'SETMONEY [n]', effect: 'Set exact balance', category: 'Money', risk: 'safe', example: 'SETMONEY 15000' },
  { command: 'LOTTERY', effect: 'Random payout', category: 'Money', risk: 'caution', example: 'LOTTERY' },
  { command: 'PAYDAY', effect: "Adds selected Para's salary", category: 'Money', risk: 'safe', example: 'PAYDAY' },
  { command: 'CLEARBILLS', effect: 'Clears pending bills', category: 'Money', risk: 'caution', example: 'CLEARBILLS' },
  { command: 'RELIEFALLNEEDS', effect: 'Max all needs (selected Para)', category: 'Needs', risk: 'safe', example: 'RELIEFALLNEEDS' },
  { command: 'RELIEFNEED [need]', effect: 'Refill one need', category: 'Needs', risk: 'safe', example: 'RELIEFNEED sleep' },
  { command: 'SETNEED [need] [n]', effect: 'Set need value', category: 'Needs', risk: 'caution', example: 'SETNEED hunger 100' },
  { command: 'SHOWNeeds', effect: 'List need ids', category: 'Needs', risk: 'safe', example: 'SHOWNeeds' },
  { command: 'COMPLETECURRENTWANTS', effect: 'Complete active wants', category: 'Needs', risk: 'caution', example: 'COMPLETECURRENTWANTS' },
  { command: 'LEVELUPSKILL [skill]', effect: '+1 skill level', category: 'Skills', risk: 'caution', example: 'LEVELUPSKILL cooking' },
  { command: 'SHOWSKILLS', effect: 'List skills', category: 'Skills', risk: 'safe', example: 'SHOWSKILLS' },
  { command: 'EDITCHARACTER', effect: 'Open Paramaker in Live Mode', category: 'Character', risk: 'caution', example: 'EDITCHARACTER' },
  { command: 'SETAGE [n]', effect: 'Set age value', category: 'Character', risk: 'debug', example: 'SETAGE 3' },
  { command: 'SETHOUR [n]', effect: 'Jump clock hour', category: 'Time', risk: 'caution', example: 'SETHOUR 8' },
  { command: 'ADVANCEDAY', effect: 'Skip one day', category: 'Time', risk: 'caution', example: 'ADVANCEDAY' },
  { command: 'UNSTUCK', effect: 'Teleport stuck Para', category: 'Misc', risk: 'safe', example: 'UNSTUCK' },
  { command: 'UNSTUCKALL', effect: 'Teleport all Paras', category: 'Misc', risk: 'caution', example: 'UNSTUCKALL' },
  { command: 'SAVE', effect: 'Manual save', category: 'Misc', risk: 'safe', example: 'SAVE' },
  { command: 'HELP', effect: 'Full command list for your build', category: 'Misc', risk: 'safe', example: 'HELP' },
]
