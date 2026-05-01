// =========================
// DOM
// =========================
const screens = {
  menu: document.getElementById('menuScreen'),
  levelSelect: document.getElementById('levelSelectScreen'),
  settings: document.getElementById('settingsScreen'),
  game: document.getElementById('gameScreen'),
  result: document.getElementById('resultScreen'),
  profile: document.getElementById('profileScreen'),
  shop: document.getElementById('shopScreen'),
};

const ui = {
  menuCash: document.getElementById('menuCash'),
  challengeHomeBtn: document.getElementById('challengeHomeBtn'),
  homeLogoImage: document.getElementById('homeLogoImage'),
  homeTitleChallenge: document.getElementById('homeTitleChallenge'),
  homeTitleProfile: document.getElementById('homeTitleProfile'),
  homeTitleShop: document.getElementById('homeTitleShop'),
  homeTitleSettings: document.getElementById('homeTitleSettings'),
  profileBtn: document.getElementById('profileBtn'),
  shopBtn: document.getElementById('shopBtn'),
  settingsBtn: document.getElementById('settingsBtn'),
  gameToast: document.getElementById('gameToast'),
  soundUnlockBtn: document.getElementById('soundUnlockBtn'),
  menuUnlockCount: document.getElementById('menuUnlockCount'),
  menuCollectionValue: document.getElementById('menuCollectionValue'),

  levelSelectBackBtn: document.getElementById('levelSelectBackBtn'),
  settingsBackBtn: document.getElementById('settingsBackBtn'),
  resultBackBtn: document.getElementById('resultBackBtn'),
  menuBtn: document.getElementById('menuBtn'),
  profileBackBtn: document.getElementById('profileBackBtn'),
  shopBackBtn: document.getElementById('shopBackBtn'),

  unlockStat: document.getElementById('unlockStat'),
  levelStat: document.getElementById('levelStat'),
  bestTimeStat: document.getElementById('bestTimeStat'),
  levelGrid: document.getElementById('levelGrid'),
  levelSelectCash: document.getElementById('levelSelectCash'),
  levelSelectEnergyIndicator: document.getElementById('levelSelectEnergyIndicator'),
  routeProgress: document.getElementById('routeProgress'),
  routeSelectedCircle: document.getElementById('routeSelectedCircle'),
  routeSelectedTitle: document.getElementById('routeSelectedTitle'),
  routeSelectedStatus: document.getElementById('routeSelectedStatus'),
  routeSelectedReward: document.getElementById('routeSelectedReward'),
  routeSelectedBest: document.getElementById('routeSelectedBest'),
  routeSelectedWind: document.getElementById('routeSelectedWind'),
  routeSelectedEnergy: document.getElementById('routeSelectedEnergy'),
  levelStartBtn: document.getElementById('levelStartBtn'),
  startBtn: document.getElementById('startBtn'),
  resetSaveBtn: document.getElementById('resetSaveBtn'),

  settingsCash: document.getElementById('settingsCash'),
  settingsSectionTitle: document.getElementById('settingsSectionTitle'),
  settingsNote: document.getElementById('settingsNote'),
  musicLabel: document.getElementById('musicLabel'),
  effectLabel: document.getElementById('effectLabel'),
  languageLabel: document.getElementById('languageLabel'),
  languageCurrentValue: document.getElementById('languageCurrentValue'),
  langBtnZh: document.getElementById('langBtnZh'),
  langBtnEn: document.getElementById('langBtnEn'),
  settingsEnergyIndicator: document.getElementById('settingsEnergyIndicator'),
  musicVolumeSlider: document.getElementById('musicVolumeSlider'),
  musicVolumeValue: document.getElementById('musicVolumeValue'),
  effectVolumeSlider: document.getElementById('effectVolumeSlider'),
  effectVolumeValue: document.getElementById('effectVolumeValue'),

  hudLevel: document.getElementById('hudLevel'),
  hudTime: document.getElementById('hudTime'),
  hudCash: document.getElementById('hudCash'),
  hudLevelPanelImg: document.getElementById('hudLevelPanelImg'),
  hudCoinPanelImg: document.getElementById('hudCoinPanelImg'),
  hudTimePanelImg: document.getElementById('hudTimePanelImg'),

  resultTitle: document.getElementById('resultTitle'),
  resultLabelLevel: document.getElementById('resultLabelLevel'),
  resultLabelCash: document.getElementById('resultLabelCash'),
  resultLabelTime: document.getElementById('resultLabelTime'),
  resultLabelEnergy: document.getElementById('resultLabelEnergy'),
  resultAvatar: document.getElementById('resultAvatar'),
  bigCash: document.getElementById('bigCash'),
  resultTime: document.getElementById('resultTime'),
  resultEnergy: document.getElementById('resultEnergy'),
  resultLevel: document.getElementById('resultLevel'),
  retryBtn: document.getElementById('retryBtn'),
  nextBtn: document.getElementById('nextBtn'),
  resultNextRow: document.getElementById('resultNextRow'),

  profileCash: document.getElementById('profileCash'),
  profileEnergyIndicator: document.getElementById('profileEnergyIndicator'),
  profileOwnedPrefix: document.getElementById('profileOwnedPrefix'),
  ownedCount: document.getElementById('ownedCount'),
  collectionValue: document.getElementById('collectionValue'),
  bagSlot: document.getElementById('bagSlot'),
  shoesSlot: document.getElementById('shoesSlot'),
  watchSlot: document.getElementById('watchSlot'),
  profileShowcaseList: document.getElementById('profileShowcaseList'),
  shopCash: document.getElementById('shopCash'),
  shopEnergyIndicator: document.getElementById('shopEnergyIndicator'),
  shopOwnedCount: document.getElementById('shopOwnedCount'),
  shopLockedCount: document.getElementById('shopLockedCount'),
  shopGrid: document.getElementById('shopGrid'),
  confirmModal: document.getElementById('confirmModal'),
  confirmModalTitle: document.getElementById('confirmModalTitle'),
  confirmModalItemIcon: document.getElementById('confirmModalItemIcon'),
  confirmModalText: document.getElementById('confirmModalText'),
  adModalTitle: document.getElementById('adModalTitle'),
  adModalText: document.getElementById('adModalText'),
  confirmCancelBtn: document.getElementById('confirmCancelBtn'),
  confirmOkBtn: document.getElementById('confirmOkBtn'),
  adModal: document.getElementById('adModal'),
  adCountdown: document.getElementById('adCountdown'),
  adCloseBtn: document.getElementById('adCloseBtn'),
};

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const PLAYER_SPRITES = {
  idle: { img: new Image(), bottomRatio: 934 / 1024 },
  header: { img: new Image(), bottomRatio: 948 / 1024 },
  miss: { img: new Image(), bottomRatio: 936 / 1024 },
};
PLAYER_SPRITES.idle.img.src = 'assets/player/player_idle.png';
PLAYER_SPRITES.header.img.src = 'assets/player/player_header.png';
PLAYER_SPRITES.miss.img.src = 'assets/player/player_miss.png';

const SOCCER_BALL_IMG = new Image();
SOCCER_BALL_IMG.src = 'assets/ball/soccer_ball.png';


// =========================
// 音频
// =========================
const AudioManager = {
  unlocked: false,
  bgmStarted: false,
  userInteracted: false,
  musicVolume: 0.36,
  effectVolume: 0.65,
  STORAGE_KEY: 'headball_tycoon_audio_settings',
  tracks: {
    bgm: new Audio('assets/audio/bgm.mp3'),
    click: new Audio('assets/audio/click.mp3'),
    header: new Audio('assets/audio/header.mp3'),
    success: new Audio('assets/audio/success.mp3'),
    fail: new Audio('assets/audio/fail.mp3'),
  },

  clampVolume(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return 0;
    return Math.max(0, Math.min(1, num));
  },

  init() {
    this.loadSettings();
    const bgm = this.tracks.bgm;
    bgm.loop = true;
    bgm.autoplay = false;
    Object.values(this.tracks).forEach(audio => {
      try {
        audio.preload = 'auto';
        audio.setAttribute('playsinline', 'true');
        audio.setAttribute('webkit-playsinline', 'true');
        audio.load();
      } catch (error) {}
    });
    this.applyVolumes();
  },

  loadSettings() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data && data.musicVolume !== undefined) this.musicVolume = this.clampVolume(data.musicVolume);
      if (data && data.effectVolume !== undefined) this.effectVolume = this.clampVolume(data.effectVolume);
    } catch (error) {}
  },

  saveSettings() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ musicVolume: this.musicVolume, effectVolume: this.effectVolume }));
    } catch (error) {}
  },

  applyVolumes() {
    const { bgm, click, header, success, fail } = this.tracks;
    bgm.volume = this.musicVolume;
    click.volume = this.effectVolume * 0.80;
    header.volume = this.effectVolume * 0.90;
    success.volume = this.effectVolume;
    fail.volume = this.effectVolume;
  },

  setMusicVolume(value) {
    this.musicVolume = this.clampVolume(value);
    this.applyVolumes();
    this.saveSettings();
    if (this.musicVolume > 0) this.tryStartBgm(true);
    else this.hidePrompt();
  },

  setEffectVolume(value) {
    this.effectVolume = this.clampVolume(value);
    this.applyVolumes();
    this.saveSettings();
  },

  unlock() {
    this.userInteracted = true;
    return this.tryStartBgm(true);
  },

  showPrompt() {
    if (!ui.soundUnlockBtn || this.musicVolume <= 0 || this.bgmStarted) return;
    ui.soundUnlockBtn.classList.remove('is-hidden');
  },

  hidePrompt() {
    if (ui.soundUnlockBtn) ui.soundUnlockBtn.classList.add('is-hidden');
  },

  tryStartBgm(showPromptOnFail = false) {
    const bgm = this.tracks.bgm;
    if (!bgm || this.musicVolume <= 0) {
      this.hidePrompt();
      return Promise.resolve(false);
    }

    if (!bgm.paused && this.bgmStarted) {
      this.hidePrompt();
      return Promise.resolve(true);
    }

    try {
      bgm.muted = false;
      bgm.volume = this.musicVolume;
      const playPromise = bgm.play();
      if (playPromise && typeof playPromise.then === 'function') {
        return playPromise.then(() => {
          this.unlocked = true;
          this.bgmStarted = true;
          this.hidePrompt();
          return true;
        }).catch(() => {
          this.bgmStarted = false;
          if (showPromptOnFail) this.showPrompt();
          return false;
        });
      }
      this.unlocked = true;
      this.bgmStarted = true;
      this.hidePrompt();
      return Promise.resolve(true);
    } catch (error) {
      this.bgmStarted = false;
      if (showPromptOnFail) this.showPrompt();
      return Promise.resolve(false);
    }
  },

  resumeBgm() {
    if (this.musicVolume <= 0) return;
    this.tryStartBgm(this.userInteracted);
  },

  play(name) {
    // Do not let SFX consume the only user gesture before BGM tries to start.
    this.resumeBgm();
    const audio = this.tracks[name];
    if (!audio) return;
    try {
      audio.currentTime = 0;
      const p = audio.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (error) {}
  },

  bindGestureUnlock() {
    const tryUnlock = () => {
      this.userInteracted = true;
      this.tryStartBgm(true);
    };
    // Mobile browsers differ: iOS Safari often works best on touchend/click,
    // while Android Chrome usually accepts pointerdown. Keep all of them.
    ['pointerdown', 'touchstart', 'touchend', 'mousedown', 'click', 'keydown'].forEach(type => {
      document.addEventListener(type, tryUnlock, { capture: true, passive: true });
    });
    if (ui.soundUnlockBtn) {
      ui.soundUnlockBtn.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        this.userInteracted = true;
        this.tryStartBgm(true);
      }, { capture: true });
    }
  },

  bindButtonClicks() {
    document.addEventListener('click', event => {
      const target = event.target.closest('button, .level-card, .compact-item-buy, .compact-item-owned, [data-nav]');
      if (!target) return;
      this.userInteracted = true;
      this.tryStartBgm(true).finally(() => this.play('click'));
    }, true);
  },
};

const GAME_BG = {
  base: new Image(),
  clouds: new Image(),
  wind: new Image(),
};
GAME_BG.base.src = 'assets/backgrounds/game/bg_base.png';
GAME_BG.clouds.src = 'assets/backgrounds/game/bg_clouds.png';
GAME_BG.wind.src = 'assets/backgrounds/game/bg_wind_lines.png';

const ENERGY_MAX = 20;
const ENERGY_ITEMS = [
  { id: 'energy_drink', name: '饮料', energy: 2, price: 8000, image: 'assets/energy/drink.png', theme: 'drink', desc: '购买后可加2点体力。' },
  { id: 'energy_burger', name: '汉堡', energy: 4, price: 16000, image: 'assets/energy/burger.png', theme: 'burger', desc: '购买后可加4点体力。' },
  { id: 'energy_ramen', name: '拉面', energy: 8, price: 30000, image: 'assets/energy/ramen.png', theme: 'ramen', desc: '购买后可加8点体力。' },
  { id: 'energy_bao', name: '包子', energy: 10, price: 36000, image: 'assets/energy/bao.png', theme: 'bao', desc: '购买后可加10点体力。' },
  { id: 'energy_ad', name: '看广告', energy: 6, price: 0, image: 'assets/energy/ad.png', theme: 'ad', isAd: true, desc: '观看广告后可获得6点体力。' },
];

const ROUTE_CARD_PIXEL_PRESETS = {
  current: {
    cardWidth: '286px',
    cardHeight: '201px',
    numLeft: '6px',
    numTop: '10px',
    numSize: '60px',
    numFont: '19px',
    titleLeft: '90px',
    titleTop: '31px',
    titleWidth: '118px',
    titleHeight: '34px',
    titleFont: '20px',
    tipRight: '15px',
    tipTop: '15px',
    tipWidth: '58px',
    tipHeight: '19px',
    tipFont: '9px',
    metaLeft: '72px',
    metaRight: '18px',
    metaTop: '89px',
    metaGap: '8px',
    metaItemHeight: '58px',
    metaLabelTop: '12px',
    metaLabelFont: '9px',
    metaValueBottom: '8px',
    metaValueFont: '15px',
    footerLeft: '73px',
    footerRight: '18px',
    footerBottom: '17px',
    footerHeight: '24px',
    rewardLabelLeft: '31px',
    rewardLabelBottom: '11px',
    rewardLabelFont: '9px',
    rewardRight: '7px',
    rewardBottom: '4px',
    rewardValueFont: '17px',
    rewardCoinSize: '14px'
  },
  unlocked: {
    cardWidth: '286px',
    cardHeight: '201px',
    numLeft: '6px',
    numTop: '10px',
    numSize: '60px',
    numFont: '19px',
    titleLeft: '97px',
    titleTop: '25px',
    titleWidth: '116px',
    titleHeight: '36px',
    titleFont: '20px',
    tipRight: '14px',
    tipTop: '10px',
    tipWidth: '60px',
    tipHeight: '20px',
    tipFont: '10px',
    metaLeft: '72px',
    metaRight: '18px',
    metaTop: '91px',
    metaGap: '8px',
    metaItemHeight: '56px',
    metaLabelTop: '12px',
    metaLabelFont: '9px',
    metaValueBottom: '8px',
    metaValueFont: '15px',
    footerLeft: '74px',
    footerRight: '18px',
    footerBottom: '16px',
    footerHeight: '24px',
    rewardLabelLeft: '34px',
    rewardLabelBottom: '11px',
    rewardLabelFont: '9px',
    rewardRight: '7px',
    rewardBottom: '4px',
    rewardValueFont: '17px',
    rewardCoinSize: '14px'
  },
  locked: {
    cardWidth: '286px',
    cardHeight: '201px',
    numLeft: '6px',
    numTop: '10px',
    numSize: '60px',
    numFont: '19px',
    titleLeft: '97px',
    titleTop: '25px',
    titleWidth: '116px',
    titleHeight: '36px',
    titleFont: '20px',
    tipRight: '14px',
    tipTop: '10px',
    tipWidth: '60px',
    tipHeight: '20px',
    tipFont: '10px',
    metaLeft: '72px',
    metaRight: '18px',
    metaTop: '91px',
    metaGap: '8px',
    metaItemHeight: '56px',
    metaLabelTop: '12px',
    metaLabelFont: '9px',
    metaValueBottom: '8px',
    metaValueFont: '15px',
    footerLeft: '74px',
    footerRight: '18px',
    footerBottom: '16px',
    footerHeight: '24px',
    rewardLabelLeft: '34px',
    rewardLabelBottom: '11px',
    rewardLabelFont: '9px',
    rewardRight: '7px',
    rewardBottom: '4px',
    rewardValueFont: '17px',
    rewardCoinSize: '14px'
  }
};

// =========================
// 状态
// =========================
const state = {
  screen: 'menu',
  selectedLevel: 1,
  unlockedLevel: 1,
  totalCash: 0,
  owned: [],
  bestTimes: {},
  bestCombos: {},
  shopTab: 'collection',
  energy: ENERGY_MAX,
  energyLastRefillAt: Date.now(),
  lang: 'zh',

  gameCash: 0,
  combo: 0,
  bestCombo: 0,
  timeLeft: CONFIG.GAME_TIME,
  survived: 0,
  passed: false,
  message: '拖拽屏幕左右移动，用头持续顶球，坚持满 60 秒。',

  keys: { left: false, right: false },
  touch: { dragging: false, targetX: CONFIG.WIDTH / 2 },

  playerX: CONFIG.WIDTH / 2,
  playerSpeed: 520,
  ball: null,
  particles: [],
  windTime: 0,
  windValue: 0,
  flash: 0,
  playerPose: 'idle',
  playerPoseTimer: 0,
  pendingFail: null,
  failDelay: 0,
  animId: 0,
  lastTs: 0,
};


const I18N = {
  zh: {
    'document.title': '头球大师',
    'home.challenge': '挑战',
    'home.profile': '展厅',
    'home.shop': '商城',
    'home.settings': '设置',
    'settings.title': '设置',
    'settings.note': '调整背景音乐和音效音量。设置会自动保存。',
    'settings.music': '背景音乐',
    'settings.effect': '音效',
    'settings.language': '语言',
    'settings.reset': '清除存档',
    'lang.zh': '中文',
    'lang.en': 'English',
    'result.success': '挑战成功',
    'result.fail': '挑战失败',
    'result.level': '关卡',
    'result.cash': '本局金币',
    'result.time': '本局坚持时间',
    'result.energy': '剩余体力',
    'result.retry': '重开本关',
    'result.home': '返回主页',
    'result.next': '下一关',
    'profile.ownedPrefix': '已拥有',
    'shop.collection': '藏品',
    'shop.energy': '体力',
    'shop.unlockLevel': '解锁关卡',
    'shop.price': '售价',
    'shop.buy': '购买',
    'shop.watch': '观看',
    'shop.owned': '已拥有',
    'shop.locked': '未解锁',
    'common.free': '免费',
    'status.unlocked': '已解锁',
    'status.locked': '未解锁',
    'modal.confirmPurchase': '确认购买',
    'modal.confirmAction': '确认操作',
    'modal.confirmGeneric': '是否确认执行当前操作？',
    'modal.cancel': '取消',
    'modal.confirm': '确认',
    'modal.gotIt': '知道了',
    'modal.item': '物品',
    'modal.outOfEnergyTitle': '体力不足',
    'modal.outOfEnergyText': '体力已用光，可到商城购买商品恢复体力，或等待24小时自动恢复20点体力。',
    'modal.resetTitle': '清除存档',
    'modal.resetText': '确定要清除本地存档吗？已解锁关卡、金币和藏品都会重置。',
    'modal.adTitle': '广告奖励',
    'modal.adText': '演示广告窗口，倒计时结束后可领取体力。',
    'ad.wait': '请等待',
    'ad.claim': '领取体力',
    'toast.energyFull': '体力值已满',
    'toast.energyEmpty': '体力已用光',
    'toast.cashLack': '金币不足',
    'toast.buyCollection': '已购入：{name}',
    'toast.buyEnergy': '已购买 {name}，体力 +{energy}',
    'toast.adDone': '观看完成，体力已恢复',
    'toast.saveCleared': '本地存档已清除',
    'audio.enable': '点击开启音乐',
    'toast.watchReward': '观看广告后可获得{energy}点体力。',
    'toast.buyReward': '购买后可加{energy}点体力。',
    'shop.buyAsk': '是否花费 ${price} 购买「{name}」？',
    'shop.buyEnergyAsk': '是否花费 ${price} 购买「{name}」，恢复体力 +{energy}？',
    'game.dragHint': '拖拽屏幕左右移动，用头持续顶球，坚持满 60 秒。',
    'game.failGround': '足球落地，本关挑战失败。',
    'game.failOut': '足球出界，本关挑战失败。',
    'game.comboGain': '连击 {combo}！本次 +{gain}',
    'game.hitGain': '成功头球！本次 +{gain}',
    'game.final10': '最后 10 秒，零失误撑住就能过关！',
    'level.format': '第{level}关',
    'level.short': '第 {level} 关',
  },
  en: {
    'document.title': 'Headball Master',
    'home.challenge': 'Challenge',
    'home.profile': 'Showroom',
    'home.shop': 'Shop',
    'home.settings': 'Settings',
    'settings.title': 'Settings',
    'settings.note': 'Adjust background music and sound effects volume. Settings are saved automatically.',
    'settings.music': 'BGM',
    'settings.effect': 'SFX',
    'settings.language': 'Language',
    'settings.reset': 'Clear Save',
    'lang.zh': 'Chinese',
    'lang.en': 'English',
    'result.success': 'Challenge Success',
    'result.fail': 'Challenge Failed',
    'result.level': 'Level',
    'result.cash': 'Coins Earned',
    'result.time': 'Survival Time',
    'result.energy': 'Remaining Energy',
    'result.retry': 'Retry',
    'result.home': 'Home',
    'result.next': 'Next Level',
    'profile.ownedPrefix': 'Owned',
    'shop.collection': 'Collection',
    'shop.energy': 'Energy',
    'shop.unlockLevel': 'Unlock Level',
    'shop.price': 'Price',
    'shop.buy': 'Buy',
    'shop.watch': 'Watch',
    'shop.owned': 'Owned',
    'shop.locked': 'Locked',
    'common.free': 'Free',
    'status.unlocked': 'Unlocked',
    'status.locked': 'Locked',
    'modal.confirmPurchase': 'Confirm Purchase',
    'modal.confirmAction': 'Confirm Action',
    'modal.confirmGeneric': 'Are you sure you want to proceed?',
    'modal.cancel': 'Cancel',
    'modal.confirm': 'Confirm',
    'modal.gotIt': 'Got it',
    'modal.item': 'Item',
    'modal.outOfEnergyTitle': 'Out of Energy',
    'modal.outOfEnergyText': 'You are out of energy. Buy energy items in the shop, or wait 24 hours to restore 20 energy automatically.',
    'modal.resetTitle': 'Clear Save',
    'modal.resetText': 'Are you sure you want to clear the local save? Unlocked levels, coins, and collections will all be reset.',
    'modal.adTitle': 'Ad Reward',
    'modal.adText': 'Demo ad window. Claim your energy after the countdown ends.',
    'ad.wait': 'Please Wait',
    'ad.claim': 'Claim Energy',
    'toast.energyFull': 'Energy is already full',
    'toast.energyEmpty': 'You are out of energy',
    'toast.cashLack': 'Not enough coins',
    'toast.buyCollection': 'Purchased: {name}',
    'toast.buyEnergy': 'Purchased {name}, energy +{energy}',
    'toast.adDone': 'Ad completed, energy restored',
    'toast.saveCleared': 'Local save cleared',
    'audio.enable': 'Tap for Music',
    'toast.watchReward': 'Watch an ad to gain {energy} energy.',
    'toast.buyReward': 'Purchase to restore {energy} energy.',
    'shop.buyAsk': 'Spend ${price} to buy "{name}"?',
    'shop.buyEnergyAsk': 'Spend ${price} to buy "{name}" and restore +{energy} energy?',
    'game.dragHint': 'Drag left or right to move, keep the ball up with your head, and survive for 60 seconds.',
    'game.failGround': 'The ball hit the ground. Challenge failed.',
    'game.failOut': 'The ball went out of bounds. Challenge failed.',
    'game.comboGain': 'Combo {combo}! +{gain} this time',
    'game.hitGain': 'Nice header! +{gain} this time',
    'game.final10': 'Final 10 seconds — hold on without mistakes to clear the level!',
    'level.format': 'Level {level}',
    'level.short': 'Lv. {level}',
  }
};

const SHOP_ITEM_I18N = {
  bag_tote: { en: { name: 'Stadium Pass', desc: 'With it in hand, you truly step onto the journey of this football challenge.' } },
  shoes_slide: { en: { name: 'Star Signature Card', desc: 'A precious signature card capturing the glory left by your football idol.' } },
  watch_basic: { en: { name: 'Rainbow Football', desc: 'A dreamy football that leaves a dazzling rainbow trail as it spins.' } },
  bag_chain: { en: { name: 'Bronze Trophy', desc: 'Your first honor for the strong, marking the beginning of your rise to the podium.' } },
  watch_gold: { en: { name: 'Legendary Goalkeeper Gloves', desc: 'Put them on and even the trickiest shots feel easy to block.' } },
  shoes_lux: { en: { name: 'Flame Boots', desc: 'Fiery boots that symbolize speed, explosive power, and unstoppable momentum.' } },
  bag_limited: { en: { name: 'Silver Trophy', desc: 'A shining glory just one step away from the summit, glowing with an unyielding spirit.' } },
  watch_diamond: { en: { name: "Captain's Armband", desc: 'More than an armband, it carries the duty and belief of leading the whole team.' } },
  shoes_couture: { en: { name: 'Legendary Medal', desc: 'Only true football legends can earn this medal that symbolizes strength.' } },
  bag_crown: { en: { name: 'Gold Trophy', desc: 'The supreme championship honor belongs to the one who perseveres to the end.' } },
};

const ENERGY_ITEM_I18N = {
  energy_drink: { en: { name: 'Drink', desc: 'Purchase to restore 2 energy.' } },
  energy_burger: { en: { name: 'Burger', desc: 'Purchase to restore 4 energy.' } },
  energy_ramen: { en: { name: 'Ramen', desc: 'Purchase to restore 8 energy.' } },
  energy_bao: { en: { name: 'Bao', desc: 'Purchase to restore 10 energy.' } },
  energy_ad: { en: { name: 'Watch Ad', desc: 'Watch an ad to gain 6 energy.' } },
};

function t(key, vars = {}) {
  const table = I18N[state.lang] || I18N.zh;
  let str = table[key] ?? I18N.zh[key] ?? key;
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replaceAll(`{${k}}`, String(v));
  });
  return str;
}

function getItemName(item) {
  if (!item) return t('modal.item');
  if (state.lang === 'en') {
    return SHOP_ITEM_I18N[item.id]?.en?.name || ENERGY_ITEM_I18N[item.id]?.en?.name || item.name || '';
  }
  return item.name || '';
}

function getItemDesc(item) {
  if (!item) return '';
  if (state.lang === 'en') {
    return SHOP_ITEM_I18N[item.id]?.en?.desc || ENERGY_ITEM_I18N[item.id]?.en?.desc || item.desc || '';
  }
  return item.desc || '';
}

function getLevelText(level) {
  return t('level.format', { level });
}

function getLevelShortText(level) {
  return t('level.short', { level });
}

const UIText = {
  apply() {
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'zh-CN';
    document.title = t('document.title');
    const isEn = state.lang === 'en';
    if (ui.homeLogoImage) {
      ui.homeLogoImage.src = isEn ? './assets/branding/logo_home_en.png' : './assets/branding/logo_home.png';
      ui.homeLogoImage.alt = `${t('document.title')} Logo`;
    }
    if (ui.hudLevelPanelImg) {
      ui.hudLevelPanelImg.src = isEn ? 'assets/ui/hud_level_panel_en.png' : 'assets/ui/hud_level_panel.png';
      ui.hudLevelPanelImg.alt = isEn ? 'Level panel' : '关卡栏';
    }
    if (ui.hudCoinPanelImg) {
      ui.hudCoinPanelImg.src = isEn ? 'assets/ui/hud_coin_panel_en.png' : 'assets/ui/hud_coin_panel.png';
      ui.hudCoinPanelImg.alt = isEn ? 'Coins panel' : '金币栏';
    }
    if (ui.hudTimePanelImg) {
      ui.hudTimePanelImg.src = isEn ? 'assets/ui/hud_time_panel_en.png' : 'assets/ui/hud_time_panel.png';
      ui.hudTimePanelImg.alt = isEn ? 'Time left panel' : '剩余时间栏';
    }
    if (ui.homeTitleChallenge) ui.homeTitleChallenge.textContent = t('home.challenge');
    if (ui.homeTitleProfile) ui.homeTitleProfile.textContent = t('home.profile');
    if (ui.homeTitleShop) ui.homeTitleShop.textContent = t('home.shop');
    if (ui.homeTitleSettings) ui.homeTitleSettings.textContent = t('home.settings');
    if (ui.settingsSectionTitle) ui.settingsSectionTitle.textContent = t('settings.title');
    if (ui.settingsNote) ui.settingsNote.textContent = t('settings.note');
    if (ui.musicLabel) ui.musicLabel.textContent = t('settings.music');
    if (ui.effectLabel) ui.effectLabel.textContent = t('settings.effect');
    if (ui.languageLabel) ui.languageLabel.textContent = t('settings.language');
    if (ui.languageCurrentValue) ui.languageCurrentValue.textContent = t(state.lang === 'zh' ? 'lang.zh' : 'lang.en');
    if (ui.langBtnZh) {
      ui.langBtnZh.textContent = '中文';
      ui.langBtnZh.classList.toggle('active', state.lang === 'zh');
    }
    if (ui.langBtnEn) {
      ui.langBtnEn.textContent = 'English';
      ui.langBtnEn.classList.toggle('active', state.lang === 'en');
    }
    if (ui.resetSaveBtn) ui.resetSaveBtn.textContent = t('settings.reset');
    if (ui.resultLabelLevel) ui.resultLabelLevel.textContent = t('result.level');
    if (ui.resultLabelCash) ui.resultLabelCash.textContent = t('result.cash');
    if (ui.resultLabelTime) ui.resultLabelTime.textContent = t('result.time');
    if (ui.resultLabelEnergy) ui.resultLabelEnergy.textContent = t('result.energy');
    if (ui.retryBtn) ui.retryBtn.textContent = t('result.retry');
    if (ui.menuBtn) ui.menuBtn.textContent = t('result.home');
    if (ui.nextBtn) ui.nextBtn.textContent = t('result.next');
    if (ui.profileOwnedPrefix) ui.profileOwnedPrefix.textContent = t('profile.ownedPrefix');
    if (ui.shopTabCollection) ui.shopTabCollection.textContent = t('shop.collection');
    if (ui.shopTabEnergy) ui.shopTabEnergy.textContent = t('shop.energy');
    if (ui.confirmCancelBtn) ui.confirmCancelBtn.textContent = t('modal.cancel');
    if (ui.confirmOkBtn && !ui.confirmModal?.classList.contains('item-name-modal')) ui.confirmOkBtn.textContent = t('modal.confirm');
    if (ui.confirmModalTitle && !ui.confirmModal?.classList.contains('show')) ui.confirmModalTitle.textContent = t('modal.confirmPurchase');
    if (ui.confirmModalText && !ui.confirmModal?.classList.contains('show')) ui.confirmModalText.textContent = t('modal.confirmGeneric');
    if (ui.adModalTitle) ui.adModalTitle.textContent = t('modal.adTitle');
    if (ui.adModalText) ui.adModalText.textContent = t('modal.adText');
    if (ui.adCloseBtn && !ui.adModal?.classList.contains('show')) ui.adCloseBtn.textContent = t('ad.wait');
    if (ui.soundUnlockBtn) ui.soundUnlockBtn.textContent = t('audio.enable');
  }
};

// =========================
// 工具
// =========================
const Utils = {
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  },
  fmtTime(value) {
    return Math.max(0, value).toFixed(1);
  },
  getLevel(levelNum = state.selectedLevel) {
    return LEVELS.find(item => item.level === levelNum) || LEVELS[0];
  },
  getMultiplier(combo) {
    const tier = COMBO_TIERS.find(item => combo >= item.min && combo <= item.max);
    return tier ? tier.mul : 1;
  },
  getCanvasWorldX(clientX) {
    const rect = canvas.getBoundingClientRect();
    const ratio = CONFIG.WIDTH / rect.width;
    return (clientX - rect.left) * ratio;
  },
  getOwnedByCategory(category) {
    return SHOP_ITEMS
      .filter(item => item.category === category && state.owned.includes(item.id))
      .slice(-1)[0] || null;
  },
  getCollectionValue() {
    return SHOP_ITEMS
      .filter(item => state.owned.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
  },
  getGlobalBestTime() {
    const values = Object.values(state.bestTimes);
    return values.length ? Math.max(...values) : 0;
  },
  stopGameLoop() {
    if (state.animId) {
      cancelAnimationFrame(state.animId);
    }
    state.animId = 0;
    state.lastTs = 0;
  },
  getEnergySpace() {
    return Math.max(0, ENERGY_MAX - state.energy);
  },
  canGainEnergy(amount) {
    return state.energy + amount <= ENERGY_MAX;
  },
  refreshEnergyBy24h() {
    const now = Date.now();
    if (!state.energyLastRefillAt || Number.isNaN(Number(state.energyLastRefillAt))) {
      state.energyLastRefillAt = now;
      return false;
    }

    const DAY_MS = 24 * 60 * 60 * 1000;
    if (now - state.energyLastRefillAt >= DAY_MS) {
      state.energy = ENERGY_MAX;
      state.energyLastRefillAt = now;
      Storage.save();
      return true;
    }
    return false;
  },
  ensureEnergyFresh() {
    return this.refreshEnergyBy24h();
  },
  updateSliderVisual(slider) {
    if (!slider) return;
    const min = Number(slider.min || 0);
    const max = Number(slider.max || 100);
    const value = Number(slider.value || 0);
    const percent = max === min ? 0 : ((value - min) / (max - min)) * 100;
    slider.style.setProperty('--slider-fill', `${percent}%`);
  },
  showToast(message) {
    if (!ui.gameToast) return;
    ui.gameToast.textContent = message;
    ui.gameToast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      ui.gameToast.classList.remove('show');
    }, 1800);
  },
};

// =========================
// 存档
// =========================
const Storage = {
  load() {
    try {
      const raw = localStorage.getItem(CONFIG.SAVE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);

      state.selectedLevel = Utils.clamp(Number(data.selectedLevel || 1), 1, 10);
      state.unlockedLevel = Utils.clamp(Number(data.unlockedLevel || 1), 1, 10);
      state.totalCash = Math.max(0, Number(data.totalCash || 0));
      state.owned = Array.isArray(data.owned) ? data.owned : [];
      state.bestTimes = data.bestTimes || {};
      state.bestCombos = data.bestCombos || {};
      state.shopTab = data.shopTab === 'energy' ? 'energy' : 'collection';
      state.energy = Utils.clamp(Number(data.energy ?? ENERGY_MAX), 0, ENERGY_MAX);
      state.energyLastRefillAt = Number(data.energyLastRefillAt || Date.now());
      state.lang = data.lang === 'en' ? 'en' : 'zh';
    } catch (error) {
      console.warn('读取存档失败', error);
    }
  },
  save() {
    const payload = {
      selectedLevel: state.selectedLevel,
      unlockedLevel: state.unlockedLevel,
      totalCash: state.totalCash,
      owned: state.owned,
      bestTimes: state.bestTimes,
      bestCombos: state.bestCombos,
      shopTab: state.shopTab,
      energy: state.energy,
      energyLastRefillAt: state.energyLastRefillAt,
      lang: state.lang,
    };
    localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(payload));
  },
  reset() {
    localStorage.removeItem(CONFIG.SAVE_KEY);
    state.selectedLevel = 1;
    state.unlockedLevel = 1;
    state.totalCash = 0;
    state.owned = [];
    state.bestTimes = {};
    state.bestCombos = {};
    state.shopTab = 'collection';
    state.energy = ENERGY_MAX;
    state.energyLastRefillAt = Date.now();
    state.lang = 'zh';
    this.save();
  },
};

// =========================
// 渲染
// =========================
const Render = {
  screen(name) {
    Object.values(screens).forEach(el => {
      el.classList.remove('active');
      el.style.display = 'none';
    });

    if (!screens[name]) return;
    screens[name].classList.add('active');
    screens[name].style.display = 'flex';
    state.screen = name;
  },

  menu() {
    Utils.ensureEnergyFresh();
    const cashValue = Math.floor(state.totalCash);
    const energyValue = `${state.energy}`;
    if (ui.menuCash) ui.menuCash.textContent = `当前现金 $${cashValue}`;
    if (ui.levelSelectCash) ui.levelSelectCash.textContent = `${cashValue}`;
    if (ui.levelSelectEnergyIndicator) ui.levelSelectEnergyIndicator.textContent = energyValue;
    if (ui.settingsCash) ui.settingsCash.textContent = `现金 $${cashValue}`;
    if (ui.menuUnlockCount) ui.menuUnlockCount.textContent = `${state.unlockedLevel} / 10`;
    if (ui.menuCollectionValue) ui.menuCollectionValue.textContent = `$${Math.floor(Utils.getCollectionValue())}`;

    if (ui.unlockStat) ui.unlockStat.textContent = `${state.unlockedLevel} / 10`;
    if (ui.levelStat) ui.levelStat.textContent = `第${state.selectedLevel}关`;
    if (ui.bestTimeStat) ui.bestTimeStat.textContent = `${Utils.fmtTime(state.bestTimes[state.selectedLevel] || 0)}s`;

    ui.levelGrid.innerHTML = '';

    LEVELS.forEach((level, index) => {
      const unlocked = level.level <= state.unlockedLevel;
      const bestTime = state.bestTimes[level.level] || 0;
      const row = document.createElement('div');
      const side = index % 2 === 0 ? 'left' : 'right';
      const completed = unlocked && bestTime > 0;
      const current = level.level === state.unlockedLevel;
      row.className = `road-row ${side} ${unlocked ? 'unlocked' : 'locked'}`;

      const card = document.createElement('button');
      card.type = 'button';
      card.className = `route-node ${unlocked ? 'unlocked' : 'locked'} ${current ? 'current' : ''} ${completed ? 'completed' : ''}`.trim();
      card.disabled = !unlocked;
      let statusText = t('status.locked');
      let statusClass = 'locked';
      if (current && unlocked) {
        statusText = t('status.unlocked');
        statusClass = 'current';
      } else if (completed) {
        statusText = t('status.unlocked');
        statusClass = 'completed';
      } else if (unlocked) {
        statusText = t('status.unlocked');
        statusClass = 'available';
      }

      card.innerHTML = `
        <div class="route-node-glow" aria-hidden="true"></div>
        <div class="route-node-number">${level.level}</div>
        <div class="route-node-tip ${statusClass}" aria-hidden="true">${statusText}</div>
        <div class="route-node-title">${getLevelText(level.level)}</div>
      `;

      const presetKey = current ? 'current' : (unlocked ? 'unlocked' : 'locked');
      const preset = ROUTE_CARD_PIXEL_PRESETS[presetKey] || ROUTE_CARD_PIXEL_PRESETS.unlocked;
      card.dataset.routePreset = presetKey;
      Object.entries(preset).forEach(([key, value]) => {
        card.style.setProperty(`--${key}`, value);
      });

      card.addEventListener('click', () => {
        if (!unlocked) return;
        state.selectedLevel = level.level;
        Storage.save();
        Game.start();
      });

      row.appendChild(card);

      if (index < LEVELS.length - 1) {
        const connector = document.createElement('div');
        connector.className = `road-connector ${level.level < state.unlockedLevel ? 'unlocked' : 'locked'}`;
        row.appendChild(connector);
      }

      ui.levelGrid.appendChild(row);
    });
  },

  settings() {
    Utils.ensureEnergyFresh();
    if (ui.settingsCash) ui.settingsCash.textContent = `${Math.floor(state.totalCash)}`;
    if (ui.settingsEnergyIndicator) ui.settingsEnergyIndicator.textContent = `${state.energy}`;
    if (ui.musicVolumeSlider) {
      ui.musicVolumeSlider.value = Math.round(AudioManager.musicVolume * 100);
      Utils.updateSliderVisual(ui.musicVolumeSlider);
    }
    if (ui.musicVolumeValue) ui.musicVolumeValue.textContent = `${Math.round(AudioManager.musicVolume * 100)}%`;
    if (ui.effectVolumeSlider) {
      ui.effectVolumeSlider.value = Math.round(AudioManager.effectVolume * 100);
      Utils.updateSliderVisual(ui.effectVolumeSlider);
    }
    if (ui.effectVolumeValue) ui.effectVolumeValue.textContent = `${Math.round(AudioManager.effectVolume * 100)}%`;
  },

  profile() {
    Utils.ensureEnergyFresh();
    if (ui.profileCash) ui.profileCash.textContent = `${Math.floor(state.totalCash)}`;
    if (ui.profileEnergyIndicator) ui.profileEnergyIndicator.textContent = `${state.energy}`;
    if (ui.profileOwnedPrefix) ui.profileOwnedPrefix.textContent = t('profile.ownedPrefix');
    if (ui.ownedCount) ui.ownedCount.textContent = `${state.owned.length} / ${SHOP_ITEMS.length}`;
    if (ui.collectionValue) ui.collectionValue.textContent = `${Math.floor(Utils.getCollectionValue())}`;

    if (!ui.profileShowcaseList) return;

    const items = [...SHOP_ITEMS].sort((a, b) => (a.unlock || 0) - (b.unlock || 0));
    ui.profileShowcaseList.innerHTML = '';

    items.forEach((item, index) => {
      const owned = state.owned.includes(item.id);
      const row = document.createElement('div');
      row.className = `showcase-row ${owned ? 'owned' : 'locked'}`;
      row.innerHTML = `
        <div class="showcase-row-level">${index + 1}</div>
        <div class="showcase-row-stage">
          <button type="button" class="showcase-item-button ${owned ? 'owned' : 'locked'}" aria-label="${getItemName(item)}">
            <img class="showcase-row-frame-image" src="assets/ui/showcase_row_frame.png" alt="" aria-hidden="true">
            <span class="showcase-item-light" aria-hidden="true"></span>
            <img class="showcase-item-image ${owned ? '' : 'is-locked'}" src="${item.image}" alt="${getItemName(item)}">
          </button>
        </div>
      `;

      const btn = row.querySelector('.showcase-item-button');
      if (btn) {
        btn.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          ShopActions.showItemName(item);
        });
      }

      ui.profileShowcaseList.appendChild(row);
    });
  },

  shop() {
    Utils.ensureEnergyFresh();
    const tabCollection = document.getElementById('shopTabCollection');
    const tabEnergy = document.getElementById('shopTabEnergy');

    ui.shopCash.textContent = `${Math.floor(state.totalCash)}`;
    if (ui.shopEnergyIndicator) ui.shopEnergyIndicator.textContent = `${state.energy}`;

    if (tabCollection) {
      tabCollection.classList.toggle('active', state.shopTab === 'collection');
      tabCollection.textContent = t('shop.collection');
      tabCollection.onclick = () => {
        state.shopTab = 'collection';
        Storage.save();
        Render.shop();
      };
    }

    if (tabEnergy) {
      tabEnergy.classList.toggle('active', state.shopTab === 'energy');
      tabEnergy.textContent = t('shop.energy');
      tabEnergy.onclick = () => {
        state.shopTab = 'energy';
        Storage.save();
        Render.shop();
      };
    }

    ui.shopGrid.innerHTML = '';

    if (state.shopTab === 'energy') {
      ENERGY_ITEMS.forEach(item => {
        const actionLabel = item.isAd ? t('shop.watch') : t('shop.buy');

        const card = document.createElement('div');
        card.className = `item-card compact-shop-card energy-card ${item.theme}`;
        card.innerHTML = `
          <div class="compact-item-visual energy-item-visual ${item.theme}">
            <div class="energy-item-image-wrap">
              <img class="energy-item-image" src="${item.image}" alt="${getItemName(item)}">
            </div>
          </div>
          <div class="compact-item-unlock compact-item-energy">${renderEnergyGain(item.energy)}</div>
          <div class="compact-item-action-row">
            <div class="compact-item-price ${item.isAd ? 'is-free' : ''}">${item.isAd ? t('common.free') : renderCoinPrice(item.price)}</div>
            <button type="button" class="shop-action-btn ${item.isAd ? 'watch' : 'buy'}">${actionLabel}</button>
          </div>
        `;

        const visual = card.querySelector('.compact-item-visual');
        if (visual) {
          visual.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            ShopActions.showItemName(item);
          });
        }

        const btn = card.querySelector('.shop-action-btn');
        if (btn) {
          btn.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            ShopActions.handleEnergyItem(item);
          });
        }

        ui.shopGrid.appendChild(card);
      });

      return;
    }

    const shopItems = [...SHOP_ITEMS].sort((a, b) => (a.unlock || 0) - (b.unlock || 0));

    shopItems.forEach(item => {
      const owned = state.owned.includes(item.id);
      const unlocked = state.unlockedLevel >= item.unlock;
      const canBuy = unlocked && !owned && state.totalCash >= item.price;

      const card = document.createElement('div');
      card.className = `item-card compact-shop-card ${item.category} ${owned ? 'is-owned' : unlocked ? 'is-unlocked' : 'is-locked'}`;

      const statusText = owned ? t('shop.owned') : unlocked ? t('shop.buy') : t('shop.locked');
      const actionText = owned ? t('shop.owned') : unlocked ? t('shop.buy') : t('shop.locked');
      const lockOverlayHtml = '';

      const visualHtml = item.image
        ? `<div class="compact-item-image-wrap">
             <img class="item-visual-image" src="${item.image}" alt="${getItemName(item)}">
             ${lockOverlayHtml}
           </div>`
        : `<div class="compact-item-image-wrap">
             <span>${item.category === 'bag' ? '👜' : item.category === 'shoes' ? '👟' : '⌚'}</span>
             ${lockOverlayHtml}
           </div>`;

      card.innerHTML = `
        <div class="compact-item-visual ${item.category} ${unlocked ? '' : 'locked'}">${visualHtml}</div>
        <div class="compact-item-meta-panel">
          <div class="compact-item-meta-label">${t('shop.unlockLevel')}</div>
          <div class="compact-item-unlock">${getLevelShortText(item.unlock)}</div>
        </div>
        <div class="compact-item-action-row">
          <div class="compact-item-price-wrap">
            <div class="compact-item-price-label">${t('shop.price')}</div>
            <div class="compact-item-price">${renderCoinPrice(item.price)}</div>
          </div>
          <button type="button" class="shop-action-btn ${owned ? 'owned' : unlocked ? 'buy' : 'locked'}" ${!canBuy ? 'disabled' : ''}>${actionText}</button>
        </div>
      `;

      const visual = card.querySelector('.compact-item-visual');
      if (visual) {
        visual.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          ShopActions.showItemName(item);
        });
      }

      const btn = card.querySelector('.shop-action-btn');
      if (btn && canBuy) {
        btn.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          ShopActions.confirmCollectionPurchase(item);
        });
      }

      ui.shopGrid.appendChild(card);
    });
  },

  result() {
    ui.resultTitle.textContent = state.passed ? t('result.success') : t('result.fail');
    ui.resultLevel.textContent = `${state.selectedLevel}`;
    ui.bigCash.textContent = `+$${Math.floor(state.gameCash)}`;
    ui.resultTime.textContent = `${Utils.fmtTime(state.survived)}s`;
    ui.resultEnergy.textContent = `${state.energy}`;
    if (ui.resultAvatar) {
      ui.resultAvatar.src = state.passed ? 'assets/ui/result_avatar_happy.png' : 'assets/ui/result_avatar_sad.png';
      ui.resultAvatar.alt = state.passed ? t('result.success') : t('result.fail');
      ui.resultAvatar.classList.remove('play');
      void ui.resultAvatar.offsetWidth;
      ui.resultAvatar.classList.add('play');
    }
    if (ui.retryBtn) ui.retryBtn.textContent = t('result.retry');
    if (ui.menuBtn) ui.menuBtn.textContent = t('result.home');
    if (ui.nextBtn) ui.nextBtn.textContent = t('result.next');
    ui.nextBtn.style.display = state.passed && state.selectedLevel < 10 ? 'block' : 'none';
    ui.resultNextRow.style.display = state.passed && state.selectedLevel < 10 ? 'grid' : 'none';
  },

  hud() {
    if (ui.hudLevel) ui.hudLevel.textContent = `${state.selectedLevel}`;
    if (ui.hudTime) ui.hudTime.textContent = Utils.fmtTime(state.timeLeft);
    if (ui.hudCash) ui.hudCash.textContent = `${Math.floor(state.gameCash)}`;
  },

  game() {
    Draw.background();
    Draw.player();
    Draw.ball();
    Draw.particles();
  },

  allPanels() {
    UIText.apply();
    this.menu();
    this.settings();
    this.profile();
    this.shop();
    this.hud();
  },
};


const ShopActions = {
  _confirmHandler: null,
  _adTimer: null,
  _adSeconds: 5,

  refresh() {
    Render.menu();
    Render.profile();
    Render.shop();
    Render.settings();
  },

  isEnergyBlocked() {
    if (state.energy >= ENERGY_MAX) {
      Utils.showToast(t('toast.energyFull'));
      return true;
    }
    return false;
  },

  showConfirm(title, text, onConfirm) {
    if (!ui.confirmModal) return;
    ui.confirmModal.classList.remove('item-name-modal');
    ui.confirmModal.classList.remove('purchase-confirm-modal');
    ui.confirmModal.classList.add('item-name-modal');
    ui.confirmModal.classList.add('purchase-confirm-modal');
    ui.confirmModalTitle.textContent = title;
    if (ui.confirmModalItemIcon) { ui.confirmModalItemIcon.style.display = 'none'; ui.confirmModalItemIcon.removeAttribute('src'); }
    ui.confirmModalText.textContent = text;
    if (ui.confirmCancelBtn) ui.confirmCancelBtn.textContent = t('modal.cancel');
    if (ui.confirmOkBtn) ui.confirmOkBtn.textContent = t('modal.confirm');
    this._confirmHandler = onConfirm;
    ui.confirmModal.classList.add('show');
  },

  hideConfirm() {
    if (!ui.confirmModal) return;
    ui.confirmModal.classList.remove('show');
    ui.confirmModal.classList.remove('item-name-modal');
    ui.confirmModal.classList.remove('purchase-confirm-modal');
    if (ui.confirmModalItemIcon) { ui.confirmModalItemIcon.style.display = 'none'; ui.confirmModalItemIcon.removeAttribute('src'); }
    this._confirmHandler = null;
    if (ui.confirmCancelBtn) ui.confirmCancelBtn.style.display = '';
    if (ui.confirmOkBtn) ui.confirmOkBtn.textContent = t('modal.confirm');
  },

  showItemName(item) {
    if (!ui.confirmModal) return;
    const itemDesc = getItemDesc(item) || (item?.isAd
      ? t('toast.watchReward', { energy: item.energy || 0 })
      : (typeof item?.energy === 'number' ? t('toast.buyReward', { energy: item.energy }) : ''));
    ui.confirmModal.classList.remove('purchase-confirm-modal');
    ui.confirmModal.classList.add('item-name-modal');
    ui.confirmModalTitle.textContent = getItemName(item) || t('modal.item');
    if (ui.confirmModalItemIcon) {
      if (item?.image) {
        ui.confirmModalItemIcon.src = item.image;
        ui.confirmModalItemIcon.style.display = 'block';
      } else {
        ui.confirmModalItemIcon.style.display = 'none';
        ui.confirmModalItemIcon.removeAttribute('src');
      }
    }
    ui.confirmModalText.textContent = itemDesc;
    this._confirmHandler = null;
    if (ui.confirmCancelBtn) ui.confirmCancelBtn.style.display = 'none';
    if (ui.confirmOkBtn) ui.confirmOkBtn.textContent = t('modal.gotIt');
    ui.confirmModal.classList.add('show');
  },

  showOutOfEnergyNotice() {
    if (!ui.confirmModal) {
      Utils.showToast(t('toast.energyEmpty'));
      return;
    }
    ui.confirmModal.classList.remove('purchase-confirm-modal');
    ui.confirmModal.classList.add('item-name-modal');
    ui.confirmModalTitle.textContent = t('modal.outOfEnergyTitle');
    if (ui.confirmModalItemIcon) {
      ui.confirmModalItemIcon.src = 'assets/ui/energy_battery_icon.png';
      ui.confirmModalItemIcon.style.display = 'block';
    }
    ui.confirmModalText.textContent = t('modal.outOfEnergyText');
    this._confirmHandler = null;
    if (ui.confirmCancelBtn) ui.confirmCancelBtn.style.display = 'none';
    if (ui.confirmOkBtn) ui.confirmOkBtn.textContent = t('modal.gotIt');
    ui.confirmModal.classList.add('show');
  },

  confirmCollectionPurchase(item) {
    if (state.totalCash < item.price) {
      Utils.showToast(t('toast.cashLack'));
      return;
    }
    this.showConfirm(t('modal.confirmPurchase'), t('shop.buyAsk', { price: item.price, name: getItemName(item) }), () => {
      state.totalCash -= item.price;
      state.owned.push(item.id);
      Storage.save();
      this.refresh();
      Utils.showToast(t('toast.buyCollection', { name: getItemName(item) }));
    });
  },

  handleEnergyItem(item) {
    if (this.isEnergyBlocked()) return;

    if (item.isAd) {
      this.showAd(item);
      return;
    }

    if (state.totalCash < item.price) {
      Utils.showToast(t('toast.cashLack'));
      return;
    }

    this.showConfirm(t('modal.confirmPurchase'), t('shop.buyEnergyAsk', { price: item.price, name: getItemName(item), energy: item.energy }), () => {
      if (this.isEnergyBlocked()) return;
      if (state.totalCash < item.price) {
        Utils.showToast(t('toast.cashLack'));
        return;
      }
      state.totalCash -= item.price;
      state.energy = Math.min(ENERGY_MAX, state.energy + item.energy);
      Storage.save();
      this.refresh();
      Utils.showToast(t('toast.buyEnergy', { name: getItemName(item), energy: item.energy }));
    });
  },

  showAd(item) {
    if (!ui.adModal) return;
    this._adSeconds = 5;
    if (ui.adModalTitle) ui.adModalTitle.textContent = t('modal.adTitle');
    if (ui.adModalText) ui.adModalText.textContent = t('modal.adText');
    ui.adCountdown.textContent = `${this._adSeconds}`;
    ui.adCloseBtn.textContent = t('ad.wait');
    ui.adCloseBtn.disabled = true;
    ui.adModal.classList.add('show');
    clearInterval(this._adTimer);
    this._adTimer = setInterval(() => {
      this._adSeconds -= 1;
      ui.adCountdown.textContent = `${Math.max(0, this._adSeconds)}`;
      if (this._adSeconds <= 0) {
        clearInterval(this._adTimer);
        this._adTimer = null;
        ui.adCloseBtn.disabled = false;
        ui.adCloseBtn.textContent = t('ad.claim');
        if (!this.isEnergyBlocked()) {
          state.energy = Math.min(ENERGY_MAX, state.energy + item.energy);
          Storage.save();
          this.refresh();
        }
      }
    }, 1000);
  },

  closeAd() {
    if (!ui.adModal) return;
    const shouldReward = this._adSeconds <= 0;
    ui.adModal.classList.remove('show');
    clearInterval(this._adTimer);
    this._adTimer = null;
    ui.adCloseBtn.textContent = t('ad.wait');
    if (shouldReward) {
      Utils.showToast(t('toast.adDone'));
    }
  },

  bind() {
    if (ui.confirmCancelBtn) {
      ui.confirmCancelBtn.addEventListener('click', () => this.hideConfirm());
    }
    if (ui.confirmOkBtn) {
      ui.confirmOkBtn.addEventListener('click', () => {
        const fn = this._confirmHandler;
        this.hideConfirm();
        if (typeof fn === 'function') fn();
      });
    }
    if (ui.adCloseBtn) {
      ui.adCloseBtn.addEventListener('click', () => {
        if (this._adSeconds > 0) return;
        this.closeAd();
      });
    }
  },
};

// =========================
// 导航
// =========================
const Navigation = {
  to(name) {
    Utils.stopGameLoop();
    Utils.ensureEnergyFresh();

    if (name === 'menu' || name === 'levelSelect') {
      Render.menu();
    } else if (name === 'settings') {
      Render.settings();
    } else if (name === 'profile') {
      Render.profile();
    } else if (name === 'shop') {
      Render.shop();
    }

    Render.screen(name);
  },
  bindButton(element, target, beforeNavigate) {
    if (!element) return;
    element.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      if (typeof beforeNavigate === 'function') {
        beforeNavigate();
      }
      this.to(target);
    });
  },
};

// =========================
// 游戏逻辑
// =========================
function renderCoinPrice(value) {
  return `<span class="price-with-icon"><span>${value}</span></span>`;
}

function renderEnergyGain(value) {
  return `<span class="energy-gain"><span>+${value}</span></span>`;
}

const Game = {
  spawnBall() {
    const level = Utils.getLevel();
    const playableWidth = (CONFIG.PLAY_RIGHT - CONFIG.PLAY_LEFT) * level.outWidth;
    const left = CONFIG.WIDTH / 2 - playableWidth / 2;
    const right = CONFIG.WIDTH / 2 + playableWidth / 2;
    const spawnX = Utils.clamp(
      CONFIG.WIDTH / 2 + (Math.random() - 0.5) * 70,
      left + CONFIG.BALL_R + 6,
      right - CONFIG.BALL_R - 6
    );

    state.ball = {
      x: spawnX,
      y: -CONFIG.BALL_R - 10,
      vx: (Math.random() - 0.5) * 22,
      vy: 70,
      gravity: level.gravity || 820,
    };
  },

  resetRun() {
    state.gameCash = 0;
    state.combo = 0;
    state.bestCombo = 0;
    state.timeLeft = CONFIG.GAME_TIME;
    state.survived = 0;
    state.passed = false;
    state.message = t('game.dragHint');

    state.touch.dragging = false;
    state.touch.targetX = CONFIG.WIDTH / 2;

    state.playerX = CONFIG.WIDTH / 2;
    state.particles = [];
    state.windTime = Math.random() * Math.PI * 2;
    state.windValue = 0;
    state.flash = 0;
    state.playerPose = 'idle';
    state.playerPoseTimer = 0;
    state.pendingFail = null;
    state.failDelay = 0;

    this.spawnBall();
  },

  start() {
    Utils.ensureEnergyFresh();

    if (state.energy <= 0) {
      ShopActions.showOutOfEnergyNotice();
      return;
    }

    this.resetRun();
    Render.hud();
    Render.screen('game');

    Utils.stopGameLoop();
    state.animId = requestAnimationFrame(this.loop.bind(this));
  },

  finish(passed) {
    Utils.stopGameLoop();
    AudioManager.play(passed ? 'success' : 'fail');

    state.passed = passed;
    state.totalCash += Math.floor(state.gameCash);
    state.bestTimes[state.selectedLevel] = Math.max(state.bestTimes[state.selectedLevel] || 0, state.survived);
    state.bestCombos[state.selectedLevel] = Math.max(state.bestCombos[state.selectedLevel] || 0, state.bestCombo);

    if (passed && state.selectedLevel < 10) {
      state.unlockedLevel = Math.max(state.unlockedLevel, state.selectedLevel + 1);
    }

    Storage.save();
    Render.menu();
    Render.profile();
    Render.shop();
    Render.result();
    Render.screen('result');
  },

  fail(reason) {
    if (state.pendingFail) return;
    state.message = reason === 'ground' ? t('game.failGround') : t('game.failOut');
    state.energy = Math.max(0, state.energy - 1);
    state.pendingFail = reason;
    state.failDelay = 0.45;
    state.playerPose = 'miss';
    state.playerPoseTimer = 0.45;
    state.ball = null;
    Storage.save();
    Render.menu();
    Render.shop();
    Render.hud();
  },

  addParticles(x, y, color, count = 10) {
    for (let i = 0; i < count; i += 1) {
      state.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 170,
        vy: -Math.random() * 180,
        life: 0.45 + Math.random() * 0.3,
        color,
      });
    }
  },

  update(dt) {
    if (state.playerPoseTimer > 0) {
      state.playerPoseTimer = Math.max(0, state.playerPoseTimer - dt);
      if (state.playerPoseTimer <= 0 && !state.pendingFail) state.playerPose = 'idle';
    }

    if (state.pendingFail) {
      state.failDelay = Math.max(0, state.failDelay - dt);
      state.particles = state.particles
        .map(item => ({
          ...item,
          x: item.x + item.vx * dt,
          y: item.y + item.vy * dt,
          vy: item.vy + 260 * dt,
          life: item.life - dt,
        }))
        .filter(item => item.life > 0);
      state.flash = Math.max(0, state.flash - dt * 2.2);

      if (state.failDelay <= 0) {
        state.pendingFail = null;
        this.finish(false);
        return;
      }

      Render.hud();
      return;
    }

    const level = Utils.getLevel();
    const minX = CONFIG.PLAY_LEFT + CONFIG.PLAYER_W / 2;
    const maxX = CONFIG.PLAY_RIGHT - CONFIG.PLAYER_W / 2;

    if (state.touch.dragging) {
      const distance = state.touch.targetX - state.playerX;
      const step = Utils.clamp(distance, -state.playerSpeed * dt, state.playerSpeed * dt);
      state.playerX += step;
    } else {
      if (state.keys.left) state.playerX -= state.playerSpeed * dt;
      if (state.keys.right) state.playerX += state.playerSpeed * dt;
    }
    state.playerX = Utils.clamp(state.playerX, minX, maxX);

    state.timeLeft = Math.max(0, state.timeLeft - dt);
    state.survived = CONFIG.GAME_TIME - state.timeLeft;

    state.windTime += dt;
    const waveA = Math.sin(state.windTime * 0.8);
    const waveB = Math.sin(state.windTime * 1.9 + 1.7) * 0.55;
    state.windValue = (waveA + waveB) * level.windMax;

    const playableWidth = (CONFIG.PLAY_RIGHT - CONFIG.PLAY_LEFT) * level.outWidth;
    const outLeft = CONFIG.WIDTH / 2 - playableWidth / 2;
    const outRight = CONFIG.WIDTH / 2 + playableWidth / 2;

    const playerTop = CONFIG.GROUND_Y - CONFIG.PLAYER_H;
    const headCenterX = state.playerX;
    const headCenterY = playerTop + 20;
    const headHitRadius = level.headRadius;

    const ball = state.ball;
    if (ball) {
      ball.vx += state.windValue * dt * 0.45;
      ball.vy += ball.gravity * dt;
      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      const dx = ball.x - headCenterX;
      const dy = ball.y - headCenterY;
      const distance = Math.hypot(dx, dy);

      if (distance <= headHitRadius + CONFIG.BALL_R && ball.vy > 0) {
        state.combo += 1;
        state.bestCombo = Math.max(state.bestCombo, state.combo);

        const gain = level.baseScore * Utils.getMultiplier(state.combo);
        state.gameCash += gain;
        state.flash = 0.16;
        state.playerPose = 'header';
        state.playerPoseTimer = 0.20;
        AudioManager.play('header');
        state.message = state.combo >= 10 ? t('game.comboGain', { combo: state.combo, gain }) : t('game.hitGain', { gain });

        this.addParticles(ball.x, ball.y, '#67e8f9', Utils.getMultiplier(state.combo) >= 4 ? 14 : 9);

        const offsetRate = Utils.clamp(dx / Math.max(1, headHitRadius), -1, 1);
        ball.y = headCenterY - headHitRadius - CONFIG.BALL_R + 1;
        ball.vy = -(560 * level.bounce);
        ball.vx = offsetRate * 95;
      }

      if (ball.y + CONFIG.BALL_R >= CONFIG.GROUND_Y) {
        this.addParticles(ball.x, CONFIG.GROUND_Y - 4, '#fb7185', 12);
        this.fail('ground');
        return;
      }

      if (ball.x < outLeft - CONFIG.BALL_R || ball.x > outRight + CONFIG.BALL_R) {
        this.addParticles(
          Utils.clamp(ball.x, 18, CONFIG.WIDTH - 18),
          Utils.clamp(ball.y, 30, CONFIG.HEIGHT - 180),
          '#facc15',
          12
        );
        this.fail('out');
        return;
      }
    }

    state.particles = state.particles
      .map(item => ({
        ...item,
        x: item.x + item.vx * dt,
        y: item.y + item.vy * dt,
        vy: item.vy + 260 * dt,
        life: item.life - dt,
      }))
      .filter(item => item.life > 0);

    state.flash = Math.max(0, state.flash - dt * 2.2);

    if (state.timeLeft <= 0) {
      this.finish(true);
      return;
    }

    if (state.timeLeft <= 10 && state.timeLeft > 0) {
      state.message = t('game.final10');
    }

    Render.hud();
  },

  loop(timestamp) {
    if (state.screen !== 'game') {
      Utils.stopGameLoop();
      return;
    }

    if (!state.lastTs) {
      state.lastTs = timestamp;
    }

    const dt = Math.min(0.033, (timestamp - state.lastTs) / 1000);
    state.lastTs = timestamp;

    this.update(dt);

    if (state.screen === 'game') {
      Render.game();
      state.animId = requestAnimationFrame(this.loop.bind(this));
    }
  },
};

// =========================
// 绘制
// =========================
const Draw = {
  drawCoverImage(img, offsetX = 0, offsetY = 0) {
    if (!img || !img.complete || img.naturalWidth <= 0) return false;

    const canvasRatio = CONFIG.WIDTH / CONFIG.HEIGHT;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    let drawW = CONFIG.WIDTH;
    let drawH = CONFIG.HEIGHT;

    if (imgRatio > canvasRatio) {
      drawH = CONFIG.HEIGHT;
      drawW = drawH * imgRatio;
    } else {
      drawW = CONFIG.WIDTH;
      drawH = drawW / imgRatio;
    }

    const baseX = (CONFIG.WIDTH - drawW) / 2;
    const baseY = (CONFIG.HEIGHT - drawH) / 2;
    ctx.drawImage(img, baseX + offsetX, baseY + offsetY, drawW, drawH);
    return true;
  },

  background() {
    ctx.clearRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

    const t = (state.lastTs || performance.now()) / 1000;
    const windDir = state.windValue >= 0 ? 1 : -1;
    const windAbs = Math.abs(state.windValue);

    const hasBg = this.drawCoverImage(GAME_BG.base);
    if (!hasBg) {
      const sky = ctx.createLinearGradient(0, 0, 0, CONFIG.HEIGHT);
      sky.addColorStop(0, '#18a8f7');
      sky.addColorStop(0.55, '#78dcff');
      sky.addColorStop(1, '#61c55c');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    }

    // 动态背景：即使第一关风速很小，也保留基础动效；风速只负责增强方向和幅度。
    ctx.save();
    ctx.globalAlpha = 0.72;
    const cloudBaseDrift = Math.sin(t * 0.42) * 30;
    const cloudWindDrift = windDir * Math.min(28, windAbs * 0.22);
    const cloudDrift = cloudBaseDrift + cloudWindDrift;
    this.drawCoverImage(GAME_BG.clouds, cloudDrift, 0);
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.20 + Math.min(0.20, windAbs * 0.004);
    const windShift = windDir * ((t * (28 + windAbs * 0.65)) % 120);
    const windFloat = Math.sin(t * 1.6) * 5;
    this.drawCoverImage(GAME_BG.wind, windShift, windFloat);
    ctx.restore();

    const level = Utils.getLevel();
    const playableWidth = (CONFIG.PLAY_RIGHT - CONFIG.PLAY_LEFT) * level.outWidth;
    const outLeft = CONFIG.WIDTH / 2 - playableWidth / 2;
    const outRight = CONFIG.WIDTH / 2 + playableWidth / 2;

    // 边界外半透明遮罩：边界位置由难度动态计算，不写死在背景图里。
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    ctx.fillRect(0, 0, outLeft, CONFIG.HEIGHT);
    ctx.fillRect(outRight, 0, CONFIG.WIDTH - outRight, CONFIG.HEIGHT);
    ctx.restore();

    // 边界虚线：白色底线 + 黑色虚线，保证在不同背景上都能看清。
    ctx.save();
    ctx.setLineDash([12, 10]);
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(255,255,255,0.70)';
    ctx.beginPath();
    ctx.moveTo(outLeft, 0);
    ctx.lineTo(outLeft, CONFIG.HEIGHT);
    ctx.moveTo(outRight, 0);
    ctx.lineTo(outRight, CONFIG.HEIGHT);
    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(15,23,42,0.82)';
    ctx.beginPath();
    ctx.moveTo(outLeft, 0);
    ctx.lineTo(outLeft, CONFIG.HEIGHT);
    ctx.moveTo(outRight, 0);
    ctx.lineTo(outRight, CONFIG.HEIGHT);
    ctx.stroke();
    ctx.restore();


    if (state.flash > 0) {
      ctx.fillStyle = `rgba(255,255,255,${state.flash * 0.45})`;
      ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    }
  },

  player() {
    const x = state.playerX;
    const pose = state.playerPose === 'header' || state.playerPose === 'miss' ? state.playerPose : 'idle';
    const sprite = PLAYER_SPRITES[pose] || PLAYER_SPRITES.idle;
    const img = sprite.img;
    const size = pose === 'header' ? 242 : 236;
    const drawX = x - size / 2;
    const drawY = CONFIG.GROUND_Y - size * sprite.bottomRatio;

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, drawX, drawY, size, size);
      return;
    }

    const y = CONFIG.GROUND_Y - CONFIG.PLAYER_H;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(x, y + 24, 22, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fca5a5';
    ctx.beginPath();
    ctx.arc(x, y + 22, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#2563eb';
    ctx.fillRect(x - 24, y + 48, 48, 72);
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(x - 24, y + 112, 48, 16);

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(x, y + 50); ctx.lineTo(x, y + 114);
    ctx.moveTo(x - 8, y + 66); ctx.lineTo(x - 34, y + 86);
    ctx.moveTo(x + 8, y + 66); ctx.lineTo(x + 34, y + 86);
    ctx.moveTo(x, y + 114); ctx.lineTo(x - 20, y + 170);
    ctx.moveTo(x, y + 114); ctx.lineTo(x + 20, y + 170);
    ctx.stroke();
  },

  ball() {
    if (!state.ball) return;

    const ball = state.ball;
    const size = CONFIG.BALL_R * 2;

    if (SOCCER_BALL_IMG.complete && SOCCER_BALL_IMG.naturalWidth > 0) {
      ctx.save();
      ctx.drawImage(SOCCER_BALL_IMG, ball.x - CONFIG.BALL_R, ball.y - CONFIG.BALL_R, size, size);
      ctx.restore();
      return;
    }

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, CONFIG.BALL_R, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#111827';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 5, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 5; i += 1) {
      const angle = -Math.PI / 2 + i * (Math.PI * 2 / 5);
      ctx.beginPath();
      ctx.arc(ball.x + Math.cos(angle) * 10, ball.y + Math.sin(angle) * 10, 3.8, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  particles() {
    state.particles.forEach(item => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, item.life * 1.6);
      ctx.fillStyle = item.color;
      ctx.fillRect(item.x, item.y, 4, 4);
      ctx.restore();
    });
  },
};

// =========================
// 输入 / 事件
// =========================
const Input = {
  bindTap(element, handler) {
    if (!element) return;
    element.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      handler(event);
    });
  },

  bindDrag() {
    const beginDrag = clientX => {
      state.touch.dragging = true;
      state.touch.targetX = Utils.getCanvasWorldX(clientX);
    };
    const moveDrag = clientX => {
      if (!state.touch.dragging) return;
      state.touch.targetX = Utils.getCanvasWorldX(clientX);
    };
    const endDrag = () => {
      state.touch.dragging = false;
    };

    canvas.addEventListener('touchstart', event => {
      event.preventDefault();
      const touch = event.touches[0];
      if (touch) beginDrag(touch.clientX);
    }, { passive: false });

    canvas.addEventListener('touchmove', event => {
      event.preventDefault();
      const touch = event.touches[0];
      if (touch) moveDrag(touch.clientX);
    }, { passive: false });

    canvas.addEventListener('touchend', endDrag, { passive: true });
    canvas.addEventListener('touchcancel', endDrag, { passive: true });

    let mouseDown = false;
    canvas.addEventListener('mousedown', event => {
      mouseDown = true;
      beginDrag(event.clientX);
    });
    window.addEventListener('mousemove', event => {
      if (mouseDown) moveDrag(event.clientX);
    });
    window.addEventListener('mouseup', () => {
      mouseDown = false;
      endDrag();
    });
  },

  bindKeyboard() {
    window.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        state.keys.left = true;
        state.touch.dragging = false;
      }
      if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        state.keys.right = true;
        state.touch.dragging = false;
      }
    });

    window.addEventListener('keyup', event => {
      if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') state.keys.left = false;
      if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') state.keys.right = false;
    });
  },

  bindNavigation() {
    if (ui.challengeHomeBtn) {
      ui.challengeHomeBtn.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        Utils.ensureEnergyFresh();
        if (state.energy <= 0) {
          ShopActions.showOutOfEnergyNotice();
          return;
        }
        Navigation.to('levelSelect');
      });
    }
    Navigation.bindButton(ui.profileBtn, 'profile');
    Navigation.bindButton(ui.shopBtn, 'shop');
    Navigation.bindButton(ui.settingsBtn, 'settings');

    Navigation.bindButton(ui.levelSelectBackBtn, 'menu');
    Navigation.bindButton(ui.settingsBackBtn, 'menu');
    Navigation.bindButton(ui.resultBackBtn, 'menu');
    Navigation.bindButton(ui.menuBtn, 'menu');
    Navigation.bindButton(ui.profileBackBtn, 'menu');
    Navigation.bindButton(ui.shopBackBtn, 'menu');

    document.addEventListener('click', event => {
      const navEl = event.target.closest('[data-nav]');
      if (!navEl) return;

      event.preventDefault();
      event.stopPropagation();

      const target = navEl.getAttribute('data-nav');
      if (!target) return;
      Navigation.to(target);
    }, true);
  },

  bindActionButtons() {
    this.bindTap(ui.levelStartBtn, () => Game.start());
    this.bindTap(ui.startBtn, () => Game.start());

    this.bindTap(ui.resetSaveBtn, () => {
      ShopActions.showConfirm(t('modal.resetTitle'), t('modal.resetText'), () => {
        Storage.reset();
        UIText.apply();
        Render.allPanels();
        Navigation.to('menu');
        Utils.showToast(t('toast.saveCleared'));
      });
    });

    this.bindTap(ui.langBtnZh, () => {
      if (state.lang === 'zh') return;
      state.lang = 'zh';
      Storage.save();
      UIText.apply();
      Render.allPanels();
    });

    this.bindTap(ui.langBtnEn, () => {
      if (state.lang === 'en') return;
      state.lang = 'en';
      Storage.save();
      UIText.apply();
      Render.allPanels();
    });

    if (ui.musicVolumeSlider) {
      Utils.updateSliderVisual(ui.musicVolumeSlider);
      ui.musicVolumeSlider.addEventListener('input', event => {
        const value = Number(event.target.value) / 100;
        AudioManager.setMusicVolume(value);
        Utils.updateSliderVisual(event.target);
        if (ui.musicVolumeValue) ui.musicVolumeValue.textContent = `${Math.round(value * 100)}%`;
      });
    }

    if (ui.effectVolumeSlider) {
      Utils.updateSliderVisual(ui.effectVolumeSlider);
      ui.effectVolumeSlider.addEventListener('input', event => {
        const value = Number(event.target.value) / 100;
        AudioManager.setEffectVolume(value);
        Utils.updateSliderVisual(event.target);
        if (ui.effectVolumeValue) ui.effectVolumeValue.textContent = `${Math.round(value * 100)}%`;
      });
      ui.effectVolumeSlider.addEventListener('change', () => AudioManager.play('click'));
    }

    this.bindTap(ui.retryBtn, () => Game.start());

    this.bindTap(ui.nextBtn, () => {
      if (state.selectedLevel < state.unlockedLevel) {
        state.selectedLevel += 1;
      }
      Storage.save();
      Game.start();
    });

  },

  bindLifecycle() {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        state.lastTs = 0;
      }
    });
  },

  bindAll() {
    this.bindNavigation();
    this.bindActionButtons();
    this.bindDrag();
    this.bindKeyboard();
    this.bindLifecycle();
  },
};

// =========================
// 启动
// =========================
const App = {
  init() {
    AudioManager.init();
    AudioManager.bindGestureUnlock();
    AudioManager.bindButtonClicks();
    Storage.load();
    UIText.apply();
    Utils.ensureEnergyFresh();
    Input.bindAll();
    ShopActions.bind();
    Render.allPanels();
    Navigation.to('menu');

    window.appNav = name => Navigation.to(name);
    window.headballTycoonApp = {
      state,
      goTo: Navigation.to.bind(Navigation),
      rerender: Render.allPanels.bind(Render),
      save: Storage.save.bind(Storage),
      refreshEnergy: Utils.ensureEnergyFresh.bind(Utils),
    };
  },
};

App.init();


// ===== 允许非游戏页面正常滚动 =====
document.addEventListener('touchmove', event => {
  if (state.screen !== 'game') return;
}, { passive: true });
