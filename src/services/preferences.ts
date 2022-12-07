import { Preferences } from "@capacitor/preferences";

export const setPreference = async (key: string, value: any): Promise<void> => {
    await Preferences.set({
        key,
        value: JSON.stringify(value)
    });
};

export const getPreference = async (key: string): Promise<any> => {
    const ret = await Preferences.get({ key });
    return JSON.parse(ret.value!);
};

export const removePreference = async (key: string): Promise<void> => {
    await Preferences.remove({
        key
    });
};