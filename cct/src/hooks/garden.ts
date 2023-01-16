import produce from "immer";
import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import {
	gardenChecklistKey,
	loadGardenChecklist,
	resetGardenChecklist,
	saveGardenChecklist,
} from "../libs/store";

const checklist = atom<Set<string>>({
	key: gardenChecklistKey,
	default: new Set(),
	effects: [
		({ setSelf, onSet }) => {
			setSelf(loadGardenChecklist());
			onSet((newValue, _, isReset) => {
				if (isReset) {
					resetGardenChecklist();
				} else {
					saveGardenChecklist(newValue);
				}
			});
		},
	],
});

export const useChecklist = () => useRecoilValue(checklist);

export const useSetChecklist = () => {
	const set = useSetRecoilState(checklist);
	const toggle = useCallback(
		(plantId: string) => {
			set(
				produce((draft) => {
					if (draft.has(plantId)) {
						draft.delete(plantId);
					} else {
						draft.add(plantId);
					}
				}),
			);
		},
		[set],
	);
	const clear = useCallback(() => {
		set(() => new Set());
	}, [set]);
	return { toggle, clear };
};
