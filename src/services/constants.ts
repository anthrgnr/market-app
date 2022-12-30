interface SwitcherTitle {
    leftTitle: string,
    rightTitle: string
};

export const getSwitcherTitle = (lang: String): SwitcherTitle => {
    if (lang === 'RU') {
        return {
            leftTitle: 'Все товары',
            rightTitle: 'Список покупок'
        }
    }
    if (lang === 'DE') {
        return {
            leftTitle: 'Alle Waren',
            rightTitle: 'Einkaufsliste'
        }
    }
    else {
        return {
            leftTitle: 'All products',
            rightTitle: 'Shopping list'
        }
    }
};

export const getEmptyPageText = (lang: String): String => {
    if (lang === 'RU') return 'Похоже вы еще ничего не добавили...'
    if (lang === 'DE') return 'Es sieht aus, dass Sie nichts noch gelegt haben...'
    else return 'Looks like you added nothing yet...'
};

export const textColor = "text-slate-700 dark:text-slate-100";
export const langs = ['EN', 'DE', 'RU']