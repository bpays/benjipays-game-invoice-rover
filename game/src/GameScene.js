// GameScene — core runner loop
// Placeholder scaffold — full Phaser build goes here

class GameScene extends Phaser.Scene {
  constructor() { super('GameScene'); }

  init(data) {
    this.playerName  = data.playerName  || 'Player';
    this.playerEmail = data.playerEmail || '';
    this.score       = 0;
    this.combo       = 0;
    this.maxCombo    = 0;
    this.multiplier  = 1;
    this.currentLane = 1;
    this.isAlive     = true;
    this.clutchUsed  = false;
    this.cityIndex   = 0;
  }

  create() {
    const { width, height } = this.scale;
    const cfg = GAME_CONFIG;

    // Background placeholder
    this.bg = this.add.rectangle(width/2, height/2, width, height, 0x002843);

    // Lane positions
    const lp = width * cfg.LANE_PADDING;
    const lw = (width - lp * 2) / 3;
    this.laneX = [
      lp + lw * 0 + lw / 2,
      lp + lw * 1 + lw / 2,
      lp + lw * 2 + lw / 2,
    ];
    this.groundY = height * 0.78;

    // Benji placeholder (rectangle until sprites ready)
    this.benji = this.add.rectangle(
      this.laneX[1], this.groundY - 30, 44, 52, cfg.COLORS.CERULEAN
    );

    // HUD
    this.scoreText = this.add.text(16, 16, 'SCORE\n0', {
      fontFamily: 'Arial Black', fontSize: '28px', color: '#FFFFFF'
    });

    // Input — swipe detection
    this.input.on('pointerdown', (p) => { this.touchStartX = p.x; });
    this.input.on('pointerup',   (p) => {
      const dx = p.x - this.touchStartX;
      if (Math.abs(dx) > 30) {
        if (dx > 0 && this.currentLane < 2) this.currentLane++;
        if (dx < 0 && this.currentLane > 0) this.currentLane--;
      } else {
        // Tap = jump (arcade physics will handle in full build)
      }
    });

    // Keyboard fallback for desktop testing
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on('keydown-LEFT',  () => { if (this.currentLane > 0) this.currentLane--; });
    this.input.keyboard.on('keydown-RIGHT', () => { if (this.currentLane < 2) this.currentLane++; });

    this.scoreTimer = 0;
  }

  update(time, delta) {
    if (!this.isAlive) return;
    const cfg = GAME_CONFIG;

    // Move Benji toward target lane
    const targetX = this.laneX[this.currentLane];
    this.benji.x += (targetX - this.benji.x) * 0.18;

    // Score
    this.scoreTimer += delta;
    if (this.scoreTimer >= 100) {
      const spd = cfg.SPEED_START + Math.min(this.score / cfg.SPEED_RAMP, 1) *
                  (cfg.SPEED_MAX - cfg.SPEED_START);
      this.score += (cfg.SCORE_PER_SECOND * (spd / cfg.SPEED_START) * 0.1) * this.multiplier;
      this.scoreText.setText('SCORE\n' + Math.floor(this.score));
      this.scoreTimer = 0;
    }

    // City check
    const newCityIndex = cfg.CITIES.reduce((acc, c, i) =>
      this.score >= c.threshold ? i : acc, 0);
    if (newCityIndex !== this.cityIndex) {
      this.cityIndex = newCityIndex;
      // Trigger city transition here in full build
    }
  }
}
