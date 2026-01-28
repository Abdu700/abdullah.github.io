// ===== SURVIVAL BRANCH - Complete Structure =====
// Based on user's exact specifications

const survivalNodes = [
    // ROOT (BIG)
    {
        id: 's_agile', x: CX + 100, y: BY, type: 'red', parent: null, parents: [], large: true,
        skill: findSkill('survival', 'AGILE CROUCHER')
    },

    // Level 1: Two children from root
    {
        id: 's_revitalizing', x: CX + 50, y: BY - 70, type: 'red', parent: 's_agile', parents: ['s_agile'],
        skill: findSkill('survival', 'REVITALIZING SQUAT')
    },
    {
        id: 's_looter_inst', x: CX + 150, y: BY - 70, type: 'red', parent: 's_agile', parents: ['s_agile'],
        skill: findSkill('survival', 'LOOTER\'S INSTINCTS')
    },

    // Level 2
    {
        id: 's_in_round', x: CX + 20, y: BY - 140, type: 'red', parent: 's_revitalizing', parents: ['s_revitalizing'],
        skill: findSkill('survival', 'IN-ROUND CRAFTING')
    },
    {
        id: 's_silent', x: CX + 180, y: BY - 140, type: 'red', parent: 's_looter_inst', parents: ['s_looter_inst'],
        skill: findSkill('survival', 'SILENT SCAVENGER')
    },

    // Level 3
    {
        id: 's_good_new', x: CX - 10, y: BY - 210, type: 'red', parent: 's_in_round', parents: ['s_in_round'], large: true,
        skill: findSkill('survival', 'GOOD AS NEW')
    },
    {
        id: 's_suffer', x: CX + 210, y: BY - 210, type: 'red', parent: 's_silent', parents: ['s_silent'], large: true,
        skill: findSkill('survival', 'SUFFER IN SILENCE')
    },

    // Level 4 - Multiple branches
    {
        id: 's_stubborn', x: CX - 60, y: BY - 280, type: 'red', parent: 's_good_new', parents: ['s_good_new'],
        skill: findSkill('survival', 'STUBBORN MULE')
    },
    {
        id: 's_traveling', x: CX + 60, y: BY - 280, type: 'red', parent: 's_good_new', parents: ['s_good_new', 's_suffer'],
        skill: findSkill('survival', 'TRAVELING TINKERER')
    }, // TWO PARENTS!
    {
        id: 's_broad', x: CX + 260, y: BY - 280, type: 'red', parent: 's_suffer', parents: ['s_suffer'],
        skill: findSkill('survival', 'BROAD SHOULDERS')
    },

    // Level 5
    {
        id: 's_three_breaths', x: CX - 80, y: BY - 350, type: 'red', parent: 's_stubborn', parents: ['s_stubborn'],
        skill: findSkill('survival', 'THREE DEEP BREATHS')
    },
    {
        id: 's_one_raider', x: CX + 50, y: BY - 350, type: 'red', parent: 's_traveling', parents: ['s_traveling'],
        skill: findSkill('survival', 'ONE RAIDER\'S SCRAPS')
    },
    {
        id: 's_looter_luck', x: CX + 240, y: BY - 350, type: 'red', parent: 's_broad', parents: ['s_broad'],
        skill: findSkill('survival', 'LOOTER\'S LUCK')
    },

    // Level 6 - FINAL NODES (BIG)
    {
        id: 's_minesweeper', x: CX - 30, y: BY - 430, type: 'red', parent: 's_three_breaths',
        parents: ['s_three_breaths', 's_one_raider'], large: true,
        skill: findSkill('survival', 'MINESWEEPER')
    }, // TWO PARENTS!
    {
        id: 's_security', x: CX + 150, y: BY - 430, type: 'red', parent: 's_looter_luck',
        parents: ['s_looter_luck', 's_one_raider'], large: true,
        skill: findSkill('survival', 'SECURITY BREACH')
    }, // TWO PARENTS!
];

// Helper to find skill by name
function findSkill(branch, name) {
    const skill = skills[branch].find(s => s.name === name);
    return skill || { id: name.toLowerCase().replace(/\s+/g, '_'), name: name, desc: '' };
}
