export const storageKey = (name: string) => `@1gy/cct/${name}`;
export const gardenChecklistKey = storageKey("garden/checklist");

export const loadGardenChecklist = (): Set<string> => {
	try {
		const text = localStorage.getItem(gardenChecklistKey);
		if (text) {
			return new Set(JSON.parse(text));
		}
	} catch (err) {
		return new Set();
	}
	return new Set();
};

export const saveGardenChecklist = (checklist: Set<string>) => {
	localStorage.setItem(gardenChecklistKey, JSON.stringify([...checklist]));
};

export const resetGardenChecklist = () => {
	localStorage.removeItem(gardenChecklistKey);
};
