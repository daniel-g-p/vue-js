const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            battleLog: ["Let the games begin..."],
            specialAttackAvailable: true,
            playerClass: null,
            monsterClass: null,
            roundsSinceSpecialAttack: null,
            monsterText: "Monster",
            playerText: "Player"
        }
    },
    computed: {
        playerHealthBar() {
            return { width: this.playerHealth + "%" }
        },
        monsterHealthBar() {
            return { width: this.monsterHealth + "%" }
        },
        gameStarted() {
            return this.battleLog.length ? true : false;
        },
        gameOver() {
            return (!this.monsterHealth || !this.playerHealth) ? true : false;
        },
        specialAttackState() {
            return (!this.specialAttackAvailable || this.gameOver) ? true : false;
        }
    },
    methods: {
        attack(points) {
            const monsterDamage = this.random(points, 5);
            const playerDamage = this.random(points, 5);
            this.monsterHealth -= monsterDamage;
            this.playerHealth -= playerDamage;
            this.roundsSinceSpecialAttack++;
            this.log(`Player attacks and deals ${monsterDamage} damage!`);
            this.log(`Monster attacks and deals ${playerDamage} damage!`);
        },
        useSpecialAttack(points) {
            const monsterDamage = this.random(points, 5);
            const playerDamage = this.random(points / 2, 5);
            this.monsterHealth -= monsterDamage
            this.playerHealth -= playerDamage;
            this.roundsSinceSpecialAttack = 0;
            this.log(`Player uses special attack and deals ${monsterDamage} damage!`);
            this.log(`Monster fights back and deals ${playerDamage} damage!`);
        },
        heal(points) {
            const playerDamage = this.random(points, 5);
            const playerHeal = this.random(points, 5);
            this.playerHealth += playerHeal;
            if (this.playerHealth <= 100) {
                this.log(`Player is healed and regains ${playerHeal} health!`);
            }
            this.playerHealth -= playerDamage;
            this.roundsSinceSpecialAttack++;
            this.log(`Monster catches player off-guard and deals ${playerDamage} damage!`);
        },
        surrender() {
            this.playerHealth = 0;
            this.log(`Player surrenders and loses the fight!`);
        },
        random(number, range) {
            return Math.floor(Math.random() * (range * 2 + 1) + number / 2)
        },
        restart() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.specialAttackAvailable = true;
            this.playerClass = null;
            this.monsterClass = null;
            this.battleLog = [];
            this.monsterText = "Monster";
            this.playerText = "Player";
            this.log(`Let the games begin...`);
        },
        log(message) {
            this.battleLog.unshift(message);
        }
    },
    watch: {
        roundsSinceSpecialAttack(value) {
            console.log(this.roundsSinceSpecialAttack);
            if (value === 0) {
                this.specialAttackAvailable = false;
            } else if (value % 3 === 0) {
                this.specialAttackAvailable = true;
            }
        },
        monsterHealth(value) {
            if (value <= 0) {
                this.monsterHealth = 0;
            } else if (value >= 100) {
                this.monsterHealth = 100;
            }
        },
        playerHealth(value) {
            if (value <= 0) {
                this.playerHealth = 0;
            } else if (value >= 100) {
                this.playerHealth = 100;
            }
        },
        gameOver(value) {
            if (value) {
                if (this.playerHealth > 0) {
                    this.winner = "player";
                    this.playerClass = { "player--winner": true };
                    this.monsterClass = { "player--loser": true };
                    this.playerText = "Player wins!"
                    this.log(`Player defeats Monster and wins the fight!`)
                } else if (this.monsterHealth > 0) {
                    this.winner = "monster";
                    this.playerClass = { "player--loser": true };
                    this.monsterClass = { "player--winner": true };
                    this.monsterText = "Monster wins!"
                    this.log(`Player is defeated by Monster and loses the fight!`)
                } else {
                    this.winner = "draw";
                    this.playerClass = { "player--draw": true };
                    this.monsterClass = { "player--draw": true };
                    this.log(`Player and Monster defeat each other in a draw!`)
                }
            }
        }
    }
});

app.mount(".game");