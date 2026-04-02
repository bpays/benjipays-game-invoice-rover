// ─────────────────────────────────────────────────────
//  BENJI PAYS: INVOICE ROVER
//  Phaser 3 — Main Entry Point
// ─────────────────────────────────────────────────────

// Supabase config — fill these in when Supabase is ready
const SUPABASE_URL  = '';
const SUPABASE_KEY  = '';

// Game config
const config = {
  type: Phaser.AUTO,
  width: 390,
  height: 844,
  backgroundColor: '#002843',
  parent: document.body,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 800 }, debug: false }
  },
  scene: [
    BootScene,
    StartScene,
    GameScene,
    GameOverScene,
  ]
};

const game = new Phaser.Game(config);
