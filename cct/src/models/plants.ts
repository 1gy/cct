type Plant = {
	name: string;
	icon: number;
	children: PlantIds[];
};

export const plantIds = [
	"bakerWheat",
	"thumbcorn",
	"cronerice",
	"gildmillet",
	"clover",
	"goldenClover",
	"shimmerlily",
	"elderwort",
	"bakeberry",
	"chocoroot",
	"whiteChocoroot",
	"whiteMildew",
	"brownMold",
	"meddleweed",
	"whiskerbloom",
	"chimerose",
	"nursetulip",
	"drowsyfern",
	"wardlichen",
	"keenmoss",
	"queenbeet",
	"queenbeetLump",
	"duketater",
	"crumbspore",
	"doughshroom",
	"glovemorel",
	"cheapcap",
	"foolBolete",
	"wrinklegill",
	"greenRot",
	"shriekbulb",
	"tidygrass",
	"everdaisy",
	"ichorpuff",
] as const;

export type PlantIds = typeof plantIds[number];

export const plants: Record<PlantIds, Plant> = {
	bakerWheat: {
		name: "Baker's wheat",
		icon: 0,
		children: [
			"bakerWheat",
			"thumbcorn",
			"cronerice",
			"bakeberry",
			"clover",
			"goldenClover",
			"chocoroot",
			"tidygrass",
		],
	},
	thumbcorn: {
		name: "Thumbcorn",
		icon: 1,
		children: [
			"bakerWheat",
			"thumbcorn",
			"cronerice",
			"gildmillet",
			"glovemorel",
		],
	},
	cronerice: {
		name: "Cronerice",
		icon: 2,
		children: ["thumbcorn", "gildmillet", "elderwort", "wardlichen"],
	},
	gildmillet: {
		name: "Gildmillet",
		icon: 3,
		children: ["clover", "goldenClover", "shimmerlily"],
	},
	clover: {
		name: "Ordinary clover",
		icon: 4,
		children: ["goldenClover", "greenRot", "shimmerlily"],
	},
	goldenClover: {
		name: "Golden clover",
		icon: 5,
		children: [],
	},
	shimmerlily: {
		name: "Shimmerlily",
		icon: 6,
		children: ["elderwort", "whiskerbloom", "chimerose", "cheapcap"],
	},
	elderwort: {
		name: "Elderwort",
		icon: 7,
		children: ["everdaisy", "ichorpuff", "shriekbulb"],
	},
	bakeberry: {
		name: "Bakeberry",
		icon: 8,
		children: ["queenbeet"],
	},
	chocoroot: {
		name: "Chocoroot",
		icon: 9,
		children: ["whiteChocoroot", "drowsyfern", "queenbeet"],
	},
	whiteChocoroot: {
		name: "White chocoroot",
		icon: 10,
		children: ["whiskerbloom", "tidygrass"],
	},
	whiteMildew: {
		name: "White mildew",
		icon: 26,
		children: ["brownMold", "whiteChocoroot", "wardlichen", "greenRot"],
	},
	brownMold: {
		name: "Brown mold",
		icon: 27,
		children: ["whiteMildew", "chocoroot", "keenmoss", "wrinklegill"],
	},
	meddleweed: {
		name: "Meddleweed",
		icon: 29,
		children: ["meddleweed", "brownMold", "crumbspore"],
	},
	whiskerbloom: {
		name: "Whiskerbloom",
		icon: 11,
		children: ["chimerose", "nursetulip"],
	},
	chimerose: {
		name: "Chimerose",
		icon: 12,
		children: ["chimerose"],
	},
	nursetulip: {
		name: "Nursetulip",
		icon: 13,
		children: [],
	},
	drowsyfern: {
		name: "Drowsyfern",
		icon: 14,
		children: [],
	},
	wardlichen: {
		name: "Wardlichen",
		icon: 15,
		children: ["wardlichen"],
	},
	keenmoss: {
		name: "Keenmoss",
		icon: 16,
		children: ["drowsyfern", "wardlichen", "keenmoss"],
	},
	queenbeet: {
		name: "Queenbeet",
		icon: 17,
		children: ["duketater", "queenbeetLump", "shriekbulb"],
	},
	queenbeetLump: {
		name: "Juicy queenbeet",
		icon: 18,
		children: [],
	},
	duketater: {
		name: "Duketater",
		icon: 19,
		children: ["shriekbulb"],
	},
	crumbspore: {
		name: "Crumbspore",
		icon: 20,
		children: [
			"crumbspore",
			"glovemorel",
			"cheapcap",
			"doughshroom",
			"wrinklegill",
			"ichorpuff",
		],
	},
	doughshroom: {
		name: "Doughshroom",
		icon: 24,
		children: ["crumbspore", "doughshroom", "foolBolete", "shriekbulb"],
	},
	glovemorel: {
		name: "Glovemorel",
		icon: 21,
		children: [],
	},
	cheapcap: {
		name: "Cheapcap",
		icon: 22,
		children: [],
	},
	foolBolete: {
		name: "Fool's bolete",
		icon: 23,
		children: [],
	},
	wrinklegill: {
		name: "Wrinklegill",
		icon: 25,
		children: ["elderwort", "shriekbulb"],
	},
	greenRot: {
		name: "Green rot",
		icon: 28,
		children: ["keenmoss", "foolBolete"],
	},
	shriekbulb: {
		name: "Shriekbulb",
		icon: 30,
		children: ["shriekbulb"],
	},
	tidygrass: {
		name: "Tidygrass",
		icon: 31,
		children: ["everdaisy"],
	},
	everdaisy: {
		name: "Everdaisy",
		icon: 32,
		children: [],
	},
	ichorpuff: {
		name: "Ichorpuff",
		icon: 33,
		children: [],
	},
};

export type StackAmountKind = "equals" | "less_than_equal";

export type PlantStackDefinition = {
	plantId: PlantIds;
	amount: number;
	amountKind: StackAmountKind;
	mature: boolean;
};

export type CrossbreedDefinition = {
	plantId: PlantIds;
	parents: PlantStackDefinition[];
	probability: number;
};

const psm = (
	plantId: PlantIds,
	amount?: number,
	amountKind?: StackAmountKind,
): PlantStackDefinition => ({
	plantId,
	mature: true,
	amount: amount != null ? amount : 1,
	amountKind: amountKind != null ? amountKind : "equals",
});

const ps = (
	plantId: PlantIds,
	amount?: number,
	amountKind?: StackAmountKind,
): PlantStackDefinition => ({
	plantId,
	mature: false,
	amount: amount != null ? amount : 1,
	amountKind: amountKind != null ? amountKind : "equals",
});

const cb = (
	parents: PlantStackDefinition[],
	plantId: PlantIds,
	probability: number,
) => {
	return { plantId, parents, probability };
};

export const crossbreedTable: CrossbreedDefinition[] = [
	cb([psm("bakerWheat", 2)], "bakerWheat", 0.2),
	cb([psm("bakerWheat", 2)], "thumbcorn", 0.05),
	cb([psm("bakerWheat", 2)], "bakeberry", 0.001),
	cb([psm("bakerWheat"), psm("thumbcorn")], "cronerice", 0.01),
	cb([psm("thumbcorn", 2)], "thumbcorn", 0.1),
	cb([psm("thumbcorn", 2)], "bakerWheat", 0.05),
	cb([psm("cronerice"), psm("thumbcorn")], "gildmillet", 0.03),
	cb([psm("cronerice", 2)], "thumbcorn", 0.02),
	cb([psm("bakerWheat"), psm("gildmillet")], "clover", 0.03),
	cb([psm("bakerWheat"), psm("gildmillet")], "goldenClover", 0.0007),
	cb([psm("clover"), psm("gildmillet")], "shimmerlily", 0.02),
	cb([psm("clover", 2), ps("clover", 4, "less_than_equal")], "clover", 0.007),
	cb(
		[psm("clover", 2), ps("clover", 4, "less_than_equal")],
		"goldenClover",
		0.0001,
	),
	cb([psm("clover", 4)], "goldenClover", 0.0007),
	cb([psm("shimmerlily"), psm("cronerice")], "elderwort", 0.01),
	cb([psm("wrinklegill"), psm("cronerice")], "elderwort", 0.002),
	cb([psm("bakerWheat"), ps("brownMold")], "chocoroot", 0.1),
	cb([psm("chocoroot"), ps("whiteMildew")], "whiteChocoroot", 0.1),
	cb(
		[psm("whiteMildew"), ps("brownMold", 1, "less_than_equal")],
		"brownMold",
		0.5,
	),
	cb(
		[psm("brownMold"), ps("whiteMildew", 1, "less_than_equal")],
		"whiteMildew",
		0.5,
	),
	cb(
		[psm("meddleweed"), ps("meddleweed", 3, "less_than_equal")],
		"meddleweed",
		0.15,
	),
	cb([psm("shimmerlily"), psm("whiteChocoroot")], "whiskerbloom", 0.01),
	cb([psm("shimmerlily"), psm("whiskerbloom")], "chimerose", 0.05),
	cb([psm("chimerose", 2)], "chimerose", 0.005),
	cb([psm("whiskerbloom", 2)], "nursetulip", 0.05),
	cb([psm("chocoroot"), psm("keenmoss")], "drowsyfern", 0.005),
	cb([psm("cronerice"), psm("keenmoss")], "wardlichen", 0.005),
	cb([psm("cronerice"), psm("whiteMildew")], "wardlichen", 0.005),

	//

	cb(
		[psm("wardlichen"), ps("wardlichen", 2, "less_than_equal")],
		"wardlichen",
		0.05,
	),
	cb([psm("greenRot"), psm("brownMold")], "keenmoss", 0.1),
	cb([psm("keenmoss"), ps("keenmoss", 2, "less_than_equal")], "keenmoss", 0.05),
	cb([psm("chocoroot"), psm("bakeberry")], "queenbeet", 0.01),
	cb([psm("queenbeet", 8)], "queenbeetLump", 0.001),
	cb([psm("queenbeet", 2)], "duketater", 0.001),
	cb(
		[psm("crumbspore"), ps("crumbspore", 1, "less_than_equal")],
		"crumbspore",
		0.07,
	),
	cb([psm("crumbspore"), psm("thumbcorn")], "glovemorel", 0.02),
	cb([psm("crumbspore"), psm("shimmerlily")], "cheapcap", 0.04),
	cb([psm("doughshroom"), psm("greenRot")], "foolBolete", 0.04),
	cb([psm("crumbspore", 2)], "doughshroom", 0.005),
	cb(
		[psm("doughshroom"), ps("doughshroom", 1, "less_than_equal")],
		"doughshroom",
		0.07,
	),
	cb([psm("doughshroom", 2)], "crumbspore", 0.005),
	cb([psm("crumbspore"), psm("brownMold")], "wrinklegill", 0.06),
	cb([psm("whiteMildew"), psm("clover")], "greenRot", 0.05),
	cb([psm("wrinklegill"), psm("elderwort")], "shriekbulb", 0.001),
	cb([psm("elderwort", 5)], "shriekbulb", 0.001),
	cb([ps("duketater", 3)], "shriekbulb", 0.005),
	cb([ps("doughshroom", 4)], "shriekbulb", 0.002),
	cb([psm("queenbeet", 5)], "shriekbulb", 0.001),
	cb(
		[ps("shriekbulb"), ps("shriekbulb", 2, "less_than_equal")],
		"shriekbulb",
		0.005,
	),
	cb([psm("bakerWheat"), psm("whiteChocoroot")], "tidygrass", 0.002),
	cb([psm("tidygrass", 3), psm("elderwort", 3)], "everdaisy", 0.002),
	cb([psm("elderwort"), psm("crumbspore")], "ichorpuff", 0.002),
];
