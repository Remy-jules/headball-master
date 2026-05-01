'use strict';

// =========================
// 配置 / 常量
// =========================
const CONFIG = {
  WIDTH: 430,
  HEIGHT: 860,
  GAME_TIME: 60,
  GROUND_Y: 740,
  PLAY_LEFT: 22,
  PLAYER_W: 74,
  PLAYER_H: 188,
  BALL_R: 26,
  SAVE_KEY: 'headball_tycoon_v3_structured_save',
};
CONFIG.PLAY_RIGHT = CONFIG.WIDTH - CONFIG.PLAY_LEFT;

const LEVELS = [
  // V4.7.9 难度整体下调：扩大出界范围、扩大头球热区、降低风力与重力压力。
  { level: 1, baseScore: 100, bounce: 0.88, headRadius: 19, outWidth: 0.96, windMax: 0, gravity: 760 },
  { level: 2, baseScore: 100, bounce: 0.90, headRadius: 19, outWidth: 0.94, windMax: 4, gravity: 770 },
  { level: 3, baseScore: 200, bounce: 0.92, headRadius: 18, outWidth: 0.92, windMax: 6, gravity: 780 },
  { level: 4, baseScore: 200, bounce: 0.94, headRadius: 18, outWidth: 0.90, windMax: 8, gravity: 790 },
  { level: 5, baseScore: 300, bounce: 0.96, headRadius: 17, outWidth: 0.88, windMax: 10, gravity: 805 },
  { level: 6, baseScore: 300, bounce: 0.98, headRadius: 17, outWidth: 0.84, windMax: 12, gravity: 820 },
  { level: 7, baseScore: 400, bounce: 1.00, headRadius: 16, outWidth: 0.80, windMax: 15, gravity: 835 },
  { level: 8, baseScore: 400, bounce: 1.01, headRadius: 16, outWidth: 0.76, windMax: 18, gravity: 850 },
  { level: 9, baseScore: 500, bounce: 1.02, headRadius: 15, outWidth: 0.72, windMax: 21, gravity: 865 },
  { level: 10, baseScore: 600, bounce: 1.03, headRadius: 15, outWidth: 0.68, windMax: 24, gravity: 880 },
];

const COMBO_TIERS = [
  { min: 0, max: 4, mul: 1 },
  { min: 5, max: 9, mul: 2 },
  { min: 10, max: 14, mul: 3 },
  { min: 15, max: 19, mul: 4 },
  { min: 20, max: 24, mul: 5 },
  { min: 25, max: 29, mul: 6 },
  { min: 30, max: 34, mul: 7 },
  { min: 35, max: 39, mul: 8 },
  { min: 40, max: 999, mul: 9 },
];

const SHOP_ITEMS = [
  { id: 'bag_tote', category: 'watch', name: '球场通行证', price: 16000, unlock: 1, desc: '拿到它，你才算真正踏上了这场足球挑战之旅。', image: 'assets/items/collectible_01_pass.png' },
  { id: 'shoes_slide', category: 'bag', name: '球星签名卡', price: 24000, unlock: 2, desc: '珍贵的签名卡，记录着球场偶像留下的荣耀印记。', image: 'assets/items/collectible_02_signature_card.png' },
  { id: 'watch_basic', category: 'shoes', name: '彩虹足球', price: 36000, unlock: 3, desc: '旋转时划出绚丽色彩，是球场上最吸睛的梦幻足球。', image: 'assets/items/collectible_03_rainbow_ball.png' },
  { id: 'bag_chain', category: 'bag', name: '大赛铜奖杯', price: 52000, unlock: 4, desc: '属于强者的第一份荣誉，见证你开始站上领奖台。', image: 'assets/items/collectible_04_bronze_cup.png' },
  { id: 'watch_gold', category: 'watch', name: '传奇守门手套', price: 64000, unlock: 5, desc: '戴上它，仿佛连最刁钻的射门也能稳稳挡下。', image: 'assets/items/collectible_05_gloves.png' },
  { id: 'shoes_lux', category: 'shoes', name: '火焰球鞋', price: 84000, unlock: 6, desc: '炽热如火的球鞋，象征速度、爆发与 unstoppable 的冲劲。', image: 'assets/items/collectible_06_flame_shoes.png' },
  { id: 'bag_limited', category: 'bag', name: '大赛银奖杯', price: 112000, unlock: 7, desc: '距离巅峰只差一步的荣耀，闪耀着不服输的光芒。', image: 'assets/items/collectible_07_silver_cup.png' },
  { id: 'watch_diamond', category: 'watch', name: '队长袖标', price: 156000, unlock: 8, desc: '这不仅是一枚袖标，更是领导全队的责任与信念。', image: 'assets/items/collectible_08_captain_band.png' },
  { id: 'shoes_couture', category: 'shoes', name: '传奇勋章', price: 196000, unlock: 9, desc: '唯有真正的球场传奇，才能获得这枚象征实力的勋章。', image: 'assets/items/collectible_09_medal.png' },
  { id: 'bag_crown', category: 'bag', name: '大赛金奖杯', price: 256000, unlock: 10, desc: '至高无上的冠军荣耀，属于坚持到最后的王者。', image: 'assets/items/collectible_10_gold_cup.png' },
];
